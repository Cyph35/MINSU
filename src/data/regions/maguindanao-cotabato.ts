import type { Region } from '../types';
import { gallery } from './helpers';

const media = gallery(
  'maguindanao-cotabato',
  [
    'The Rio Grande de Mindanao (Pulangi) at Cotabato City',
    'Cotabato City at night, seat of the Bangsamoro government',
    'Kutyapi, the two-stringed boat lute of Mindanao (Honolulu Museum of Art)',
    'Kulintang and agong — the gong music shared across Moro communities',
  ],
  'Audio: kutyapi solo in the Maguindanaon style',
  'Video: retelling of the Mamalu and Tabunaway story',
);

export const maguindanaoCotabato: Region = {
  slug: 'maguindanao-cotabato',
  name: 'Maguindanao & Cotabato (Pulangi–Rio Grande Basin)',
  shortName: 'Maguindanao & Cotabato',
  svgId: 'maguindanao-cotabato',
  provinces: 'Maguindanao del Norte, Maguindanao del Sur, Cotabato City and Cotabato Province',
  summary:
    'The flood plain of the Rio Grande de Mindanao was the seat of the Maguindanao Sultanate, a classic Tri-People frontier of the 20th century, and is today the center of the Bangsamoro peace process.',
  triPeople: {
    moro: ['Maguindanaon', 'Iranun'],
    lumad: ['Teduray', 'Lambangian', 'Dulangan Manobo', 'Obo Manobo'],
    settler: ['Hiligaynon (Ilonggo)', 'Cebuano', 'Ilocano'],
  },
  population: {
    value: 3157876,
    note: 'Maguindanao incl. Cotabato City (1,667,258) + Cotabato Province (1,490,618). Maguindanao was divided into del Norte and del Sur in 2022.',
    year: 2020,
    cite: ['psa2020'],
  },
  languages: ['Maguindanaon', 'Iranun', 'Hiligaynon', 'Cebuano', 'Teduray', 'Ilocano'],
  culturalMarker:
    'Seat of the Maguindanao Sultanate and today’s Bangsamoro capital, Cotabato City; home of the Teduray justice system and the Mamalu–Tabunaway kinship story.',
  heroImage: media[0],
  history: [
    {
      text: 'Maguindanao means “people of the flood plain.” By the 16th century, Muslim datus along the Pulangi traced their lineage to Sharif Muhammad Kabungsuwan, a Johor-born missionary and ruler. Upriver Buayan and downriver Maguindanao were rival but linked centers of power.',
      cite: ['majul'],
    },
    {
      text: 'Under Sultan Muhammad Dipatuan Kudarat (reigned c. 1619–1671), Maguindanao became a regional power that resisted Spanish expansion and traded across Southeast Asia. A 1645 treaty with Spain recognized the sultanate’s sovereignty.',
      cite: ['majul'],
    },
    {
      text: 'From 1939, the Commonwealth’s National Land Settlement Administration and later post-war programs opened the Cotabato frontier to tens of thousands of settlers from Luzon and the Visayas. For settlers this meant land and a fresh start; for Maguindanaon and Lumad communities, the same process meant losing ancestral land. These competing claims fed the conflicts of later decades.',
      cite: ['abinales', 'rodil'],
    },
    {
      text: 'The Moro National Liberation Front (from the early 1970s) and the Moro Islamic Liberation Front (from the late 1970s) waged armed struggles centered here. The 2014 Comprehensive Agreement on the Bangsamoro and the 2018 Bangsamoro Organic Law created BARMM, with Cotabato City as its seat of government after the 2019 plebiscite.',
      cite: ['cab2014', 'ra11054'],
    },
  ],
  heritage: [
    {
      text: 'Teduray and Maguindanaon traditions tell of two brothers: Tabunaway, who embraced Islam, and Mamalu, who kept the old ways and went to the mountains. They parted without enmity and agreed to stay kin and respect each other’s domains. The story is still invoked as a charter of Moro–Lumad peace.',
      cite: ['rodil', 'schlegel'],
    },
    {
      text: 'Teduray customary law is administered by kefeduwan, respected legal experts who resolve wrongs through the tiyawan. This deliberation aims not at punishment but at restoring good feelings (fedew) among everyone involved. Stuart Schlegel’s study of the system is a classic of Philippine legal anthropology.',
      cite: ['schlegel'],
    },
    {
      text: 'Kutyapi (two-stringed boat lute) and kulintang (a row of bossed gongs) music is shared by Maguindanaon, Meranaw and neighboring peoples. Kutyapi master Samaon Sulaiman of Mamasapano received the Gawad sa Manlilikha ng Bayan in 1993.',
      cite: ['ncca-gamaba'],
    },
    {
      text: 'IPRA (1997) and the Bangsamoro Organic Law (2018) both recognize the rights of non-Moro Indigenous Peoples within the Bangsamoro, including the Teduray, Lambangian and Dulangan Manobo. Securing their ancestral domain claims is an ongoing test of Tri-People justice.',
      cite: ['ra8371', 'ra11054'],
    },
  ],
  youthPeace: [
    { title: 'Retell the brothers’ story', body: 'Stage school and barangay performances of the Mamalu and Tabunaway story with Teduray, Maguindanaon and settler youth acting side by side.' },
    { title: 'Support normalization', body: 'Volunteer in livelihood, literacy and health programs in communities transitioning from former MILF camps, working with local government and civil society.' },
    { title: 'Map ancestral domains with consent', body: 'Students with GIS and IT skills can help Indigenous communities document their domains — only with free, prior and informed consent and under community control of the data.' },
    { title: 'Hold Tri-People campus forums', body: 'Universities in Cotabato and Kabacan can host regular forums where Moro, Lumad and settler students discuss land, history and their shared future.' },
  ],
  media,
};
