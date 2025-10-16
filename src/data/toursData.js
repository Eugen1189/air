export const hitTours = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070',
    title: 'Costa Smeralda d\'Italia',
    details: '8 giorni, 7 notti',
    price: '950',
    link: '#',
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=2076',
    title: 'Magia dei Fiordi Norvegesi',
    details: '10 giorni, 9 notti',
    price: '1450',
    link: '#',
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2070',
    title: 'Fioritura del Sakura in Giappone',
    details: '12 giorni, 11 notti',
    price: '2800',
    link: '#',
  },
  {
    id: 5,
    imageUrl: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=2070',
    title: 'Isole Greche da Sogno',
    details: '10 giorni, 9 notti',
    price: '1350',
    link: '#',
  },
  {
    id: 6,
    imageUrl: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2076',
    title: 'Misteri del Machu Picchu',
    details: '11 giorni, 10 notti',
    price: '2400',
    link: '#',
  },
  {
    id: 7,
    imageUrl: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?q=80&w=2070',
    title: 'Magia del Marocco',
    details: '9 giorni, 8 notti',
    price: '1100',
    link: '#',
  },
  {
    id: 8,
    imageUrl: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=2070',
    title: 'Avventura in Nuova Zelanda',
    details: '14 giorni, 13 notti',
    price: '3200',
    link: '#',
  },
  {
    id: 9,
    imageUrl: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070',
    title: 'Tesori della Thailandia',
    details: '10 giorni, 9 notti',
    price: '1650',
    link: '#',
  },
];

export const collections = [
  { 
    id: 'gastro', 
    link: '/collection/gastro', 
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964', 
    title: 'Tour Gastronomici',
    description: 'Immergiti nel mondo dei sapori autentici. Dalle strade animate dei mercati locali alle sale eleganti dei ristoranti stellati Michelin. Degusta vini pregiati, impara le ricette tradizionali dai maestri locali e scopri i segreti della cucina regionale in ogni angolo del mondo.' 
  },
  { 
    id: 'relax', 
    link: '/collection/relax', 
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070', 
    title: 'Viaggi per il Relax',
    description: 'Trova la pace interiore nelle migliori destinazioni benessere del mondo. Spa di lusso, resort sulle spiagge paradisiache, bagni termali naturali e centri yoga. Ricaricati con massaggi ayurvedici, meditazione al tramonto e trattamenti esclusivi in ambienti da sogno.'
  },
  { 
    id: 'active', 
    link: '/collection/active', 
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070', 
    title: 'Vacanze Attive',
    description: 'Per gli spiriti avventurosi che non stanno mai fermi. Trekking sulle vette delle Alpi, kayak tra i fiordi norvegesi, safari fotografici nella savana africana, immersioni nelle barriere coralline e rafting su fiumi impetuosi. L\'adrenalina e l\'emozione ti aspettano!'
  },
  { 
    id: 'family', 
    link: '/collection/family', 
    imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070', 
    title: 'Vacanze Familiari',
    description: 'Crea ricordi indimenticabili con tutta la famiglia. Parchi tematici entusiasmanti, spiagge sicure per bambini, hotel con animazione e club per ragazzi. Attività coinvolgenti per tutte le età: dai laboratori creativi alle escursioni educative nella natura.'
  },
];

// Full tour details for each tour
export const tourDetails = {
  1: {
    id: 1,
    title: 'Costa Smeralda d\'Italia',
    subtitle: '8 giorni di viaggio indimenticabile lungo la costa italiana',
    price: '950',
    duration: '8 giorni / 7 notti',
    groupSize: 'Fino a 12 persone',
    difficulty: 'Medio',
    meals: 'Colazione inclusa',
    description: 'Immergiti nell\'atmosfera di lusso e bellezza sulla Costa Amalfitana. Questo tour combina perfettamente relax in spiaggia, cucina raffinata ed esplorazione di antichi borghi.',
    included: [
      'Volo di andata e ritorno',
      'Soggiorno in hotel 4* (7 notti)',
      'Colazione quotidiana',
      'Transfer aeroporto-hotel',
      'Accompagnamento di guida in italiano'
    ],
    itinerary: [
      {
        day: 'Giorno 1',
        title: 'Arrivo a Napoli e primo incontro',
        content: 'Arrivo all\'aeroporto di Napoli, incontro con la nostra guida. Transfer in hotel situato nel cuore della città. Dopo un breve riposo - passeggiata serale nel centro storico, dove assaggeremo la vera pizza napoletana.'
      },
      {
        day: 'Giorno 2',
        title: 'Isola di Capri e Grotta Azzurra',
        content: 'Oggi partiremo con un motoscafo veloce per la leggendaria isola di Capri. Visiteremo la famosa Grotta Azzurra, saliremo con la funicolare ai Giardini di Augusto e godremo di panorami incredibili.'
      },
      {
        day: 'Giorno 3',
        title: 'Perle di Amalfi e Positano',
        content: 'Giornata dedicata ai borghi più pittoreschi della costa. Passeggeremo per le strette strade di Positano, visiteremo il maestoso duomo di Amalfi e assaggeremo il liquore locale "limoncello".'
      }
    ],
    fullDescription: [
      'Esplora i luoghi più belli della costa italiana, goditi il sole mediterraneo e assapora la cucina locale. Il nostro tour è progettato per offrirti la migliore esperienza, combinando comfort, avventura e relax. Ogni giorno sarà pieno di nuove scoperte e impressioni indimenticabili.',
      'Visiterai antichi borghi arroccati sulle scogliere, gusterai vini locali e piatti tradizionali, nuoterai nelle acque cristalline del Mar Tirreno. Il nostro team professionale si prenderà cura di tutti i dettagli affinché tu possa concentrarti solo sul goderti il viaggio.'
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070' },
      { src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2070' },
      { src: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?q=80&w=2070' },
      { src: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c?q=80&w=2070' }
    ]
  },
  2: {
    id: 2,
    title: 'Magia dei Fiordi Norvegesi',
    subtitle: '10 giorni nell\'incantevole natura della Norvegia',
    price: '1450',
    duration: '10 giorni / 9 notti',
    groupSize: 'Fino a 10 persone',
    difficulty: 'Medio',
    meals: 'Colazione e cena incluse',
    description: 'Scopri la maestosità dei fiordi norvegesi, naviga attraverso acque cristalline e ammira paesaggi mozzafiato che ti lasceranno senza fiato.',
    included: [
      'Volo di andata e ritorno',
      'Soggiorno in hotel 4* (9 notti)',
      'Colazione e cena quotidiane',
      'Crociera sui fiordi',
      'Guida professionale norvegese'
    ],
    itinerary: [
      {
        day: 'Giorno 1-2',
        title: 'Bergen - La Porta dei Fiordi',
        content: 'Arrivo a Bergen, esplorazione della città storica con il famoso mercato del pesce e il quartiere Bryggen, patrimonio UNESCO.'
      },
      {
        day: 'Giorno 3-5',
        title: 'Crociera sui Fiordi',
        content: 'Navigazione attraverso il Sognefjord, il più lungo e profondo fiordo della Norvegia. Visita ai villaggi pittoreschi e cascate spettacolari.'
      },
      {
        day: 'Giorno 6-8',
        title: 'Geirangerfjord e Trollstigen',
        content: 'Esplorazione del patrimonio UNESCO Geirangerfjord e percorso sulla famosa strada Trollstigen con i suoi tornanti panoramici.'
      }
    ],
    fullDescription: [
      'La Norvegia è famosa per i suoi paesaggi naturali unici. I fiordi profondi, le montagne maestose e i villaggi pittoreschi creano un\'atmosfera magica che non dimenticherai mai.',
      'Durante il tour navigherai sui fiordi più belli, visiterai cascate impressionanti e gusterai la cucina tradizionale norvegese. Ogni giorno porterà nuove avventure e panorami indimenticabili.'
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=2076' },
      { src: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=2070' },
      { src: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=2070' },
      { src: 'https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?q=80&w=2070' }
    ]
  },
  3: {
    id: 3,
    title: 'Fioritura del Sakura in Giappone',
    subtitle: '12 giorni nel paese del sol levante durante la fioritura dei ciliegi',
    price: '2800',
    duration: '12 giorni / 11 notti',
    groupSize: 'Fino a 15 persone',
    difficulty: 'Facile',
    meals: 'Colazione inclusa',
    description: 'Vivi la magia della fioritura dei ciliegi in Giappone, esplora templi antichi e immergiti nella cultura tradizionale giapponese.',
    included: [
      'Volo di andata e ritorno',
      'Soggiorno in hotel 4* (11 notti)',
      'Colazione quotidiana',
      'Pass JR per i treni',
      'Guida giapponese esperta'
    ],
    itinerary: [
      {
        day: 'Giorno 1-3',
        title: 'Tokyo - La Metropoli del Futuro',
        content: 'Esplorazione di Tokyo moderna e tradizionale: Shibuya, Asakusa, Meiji Shrine. Assaggio della cucina giapponese autentica.'
      },
      {
        day: 'Giorno 4-6',
        title: 'Kyoto - Cuore Culturale',
        content: 'Visita ai templi storici, giardini zen e quartiere geisha Gion. Partecipazione alla cerimonia del tè tradizionale.'
      },
      {
        day: 'Giorno 7-9',
        title: 'Monte Fuji e Hakone',
        content: 'Escursione nella regione del Monte Fuji, bagni termali onsen e ammirare i ciliegi in fiore con vista sul monte sacro.'
      }
    ],
    fullDescription: [
      'La fioritura dei ciliegi (Hanami) è uno degli eventi più belli del Giappone. Milioni di petali rosa creano un\'atmosfera magica in tutto il paese. Questo è il momento perfetto per visitare il Giappone e immergersi nella sua cultura unica.',
      'Visiterai antichi templi, gusterai sushi autentico, parteciperai alla cerimonia del tè e ammirerai la bellezza naturale del Monte Fuji. Ogni giorno sarà pieno di nuove esperienze e impressioni indimenticabili.'
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=2070' },
      { src: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2070' },
      { src: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2070' },
      { src: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2070' }
    ]
  },
  4: {
    id: 4,
    title: 'Safari in Kenya',
    subtitle: '9 giorni di avventura nella savana africana',
    price: '2200',
    duration: '9 giorni / 8 notti',
    groupSize: 'Fino a 8 persone',
    difficulty: 'Facile',
    meals: 'Pensione completa',
    description: 'Vivi un\'avventura indimenticabile nella savana africana, osserva i Big Five e goditi tramonti mozzafiato sulla savana.',
    included: [
      'Volo di andata e ritorno',
      'Soggiorno in lodge 4* (8 notti)',
      'Pensione completa',
      'Safari in jeep 4x4',
      'Ranger professionista'
    ],
    itinerary: [
      {
        day: 'Giorno 1-3',
        title: 'Parco Nazionale Masai Mara',
        content: 'Safari nel famoso parco Masai Mara, osservazione dei Big Five: leone, leopardo, elefante, bufalo e rinoceronte.'
      },
      {
        day: 'Giorno 4-6',
        title: 'Amboseli e Monte Kilimanjaro',
        content: 'Safari nel Parco Nazionale Amboseli con vista sul Kilimanjaro. Grandi branchi di elefanti e panorami incredibili.'
      },
      {
        day: 'Giorno 7-8',
        title: 'Lago Nakuru',
        content: 'Visita al Lago Nakuru, famoso per i fenicotteri rosa. Osservazione di rinoceronti e leopardi sugli alberi.'
      }
    ],
    fullDescription: [
      'Il Kenya è la destinazione definitiva per un vero safari africano. Qui potrai vedere animali selvaggi nel loro habitat naturale, godere di tramonti mozzafiato sulla savana e immergerti nella cultura delle tribù locali.',
      'I nostri safari sono condotti da ranger esperti che conoscono ogni angolo dei parchi nazionali. Alloggerai in lodge confortevoli e gusterai la cucina africana. Questa sarà un\'avventura che ricorderai per tutta la vita.'
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070' },
      { src: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071' },
      { src: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&w=2070' },
      { src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070' }
    ]
  },
  5: {
    id: 5,
    title: 'Isole Greche da Sogno',
    subtitle: '10 giorni alla scoperta delle perle del Mar Egeo',
    price: '1350',
    duration: '10 giorni / 9 notti',
    groupSize: 'Fino a 14 persone',
    difficulty: 'Facile',
    meals: 'Colazione inclusa',
    description: 'Naviga tra le isole greche più belle, dalle spiagge bianche di Mykonos ai tramonti mozzafiato di Santorini. Un viaggio tra storia antica, mare cristallino e ospitalità greca.',
    included: [
      'Volo di andata e ritorno',
      'Soggiorno in hotel 4* (9 notti)',
      'Colazione quotidiana',
      'Traghetti tra le isole',
      'Guida locale certificata'
    ],
    itinerary: [
      {
        day: 'Giorno 1-3',
        title: 'Atene - Culla della Civiltà',
        content: 'Esplorazione di Atene: Acropoli, Partenone, Museo Archeologico. Passeggiata nel quartiere Plaka e cena tradizionale in taverna con vista sull\'Acropoli illuminata.'
      },
      {
        day: 'Giorno 4-6',
        title: 'Santorini - L\'Isola Romantica',
        content: 'Traghetto per Santorini. Villaggi di Oia e Fira con case bianche e cupole blu. Degustazione vini vulcanici, spiagge di sabbia nera e tramonto più bello del mondo.'
      },
      {
        day: 'Giorno 7-9',
        title: 'Mykonos - Vita Notturna e Spiagge',
        content: 'Little Venice, mulini a vento iconici, spiagge Paradise e Super Paradise. Escursione all\'isola sacra di Delos, luogo di nascita di Apollo.'
      }
    ],
    fullDescription: [
      'Le isole greche offrono un mix perfetto di storia millenaria, spiagge da cartolina e cucina mediterranea autentica. Ogni isola ha il suo carattere unico: Santorini romantica, Mykonos vivace, Atene storica.',
      'Nuoterai in acque turchesi, assaggerai mousaka e souvlaki autentici, esplorerai templi antichi e ti perderai nei vicoli bianchi dei villaggi cicladici. La Grecia è magia allo stato puro.'
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=2070' },
      { src: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2070' },
      { src: 'https://images.unsplash.com/photo-1601581987809-a874a81309c9?q=80&w=2070' },
      { src: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070' }
    ]
  },
  6: {
    id: 6,
    title: 'Misteri del Machu Picchu',
    subtitle: '11 giorni nell\'impero Inca tra montagne e storia',
    price: '2400',
    duration: '11 giorni / 10 notti',
    groupSize: 'Fino a 12 persone',
    difficulty: 'Medio-Alto',
    meals: 'Colazione e cena incluse',
    description: 'Avventura sulle Ande peruviane alla scoperta dell\'antica civiltà Inca. Machu Picchu, Valle Sacra, Cusco e il Lago Titicaca in un viaggio che cambierà la tua vita.',
    included: [
      'Volo di andata e ritorno',
      'Soggiorno in hotel 4* (10 notti)',
      'Colazione e cena quotidiane',
      'Treno panoramico per Machu Picchu',
      'Guida archeologica esperta'
    ],
    itinerary: [
      {
        day: 'Giorno 1-3',
        title: 'Lima e Cusco',
        content: 'Arrivo a Lima, esplorazione del centro storico. Volo per Cusco (3400m). Acclimatazione all\'altitudine, visita Plaza de Armas e fortezza Sacsayhuamán.'
      },
      {
        day: 'Giorno 4-7',
        title: 'Valle Sacra e Machu Picchu',
        content: 'Mercati di Pisac, saline di Maras, terrazze di Moray. Treno per Aguas Calientes. All\'alba, visita guidata a Machu Picchu, una delle 7 meraviglie del mondo.'
      },
      {
        day: 'Giorno 8-10',
        title: 'Lago Titicaca',
        content: 'Puno e Lago Titicaca, il lago navigabile più alto del mondo. Isole galleggianti Uros, isola Taquile. Incontro con comunità locali e tradizioni ancestrali.'
      }
    ],
    fullDescription: [
      'Il Perù è una terra di contrasti: dalle Ande innevate alla foresta amazzonica, dalle antiche rovine Inca alle città coloniali. Machu Picchu è il culmine del viaggio, ma ogni giorno porta nuove scoperte.',
      'Assaggerai ceviche fresco, quinoa andina e pisco sour. Imparerai la storia degli Inca, ammirerai paesaggi mozzafiato e ti immergerai in una cultura millenaria ancora viva oggi.'
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2076' },
      { src: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2070' },
      { src: 'https://images.unsplash.com/photo-1531968455001-5c5272a41129?q=80&w=2070' },
      { src: 'https://images.unsplash.com/photo-1523879235359-d524e6f94e9e?q=80&w=2070' }
    ]
  },
  7: {
    id: 7,
    title: 'Magia del Marocco',
    subtitle: '9 giorni tra deserto, medine e kasbahs',
    price: '1100',
    duration: '9 giorni / 8 notti',
    groupSize: 'Fino a 16 persone',
    difficulty: 'Facile',
    meals: 'Colazione e cena incluse',
    description: 'Immergiti nei colori, profumi e sapori del Marocco. Dalle medine imperiali al deserto del Sahara, dalle montagne dell\'Atlante alle coste atlantiche.',
    included: [
      'Volo di andata e ritorno',
      'Soggiorno in riad e hotel 4* (8 notti)',
      'Colazione e cena quotidiane',
      'Notte nel deserto in campo tendato',
      'Guida locale berbera'
    ],
    itinerary: [
      {
        day: 'Giorno 1-3',
        title: 'Marrakech - La Città Rossa',
        content: 'Piazza Jemaa el-Fna con incantatori di serpenti, Souks colorati, Palazzo Bahia, Giardini Majorelle. Cena in terrazza con vista sui minareti illuminati.'
      },
      {
        day: 'Giorno 4-6',
        title: 'Deserto del Sahara',
        content: 'Attraversamento Atlante, valle delle rose, gola del Todra. Carovana di cammelli nel deserto di Erg Chebbi. Notte sotto le stelle in campo berbero con musica tradizionale.'
      },
      {
        day: 'Giorno 7-8',
        title: 'Fes - Capitale Spirituale',
        content: 'Medina di Fes, patrimonio UNESCO, la più grande area urbana pedonale del mondo. Concerie antiche, madrasa, università Al-Qarawiyyin (la più antica del mondo).'
      }
    ],
    fullDescription: [
      'Il Marocco è un caleidoscopio di esperienze: il caos affascinante dei souks, la pace del deserto, i profumi delle spezie, i colori dei tappeti berberi. Ogni città racconta una storia diversa.',
      'Assaggerai tajine speziato, couscous tradizionale, tè alla menta. Dormirai in riad storici e sotto le stelle del Sahara. Il Marocco ti conquisterà con la sua ospitalità e diversità.'
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?q=80&w=2070' },
      { src: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=2070' },
      { src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070' },
      { src: 'https://images.unsplash.com/photo-1508283820529-8e9d47e2bfb8?q=80&w=2070' }
    ]
  },
  8: {
    id: 8,
    title: 'Avventura in Nuova Zelanda',
    subtitle: '14 giorni nella terra del Signore degli Anelli',
    price: '3200',
    duration: '14 giorni / 13 notti',
    groupSize: 'Fino a 10 persone',
    difficulty: 'Medio',
    meals: 'Colazione inclusa',
    description: 'Esplora i paesaggi mozzafiato della Nuova Zelanda: dai fiordi glaciali alle spiagge dorate, dalle montagne alle foreste pluviali. Capitale mondiale degli sport estremi.',
    included: [
      'Volo di andata e ritorno',
      'Soggiorno in hotel 4* (13 notti)',
      'Colazione quotidiana',
      'Noleggio auto 4x4',
      'Crociera nei fiordi'
    ],
    itinerary: [
      {
        day: 'Giorno 1-5',
        title: 'Isola del Nord - Cultura Maori',
        content: 'Auckland, Rotorua con geyser e sorgenti termali, cultura Maori tradizionale. Hobbiton set del film. Waitomo con grotte di lucciole luminose.'
      },
      {
        day: 'Giorno 6-10',
        title: 'Isola del Sud - Alpi e Fiordi',
        content: 'Queenstown capitale dell\'avventura: bungee jumping, jet boat, parapendio. Monte Cook, lago Tekapo stelle più belle del mondo. Milford Sound, il fiordo più bello.'
      },
      {
        day: 'Giorno 11-13',
        title: 'Costa Occidentale',
        content: 'Franz Josef Glacier trekking, Pancake Rocks, foresta pluviale temperata. Abel Tasman National Park con kayak e spiagge dorate.'
      }
    ],
    fullDescription: [
      'La Nuova Zelanda è il paradiso per gli amanti della natura e dell\'avventura. Paesaggi così diversi che sembrano appartenere a pianeti diversi: fiordi glaciali, vulcani attivi, foreste ancestrali.',
      'Farai attività adrenaliniche, ammirerai cieli stellati patrimonio UNESCO, camminerai su ghiacciai, nuoterai con delfini. I neozelandesi sono tra le persone più accoglienti del mondo.'
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=2070' },
      { src: 'https://images.unsplash.com/photo-1469521669194-babb92d87921?q=80&w=2070' },
      { src: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070' },
      { src: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070' }
    ]
  },
  9: {
    id: 9,
    title: 'Tesori della Thailandia',
    subtitle: '10 giorni tra templi, spiagge e cultura',
    price: '1650',
    duration: '10 giorni / 9 notti',
    groupSize: 'Fino a 14 persone',
    difficulty: 'Facile',
    meals: 'Colazione inclusa',
    description: 'Dal caos affascinante di Bangkok alle spiagge paradisiache del sud, dalla cultura buddhista alle foreste del nord. La Thailandia è il paese del sorriso.',
    included: [
      'Volo di andata e ritorno',
      'Soggiorno in hotel 4* (9 notti)',
      'Colazione quotidiana',
      'Voli domestici',
      'Guida locale thailandese'
    ],
    itinerary: [
      {
        day: 'Giorno 1-3',
        title: 'Bangkok - Città degli Angeli',
        content: 'Grand Palace e Tempio del Buddha Smeraldo, Wat Pho con Buddha sdraiato, mercati galleggianti. Street food tour, massaggio thai tradizionale, rooftop bar con skyline illuminato.'
      },
      {
        day: 'Giorno 4-6',
        title: 'Chiang Mai - Rosa del Nord',
        content: 'Templi antichi, mercato notturno, corso di cucina thai. Visita santuario elefanti etico, trekking montagne, villaggio tribù Karen, rafting sul fiume.'
      },
      {
        day: 'Giorno 7-9',
        title: 'Isole del Sud - Paradiso Tropicale',
        content: 'Volo per Phuket o Krabi. Snorkeling nelle isole Phi Phi, kayak nella baia di Phang Nga, relax su spiagge di sabbia bianca. Cena di pesce fresco sulla spiaggia.'
      }
    ],
    fullDescription: [
      'La Thailandia offre un\'esperienza completa: la vivacità di Bangkok, la spiritualità dei templi, la bellezza delle spiagge tropicali, la gentilezza delle persone. È il paese perfetto per chi viaggia per la prima volta in Asia.',
      'Assaggerai pad thai autentico, curry speziati, mango sticky rice. Imparerai la cultura buddhista, farai massaggi tradizionali, nuoterai in acque cristalline tra pesci tropicali.'
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070' },
      { src: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=2070' },
      { src: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2070' },
      { src: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=2070' }
    ]
  }
};

export const itinerary = [
  {
    day: 'Giorno 1',
    title: 'Arrivo a Napoli e primo incontro',
    content: 'Arrivo all\'aeroporto di Napoli, incontro con la nostra guida. Transfer in hotel situato nel cuore della città. Dopo un breve riposo - passeggiata serale nel centro storico, dove assaggeremo la vera pizza napoletana.'
  },
  {
    day: 'Giorno 2',
    title: 'Isola di Capri e Grotta Azzurra',
    content: 'Oggi partiremo con un motoscafo veloce per la leggendaria isola di Capri. Visiteremo la famosa Grotta Azzurra, saliremo con la funicolare ai Giardini di Augusto e godremo di panorami incredibili.'
  },
  {
    day: 'Giorno 3',
    title: 'Perle di Amalfi e Positano',
    content: 'Giornata dedicata ai borghi più pittoreschi della costa. Passeggeremo per le strette strade di Positano, visiteremo il maestoso duomo di Amalfi e assaggeremo il liquore locale "limoncello".'
  },
];

