import type { RegionExtras } from '../types';

export const extrasC: Record<string, RegionExtras> = {
  caraga: {
    moreCaptions: [],
    inline: { history: [1, 6], heritage: [5, 3] },
    peoples: [
      { name: 'Manobo', group: 'lumad', description: 'The largest Lumad people of the Agusan River valley, including communities that live in floating houses in the Agusan Marsh.', cite: ['masque-ch2', 'ncip'] },
      { name: 'Mamanwa', group: 'lumad', description: 'A Negrito people of Agusan del Norte and Surigao del Norte, traditionally forest foragers.', cite: ['masque-ch2'] },
      { name: 'Higaonon and Banwaon', group: 'lumad', description: '“People of the living mountains” and upland neighbors of Agusan, linked to the Bukidnon highlands.', cite: ['masque-ch2'] },
      { name: 'Mandaya and Dibabawon', group: 'lumad', description: 'Peoples of the Surigao del Sur and Agusan del Sur borderlands with Davao.', cite: ['masque-ch2'] },
      { name: 'Butuanon and Surigaonon', group: 'settler', description: 'Visayan-speaking Indigenous Christians of Butuan and Surigao — counted in course materials as indigenous, not migrant.', cite: ['masque-ch2', 'rodil-qa'] },
      { name: 'Kalagan', group: 'moro', description: 'A Muslim people of the eastern Mindanao coast; the name Caraga is often traced to them.', cite: ['rodil-qa'] },
    ],
    timeline: [
      { year: '4th c. CE', event: 'The oldest Butuan balangay boat is built, according to radiocarbon dating.', cite: ['nm-heritage'] },
      { year: '1001', event: 'Butuan sends a tribute and trade mission to the Song court of China.', cite: ['scott'] },
      { year: '1970s', event: 'Balangay boats are excavated in Butuan.', cite: ['nm-heritage'] },
      { year: '1995', event: 'Region XIII (Caraga) is created.', cite: ['ra7901'] },
      { year: '1999', event: 'The Agusan Marsh is listed as a Wetland of International Importance (Ramsar site).', cite: ['ramsar-agusan'] },
    ],
    landmarks: [
      { name: 'Balangay Shrine, Butuan', description: 'Site-museum of the excavated balangay boats, National Cultural Treasures.', cite: ['nm-heritage'] },
      { name: 'Agusan Marsh Wildlife Sanctuary', description: 'One of the country’s largest freshwater wetlands, home to Manobo floating communities.', cite: ['ramsar-agusan'] },
      { name: 'Hinatuan Enchanted River', description: 'A deep, clear spring-fed river in Surigao del Sur surrounded by local legends.', cite: ['philatlas'] },
    ],
  },
};
