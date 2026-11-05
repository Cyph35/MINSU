import type { CitationId } from './types';

export interface TimelineEvent { year: string; title: string; body: string; kind: 'conflict' | 'accord' | 'law' | 'grassroots'; cite: CitationId[] }

export const peaceTimeline: TimelineEvent[] = [
  { year: '1913', title: 'Bud Bagsak', kind: 'conflict', body: 'The last major battle of armed resistance against American colonial rule in Sulu marks the end of the sultanates’ independence and the beginning of direct colonial administration.', cite: ['gowing', 'tan'] },
  { year: '1939', title: 'Organized settlement of Mindanao', kind: 'conflict', body: 'The National Land Settlement Administration opens Koronadal Valley and Dadiangas to settlers, accelerating the migration that would reshape land ownership across Mindanao.', cite: ['abinales'] },
  { year: '1972', title: 'Armed struggle for self-determination', kind: 'conflict', body: 'The Moro National Liberation Front launches an armed struggle for Bangsamoro self-determination, rooted in grievances over land, marginalization and violence.', cite: ['tan', 'tjrc'] },
  { year: '1976', title: 'Tripoli Agreement', kind: 'accord', body: 'The Government and the MNLF agree, with the help of the Organization of the Islamic Conference, on autonomy for Muslims in southern Philippines.', cite: ['tripoli1976'] },
  { year: '1989', title: 'Autonomous Region in Muslim Mindanao', kind: 'law', body: 'Republic Act No. 6734 creates the ARMM, implemented after a plebiscite in which only four provinces initially opted in.', cite: ['ra6734'] },
  { year: '1996', title: 'GRP–MNLF Final Peace Agreement', kind: 'accord', body: 'The Final Agreement on the Implementation of the 1976 Tripoli Agreement ends large-scale fighting with the MNLF.', cite: ['fpa1996'] },
  { year: '1997', title: 'Indigenous Peoples’ Rights Act', kind: 'law', body: 'IPRA recognizes ancestral domains, self-governance, cultural integrity and the right to free, prior and informed consent of Indigenous Peoples.', cite: ['ra8371'] },
  { year: '2004', title: 'Mindanao Week of Peace', kind: 'grassroots', body: 'The last week of November is declared Mindanao Week of Peace, building on interfaith work by Muslim and Christian religious leaders.', cite: ['procl675'] },
  { year: '2008', title: 'MOA-AD struck down', kind: 'conflict', body: 'The Supreme Court declares the Memorandum of Agreement on Ancestral Domain unconstitutional; renewed fighting displaces hundreds of thousands.', cite: ['sc-moaad'] },
  { year: '2012', title: 'Framework Agreement on the Bangsamoro', kind: 'accord', body: 'The Government and the MILF agree on the framework for a new autonomous political entity replacing the ARMM.', cite: ['fab2012'] },
  { year: '2014', title: 'Comprehensive Agreement on the Bangsamoro', kind: 'accord', body: 'The final peace agreement between the Government and the MILF covers political settlement, normalization and decommissioning.', cite: ['cab2014'] },
  { year: '2016', title: 'Transitional Justice and Reconciliation Commission', kind: 'grassroots', body: 'The TJRC reports on historical injustice, human rights violations and land dispossession, and recommends a national program for dealing with the past.', cite: ['tjrc'] },
  { year: '2018', title: 'Bangsamoro Organic Law', kind: 'law', body: 'Republic Act No. 11054 establishes the Bangsamoro Autonomous Region in Muslim Mindanao, with a parliamentary government and protections for non-Moro Indigenous Peoples.', cite: ['ra11054'] },
  { year: '2019', title: 'Plebiscite and the birth of BARMM', kind: 'law', body: 'Voters ratify the organic law; the Bangsamoro Transition Authority takes office with Cotabato City as the regional seat.', cite: ['ra11054', 'opapru'] },
  { year: '2024', title: 'Sulu ruled outside BARMM', kind: 'law', body: 'The Supreme Court rules that Sulu, whose voters rejected the organic law, is not part of the Bangsamoro region.', cite: ['sc-sulu'] },
  { year: '2026', title: 'First Bangsamoro parliamentary elections', kind: 'law', body: 'After four postponements, BARMM holds its first regular parliamentary elections on 14 September 2026 — a milestone in the transition from armed struggle to electoral politics.', cite: ['inq-barmm-2026'] },
];

export const grassroots = [
  { title: 'Customary peace-making', body: 'Kandori and rido settlement among the Meranaw; tiyawan among the Teduray; the gukom of the Subanen; and peace pacts such as the Tampuda hu Balagon remind us that Mindanao’s peoples had peace systems long before the state did.', cite: ['torres-rido', 'schlegel', 'rodil'] },
  { title: 'Interfaith dialogue', body: 'Muslim and Christian religious leaders, together with Lumad elders, organize dialogues, joint relief and the yearly Mindanao Week of Peace.', cite: ['procl675'] },
  { title: 'Normalization and transitional justice', body: 'Decommissioning of combatants, camp transformation, socio-economic programs and dealing with the past are the “second track” of the Bangsamoro peace process.', cite: ['cab2014', 'tjrc', 'opapru'] },
  { title: 'Indigenous rights within autonomy', body: 'Recognizing the ancestral domains and justice systems of non-Moro Indigenous Peoples inside BARMM is a measure of whether Tri-People peace is real.', cite: ['ra8371', 'ra11054'] },
];
