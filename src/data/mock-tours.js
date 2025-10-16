// src/data/mock-tours.js
// Extended tour data with filter fields
export const mockTours = [
  { 
    id: 1, 
    title: 'Costa Smeralda d\'Italia', 
    slug: 'costa-smeralda-italia', 
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070', 
    price: 950, 
    destination: 'Italia', 
    duration: 8, 
    type: 'Relax',
    difficulty: 'Facile'
  },
  { 
    id: 2, 
    title: 'Magia dei Fiordi Norvegesi', 
    slug: 'fiordi-norvegesi', 
    image: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=2076', 
    price: 1450, 
    destination: 'Norvegia', 
    duration: 10, 
    type: 'Attivo',
    difficulty: 'Medio'
  },
  { 
    id: 3, 
    title: 'Fioritura del Sakura in Giappone', 
    slug: 'sakura-giappone', 
    image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2070', 
    price: 2800, 
    destination: 'Giappone', 
    duration: 12, 
    type: 'Culturale',
    difficulty: 'Facile'
  },
  { 
    id: 4, 
    title: 'Safari in Kenya', 
    slug: 'safari-kenya', 
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070', 
    price: 2200, 
    destination: 'Kenya', 
    duration: 9, 
    type: 'Avventura',
    difficulty: 'Facile'
  },
  { 
    id: 5, 
    title: 'Isole Greche da Sogno', 
    slug: 'isole-greche', 
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=2070', 
    price: 1350, 
    destination: 'Grecia', 
    duration: 10, 
    type: 'Relax',
    difficulty: 'Facile'
  },
  { 
    id: 6, 
    title: 'Misteri del Machu Picchu', 
    slug: 'machu-picchu', 
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2076', 
    price: 2400, 
    destination: 'Perù', 
    duration: 11, 
    type: 'Avventura',
    difficulty: 'Difficile'
  },
  { 
    id: 7, 
    title: 'Magia del Marocco', 
    slug: 'marocco', 
    image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?q=80&w=2070', 
    price: 1100, 
    destination: 'Marocco', 
    duration: 9, 
    type: 'Culturale',
    difficulty: 'Facile'
  },
  { 
    id: 8, 
    title: 'Avventura in Nuova Zelanda', 
    slug: 'nuova-zelanda', 
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=2070', 
    price: 3200, 
    destination: 'Nuova Zelanda', 
    duration: 14, 
    type: 'Attivo',
    difficulty: 'Medio'
  },
  { 
    id: 9, 
    title: 'Tesori della Thailandia', 
    slug: 'thailandia', 
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070', 
    price: 1650, 
    destination: 'Thailandia', 
    duration: 10, 
    type: 'Relax',
    difficulty: 'Facile'
  },
];

// Filter options
export const filterOptions = {
  destinations: ['Tutti', 'Italia', 'Grecia', 'Giappone', 'Norvegia', 'Kenya', 'Perù', 'Marocco', 'Nuova Zelanda', 'Thailandia'],
  types: ['Tutti', 'Relax', 'Attivo', 'Culturale', 'Avventura'],
  durations: ['Tutti', '1-7 giorni', '8-10 giorni', '11-14 giorni'],
  difficulties: ['Tutti', 'Facile', 'Medio', 'Difficile'],
  priceRanges: ['Tutti', 'Meno di 1000€', '1000-2000€', 'Più di 2000€']
};

