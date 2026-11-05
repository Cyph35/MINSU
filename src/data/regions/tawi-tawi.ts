import type { Region } from '../types';
import { gallery } from './helpers';

const media = gallery(
  'tawi-tawi',
  [
    'Bud Bongao, the sacred peak of Tawi-Tawi',
    'Sheikh Karimul Makhdum Mosque in Simunul, traced to 1380',
    'Sama-Bajau stilt houses (photographed in Isabela, Basilan)',
    'The coast of Bongao, Tawi-Tawi',
  ],
  'Audio: a Sama lullaby (lugu-style chant)',
  'Video: igal dance of the Sama',
);

export const tawiTawi: Region = {
  slug: 'tawi-tawi',
  name: 'Tawi-Tawi',
  shortName: 'Tawi-Tawi',
  svgId: 'tawi-tawi',
  provinces: 'Tawi-Tawi Province (Bongao, Simunul, Sitangkai, the Turtle Islands and others)',
  summary:
    'The country’s southernmost province is a sea-world of the Sama, where Islam first took root in the Philippines. Its communities have moved with the tides across today’s borders for centuries.',
  triPeople: {
    moro: ['Sama', 'Sama Dilaut (Bajau)', 'Jama Mapun', 'Tausug'],
    lumad: [],
    settler: ['Small Christian communities, mainly in Bongao'],
  },
  population: { value: 440276, note: 'Tawi-Tawi Province', year: 2020, cite: ['psa2020'] },
  languages: ['Sinama', 'Tausug', 'Filipino'],
  culturalMarker:
    'Where Islam first took root in the Philippines: the Sheikh Karimul Makhdum Mosque in Simunul traces its founding to 1380.',
  heroImage: media[0],
  history: [
    {
      text: 'According to the Sulu tarsila (genealogies), the missionary Sheikh Karimul Makhdum arrived in 1380 and built a mosque at Tubig Indangan, Simunul. It is regarded as the first mosque in the Philippines.',
      cite: ['majul'],
    },
    {
      text: 'The Sama are the original seafaring peoples of the archipelago. Sama Dilaut (Bajau) families historically lived on houseboats (lepa) and in stilt villages, moving with the fishing seasons across today’s borders with Malaysia and Indonesia.',
      cite: ['warren'],
    },
    {
      text: 'Tawi-Tawi was separated from Sulu as its own province in 1973. It was part of the ARMM and voted to join BARMM in 2019. Its islands lie a short sea crossing from Sabah.',
      cite: ['ra11054'],
    },
  ],
  heritage: [
    {
      text: 'Sama women weave colorful pandan mats (tepo) with intricate geometric borders. Mat weaver Haja Amina Appi of Tandubas received the Gawad sa Manlilikha ng Bayan in 2004.',
      cite: ['ncca-gamaba'],
    },
    {
      text: 'The igal, the Sama dance with fluid arm and hand movements, is performed at weddings and festivals, and the lepa boat with its carved prow is a cherished symbol of Sama identity.',
      cite: ['warren'],
    },
    {
      text: 'The Sama Dilaut have long faced discrimination and displacement. Recognizing them as a distinct people with rights to dignity, services and their sea-based way of life — rather than as “sea gypsies” — is part of an inclusive peace.',
      cite: ['rodil', 'ncip'],
    },
  ],
  youthPeace: [
    { title: 'Speak Sinama with pride', body: 'Mother-tongue reading clubs and social media in Sinama help young Sama stay connected to their language and elders.' },
    { title: 'Stand with the Sama Dilaut', body: 'Campaign against anti-Bajau slurs, and support birth registration and schooling for Sama Dilaut children.' },
    { title: 'Guard the reefs', body: 'Youth reef monitoring and seaweed-farming cooperatives link marine conservation with sustainable livelihoods.' },
  ],
  media,
};
