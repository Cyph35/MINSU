import type { Region } from '../types';
import { gallery } from './helpers';

const media = gallery(
  'soccsksargen',
  [
    'Lake Sebu, homeland of the T’boli',
    'The “Dreamweaver” at the T’nalak Festival',
    'Mangroves on Sarangani Bay',
    'T’boli dance performance',
  ],
  'Audio: T’boli hegelung (two-stringed lute)',
  'Video: a B’laan weaver on mabal tabih ikat',
);

export const soccsksargen: Region = {
  slug: 'soccsksargen',
  name: 'SOCCSKSARGEN & Sarangani Bay',
  shortName: 'SOCCSKSARGEN',
  svgId: 'soccsksargen',
  provinces: 'South Cotabato (incl. General Santos City), Sultan Kudarat and Sarangani',
  summary:
    'The Koronadal and Allah valleys and the shores of Sarangani Bay are the homeland of the T’boli and B’laan. They are shared with Maguindanaon and Sangil communities and with the settler towns of one of the 20th century’s largest planned migrations.',
  triPeople: {
    moro: ['Maguindanaon', 'Kalagan', 'Sangil', 'Iranun'],
    lumad: ['T’boli', 'B’laan', 'Tagakaulo', 'Teduray (Sultan Kudarat)', 'Dulangan Manobo', 'Manobo'],
    settler: ['Hiligaynon (Ilonggo)', 'Cebuano', 'Ilocano', 'Tagalog'],
  },
  population: {
    value: 3085789,
    note: 'South Cotabato incl. General Santos (1,672,791) + Sultan Kudarat (854,052) + Sarangani (558,946). Cotabato Province is covered under Maguindanao & Cotabato.',
    year: 2020,
    cite: ['psa2020'],
  },
  languages: ['Hiligaynon', 'Cebuano', 'T’boli', 'B’laan', 'Maguindanaon', 'Filipino'],
  culturalMarker:
    'Land of the T’boli dreamweavers and B’laan beadwork. General Santos, the Tuna Capital, grew from a 1939 settlement led by Gen. Paulino Santos.',
  heroImage: media[0],
  history: [
    {
      text: 'The B’laan, T’boli, Tagakaulo and Manobo lived in the Koronadal and Allah valleys and along the Sarangani coast, while Maguindanaon and Sangil communities held parts of the coast and lakes. The site of today’s General Santos was known as Dadiangas.',
      cite: ['rodil'],
    },
    {
      text: 'In 1939, the National Land Settlement Administration under General Paulino Santos landed the first organized settler groups from Luzon and the Visayas at Dadiangas and in the Koronadal Valley. The town was renamed General Santos in 1954 and became a city in 1968.',
      cite: ['abinales'],
    },
    {
      text: 'Rapid settlement, plantations and later mining claims shrank Lumad lands, while General Santos grew into the center of the country’s tuna industry.',
      cite: ['rodil', 'abinales'],
    },
  ],
  heritage: [
    {
      text: 'T’nalak is abaca ikat cloth woven by T’boli women from designs said to come to them in dreams; Lang Dulay of Lake Sebu received the Gawad sa Manlilikha ng Bayan in 1998. B’laan ikat weaver Yabing Masalon Dulo of Polomolok was honored in 2016.',
      cite: ['ncca-gamaba'],
    },
    {
      text: 'T’boli and B’laan customary justice is led by datus and elders. Agreements are sealed through the exchange of gifts and shared meals, and South Cotabato’s T’nalak Festival celebrates the province’s Tri-People identity every July.',
      cite: ['ncip'],
    },
    {
      text: 'Since 2004, the last week of November has been observed nationally as Mindanao Week of Peace. The observance grew from the interfaith work of Muslim and Christian religious leaders and brings Muslims, Christians and Lumad together across the region.',
      cite: ['procl675'],
    },
  ],
  youthPeace: [
    { title: 'Start Tri-People student organizations', body: 'Campuses such as MSU–General Santos can host organizations where Moro, Lumad and settler students co-lead projects rather than only attend events.' },
    { title: 'Practice ethical cultural tourism', body: 'At Lake Sebu and in B’laan villages, buy directly from weavers, ask before photographing, and follow community guidelines.' },
    { title: 'Stand up for fair work at sea', body: 'Support fair labor and safety for tuna-industry workers, many of whom are Sama, B’laan and migrant fishers.' },
    { title: 'Celebrate Mindanao Week of Peace', body: 'Every last week of November, organize joint Muslim–Christian–Lumad service projects, not just ceremonies.' },
  ],
  media,
};
