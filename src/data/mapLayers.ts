import type { CitationId } from './types';

export type MapMode = 'story' | 'province' | 'admin';

export interface AdminRegion {
  id: string;
  code: string;
  name: string;
  center: string;
  population: { value: number; year: number; note?: string };
  note?: string;
  cite: CitationId[];
}

/** Official administrative regions covering Mindanao, Sulu and Palawan (PSGC). */
export const ADMIN_REGIONS: AdminRegion[] = [
  { id: 'region-ix', code: 'Region IX', name: 'Zamboanga Peninsula', center: 'Pagadian City', population: { value: 3875576, year: 2020 }, note: 'Includes Isabela City on Basilan Island.', cite: ['psa2020', 'masque-ch2'] },
  { id: 'region-x', code: 'Region X', name: 'Northern Mindanao', center: 'Cagayan de Oro City', population: { value: 5022768, year: 2020 }, cite: ['psa2020', 'masque-ch2'] },
  { id: 'region-xi', code: 'Region XI', name: 'Davao Region', center: 'Davao City', population: { value: 5243536, year: 2020 }, cite: ['psa2020', 'masque-ch2'] },
  { id: 'region-xii', code: 'Region XII', name: 'SOCCSKSARGEN', center: 'Koronadal City', population: { value: 4901486, year: 2020 }, note: 'The name joins South Cotabato, Cotabato, Sultan Kudarat, Sarangani and General Santos.', cite: ['psa2020', 'masque-ch2'] },
  { id: 'caraga', code: 'Region XIII', name: 'Caraga', center: 'Butuan City', population: { value: 2804788, year: 2020 }, cite: ['psa2020', 'ra7901'] },
  { id: 'barmm', code: 'BARMM', name: 'Bangsamoro Autonomous Region in Muslim Mindanao', center: 'Cotabato City', population: { value: 4404288, year: 2020, note: 'Includes Sulu (1,000,108)' }, note: 'Includes the Special Geographic Area — barangays in Cotabato Province that voted to join in 2019.', cite: ['psa2020', 'ra11054', 'sc-sulu'] },
  { id: 'mimaropa', code: 'Region IV-B', name: 'MIMAROPA (Palawan)', center: 'Calapan City', population: { value: 1246673, year: 2020, note: 'Palawan only; MIMAROPA also includes Mindoro, Marinduque and Romblon' }, note: 'Palawan is part of MIMAROPA administratively, but its southern part was historically under the Sulu Sultanate.', cite: ['psa2020', 'masque-ch2'] },
];

export interface ProvinceInfo { population?: number; popNote?: string; peoples: string[] }

/** Province-level facts. Peoples follow the course slides' "Lumad and their Places" and Moro-group lists. */
export const PROVINCE_INFO: Record<string, ProvinceInfo> = {
  'zamboanga-del-norte': { population: 1047455, peoples: ['Subanen', 'Cebuano', 'Dapitanon', 'Dipolognon'] },
  'zamboanga-del-sur': { population: 2027902, popNote: 'incl. Zamboanga City', peoples: ['Subanen', 'Kolibugan', 'Chavacano', 'Cebuano', 'Tausug', 'Sama'] },
  'zamboanga-sibugay': { population: 669840, peoples: ['Subanen', 'Kolibugan', 'Cebuano', 'Chavacano'] },
  'city-of-isabela': { popNote: 'counted with Basilan (556,586 incl. Isabela City)', peoples: ['Chavacano', 'Yakan', 'Tausug', 'Sama'] },
  basilan: { population: 556586, popNote: 'incl. Isabela City', peoples: ['Yakan', 'Tausug', 'Sama', 'Chavacano'] },
  sulu: { population: 1000108, peoples: ['Tausug', 'Sama', 'Badjao'] },
  'tawi-tawi': { population: 440276, peoples: ['Sama', 'Badjao (Sama Dilaut)', 'Jama Mapun', 'Tausug'] },
  'lanao-del-sur': { population: 1195518, peoples: ['Maranao', 'Iranun'] },
  'maguindanao-del-norte': { popNote: 'Maguindanao incl. Cotabato City: 1,667,258 (2020, before the 2022 split)', peoples: ['Maguindanaon', 'Iranun', 'Teduray'] },
  'maguindanao-del-sur': { popNote: 'Maguindanao incl. Cotabato City: 1,667,258 (2020, before the 2022 split)', peoples: ['Maguindanaon', 'Teduray', 'Lambangian', 'Dulangan Manobo'] },
  'special-geographic-area': { popNote: 'BARMM barangays inside Cotabato Province (since 2019)', peoples: ['Maguindanaon', 'Iranun'] },
  cotabato: { population: 1490618, peoples: ['Ilonggo', 'Cebuano', 'Ilocano', 'Maguindanaon', 'Manobo', 'Bagobo', 'Teduray'] },
  'south-cotabato': { population: 1672791, popNote: 'incl. General Santos', peoples: ['T’boli', 'B’laan', 'Ilonggo', 'Cebuano', 'Maguindanaon'] },
  'sultan-kudarat': { population: 854052, peoples: ['Maguindanaon', 'Manobo', 'Teduray', 'Ilonggo'] },
  sarangani: { population: 558946, peoples: ['B’laan', 'Tagakaolo', 'Manobo', 'Sangil', 'Maguindanaon', 'Cebuano'] },
  'davao-del-norte': { population: 1125057, peoples: ['Ata Manobo', 'Mansaka', 'Mandaya', 'Dibabawon', 'Kalagan', 'Cebuano'] },
  'davao-del-sur': { population: 2457430, popNote: 'incl. Davao City', peoples: ['Bagobo', 'Ata Manobo', 'Tagakaolo', 'B’laan', 'Kalagan', 'Davaweño'] },
  'davao-de-oro': { population: 767547, peoples: ['Mansaka', 'Mandaya', 'Dibabawon', 'Mangguwangan', 'Kalagan', 'Cebuano'] },
  'davao-oriental': { population: 576343, peoples: ['Mandaya', 'Mangguwangan', 'Kalagan', 'Davaweño'] },
  'davao-occidental': { population: 317159, peoples: ['B’laan', 'Tagakaolo', 'Sangil', 'Kalagan', 'Cebuano'] },
  bukidnon: { population: 1541308, peoples: ['Bukidnon', 'Higaonon', 'Talaandig', 'Matigsalug', 'Manobo', 'Umayamnon', 'Tigwahanon'] },
  camiguin: { population: 92808, peoples: ['Camiguinon (Kinamigin)', 'Cebuano'] },
  'lanao-del-norte': { population: 1086017, popNote: 'incl. Iligan', peoples: ['Maranao', 'Higaonon', 'Iliganon', 'Cebuano'] },
  'misamis-occidental': { population: 617333, peoples: ['Subanen', 'Cebuano'] },
  'misamis-oriental': { population: 1685302, popNote: 'incl. Cagayan de Oro', peoples: ['Higaonon', 'Cagayanon', 'Cebuano'] },
  'agusan-del-norte': { population: 760413, popNote: 'incl. Butuan', peoples: ['Butuanon', 'Manobo', 'Mamanwa', 'Higaonon'] },
  'agusan-del-sur': { population: 739367, peoples: ['Manobo', 'Banwaon', 'Higaonon', 'Dibabawon', 'Mamanwa'] },
  'surigao-del-norte': { population: 534636, peoples: ['Surigaonon', 'Mamanwa', 'Manobo'] },
  'surigao-del-sur': { population: 642255, peoples: ['Surigaonon', 'Manobo', 'Mandaya'] },
  'dinagat-islands': { population: 128117, peoples: ['Surigaonon', 'Cebuano'] },
  palawan: { population: 1246673, popNote: 'incl. Puerto Princesa', peoples: ['Pala’wan', 'Tagbanwa', 'Batak', 'Molbog', 'Panimusan (Palawani)', 'Jama Mapun', 'Cuyonon'] },
};

export const MAP_MODES: { id: MapMode; label: string }[] = [
  { id: 'story', label: 'Story Regions' },
  { id: 'province', label: 'Provinces' },
  { id: 'admin', label: 'Admin Regions' },
];

/** Antique-ink colours per administrative region (used in Admin and Province views). */
export const ADMIN_COLORS: Record<string, string> = {
  'region-ix': '#7a5a8a',   // faded plum
  'region-x': '#6f7f3e',    // olive
  'region-xi': '#9a5a3c',   // rust
  'region-xii': '#b08a3e',  // ochre
  caraga: '#4f7380',        // verdigris
  barmm: '#8a6f3e',         // old gold
  mimaropa: '#5f6f8a',      // slate blue
};

/** Explains Sulu's status wherever it appears on the map. */
export const SULU_NOTE =
  'Shown in BARMM, as in the course slides. In September 2024 the Supreme Court ruled that Sulu is not part of BARMM, because most Sulu voters rejected the Bangsamoro Organic Law in the 2019 plebiscite. The PSA now lists Sulu under Region IX.';
