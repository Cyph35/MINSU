import type { RegionExtras } from '../types';

export const extrasA: Record<string, RegionExtras> = {
  lanao: {
    moreCaptions: [
      'Marawi City on the shore of Lake Lanao',
      'Traditional malong and Meranaw textiles on display',
      'Mindanao State University, Marawi — a campus founded to bring Mindanao’s peoples together',
      'Lake Lanao seen from Tamparan, Lanao del Sur',
    ],
    inline: { history: [4, 7], heritage: [5, 3] },
    peoples: [
      { name: 'Meranaw (Maranao)', group: 'moro', description: 'The “people of the lake” are the largest group around Lake Lanao and one of the largest Muslim peoples of the Philippines. Their society is built on royal lineages, the four pangampong of Lanao and strong kin networks.', cite: ['majul', 'gowing'] },
      { name: 'Iranun', group: 'moro', description: 'A coastal people of Illana Bay and the Lanao shores, historically renowned as seafarers. Their language is closely related to Meranaw and Maguindanaon.', cite: ['warren'] },
      { name: 'Higaonon', group: 'lumad', description: 'Highland people of the Lanao–Bukidnon–Misamis borderlands who keep datu-led customary governance and ritual ties to their mountain forests.', cite: ['ncip', 'rodil'] },
      { name: 'Visayan settler communities', group: 'settler', description: 'Cebuano-speaking families who settled in the border towns of Lanao del Sur during the 20th century, trading and intermarrying with Meranaw neighbors.', cite: ['rodil'] },
    ],
    timeline: [
      { year: '1639', event: 'A Spanish expedition reaches Lake Lanao but cannot hold the plateau and withdraws.', cite: ['majul'] },
      { year: '1895', event: 'Spanish forces campaign around the lake and occupy Marawi; Meranaw resistance continues.', cite: ['majul'] },
      { year: '1902', event: 'The Battle of Bayang marks the start of armed resistance to American rule in Lanao.', cite: ['gowing'] },
      { year: '1955', event: 'Republic Act No. 1387 creates the Mindanao State University, which opens in Marawi in 1962.', cite: ['og-charters'] },
      { year: '2008', event: 'UNESCO inscribes the Darangen on the Representative List of the Intangible Cultural Heritage of Humanity.', cite: ['unesco-darangen'] },
      { year: '2017', event: 'The five-month Marawi siege displaces most of the city’s residents.', cite: ['icg-2019'] },
      { year: '2022', event: 'The Marawi Siege Victims Compensation Act provides for reparations to affected families.', cite: ['ra11696'] },
    ],
    landmarks: [
      { name: 'Lake Lanao', description: 'The second-largest lake in the Philippines. It drains through the Agus River, whose hydroelectric plants supply a large share of Mindanao’s electricity.', cite: ['napocor'] },
      { name: 'Kawayan Torogan, Marawi', description: 'A centuries-old royal house with carved panolong beam-ends, recognized as a National Cultural Treasure.', cite: ['nm-heritage'] },
      { name: 'Aga Khan Museum, MSU–Marawi', description: 'A university museum dedicated to the arts and material culture of Muslim Mindanao and Sulu.', cite: ['gowing'] },
    ],
  },
  'maguindanao-cotabato': {
    moreCaptions: [
      'Liguasan Marsh seen from Mount Akir-Akir',
      'Crafts displayed at the Kalasuyan festival, Kidapawan City',
      'Meguyaya Festival of Upi, Maguindanao — a celebration of the town’s Teduray, Maguindanaon and settler communities',
      'The new Maguindanao provincial capitol',
    ],
    inline: { history: [4, 7], heritage: [6, 2] },
    peoples: [
      { name: 'Maguindanaon', group: 'moro', description: 'The “people of the flood plain” of the Pulangi, heirs to the sultanates of Maguindanao and Buayan. The rice fields and fisheries of the Liguasan Marsh sustain their communities.', cite: ['majul'] },
      { name: 'Iranun', group: 'moro', description: 'Coastal people of Illana Bay, historically seafarers and traders allied with the Maguindanao sultanate.', cite: ['warren'] },
      { name: 'Teduray', group: 'lumad', description: 'Upland people of the Upi and South Upi hills, known for the kefeduwan justice system and their kinship with the Maguindanaon through the Mamalu–Tabunaway story.', cite: ['schlegel'] },
      { name: 'Lambangian and Dulangan Manobo', group: 'lumad', description: 'Upland peoples closely related to the Teduray, living in the hills of Maguindanao and Sultan Kudarat, whose ancestral domain claims are pursued together with the Teduray.', cite: ['ncip'] },
      { name: 'Ilonggo, Cebuano and Ilocano settlers', group: 'settler', description: 'Families from Panay, Negros, Cebu and Ilocos who came with the 20th-century settlement programs, now the majority in many towns of Cotabato Province.', cite: ['abinales'] },
    ],
    timeline: [
      { year: 'c. 1515', event: 'Sharif Muhammad Kabungsuwan arrives on the Pulangi, by tradition founding the line of Maguindanao sultans.', cite: ['majul'] },
      { year: '1645', event: 'Sultan Kudarat signs a treaty with Spain recognizing Maguindanao’s sovereignty.', cite: ['majul'] },
      { year: '1939', event: 'The National Land Settlement Administration begins organized settlement of the Cotabato frontier.', cite: ['abinales'] },
      { year: '1973', event: 'The old Cotabato province is divided into Maguindanao, North Cotabato and Sultan Kudarat.', cite: ['og-charters'] },
      { year: '2014', event: 'The Comprehensive Agreement on the Bangsamoro is signed by the Government and the MILF.', cite: ['cab2014'] },
      { year: '2019', event: 'Cotabato City votes to join BARMM and becomes its seat of government.', cite: ['ra11054'] },
      { year: '2022', event: 'Maguindanao is divided into Maguindanao del Norte and Maguindanao del Sur after a plebiscite.', cite: ['og-charters'] },
    ],
    landmarks: [
      { name: 'Liguasan Marsh', description: 'A vast wetland of the Rio Grande basin and a food basket for fishing and farming communities, also important for migratory birds.', cite: ['denr-pa'] },
      { name: 'Grand Mosque of Cotabato City', description: 'The Sultan Hassanal Bolkiah Masjid, the largest mosque in the Philippines, stands on the shore at Kalanganan.', cite: ['bangsamoro-tourism'] },
      { name: 'Kutawato Caves, Cotabato City', description: 'Limestone caves in the heart of the city that gave Cotabato (Kuta Wato, “stone fort”) its name.', cite: ['bangsamoro-tourism'] },
    ],
  },
  zamboanga: {
    moreCaptions: [
      'Paseo del Mar, Zamboanga City’s seaside promenade',
      'Historical marker at the Rizal Shrine in Dapitan, where José Rizal lived in exile (1892–1896)',
      'Tree house at Pasonanca Park, Zamboanga City',
      'Downtown Dipolog, capital of Zamboanga del Norte',
    ],
    inline: { history: [0, 5], heritage: [3, 4] },
    peoples: [
      { name: 'Subanen', group: 'lumad', description: 'The largest Indigenous people of the peninsula, upland farmers of the Malindang and Zamboanga ranges, led by the timuay and governed by customary law.', cite: ['ncip'] },
      { name: 'Kalibugan', group: 'moro', description: 'Subanen who embraced Islam, often through intermarriage with Sama, Tausug and Maguindanaon neighbors.', cite: ['rodil'] },
      { name: 'Tausug, Sama and Yakan', group: 'moro', description: 'Muslim communities living mainly along the coasts and islands around Zamboanga City, with deep ties to Sulu and Basilan.', cite: ['warren'] },
      { name: 'Zamboangueños', group: 'settler', description: 'The Chavacano-speaking people of Zamboanga City, a community formed around the Spanish garrison from many Visayan, Tagalog, Mexican and local roots.', cite: ['nm-fortpilar'] },
      { name: 'Cebuano settlers', group: 'settler', description: 'The majority in the farms and towns of Zamboanga del Norte and Zamboanga Sibugay after 20th-century migration.', cite: ['rodil'] },
    ],
    timeline: [
      { year: '1635', event: 'Spain builds Fort Pilar at Zamboanga as a base against the Moro sultanates.', cite: ['nm-fortpilar'] },
      { year: '1719', event: 'The fort, abandoned in 1662, is rebuilt and becomes the center of the growing Chavacano town.', cite: ['nm-fortpilar'] },
      { year: '1892', event: 'José Rizal begins four years of exile in Dapitan, where he runs a school and clinic.', cite: ['nhcp'] },
      { year: '1952', event: 'Zamboanga is divided into Zamboanga del Norte and Zamboanga del Sur.', cite: ['og-charters'] },
      { year: '2001', event: 'Zamboanga Sibugay is created from Zamboanga del Sur.', cite: ['og-charters'] },
      { year: '2013', event: 'The Zamboanga City crisis displaces more than 100,000 residents.', cite: ['ocha-zambo'] },
    ],
    landmarks: [
      { name: 'Fort Pilar', description: 'The 17th-century stone fort and Marian shrine, now a regional museum of the National Museum.', cite: ['nm-fortpilar'] },
      { name: 'Rizal Shrine, Dapitan', description: 'The site of José Rizal’s exile, with reconstructed houses and his hand-made relief map of Mindanao.', cite: ['nhcp'] },
      { name: 'Mount Malindang', description: 'A mountain range and natural park that is part of the ancestral domain of the Subanen.', cite: ['denr-pa', 'ncip'] },
    ],
  },
  basilan: {
    moreCaptions: [
      'Pedro Cuevas (Datu Kalun), a 19th-century leader of Lamitan (archival portrait)',
      'Basilan Peak, the island’s forested highlands',
      'A Yakan master weaver of Lamitan',
      'Basilan Island seen across the strait from Zamboanga City',
    ],
    inline: { history: [7, 4], heritage: [6, 2] },
    peoples: [
      { name: 'Yakan', group: 'moro', description: 'The indigenous majority of Basilan’s interior — farmers, weavers and keepers of a distinct language and music. Most Yakan are Muslim.', cite: ['gowing'] },
      { name: 'Tausug and Sama', group: 'moro', description: 'Coastal and island communities around Basilan, linked by kinship and trade to Sulu and Zamboanga.', cite: ['warren'] },
      { name: 'Christian settlers', group: 'settler', description: 'Chavacano-, Cebuano- and Hiligaynon-speaking families concentrated in Isabela City and Lamitan, many descended from plantation-era migrants.', cite: ['gowing', 'rodil'] },
    ],
    timeline: [
      { year: '1840s', event: 'Spain builds a fort at Isabela, beginning a permanent colonial presence on the island.', cite: ['majul'] },
      { year: 'Late 1800s', event: 'Pedro Cuevas, known as Datu Kalun, becomes a leader in Lamitan and allies with Spain.', cite: ['gowing'] },
      { year: '1973', event: 'Basilan becomes a separate province.', cite: ['og-charters'] },
      { year: '2016', event: 'Yakan master weaver Ambalang Ausalin receives the Gawad sa Manlilikha ng Bayan.', cite: ['ncca-gamaba'] },
      { year: '2019', event: 'Basilan joins BARMM in the plebiscite; Isabela City votes to stay out.', cite: ['ra11054'] },
    ],
    landmarks: [
      { name: 'Lamitan', description: 'The heartland of Yakan culture and home of the Lami-Lamihan Festival.', cite: ['gowing'] },
      { name: 'Basilan Peak', description: 'The forested highlands at the center of the island, home to much of its remaining forest.', cite: ['denr-pa'] },
      { name: 'Isabela City waterfront', description: 'The island’s port town, facing Malamawi Island across a narrow channel.', cite: ['gowing'] },
    ],
  },
  sulu: {
    moreCaptions: [
      'Jolo town proper',
      'Tausug textile in the collection of the Ayala Museum',
      'Moro barung (barong) blades',
      'The Sulu Sea seen from space',
    ],
    inline: { history: [4, 2], heritage: [5, 6] },
    peoples: [
      { name: 'Tausug', group: 'moro', description: 'The “people of the current,” the dominant group of Sulu and historically the ruling people of the sultanate, known for trade, seafaring and fine metal and textile work.', cite: ['majul', 'warren'] },
      { name: 'Sama', group: 'moro', description: 'Seafaring and fishing communities spread across Sulu’s smaller islands, speaking Sinama languages.', cite: ['warren'] },
      { name: 'Sama Dilaut (Bajau)', group: 'moro', description: 'Sea-oriented Sama who historically lived on boats and in stilt villages, moving between islands with the fishing seasons.', cite: ['warren'] },
      { name: 'Christian and Chinese-Filipino communities', group: 'settler', description: 'Small trading communities, mainly in Jolo, part of the town’s commercial life for generations.', cite: ['gowing'] },
    ],
    timeline: [
      { year: 'c. 1450s', event: 'Sharif ul-Hashim founds the Sultanate of Sulu.', cite: ['majul'] },
      { year: '1876', event: 'Spanish forces capture Jolo.', cite: ['majul'] },
      { year: '1899', event: 'The Bates Agreement between the United States and the sultan.', cite: ['gowing'] },
      { year: '1906', event: 'American forces kill hundreds of Tausug men, women and children at Bud Dajo.', cite: ['gowing', 'tan'] },
      { year: '1913', event: 'The battle of Bud Bagsak ends large-scale armed resistance.', cite: ['gowing'] },
      { year: '1915', event: 'The Carpenter Agreement ends the sultan’s temporal authority, keeping his religious role.', cite: ['gowing'] },
      { year: '2024', event: 'The Supreme Court rules that Sulu is not part of BARMM.', cite: ['sc-sulu'] },
    ],
    landmarks: [
      { name: 'Bud Dajo', description: 'A volcanic cone near Jolo, remembered as the site of the 1906 killings and now a protected landscape.', cite: ['gowing', 'denr-pa'] },
      { name: 'Jolo', description: 'The historic seat of the sultanate, with remnants of its Spanish-era walls and long-standing mosques.', cite: ['majul'] },
      { name: 'The Sulu Sea', description: 'The inner sea that tied the sultanate to Borneo, Palawan and Mindanao — the stage of the “Sulu Zone” trade.', cite: ['warren'] },
    ],
  },
};
