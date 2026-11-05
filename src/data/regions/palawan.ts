import type { Region } from '../types';
import { gallery } from './helpers';

const media = gallery(
  'palawan',
  [
    'Tabon Cave, Quezon, Palawan',
    'The Manunggul Jar at the National Museum of Anthropology',
    'Limestone formations in the Puerto-Princesa Subterranean River',
    'Coral and limestone at Coron Island, Tagbanwa ancestral domain',
  ],
  'Audio: Pala’wan sung epic (kulilal / tultul)',
  'Video: Tagbanwa guardians of Coron’s sacred lakes',
);

export const palawan: Region = {
  slug: 'palawan',
  name: 'Palawan',
  shortName: 'Palawan',
  svgId: 'palawan',
  provinces: 'Palawan Province, including Puerto Princesa City',
  summary:
    'Palawan’s Indigenous Pala’wan, Tagbanwa and Batak, its Muslim south and its waves of migrants share an island that holds some of the oldest human history in the Philippines — and some of its most fragile forests and reefs.',
  triPeople: {
    moro: ['Molbog', 'Palawani (Muslim Pala’wan)', 'Jama Mapun', 'Tausug'],
    lumad: ['Pala’wan', 'Tagbanwa', 'Batak'],
    settler: ['Cuyonon and Agutaynen island lowlanders', 'Visayan, Tagalog and Ilocano migrants'],
  },
  population: { value: 1246673, note: 'Palawan including Puerto Princesa City', year: 2020, cite: ['psa2020'] },
  languages: ['Cuyonon', 'Palawano', 'Tagbanwa', 'Molbog', 'Tagalog', 'Hiligaynon'],
  culturalMarker:
    'The Tabon Caves hold some of the oldest human remains in the Philippines, and the Tagbanwa of Coron won landmark recognition of their ancestral waters.',
  heroImage: media[2],
  history: [
    {
      text: 'Human remains and tools from the Tabon Cave Complex in Quezon, Palawan, date back tens of thousands of years — among the oldest evidence of people in the Philippines. The Manunggul Jar (c. 890–710 BCE), a secondary-burial jar from nearby Manunggul Cave, is a National Cultural Treasure.',
      cite: ['unesco-tabon', 'nm-manunggul'],
    },
    {
      text: 'Southern Palawan came under the influence of Brunei and then the Sulu Sultanate, and Muslim Molbog, Palawani and Tausug communities live around Balabac, Bataraza and Brooke’s Point. The Cuyonon of the Cuyo Islands spread through northern Palawan during the Spanish period.',
      cite: ['majul', 'warren'],
    },
    {
      text: 'Spain founded Puerto Princesa in 1872. The American-era Iwahig Penal Colony (1904) and post-war migration brought settlers from across the country, making Palawan one of the fastest-growing provinces.',
      cite: ['gowing', 'eder'],
    },
    {
      text: 'The Batak, a small forest people of central Palawan, have suffered sharp population decline as forests were lost and lowland settlement expanded — a warning documented by anthropologist James Eder.',
      cite: ['eder'],
    },
  ],
  heritage: [
    {
      text: 'Palawan’s Indigenous peoples practice swidden farming and forest gathering and keep a rich oral literature. Pala’wan epic chanter and musician Masino Intaray of Brooke’s Point received the Gawad sa Manlilikha ng Bayan in 1993.',
      cite: ['ncca-gamaba'],
    },
    {
      text: 'In the late 1990s, the Tagbanwa of Coron Island won recognition of an ancestral domain that covers both land and the surrounding waters. This landmark affirmed that sacred lakes and fishing grounds are part of Indigenous territory.',
      cite: ['ra8371', 'ncip'],
    },
    {
      text: 'Palawan is a UNESCO Man and the Biosphere Reserve (1990) and home to the Puerto-Princesa Subterranean River World Heritage Site. Indigenous knowledge is central to caring for these forests and reefs.',
      cite: ['unesco-ppsrnp'],
    },
  ],
  youthPeace: [
    { title: 'Be allies to ancestral waters', body: 'Support Tagbanwa and Molbog community rules on sacred and fishing areas, and choose tour operators that share income with them.' },
    { title: 'Stand with the Batak', body: 'Raise awareness and support for Batak health, schooling and forest rights, led by Batak organizations themselves.' },
    { title: 'Connect north and south Palawan', body: 'Youth exchanges between Muslim communities in the south and Indigenous and settler communities in the north build a shared Palawan identity.' },
  ],
  media,
};
