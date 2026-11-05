import type { Region, RegionExtras } from '../types';
import { extrasA } from './extras-a';
import { extrasB } from './extras-b';
import { extrasC } from './extras-c';
import { caraga } from './caraga';
import { lanao } from './lanao';
import { maguindanaoCotabato } from './maguindanao-cotabato';
import { zamboanga } from './zamboanga';
import { basilan } from './basilan';
import { sulu } from './sulu';
import { tawiTawi } from './tawi-tawi';
import { davao } from './davao';
import { northernMindanao } from './northern-mindanao';
import { soccsksargen } from './soccsksargen';
import { palawan } from './palawan';

export const REGION_SLUGS = [
  'lanao', 'maguindanao-cotabato', 'zamboanga', 'basilan', 'sulu',
  'tawi-tawi', 'davao', 'northern-mindanao', 'soccsksargen', 'caraga', 'palawan',
] as const;

export type FullRegion = Region & RegionExtras;

const EXTRAS: Record<string, RegionExtras> = { ...extrasA, ...extrasB, ...extrasC };

/** Merge each region with its extended profile and caption the extra gallery images. */
function withExtras(r: Region): FullRegion {
  const x = EXTRAS[r.slug];
  const media = r.media.map((m, i) => (m.kind === 'image' && i >= 4 && x.moreCaptions[i - 4] ? { ...m, alt: x.moreCaptions[i - 4], caption: x.moreCaptions[i - 4] } : m));
  return { ...r, ...x, media };
}

export const regions: FullRegion[] = [
  lanao, maguindanaoCotabato, zamboanga, basilan, sulu, tawiTawi, davao, northernMindanao, soccsksargen, caraga, palawan,
].map(withExtras);

export const getRegion = (slug: string) => regions.find((r) => r.slug === slug);
