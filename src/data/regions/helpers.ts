import { commons } from '../media.generated';
import type { MediaItem } from '../types';

/** Builds the region gallery from Wikimedia images (captions written per index) plus audio/video placeholders. */
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
  return [
    ...imgs,
    { kind: 'audio', alt: audio, caption: audio, credit: 'Placeholder — recording to be added', license: 'n/a', placeholder: true },
    { kind: 'video', alt: video, caption: video, credit: 'Placeholder — clip to be added', license: 'n/a', placeholder: true },
  ];
}
