import type { Region } from '../types';
import { gallery } from './helpers';

const media = gallery(
  'basilan',
  [
    'Topographic model of Basilan Island',
    'Yakan weaving on a back-strap hand loom',
    'Yakan woven cloth with geometric designs',
    'Isabela City Hall Complex',
  ],
  'Audio: kwintangan kayu (Yakan log xylophone)',
  'Video: a Yakan weaver explains the meaning of tennun designs',
);

export const basilan: Region = {
  slug: 'basilan',
  name: 'Basilan',
  shortName: 'Basilan',
  svgId: 'basilan',
  provinces: 'Basilan Province and Isabela City',
  summary:
    'Basilan is the island of the Yakan, master weavers and farmers, who share it with Tausug and Sama communities along the coast and with Christian, largely Chavacano-speaking towns. After decades of insecurity, it is now rebuilding through community-led peace.',
  triPeople: {
    moro: ['Yakan (the island’s indigenous people, predominantly Muslim)', 'Tausug', 'Sama'],
    lumad: [],
    settler: ['Chavacano-speaking Christians', 'Cebuano', 'Hiligaynon (Ilonggo)'],
  },
  population: {
    value: 556586,
    note: 'Basilan including Isabela City. Isabela City stayed outside BARMM after the 2019 plebiscite.',
    year: 2020,
    cite: ['psa2020'],
  },
  languages: ['Yakan', 'Tausug', 'Sama', 'Chavacano', 'Cebuano'],
  culturalMarker:
    'Island of the Yakan, whose tennun cloth carries bold geometric designs; weaver Ambalang Ausalin of Lamitan received the GAMABA in 2016.',
  heroImage: media[1],
  history: [
    {
      text: 'The Yakan farmed Basilan’s fertile interior while Sama and Tausug lived along its coasts. The island lay within the Sulu Sultanate’s sphere until Spain built a fort at Isabela in the 1840s.',
      cite: ['warren', 'majul'],
    },
    {
      text: 'Under American rule, rubber and coconut plantations transformed the island and drew Christian settlers, especially to Isabela and Lamitan. With them came land-titling systems that often clashed with Yakan customary tenure.',
      cite: ['gowing', 'rodil'],
    },
    {
      text: 'From the 1990s, Basilan suffered violence linked to the Abu Sayyaf Group. Community, religious, local-government and security efforts — including programs to reintegrate former combatants — have since sharply reduced violence.',
      cite: ['icg-2019', 'opapru'],
    },
  ],
  heritage: [
    {
      text: 'Yakan weaving (tennun) produces cloth with dense geometric patterns for the seputangan headcloth, sawal trousers and other garments. Master weaver Ambalang Ausalin of Lamitan received the Gawad sa Manlilikha ng Bayan in 2016.',
      cite: ['ncca-gamaba'],
    },
    {
      text: 'Yakan music on the kwintangan kayu (log xylophone) and gongs accompanies weddings and community celebrations, and Lamitan’s Lami-Lamihan Festival showcases Yakan dress, music and food.',
      cite: ['gowing'],
    },
    {
      text: 'Customary settlement led by Yakan elders and imams works alongside Islamic law and barangay justice, and religious leaders are central mediators in clan and community conflict.',
      cite: ['torres-rido'],
    },
  ],
  youthPeace: [
    { title: 'Weave a livelihood', body: 'Connect young weavers with fair-trade buyers and teach design documentation so that tennun patterns stay with their communities.' },
    { title: 'Tell Basilan’s new story', body: 'Youth media teams can produce stories of everyday peace — farms, schools, festivals — to replace a single narrative of violence.' },
    { title: 'Welcome returnees', body: 'Support the community-based reintegration of former combatants and their families through sports, schooling and livelihood mentoring.' },
  ],
  media,
};
