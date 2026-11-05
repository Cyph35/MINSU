import type { Region } from '../types';
import { gallery } from './helpers';

const media = gallery(
  'sulu',
  [
    'Location of Jolo Island in the Province of Sulu',
    'Moro kris with its wavy blade (Metropolitan Museum of Art)',
    'Map of the Sulu Archipelago',
    'Daling-daling, a Tausug dance performed at celebrations',
  ],
  'Audio: a Tausug kissa (sung narrative)',
  'Video: pangalay dance with its extended fingernails',
);

export const sulu: Region = {
  slug: 'sulu',
  name: 'Sulu Archipelago',
  shortName: 'Sulu',
  svgId: 'sulu',
  provinces: 'Sulu Province (Jolo and surrounding islands)',
  summary:
    'For four centuries, the Sultanate of Sulu was one of maritime Southeast Asia’s great powers. Its Tausug and Sama peoples are known for seafaring, trade, fine metalwork and the pangalay dance.',
  triPeople: {
    moro: ['Tausug', 'Sama', 'Sama Dilaut (Bajau)'],
    lumad: [],
    settler: ['Small Christian and Chinese-Filipino communities, mainly in Jolo'],
  },
  population: { value: 1000108, note: 'Sulu Province', year: 2020, cite: ['psa2020'] },
  languages: ['Tausug (Bahasa Sūg)', 'Sama', 'Filipino'],
  culturalMarker:
    'Seat of the Sulu Sultanate (c. 1450s) and the 18th–19th century “Sulu Zone” trade; the Tausug, “people of the current,” are known for pangalay and pis syabit.',
  heroImage: media[3],
  history: [
    {
      text: 'Muslim traders and teachers reached Sulu by the late 14th century. Around the mid-15th century, Sharif ul-Hashim (Sayyid Abu Bakr) founded the Sultanate of Sulu, establishing Islamic law and institutions that made Jolo a center of authority across the archipelago and parts of North Borneo and Palawan.',
      cite: ['majul'],
    },
    {
      text: 'In the late 18th and 19th centuries, the “Sulu Zone” thrived on trade in sea products such as sea cucumber, pearls and birds’ nests with China and the West. It also relied on raiding and captive labor — a complex economy reconstructed by historian James Warren.',
      cite: ['warren'],
    },
    {
      text: 'Spanish forces captured Jolo in 1876. Under the 1899 Bates Agreement, the Americans first left the sultanate’s authority in place before imposing direct rule. Resistance was crushed at Bud Dajo (1906) and Bud Bagsak (1913), events remembered as among the most violent of the colonial era.',
      cite: ['gowing', 'tan'],
    },
    {
      text: 'Sulu was a heartland of the MNLF struggle from 1972. In the 2019 plebiscite, most Sulu voters rejected the Bangsamoro Organic Law, but the province was counted into BARMM through the region-wide vote. In 2024, the Supreme Court ruled that Sulu is not part of BARMM.',
      cite: ['ra11054', 'sc-sulu'],
    },
  ],
  heritage: [
    {
      text: 'Tausug metalwork — the wavy-bladed kris and the leaf-shaped barong — and the pis syabit, a finely woven tapestry headcloth, are emblems of Sulu craftsmanship. Weaver Darhata Sawabi of Parang received the Gawad sa Manlilikha ng Bayan in 2004.',
      cite: ['ncca-gamaba'],
    },
    {
      text: 'Pangalay, the dance of the Tausug and Sama in which dancers wear long brass fingernails, echoes the grace of sea birds and is performed at weddings and celebrations. It links Sulu to dance traditions across island Southeast Asia.',
      cite: ['gowing'],
    },
    {
      text: 'Disputes are settled by elders, religious leaders and local authorities who mediate between kin groups. Islamic law (shari’ah) and adat (custom) operate side by side, and a settlement is often sealed with a shared meal and prayer.',
      cite: ['majul', 'torres-rido'],
    },
  ],
  youthPeace: [
    { title: 'Teach pangalay and kissa', body: 'School cultural troupes and recordings of elders can pass on Tausug dance and sung narratives as living heritage, not stage props.' },
    { title: 'Build bridges after the 2024 ruling', body: 'Youth dialogues between Sulu and BARMM provinces can keep cooperation in education, trade and culture alive across new political boundaries.' },
    { title: 'Protect the sea', body: 'Ocean-literacy and community fisheries projects connect Sulu’s seafaring heritage with livelihoods for young people.' },
  ],
  media,
};
