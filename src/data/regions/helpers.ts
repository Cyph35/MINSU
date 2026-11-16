import { commons } from '../media.generated';
import type { MediaItem } from '../types';

/** Search terms for the "listen" and "watch" link cards of each region. */
const LINKS: Record<string, { audio: string; video: string }> = {
  basilan: { audio: 'kwintangan kayu Yakan', video: 'Yakan weaving tennun' },
  caraga: { audio: 'Manobo ulaging epic', video: 'Kahimunan festival Butuan' },
  davao: { audio: 'Bagobo Tagabawa gong music', video: 'abaca ikat inabal weaving Davao' },
  'maguindanao-cotabato': { audio: 'kutyapi Maguindanaon', video: 'Mamalu and Tabunaway story' },
  'northern-mindanao': { audio: 'Talaandig kubing', video: 'Tampuda hu Balagon Talaandig' },
  lanao: { audio: 'Darangen Maranao', video: 'kulintang agong kandori Maranao' },
  palawan: { audio: 'Palawan epic tultul kulilal', video: 'Tagbanwa Coron sacred lakes' },
  sulu: { audio: 'Tausug kissa', video: 'pangalay dance Sulu' },
  soccsksargen: { audio: 'Tboli hegelung', video: 'Blaan mabal tabih weaving' },
  'tawi-tawi': { audio: 'Sama lullaby Tawi-Tawi', video: 'igal dance Sama' },
  zamboanga: { audio: 'Chavacano Tausug Subanen greetings', video: 'Subanen Buklog ritual' },
};

const enc = encodeURIComponent;

/** Builds the region gallery from Wikimedia images (captions written per index) plus a "listen" and a "watch" link card. */
export function gallery(slug: string, captions: string[], audio: string, video: string): MediaItem[] {
  const imgs: MediaItem[] = (commons[slug] ?? []).map((m, i) => ({
    kind: 'image',
    src: m.src,
    alt: captions[i] ?? m.title,
    caption: captions[i] ?? m.title,
    credit: m.credit,
    license: m.license,
    sourceUrl: m.sourceUrl,
  }));
  const q = LINKS[slug] ?? { audio: slug, video: slug };
  return [
    ...imgs,
    {
      kind: 'audio', alt: audio, caption: audio,
      credit: 'Opens openly licensed recordings on Wikimedia Commons', license: 'external link',
      href: `https://commons.wikimedia.org/wiki/Special:MediaSearch?search=${enc(q.audio)}&type=audio`,
      linkLabel: 'Listen on Wikimedia Commons',
    },
    {
      kind: 'video', alt: video, caption: video,
      credit: 'Opens search results on YouTube; videos are not hosted here', license: 'external link',
      href: `https://www.youtube.com/results?search_query=${enc(q.video)}`,
      linkLabel: 'Watch on YouTube',
    },
  ];
}
