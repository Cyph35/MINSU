export type CitationId = string;

/** A factual paragraph and the sources that support it. */
export interface Cited {
  text: string;
  cite: CitationId[];
}

export interface MediaItem {
  kind: 'image' | 'audio' | 'video';
  /** Local path under /public or remote https URL. Omit for link cards. */
  src?: string;
  alt: string;
  caption: string;
  credit: string;
  license: string;
  /** Wikimedia file page or other origin, shown in credits. */
  sourceUrl?: string;
  /** External page for audio/video link cards (no hosted file). */
  href?: string;
  linkLabel?: string;
}

export interface PeopleProfile { name: string; group: 'moro' | 'lumad' | 'settler'; description: string; cite: CitationId[] }
export interface RegionEvent { year: string; event: string; cite: CitationId[] }
export interface Landmark { name: string; description: string; cite: CitationId[] }

export interface RegionExtras {
  peoples: PeopleProfile[];
  timeline: RegionEvent[];
  landmarks: Landmark[];
  /** Captions for gallery images 4–7. */
  moreCaptions: string[];
  /** Media indices shown inline inside the History and Heritage chapters. */
  inline: { history: number[]; heritage: number[] };
}

export interface Region extends Partial<RegionExtras> {
  slug: string;
  name: string;
  shortName: string;
  svgId: string;
  summary: string;
  provinces: string;
  triPeople: { moro: string[]; lumad: string[]; settler: string[] };
  population: { value: number; note: string; year: number; cite: CitationId[] };
  languages: string[];
  /** ≤ 200 characters — shown on the hover card. */
  culturalMarker: string;
  heroImage: MediaItem;
  history: Cited[];
  heritage: Cited[];
  youthPeace: { title: string; body: string }[];
  media: MediaItem[];
}

export interface Source {
  id: CitationId;
  author: string;
  title: string;
  year: number | string;
  publisher?: string;
  url?: string;
}
