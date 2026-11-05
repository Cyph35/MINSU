import type { Region } from '../types';
import { gallery } from './helpers';

const media = gallery(
  'northern-mindanao',
  [
    'Typical Bukidnon upland landscape',
    'Performers at the Kaamulan Festival, Malaybalay',
    'Cagayan de Oro skyline',
    'Maria Cristina Falls, Iligan',
  ],
  'Audio: Talaandig music on the kubing (bamboo jaw harp)',
  'Video: elders recount the Tampuda hu Balagon',
);

export const northernMindanao: Region = {
  slug: 'northern-mindanao',
  name: 'Bukidnon & Northern Mindanao',
  shortName: 'Northern Mindanao',
  svgId: 'northern-mindanao',
  provinces: 'Bukidnon, Misamis Oriental (incl. Cagayan de Oro), Lanao del Norte (incl. Iligan), Misamis Occidental and Camiguin',
  summary:
    'From the grassland plateau of Bukidnon to the port cities of Cagayan de Oro and Iligan, Northern Mindanao joins the homeland of the “seven tribes” of Bukidnon with Meranaw communities and a settler majority.',
  triPeople: {
    moro: ['Meranaw', 'Iranun (Lanao del Norte)'],
    lumad: ['Bukidnon', 'Higaonon', 'Talaandig', 'Manobo', 'Matigsalug', 'Umayamnon', 'Tigwahanon', 'Subanen (Misamis Occidental)'],
    settler: ['Cebuano', 'Boholano', 'Hiligaynon (Ilonggo)', 'Ilocano'],
  },
  population: { value: 5022768, note: 'Region X total (Bukidnon 1,541,308; Misamis Oriental incl. Cagayan de Oro 1,685,302; Lanao del Norte incl. Iligan 1,086,017; Misamis Occidental; Camiguin)', year: 2020, cite: ['psa2020'] },
  languages: ['Cebuano', 'Binukid', 'Higaonon', 'Meranaw', 'Filipino'],
  culturalMarker:
    'Bukidnon’s seven tribes gather at the Kaamulan festival, and highland oral tradition remembers a peace covenant with the lowland Meranaw.',
  heroImage: media[0],
  history: [
    {
      text: 'The highlands of Bukidnon (“people of the mountains”) are home to the Bukidnon, Higaonon, Talaandig, Matigsalug, Umayamnon, Tigwahanon and Manobo — the “seven tribes” honored today. They traded forest products with the coastal peoples of Cagayan and the Meranaw of Lanao.',
      cite: ['rodil', 'ncip'],
    },
    {
      text: 'Spanish Recollect missionaries arrived on the Cagayan coast in the 1620s, and the river settlement grew into today’s Cagayan de Oro. The upland peoples largely kept their autonomy until the American period.',
      cite: ['rodil'],
    },
    {
      text: 'In 1926, the Philippine Packing Corporation (later Del Monte Philippines) began leasing vast Bukidnon grasslands for pineapple. Post-war homestead migration then made settlers the majority, sharply shrinking Lumad ancestral lands.',
      cite: ['rodil'],
    },
    {
      text: 'Lanao del Norte and Iligan grew as industrial centers powered by hydroelectric plants on the Agus River at Maria Cristina Falls. Settlement there also brought Moro–settler tensions, especially in the 1970s.',
      cite: ['rodil'],
    },
  ],
  heritage: [
    {
      text: 'Talaandig and Higaonon oral traditions tell of the Tampuda hu Balagon (“cutting of the vine”), a peace covenant between Bukidnon highlanders and the Meranaw that set boundaries and forbade war between them. It remains a reference point for Lumad–Moro relations.',
      cite: ['rodil'],
    },
    {
      text: 'The Kaamulan Festival, from the Binukid word amul (“to gather”), began in 1974 in Malaybalay as a gathering of Bukidnon’s tribes and is now one of the country’s major ethnic festivals.',
      cite: ['ncip'],
    },
    {
      text: 'Customary governance follows the datu system and councils of elders. Land is held as ancestral domain under IPRA, and several Bukidnon communities have secured Certificates of Ancestral Domain Title.',
      cite: ['ra8371', 'ncip'],
    },
  ],
  youthPeace: [
    { title: 'Learn from Talaandig artists', body: 'Join workshops in Talaandig soil painting and music, which share Indigenous knowledge on the community’s own terms.' },
    { title: 'Revive the vine covenant', body: 'Lumad–Moro youth camps can retell the Tampuda hu Balagon and set new “vine” agreements for respect between schools and barangays.' },
    { title: 'Guard ancestral domains', body: 'Youth can support domain management plans and FPIC processes by translating documents and explaining rights to their peers.' },
  ],
  media,
};
