import type { CitationId } from './types';

export interface PeopleSection {
  id: 'moro' | 'lumad' | 'settler';
  title: string;
  subtitle: string;
  paragraphs: { text: string; cite: CitationId[] }[];
  groups: string[];
}

export const triPeople: PeopleSection[] = [
  {
    id: 'moro',
    title: 'Filipino Muslims (Bangsamoro)',
    subtitle: 'Heirs of the sultanates',
    paragraphs: [
      { text: 'Islam reached Sulu by the late 14th century and spread through trade, intermarriage and teaching. The sultanates of Sulu and Maguindanao and the confederated states of Lanao governed through Islamic law and adat for centuries, resisting Spanish rule for more than 300 years.', cite: ['majul'] },
      { text: '“Bangsamoro” (the Moro nation) is today a political identity claimed by thirteen Islamized ethnolinguistic groups. The Bangsamoro Organic Law recognizes it while protecting the rights of non-Moro Indigenous Peoples and settlers living in the region.', cite: ['ra11054', 'cab2014'] },
    ],
    groups: ['Meranaw', 'Maguindanaon', 'Tausug', 'Sama', 'Sama Dilaut (Bajau)', 'Yakan', 'Iranun', 'Jama Mapun', 'Kalagan', 'Kalibugan', 'Sangil', 'Molbog', 'Palawani'],
  },
  {
    id: 'lumad',
    title: 'Indigenous Peoples (Lumad)',
    subtitle: 'Keepers of the ancestral domains',
    paragraphs: [
      { text: '“Lumad” — a Cebuano word meaning “native” — was adopted in 1986 by a federation of non-Islamized Indigenous Peoples of Mindanao as a shared name. Some communities prefer to be called only by their own names, and this portal does so wherever possible.', cite: ['rodil'] },
      { text: 'Lumad peoples maintain their own governance (datu and council of elders), customary justice and spiritual relationship with land. The Indigenous Peoples’ Rights Act of 1997 recognizes their ancestral domains and their right to free, prior and informed consent.', cite: ['ra8371', 'ncip'] },
      { text: 'Historian B. R. Rodil describes how Indigenous communities were “minoritized” — turned into minorities in their own homelands — through colonial land laws, settlement programs and resource extraction.', cite: ['rodil'] },
    ],
    groups: ['Teduray', 'Lambangian', 'Dulangan Manobo', 'Subanen', 'Higaonon', 'Talaandig', 'Bukidnon', 'Matigsalug', 'Manobo', 'Bagobo', 'Mandaya', 'Mansaka', 'Ata', 'B’laan', 'T’boli', 'Tagakaulo', 'Pala’wan', 'Tagbanwa', 'Batak'],
  },
  {
    id: 'settler',
    title: 'Migrant-Settlers',
    subtitle: 'Builders of new towns',
    paragraphs: [
      { text: 'From the American period, and especially through the Commonwealth’s land settlement programs from 1939 and post-war homesteading, families from the Visayas and Luzon moved to Mindanao and Palawan looking for land and opportunity.', cite: ['abinales'] },
      { text: 'Settlers and their descendants now form the majority in much of Mindanao and have built its cities and farms. Recognizing both their contributions and the dispossession that settlement caused for Moro and Lumad communities is central to a shared future.', cite: ['abinales', 'tjrc'] },
    ],
    groups: ['Cebuano', 'Hiligaynon (Ilonggo)', 'Boholano', 'Ilocano', 'Tagalog', 'Waray', 'Chavacano-speaking Zamboangueños'],
  },
];
