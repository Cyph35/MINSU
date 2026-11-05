import type { Region } from '../types';
import { gallery } from './helpers';

const media = gallery(
  'caraga',
  [
    'Surigao City Hall, Surigao del Norte',
    'Balangay boat-building site, Butuan City',
    'The Hinatuan Enchanted River, Surigao del Sur',
    'Tinuy-an Falls, Bislig',
    'Siargao Island, Surigao del Norte',
    'The Agusan River, lifeline of the Agusan valley',
    'Aerial view of Butuan City',
    'Dinagat poblacion, Dinagat Islands',
  ],
  'Audio: a Manobo epic chant (ulaging)',
  'Video: Kahimunan, the Lumad festival of Butuan',
);

export const caraga: Region = {
  slug: 'caraga',
  name: 'Caraga (Agusan, Surigao & Dinagat)',
  shortName: 'Caraga',
  svgId: 'caraga',
  provinces: 'Agusan del Norte (incl. Butuan City), Agusan del Sur, Surigao del Norte, Surigao del Sur and Dinagat Islands',
  summary:
    'Mindanao’s northeastern corner is the land of the Agusan River and the Pacific coast of Surigao. Here the ancient port-kingdom of Butuan traded with China a thousand years ago, and today Manobo, Mamanwa, Higaonon and Banwaon communities live alongside Butuanon, Surigaonon and settler towns.',
  triPeople: {
    moro: ['Kalagan and other small Muslim communities along the coast'],
    lumad: ['Manobo', 'Mamanwa', 'Higaonon', 'Banwaon', 'Mandaya', 'Dibabawon'],
    settler: ['Butuanon and Surigaonon (Indigenous Christians)', 'Cebuano', 'Boholano'],
  },
  population: { value: 2804788, note: 'Region XIII total: Agusan del Norte incl. Butuan (760,413), Agusan del Sur (739,367), Surigao del Norte (534,636), Surigao del Sur (642,255), Dinagat Islands (128,117)', year: 2020, cite: ['psa2020'] },
  languages: ['Cebuano', 'Surigaonon', 'Butuanon', 'Manobo', 'Mamanwa', 'Filipino'],
  culturalMarker:
    'Home of the Butuan balangay boats — some of the oldest watercraft in Southeast Asia — and of the Agusan Marsh, a Ramsar wetland in Manobo country.',
  heroImage: media[2],
  history: [
    {
      text: 'By the late 10th century, Butuan at the mouth of the Agusan River was a trading port that sent missions to Song-dynasty China in the early 1000s. Its traders exchanged gold, forest products and textiles across maritime Southeast Asia.',
      cite: ['scott'],
    },
    {
      text: 'Excavations in Butuan since the 1970s uncovered balangay — large plank-built boats, the oldest dated to the 4th century CE. They are declared National Cultural Treasures and show the seafaring skill of early Filipinos.',
      cite: ['nm-heritage'],
    },
    {
      text: 'The name Caraga is often traced to the Kalagan, a people of the eastern coast. Spanish missions and forts were established along the Surigao and Agusan coasts from the 17th century, while the upland Manobo and Mamanwa largely kept their autonomy.',
      cite: ['rodil-qa', 'caballero'],
    },
    {
      text: 'In the 20th century, logging, plantations and later large-scale nickel mining drew migrants to the region and pressed on Lumad ancestral lands. Caraga was established as Region XIII in 1995.',
      cite: ['rodil', 'ra7901'],
    },
  ],
  heritage: [
    {
      text: 'The Manobo — a name often explained as “first growth” — are the largest Lumad people of the Agusan valley. They keep the datu system, epic chants and the husay, a customary settlement in which elders mediate and set restitution.',
      cite: ['masque-ch2', 'caballero'],
    },
    {
      text: 'The Mamanwa of Agusan del Norte and Surigao del Norte are among the Philippines’ Negrito peoples. Traditionally forest foragers around Lake Mainit, they now struggle for land and services.',
      cite: ['masque-ch2', 'ncip'],
    },
    {
      text: 'Butuanon and Surigaonon communities are among those your course materials call “Indigenous Christians” — Visayan-speaking natives of Mindanao, distinct from later migrants.',
      cite: ['masque-ch2', 'rodil-qa'],
    },
  ],
  youthPeace: [
    { title: 'Learn from the balangay', body: 'Use Butuan’s ancient boats to teach that Mindanao’s history long predates colonial borders — and that its peoples were connected by the sea, not divided by it.' },
    { title: 'Stand with Lumad schools and domains', body: 'Support culturally rooted schools and ancestral-domain claims of Manobo, Mamanwa and Banwaon communities, especially where mining and plantations expand.' },
    { title: 'Protect the Agusan Marsh', body: 'Join wetland clean-ups and support Manobo floating communities who are the marsh’s first guardians.' },
  ],
  media,
};
