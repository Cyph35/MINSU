import type { Region } from '../types';
import { gallery } from './helpers';

const media = gallery(
  'davao',
  [
    'Mount Apo, sacred mountain of the Bagobo, Obo Manobo and other Lumad peoples',
    'Bagobo performers at the Kadayawan Festival, 2016',
    'The Davao Gulf',
    'A Mandaya warrior, 1913 (archival photograph)',
  ],
  'Audio: Bagobo-Tagabawa gong and bamboo music',
  'Video: a weaver demonstrates abaca ikat (inabal)',
);

export const davao: Region = {
  slug: 'davao',
  name: 'Davao Region',
  shortName: 'Davao',
  svgId: 'davao',
  provinces: 'Davao del Sur (incl. Davao City), Davao del Norte, Davao de Oro, Davao Oriental and Davao Occidental',
  summary:
    'Around the Davao Gulf and the slopes of Mount Apo, Lumad peoples, Muslim Kalagan and Maguindanaon, and a large settler majority have built Mindanao’s biggest urban region. It was shaped by plantations, migration and a strong Indigenous presence.',
  triPeople: {
    moro: ['Kalagan', 'Maguindanaon', 'Tausug', 'Meranaw', 'Iranun', 'Sama'],
    lumad: ['Bagobo-Tagabawa', 'Bagobo-Klata', 'Obo Manobo', 'Ata', 'Matigsalug', 'Mandaya', 'Mansaka', 'Dibabawon', 'Tagakaulo', 'B’laan'],
    settler: ['Cebuano (majority)', 'Hiligaynon (Ilonggo)', 'Ilocano', 'Japanese-Filipino descendants'],
  },
  population: {
    value: 5243536,
    note: 'Region XI total: Davao del Sur incl. Davao City (2,457,430), Davao del Norte, Davao de Oro, Davao Oriental and Davao Occidental',
    year: 2020,
    cite: ['psa2020'],
  },
  languages: ['Cebuano (Davaoeño)', 'Bagobo', 'Mandaya', 'Mansaka', 'Kalagan', 'Filipino'],
  culturalMarker:
    'Mount Apo is sacred to the Bagobo, Obo Manobo and other Lumad. Davao City recognizes eleven Moro and Lumad tribes, celebrated at the Kadayawan harvest festival.',
  heroImage: media[0],
  history: [
    {
      text: 'Bagobo, Mandaya, Mansaka and other Lumad peoples lived around the Davao Gulf, while the Muslim Kalagan and the Maguindanao sultanate held influence on the coast. Datu Bago, a Muslim leader, controlled the Davao River area until José Oyanguren’s Spanish expedition founded Nueva Vergara (Davao) in 1848.',
      cite: ['abinales', 'majul'],
    },
    {
      text: 'In the early 20th century, American and Japanese investors established abaca plantations. By the 1930s, Davao had the largest Japanese community in the Philippines, which often acquired land through Filipino proxies — a process that displaced many Bagobo communities.',
      cite: ['abinales'],
    },
    {
      text: 'After World War II, migrants from the Visayas and Luzon made Cebuano the majority language. Logging, mining and plantations expanded into ancestral lands, and the uplands became a theater of insurgency and counter-insurgency that weighed heavily on Lumad communities.',
      cite: ['abinales', 'rodil'],
    },
  ],
  heritage: [
    {
      text: 'Mount Apo (Apo Sandawa) is the ancestral and sacred mountain of several Lumad peoples. It is a protected natural park, and Indigenous communities have long organized to defend it.',
      cite: ['ncip'],
    },
    {
      text: 'Bagobo-Tagabawa weavers create inabal, abaca ikat cloth with ancestral designs. Master weaver Salinta Monon of Bansalan received the Gawad sa Manlilikha ng Bayan in 1998.',
      cite: ['ncca-gamaba'],
    },
    {
      text: 'Davao City recognizes eleven tribes — Moro and Lumad alike — whose culture is at the core of the Kadayawan festival. Following IPRA, Indigenous Peoples Mandatory Representatives sit in local legislative councils.',
      cite: ['ra8371'],
    },
    {
      text: 'Lumad customary justice is led by datus and councils of elders, who settle disputes through dialogue, restitution and ritual oath-taking that restores relationships within and between communities.',
      cite: ['ncip', 'rodil'],
    },
  ],
  youthPeace: [
    { title: 'Go beyond the festival stage', body: 'Treat Kadayawan as a door to learning: visit tribal halls, learn greetings in Bagobo or Mandaya, and credit cultural bearers by name.' },
    { title: 'Champion culturally rooted schooling', body: 'Support Indigenous Peoples Education (IPEd) programs that teach in the mother tongue and include elders as teachers.' },
    { title: 'Steward Mount Apo', body: 'Join leave-no-trace climbs and reforestation led by Indigenous guides, and respect the rituals and closures they set.' },
    { title: 'Practice peace journalism', body: 'Student media can report on Lumad and Moro communities with context and consent, avoiding labels that put people at risk.' },
  ],
  media,
};
