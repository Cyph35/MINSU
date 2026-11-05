import type { Region } from '../types';
import { gallery } from './helpers';

const media = gallery(
  'zamboanga',
  [
    'Fort Pilar, Zamboanga, in the 1910s (archival photograph)',
    'Vinta sails along R.T. Lim Boulevard, Zamboanga City',
    'Zamboanga City Hall',
    'Subanen community members at Mount Malindang',
  ],
  'Audio: Chavacano, Tausug and Subanen greetings',
  'Video: the Subanen Buklog thanksgiving ritual',
);

export const zamboanga: Region = {
  slug: 'zamboanga',
  name: 'Zamboanga Peninsula',
  shortName: 'Zamboanga',
  svgId: 'zamboanga',
  provinces: 'Zamboanga del Norte, Zamboanga del Sur (incl. Zamboanga City) and Zamboanga Sibugay',
  summary:
    'The homeland of the Subanen “river people” and of Chavacano-speaking Zamboanga City, the peninsula has been a meeting point of Moro sultanates, Spanish garrisons and settler towns for four centuries.',
  triPeople: {
    moro: ['Tausug', 'Sama', 'Yakan', 'Kalibugan', 'Iranun'],
    lumad: ['Subanen'],
    settler: ['Chavacano-speaking Zamboangueños', 'Cebuano', 'Hiligaynon (Ilonggo)'],
  },
  population: {
    value: 3745197,
    note: 'Zamboanga del Norte (1,047,455) + Zamboanga del Sur incl. Zamboanga City (2,027,902) + Zamboanga Sibugay (669,840)',
    year: 2020,
    cite: ['psa2020'],
  },
  languages: ['Chavacano', 'Cebuano', 'Subanen', 'Tausug', 'Sama', 'Filipino'],
  culturalMarker:
    'Subanen homeland and Chavacano-speaking Zamboanga City, guarded by the 17th-century Fort Pilar — a crossroads of Moro, Lumad and settler worlds.',
  heroImage: media[1],
  history: [
    {
      text: 'The Subanen (from suba, “river”) are among the peninsula’s earliest inhabitants and farm the uplands around Mount Malindang. Coastal areas fell under the influence of Sulu and Maguindanao, and Subanen who embraced Islam are often called Kalibugan.',
      cite: ['rodil', 'ncip'],
    },
    {
      text: 'In 1635, Spain built the stone fort Real Fuerza de Nuestra Señora del Pilar de Zaragoza as a base against the Moro sultanates. Abandoned in 1662 and rebuilt in 1719, Fort Pilar became the symbol of Zamboanga and, through its Marian shrine, a pilgrimage site.',
      cite: ['nm-fortpilar'],
    },
    {
      text: 'Chavacano, a Spanish-based creole, grew out of the multiethnic garrison town. In the 20th century, logging, mining and settlement pushed into Subanen lands. Many Subanen communities have since pursued ancestral domain titles under IPRA, including in the long dispute over mining on Mount Canatuan.',
      cite: ['rodil', 'ra8371'],
    },
    {
      text: 'In September 2013, fighting between an MNLF faction and government forces in Zamboanga City displaced more than 100,000 residents, many of them Sama and Tausug coastal families. Rebuilding their communities became a test of inclusive recovery.',
      cite: ['ocha-zambo'],
    },
  ],
  heritage: [
    {
      text: 'The Subanen recognize the timuay as traditional leader and the gukom as a customary justice council that resolves disputes through dialogue, fines and ritual rather than violence.',
      cite: ['ncip'],
    },
    {
      text: 'The Buklog is a Subanen thanksgiving and reconciliation ritual performed on a tall, springy wooden platform. Dancing on it makes a resonating sound believed to reach the spirits, and the feast gathers whole communities.',
      cite: ['ncip'],
    },
    {
      text: 'The vinta, with its striped sails, evokes centuries of Sama and Tausug seafaring that linked Zamboanga to the trade of the Sulu Zone. Today it is the emblem of a city where Christian and Muslim heritage share the same waterfront.',
      cite: ['warren'],
    },
  ],
  youthPeace: [
    { title: 'Document the Subanen language', body: 'Work with timuay and elders to record Subanen stories, songs and Buklog chants, with the community keeping control over how recordings are used.' },
    { title: 'Run coastal peace circles', body: 'Bring together youth from Sama, Tausug and Chavacano-speaking barangays affected by 2013 to share stories of loss and recovery.' },
    { title: 'Swap languages', body: 'Language exchanges — Chavacano for Tausug or Sinama — build everyday respect and help break stereotypes.' },
  ],
  media,
};
