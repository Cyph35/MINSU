import type { RegionExtras } from '../types';

export const extrasB: Record<string, RegionExtras> = {
  'tawi-tawi': {
    moreCaptions: [
      'Aerial view of Simunul Island, where the first mosque in the Philippines was built',
      'Eucheuma seaweed — seaweed farming is a major livelihood in Tawi-Tawi',
      'A Bajau lepa houseboat (archival photograph)',
      'Municipal hall of the Turtle Islands, Tawi-Tawi',
    ],
    inline: { history: [4, 6], heritage: [2, 5] },
    peoples: [
      { name: 'Sama', group: 'moro', description: 'The original seafaring people of the archipelago and the majority of Tawi-Tawi, speaking several Sinama languages across its islands.', cite: ['warren'] },
      { name: 'Sama Dilaut (Bajau)', group: 'moro', description: 'Sea-oriented Sama families whose lives centered on boats, reefs and stilt villages; many now live in coastal settlements such as Sitangkai and Bongao.', cite: ['warren', 'ncip'] },
      { name: 'Jama Mapun', group: 'moro', description: 'The people of Mapun (formerly Cagayan de Tawi-Tawi), an island group far to the west, with ties to Palawan and Sabah.', cite: ['warren'] },
      { name: 'Tausug', group: 'moro', description: 'Communities with family and trade links to Sulu, present especially in Bongao and the larger islands.', cite: ['majul'] },
      { name: 'Christian residents', group: 'settler', description: 'A small community, mostly in Bongao, including families from the Visayas and Zamboanga who work in government, schools and trade — a minority in a predominantly Muslim province.', cite: ['psa2020'] },
    ],
    timeline: [
      { year: '1380', event: 'According to tradition, Sheikh Karimul Makhdum builds the first mosque in the Philippines at Simunul.', cite: ['majul', 'nhcp'] },
      { year: '1700s–1800s', event: 'Tawi-Tawi’s islands are part of the Sulu Sultanate and the “Sulu Zone” trade.', cite: ['warren'] },
      { year: '1973', event: 'Tawi-Tawi becomes a separate province from Sulu.', cite: ['og-charters'] },
      { year: '2004', event: 'Sama mat weaver Haja Amina Appi receives the Gawad sa Manlilikha ng Bayan.', cite: ['ncca-gamaba'] },
      { year: '2019', event: 'Tawi-Tawi votes to join BARMM.', cite: ['ra11054'] },
    ],
    landmarks: [
      { name: 'Sheikh Karimul Makhdum Mosque, Simunul', description: 'Regarded as the oldest mosque site in the Philippines and a place of pilgrimage.', cite: ['nhcp', 'bangsamoro-tourism'] },
      { name: 'Bud Bongao', description: 'A sacred forested peak above Bongao, climbed by pilgrims and home to macaques.', cite: ['bangsamoro-tourism'] },
      { name: 'Turtle Islands', description: 'Islands where green sea turtles nest, protected as a wildlife sanctuary shared in spirit with neighboring Sabah.', cite: ['denr-pa'] },
    ],
  },
  davao: {
    moreCaptions: [
      'Street dancing at the Kadayawan Festival, Davao City',
      'Davao City at night',
      'Samal Island in the Davao Gulf',
      'Dagmay abaca textile of the Mandaya, Caraga, Davao Oriental',
    ],
    inline: { history: [3, 5], heritage: [7, 4] },
    peoples: [
      { name: 'Bagobo (Tagabawa, Klata, Obo)', group: 'lumad', description: 'Peoples of the slopes of Mount Apo, known for abaca weaving, beadwork and brass ornaments.', cite: ['ncip', 'ncca-gamaba'] },
      { name: 'Mandaya and Mansaka', group: 'lumad', description: 'Peoples of the eastern Davao uplands, famed for dagmay abaca cloth and silverwork.', cite: ['ncip'] },
      { name: 'Ata, Matigsalug and Manobo', group: 'lumad', description: 'Upland peoples of the Davao–Bukidnon frontier, many of them part of Davao City’s eleven tribes.', cite: ['ncip'] },
      { name: 'Kalagan, Maguindanaon, Tausug and Sama', group: 'moro', description: 'Muslim communities of the gulf coasts and city, part of Davao since before the Spanish period.', cite: ['abinales', 'majul'] },
      { name: 'Cebuano and other settlers', group: 'settler', description: 'Migrants from the Visayas and Luzon who became the region’s majority after World War II.', cite: ['abinales'] },
    ],
    timeline: [
      { year: '1848', event: 'José Oyanguren’s expedition founds Nueva Vergara (Davao) after defeating Datu Bago.', cite: ['abinales'] },
      { year: '1900s', event: 'American and Japanese abaca plantations expand around the Davao Gulf.', cite: ['abinales'] },
      { year: '1936', event: 'Davao City is chartered as a city.', cite: ['og-charters'] },
      { year: '1967', event: 'Davao province is divided into Davao del Norte, Davao del Sur and Davao Oriental.', cite: ['og-charters'] },
      { year: '1998', event: 'Bagobo-Tagabawa weaver Salinta Monon receives the Gawad sa Manlilikha ng Bayan.', cite: ['ncca-gamaba'] },
    ],
    landmarks: [
      { name: 'Mount Apo', description: 'The country’s highest peak, a natural park and sacred ancestral mountain of several Lumad peoples.', cite: ['denr-pa', 'ncip'] },
      { name: 'Island Garden City of Samal', description: 'Islands in the Davao Gulf whose name recalls the Sama people of the area.', cite: ['abinales'] },
      { name: 'Philippine Eagle Center, Malagos', description: 'A conservation center for the critically endangered Philippine eagle, whose forests overlap Lumad ancestral domains.', cite: ['pef'] },
    ],
  },
  'northern-mindanao': {
    moreCaptions: [
      'Mount Kitanglad, sacred mountain of the Talaandig and Bukidnon',
      'The volcanic coastline of Camiguin Island',
      'Iligan City Hall',
      'A bae (woman leader) at the Kaamulan Festival, Bukidnon',
    ],
    inline: { history: [2, 6], heritage: [7, 4] },
    peoples: [
      { name: 'Bukidnon', group: 'lumad', description: 'The “people of the mountains” of the central plateau, keepers of the datu system and the Kaamulan gathering.', cite: ['ncip'] },
      { name: 'Higaonon and Talaandig', group: 'lumad', description: 'Highland peoples of the Kitanglad and Pantaron ranges, known for their epic chants, music and Talaandig soil painting.', cite: ['ncip', 'rodil'] },
      { name: 'Matigsalug, Umayamnon, Tigwahanon and Manobo', group: 'lumad', description: 'Peoples of the southern and eastern Bukidnon uplands, together making up the “seven tribes” of Bukidnon.', cite: ['ncip'] },
      { name: 'Meranaw and Iranun', group: 'moro', description: 'Muslim communities of Lanao del Norte and Iligan, linked to the Lake Lanao homeland.', cite: ['majul'] },
      { name: 'Cebuano and Boholano settlers', group: 'settler', description: 'Migrants who came from the 1920s onward and now form the majority across the region.', cite: ['rodil'] },
    ],
    timeline: [
      { year: '1620s', event: 'Spanish Recollect missionaries arrive on the Cagayan coast.', cite: ['rodil'] },
      { year: '1917', event: 'Bukidnon becomes a separate province.', cite: ['og-charters'] },
      { year: '1926', event: 'The Philippine Packing Corporation (later Del Monte) begins pineapple plantations in Bukidnon.', cite: ['rodil'] },
      { year: '1950', event: 'Cagayan de Oro becomes a chartered city.', cite: ['og-charters'] },
      { year: '1974', event: 'The first Kaamulan gathering is held in Malaybalay.', cite: ['ncip'] },
    ],
    landmarks: [
      { name: 'Mount Kitanglad', description: 'A mountain range and natural park, sacred to the Talaandig, Higaonon and Bukidnon, who help guard it.', cite: ['denr-pa', 'ncip'] },
      { name: 'Maria Cristina Falls, Iligan', description: 'Twin waterfalls on the Agus River that power one of Mindanao’s main hydroelectric plants.', cite: ['napocor'] },
      { name: 'Camiguin Island', description: 'A small volcanic island province known for Hibok-Hibok volcano and its coastal communities.', cite: ['denr-pa'] },
    ],
  },
  soccsksargen: {
    moreCaptions: [
      'The General Santos Fish Port Complex, center of the tuna industry',
      'A waterfall in Lake Sebu, T’boli country',
      'A T’boli woman weaving t’nalak',
      'Lake Holon, a crater lake in T’boli ancestral land',
    ],
    inline: { history: [4, 2], heritage: [6, 7] },
    peoples: [
      { name: 'T’boli', group: 'lumad', description: 'People of the Lake Sebu highlands, famed for t’nalak weaving, brass casting and beadwork.', cite: ['ncca-gamaba', 'ncip'] },
      { name: 'B’laan', group: 'lumad', description: 'People of the mountains around Koronadal, Polomolok and Sarangani, known for mabal tabih ikat and fine beadwork.', cite: ['ncca-gamaba', 'ncip'] },
      { name: 'Maguindanaon, Kalagan and Sangil', group: 'moro', description: 'Muslim communities of the Allah Valley, Sultan Kudarat and the Sarangani coasts and islands.', cite: ['rodil'] },
      { name: 'Ilonggo, Cebuano and Ilocano settlers', group: 'settler', description: 'Descendants of the 1939 settlement and later migration, today the majority in the valleys and in General Santos.', cite: ['abinales'] },
    ],
    timeline: [
      { year: '1939', event: 'Settlers led by General Paulino Santos land at Dadiangas and the Koronadal Valley.', cite: ['abinales'] },
      { year: '1966', event: 'South Cotabato becomes a separate province.', cite: ['og-charters'] },
      { year: '1968', event: 'General Santos becomes a chartered city.', cite: ['abinales'] },
      { year: '1992', event: 'Sarangani province is created from South Cotabato.', cite: ['og-charters'] },
      { year: '1998', event: 'T’boli weaver Lang Dulay receives the Gawad sa Manlilikha ng Bayan.', cite: ['ncca-gamaba'] },
      { year: '2016', event: 'B’laan weaver Yabing Masalon Dulo receives the Gawad sa Manlilikha ng Bayan.', cite: ['ncca-gamaba'] },
    ],
    landmarks: [
      { name: 'Lake Sebu', description: 'A highland lake and T’boli homeland, with the Seven Falls and weaving centers nearby.', cite: ['ncip'] },
      { name: 'Lake Holon', description: 'A crater lake of Mount Melibengoy, managed with T’boli community guides.', cite: ['ncip'] },
      { name: 'Sarangani Bay Protected Seascape', description: 'A protected marine area shared by fishing communities of General Santos and Sarangani.', cite: ['denr-pa'] },
    ],
  },
  palawan: {
    moreCaptions: [
      'Kayangan Lake, Coron Island, within Tagbanwa ancestral domain',
      'El Nido Bay, northern Palawan',
      'Puerto Princesa City Baywalk',
      'Iwahig Prison and Penal Farm, established under American rule',
    ],
    inline: { history: [0, 7], heritage: [4, 1] },
    peoples: [
      { name: 'Pala’wan', group: 'lumad', description: 'Upland people of southern Palawan, keepers of long sung epics and music on the kusyapi and bamboo instruments.', cite: ['ncca-gamaba', 'ncip'] },
      { name: 'Tagbanwa', group: 'lumad', description: 'People of central and northern Palawan and the Calamian islands, including the guardians of Coron Island’s sacred lakes; they have their own Indigenous script.', cite: ['ncip'] },
      { name: 'Batak', group: 'lumad', description: 'A small forest people of central Palawan whose population has declined sharply.', cite: ['eder'] },
      { name: 'Molbog, Palawani, Jama Mapun and Tausug', group: 'moro', description: 'Muslim communities of southern Palawan and Balabac, historically tied to Sulu and Borneo.', cite: ['majul', 'warren'] },
      { name: 'Cuyonon, Agutaynen and migrant settlers', group: 'settler', description: 'Island lowlanders of the Cuyo and Agutaya islands, joined by settlers from across the country.', cite: ['eder'] },
    ],
    timeline: [
      { year: '1962', event: 'Archaeologist Robert Fox begins excavations at the Tabon Caves.', cite: ['unesco-tabon'] },
      { year: '1872', event: 'Spain founds Puerto Princesa.', cite: ['gowing'] },
      { year: '1904', event: 'The Iwahig Penal Colony is established.', cite: ['eder'] },
      { year: '1990', event: 'Palawan is declared a UNESCO Man and the Biosphere Reserve.', cite: ['unesco-ppsrnp'] },
      { year: '1993', event: 'Tubbataha Reefs is inscribed as a World Heritage Site.', cite: ['unesco-tubbataha'] },
      { year: '1999', event: 'The Puerto-Princesa Subterranean River is inscribed as a World Heritage Site.', cite: ['unesco-ppsrnp'] },
    ],
    landmarks: [
      { name: 'Tabon Caves, Quezon', description: 'A cave complex with some of the oldest human remains in the Philippines, managed by the National Museum.', cite: ['unesco-tabon', 'nm-heritage'] },
      { name: 'Puerto-Princesa Subterranean River', description: 'An underground river flowing through limestone caves directly to the sea.', cite: ['unesco-ppsrnp'] },
      { name: 'Tubbataha Reefs', description: 'Remote coral atolls in the Sulu Sea, protected as a marine park.', cite: ['unesco-tubbataha'] },
    ],
  },
};
