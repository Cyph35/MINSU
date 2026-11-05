import type { Region } from '../types';
import { gallery } from './helpers';

const media = gallery(
  'lanao',
  [
    'Satellite view of Lake Lanao, heart of the Meranaw homeland',
    'Model of a Meranaw torogan, the ancestral house of a royal family',
    'Mindanao crafts on exhibit — metalwork and textiles of Moro artisans',
    'The sarimanok, legendary bird of Meranaw art (museum display)',
  ],
  'Audio: a Meranaw elder chanting an excerpt of the Darangen',
  'Video: kulintang and agong ensemble at a kandori feast',
);

export const lanao: Region = {
  slug: 'lanao',
  name: 'Lanao del Sur & Lake Lanao Basin',
  shortName: 'Lanao',
  svgId: 'lanao',
  provinces: 'Lanao del Sur, including the Islamic City of Marawi',
  summary:
    'The Meranaw — “people of the lake” — built one of the oldest and most intricate political cultures of Mindanao around Lake Lanao. Their epic, art and customary law survived colonial wars, displacement and the 2017 Marawi siege.',
  triPeople: {
    moro: ['Meranaw (Maranao)', 'Iranun'],
    lumad: ['Higaonon and Manobo communities along the upland borders'],
    settler: ['Cebuano and other Visayan communities, mainly in towns bordering Bukidnon and Lanao del Norte'],
  },
  population: { value: 1195518, note: 'Lanao del Sur, including Marawi City', year: 2020, cite: ['psa2020'] },
  languages: ['Meranaw', 'Iranun', 'Cebuano', 'Filipino'],
  culturalMarker:
    'Home of the Darangen epic (UNESCO Intangible Heritage, 2008), the torogan royal house and okir art. Marawi is officially the Islamic City of the Philippines.',
  heroImage: media[1],
  history: [
    {
      text: 'Lake Lanao, the second-largest lake in the Philippines, is the center of Meranaw life. Before colonial contact, the lakeshore was organized into the Pat a Pangampong ko Ranao — the four confederated “states” of Lanao — each made up of many small sultanates and royal houses bound by genealogy and customary law (taritib and igma).',
      cite: ['majul', 'gowing'],
    },
    {
      text: 'Islam reached the Lanao plateau mainly through ties with Maguindanao and the Iranun coast from the 16th and 17th centuries, layered over older Meranaw custom. Spanish expeditions reached the lake in 1639 and again in the 1890s, but Spain never established lasting control over the Meranaw.',
      cite: ['majul'],
    },
    {
      text: 'Under American rule (the Moro Province from 1903), Lanao was brought under centralized colonial administration after armed resistance such as the Battle of Bayang in 1902. Twentieth-century land laws and settlement programs that ignored customary ownership created land conflicts across Mindanao — part of the “legacy of injustice” later documented by the Transitional Justice and Reconciliation Commission.',
      cite: ['gowing', 'rodil', 'tjrc'],
    },
    {
      text: 'In May 2017, militants aligned with the so-called Islamic State occupied parts of Marawi City. The five-month battle displaced most of the city’s residents and destroyed its historic commercial center. Rebuilding, compensation and the return of displaced families remain central concerns of peace in Lanao.',
      cite: ['icg-2019'],
    },
  ],
  heritage: [
    {
      text: 'The Darangen is a pre-Islamic epic of some 72,000 lines, chanted in Meranaw over several nights. It tells of the hero Bantugan and the kingdom of Bembaran and encodes Meranaw history, law and values. UNESCO proclaimed it a Masterpiece of the Oral and Intangible Heritage of Humanity in 2005 and inscribed it on the Representative List in 2008.',
      cite: ['unesco-darangen'],
    },
    {
      text: 'Meranaw visual art centers on okir — flowing curvilinear motifs carved on the panolong (flared beam ends) of the torogan, cast in brassware and woven into textiles. The sarimanok, a legendary bird holding a fish in its beak, has become a symbol of Meranaw identity.',
      cite: ['gowing'],
    },
    {
      text: 'Disputes between Meranaw kin groups are handled through customary mediation. Respected elders, religious leaders and local officials negotiate the settlement of rido (clan feuds), often with blood money and a kandori — a thanksgiving feast that publicly seals reconciliation. Lanao del Sur has among the most recorded rido cases, and also some of the most active community-based settlement.',
      cite: ['torres-rido'],
    },
    {
      text: 'Maratabat — a deep sense of family honor and dignity — shapes Meranaw social life. Peace-building that protects maratabat, such as face-saving mediation, tends to last longer than settlements imposed from outside.',
      cite: ['torres-rido'],
    },
  ],
  youthPeace: [
    { title: 'Keep the Darangen alive', body: 'Record elders chanting the Darangen, transcribe it with student volunteers, and run chant circles in schools so that young Meranaw learn a story of their people that predates conflict.' },
    { title: 'Train youth rido mediators', body: 'Young people can learn to recognize early signs of rido, refer disputes to elders and barangay mediators, and counter calls for retaliation online.' },
    { title: 'Remember old Marawi', body: 'Oral-history and photo projects with displaced families can document the city before 2017 and support a dignified return to the most affected area.' },
    { title: 'Use the campus as a meeting ground', body: 'MSU–Marawi, founded to bring Mindanao’s peoples together, can host regular Muslim–Christian–Lumad student dialogues and exchange visits.' },
  ],
  media,
};
