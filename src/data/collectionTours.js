// Дані рекомендованих турів для кожної колекції
export const collectionTours = {
  gastro: [
    {
      id: 'gastro-1',
      slug: 'tour-gastronomico-bologna',
      imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
      title: 'Tour Gastronomico di Bologna',
      subtitle: '5 giorni di sapori autentici emiliani',
      details: '5 giorni, 4 notti',
      price: '850',
      link: '/tour/gastro-1',
      description: 'Scopri i segreti della cucina emiliana con corsi di pasta fresca e degustazioni nei mercati storici.',
      duration: '5 giorni / 4 notti',
      groupSize: 'Fino a 8 persone',
      difficulty: 'Facile',
      meals: 'Colazione e pranzi inclusi',
      included: [
        'Volo di andata e ritorno',
        'Soggiorno in hotel 4* (4 notti)',
        'Colazione e pranzi quotidiani',
        'Corso di pasta fresca',
        'Visita ai mercati storici',
        'Degustazioni di vini locali',
        'Accompagnamento di guida gastronomica'
      ],
      fullDescription: [
        'Immergiti nella tradizione culinaria emiliana con questo tour gastronomico esclusivo. Bologna, conosciuta come "La Grassa", ti accoglierà con i suoi sapori autentici e le sue tradizioni secolari.',
        'Visiterai i mercati storici come il Mercato di Mezzo, dove imparerai a riconoscere i migliori ingredienti locali. Parteciparai a un corso di pasta fresca con le sfogline locali, imparando i segreti dei tortellini e delle tagliatelle al ragù.',
        'Degusterai i vini pregiati della regione accompagnati da formaggi e salumi locali. Ogni pasto sarà un\'esperienza unica, dai ristoranti tradizionali alle trattorie di famiglia.'
      ],
      itinerary: [
        {
          day: 'Giorno 1',
          title: 'Arrivo a Bologna',
          description: 'Arrivo all\'aeroporto di Bologna, transfer in hotel. Prima cena di benvenuto in un ristorante tradizionale con degustazione di specialità locali.'
        },
        {
          day: 'Giorno 2',
          title: 'Mercati e Corso di Pasta',
          description: 'Visita al Mercato di Mezzo per conoscere i prodotti locali. Corso di pasta fresca con le sfogline. Pranzo con la pasta preparata insieme.'
        },
        {
          day: 'Giorno 3',
          title: 'Degustazioni e Vini',
          description: 'Visita a una cantina locale per degustazione di vini pregiati. Pranzo in trattoria tradizionale. Pomeriggio libero per esplorare la città.'
        },
        {
          day: 'Giorno 4',
          title: 'Cucina Regionale',
          description: 'Corso di cucina regionale con chef locale. Preparazione di piatti tipici emiliani. Cena finale con tutti i piatti preparati.'
        },
        {
          day: 'Giorno 5',
          title: 'Partenza',
          description: 'Colazione in hotel e transfer all\'aeroporto per il rientro.'
        }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
        'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
        'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000'
      ]
    },
    {
      id: 'gastro-2',
      slug: 'pintxos-tour-san-sebastian',
      imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
      title: 'Pintxos Tour a San Sebastián',
      subtitle: '4 giorni nella capitale mondiale dei pintxos',
      details: '4 giorni, 3 notti',
      price: '1200',
      link: '/tour/gastro-2',
      description: 'Esplora la capitale mondiale dei pintxos con visite ai ristoranti stellati Michelin.',
      duration: '4 giorni / 3 notti',
      groupSize: 'Fino a 6 persone',
      difficulty: 'Facile',
      meals: 'Tutti i pasti inclusi',
      included: [
        'Volo di andata e ritorno',
        'Soggiorno in hotel 4* (3 notti)',
        'Tutti i pasti inclusi',
        'Tour dei pintxos nella Parte Vieja',
        'Visita ai ristoranti stellati',
        'Degustazioni di vini baschi',
        'Accompagnamento di guida gastronomica'
      ],
      fullDescription: [
        'San Sebastián è riconosciuta come la capitale mondiale dei pintxos e vanta la più alta concentrazione di stelle Michelin per metro quadrato. Questo tour ti porterà alla scoperta di una cultura gastronomica unica.',
        'Esplorerai la Parte Vieja con i suoi bar di pintxos storici, dove ogni locale ha le sue specialità. Visiterai ristoranti stellati come Arzak e Mugaritz, dove l\'innovazione incontra la tradizione.',
        'Degusterai i vini baschi accompagnati da pintxos creativi e piatti tradizionali. Ogni pasto sarà un\'esperienza culinaria indimenticabile.'
      ],
      itinerary: [
        {
          day: 'Giorno 1',
          title: 'Arrivo a San Sebastián',
          description: 'Arrivo all\'aeroporto, transfer in hotel. Prima esplorazione della Parte Vieja con tour dei pintxos di benvenuto.'
        },
        {
          day: 'Giorno 2',
          title: 'Tour dei Pintxos',
          description: 'Giornata dedicata alla scoperta dei migliori bar di pintxos. Pranzo in ristorante tradizionale e cena in locale stellato.'
        },
        {
          day: 'Giorno 3',
          title: 'Ristoranti Stellati',
          description: 'Visita ai ristoranti stellati Michelin. Pranzo in Arzak e cena in Mugaritz per un\'esperienza gastronomica unica.'
        },
        {
          day: 'Giorno 4',
          title: 'Partenza',
          description: 'Colazione in hotel e transfer all\'aeroporto per il rientro.'
        }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
        'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
        'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000'
      ]
    },
    {
      id: 'gastro-3',
      slug: 'gastronomia-lione',
      imageUrl: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
      title: 'Gastronomia di Lione',
      details: '6 giorni, 5 notti',
      price: '1100',
      link: '/tour/gastro-lyon',
      description: 'Immergiti nella tradizione culinaria francese nei famosi bouchons di Lione.'
    }
  ],
  relax: [
    {
      id: 'relax-1',
      slug: 'spa-retreat-bali',
      imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      title: 'Spa Retreat a Bali',
      subtitle: '8 giorni di benessere spirituale',
      details: '8 giorni, 7 notti',
      price: '1800',
      link: '/tour/relax-bali',
      description: 'Rilassati nei resort spa di lusso con yoga quotidiano e massaggi balinesi tradizionali.',
      duration: '8 giorni / 7 notti',
      groupSize: 'Fino a 8 persone',
      difficulty: 'Facile',
      meals: 'Pensione completa',
      included: [
        'Volo di andata e ritorno',
        'Resort spa 5* (7 notti)',
        'Pensione completa',
        'Yoga quotidiano',
        'Massaggi balinesi inclusi',
        'Cerimonie di purificazione',
        'Transfer privati'
      ],
      fullDescription: [
        'Bali è l\'isola degli dei, dove la spiritualità incontra il benessere. Un\'esperienza di relax totale in resort spa di lusso immersi nella natura rigogliosa.',
        'Ogni giorno inizierà con yoga al tramonto, seguito da massaggi balinesi tradizionali e trattamenti spa. Visiterai templi antichi e parteciperai a cerimonie di purificazione.',
        'Le risaie terrazzate, le spiagge tranquille e l\'atmosfera spirituale di Ubud creeranno un\'esperienza di benessere indimenticabile.'
      ],
      itinerary: [
        {
          day: 'Giorno 1',
          title: 'Arrivo a Bali',
          description: 'Arrivo all\'aeroporto di Denpasar, transfer in resort spa a Ubud. Benvenuto con cerimonia di purificazione e massaggio di benvenuto.'
        },
        {
          day: 'Giorno 2-3',
          title: 'Yoga e Benessere',
          description: 'Yoga quotidiano al tramonto, massaggi balinesi, trattamenti spa e relax nelle risaie terrazzate.'
        },
        {
          day: 'Giorno 4-5',
          title: 'Spiritualità e Natura',
          description: 'Visita ai templi antichi, cerimonie di purificazione, meditazione guidata e trekking nelle risaie.'
        },
        {
          day: 'Giorno 6-7',
          title: 'Relax Finale',
          description: 'Ultimi trattamenti spa, yoga finale e relax sulla spiaggia tranquilla di Sanur.'
        },
        {
          day: 'Giorno 8',
          title: 'Partenza',
          description: 'Colazione in resort e transfer all\'aeroporto per il rientro.'
        }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
        'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
        'https://images.unsplash.com/photo-1504870712357-65ea720d6078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
      ]
    },
    {
      id: 'relax-2',
      imageUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
      title: 'Terme di Saturnia',
      details: '3 giorni, 2 notti',
      price: '650',
      link: '/tour/relax-saturnia',
      description: 'Sorgenti termali naturali nella campagna toscana con degustazioni di vino.'
    },
    {
      id: 'relax-3',
      imageUrl: 'https://images.unsplash.com/photo-1504870712357-65ea720d6078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
      title: 'Blue Lagoon Experience',
      details: '5 giorni, 4 notti',
      price: '2200',
      link: '/tour/relax-blue-lagoon',
      description: 'Spa geotermica in Islanda con vista sull\'aurora boreale.'
    }
  ],
  active: [
    {
      id: 'active-1',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
      title: 'Trekking nelle Dolomiti',
      details: '7 giorni, 6 notti',
      price: '1400',
      link: '/tour/active-dolomites',
      description: 'Via ferrate e trekking di alta quota nel patrimonio UNESCO delle Dolomiti.'
    },
    {
      id: 'active-2',
      imageUrl: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
      title: 'Sport Estremi a Queenstown',
      details: '10 giorni, 9 notti',
      price: '3200',
      link: '/tour/active-queenstown',
      description: 'Bungee jumping, parapendio e rafting nella capitale mondiale degli sport estremi.'
    },
    {
      id: 'active-3',
      imageUrl: 'https://images.unsplash.com/photo-1520769945061-0a448c463865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
      title: 'Avventura in Islanda',
      details: '8 giorni, 7 notti',
      price: '2800',
      link: '/tour/active-iceland',
      description: 'Trekking sui ghiacciai e immersioni tra le placche tettoniche.'
    }
  ],
  family: [
    {
      id: 'family-1',
      slug: 'parchi-tematici-orlando',
      imageUrl: 'https://images.unsplash.com/photo-1607969104459-f10fbd9a3dde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      title: 'Parchi Tematici di Orlando',
      subtitle: '10 giorni di magia per tutta la famiglia',
      details: '10 giorni, 9 notti',
      price: '2500',
      link: '/tour/family-orlando',
      description: 'Walt Disney World, Universal Studios e SeaWorld per tutta la famiglia.',
      duration: '10 giorni / 9 notti',
      groupSize: 'Fino a 6 persone',
      difficulty: 'Facile',
      meals: 'Colazione inclusa',
      included: [
        'Volo di andata e ritorno',
        'Hotel 4* vicino ai parchi (9 notti)',
        'Colazione quotidiana',
        'Biglietti per tutti i parchi',
        'Transfer aeroporto-hotel',
        'Accompagnamento di guida italiana'
      ],
      fullDescription: [
        'Orlando è la capitale mondiale dei parchi tematici, dove la magia diventa realtà per grandi e piccini. Un viaggio indimenticabile tra i parchi più famosi del mondo.',
        'Visiterai Walt Disney World con i suoi 4 parchi tematici, Universal Studios con le attrazioni dei film, SeaWorld con gli spettacoli acquatici e molto altro.',
        'Ogni giorno sarà pieno di avventure, incontri con i personaggi preferiti e attrazioni emozionanti per tutta la famiglia.'
      ],
      itinerary: [
        {
          day: 'Giorno 1',
          title: 'Arrivo a Orlando',
          description: 'Arrivo all\'aeroporto di Orlando, transfer in hotel. Prima serata libera per esplorare la zona.'
        },
        {
          day: 'Giorno 2-3',
          title: 'Walt Disney World',
          description: 'Magic Kingdom e Epcot: incontri con i personaggi Disney, attrazioni iconiche e spettacoli mozzafiato.'
        },
        {
          day: 'Giorno 4-5',
          title: 'Universal Studios',
          description: 'Universal Studios e Islands of Adventure: Harry Potter, Jurassic Park e le attrazioni più adrenaliniche.'
        },
        {
          day: 'Giorno 6-7',
          title: 'SeaWorld e Discovery Cove',
          description: 'Spettacoli con delfini e orche, Discovery Cove per nuotare con i delfini e relax nelle spiagge artificiali.'
        },
        {
          day: 'Giorno 8-9',
          title: 'Altri Parchi',
          description: 'Legoland, Busch Gardens e shopping nei centri commerciali più grandi del mondo.'
        },
        {
          day: 'Giorno 10',
          title: 'Partenza',
          description: 'Ultimo shopping e transfer all\'aeroporto per il rientro.'
        }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1607969104459-f10fbd9a3dde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
        'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
      ]
    },
    {
      id: 'family-2',
      imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
      title: 'Costa del Sol Family',
      details: '7 giorni, 6 notti',
      price: '1200',
      link: '/tour/family-costa-sol',
      description: 'Spiagge sicure, parchi acquatici e resort family-friendly in Spagna.'
    },
    {
      id: 'family-3',
      imageUrl: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
      title: 'Copenaghen per Famiglie',
      details: '5 giorni, 4 notti',
      price: '1500',
      link: '/tour/family-copenhagen',
      description: 'Tivoli Gardens, musei interattivi e città sicura per bambini.'
    }
  ],
  
  // --- ДОДАЄМО ДАНІ ДЛЯ НОВИХ КОЛЕКЦІЙ ---
  exotic: [
    {
      id: 'exotic-1',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
      title: 'Maldive Paradise',
      subtitle: '7 giorni in paradiso tropicale',
      details: '7 giorni, 6 notti',
      price: '2800',
      link: '/tour/exotic-maldives',
      description: 'Villa sull\'acqua, snorkeling con mante e relax totale.',
      duration: '7 giorni / 6 notti',
      groupSize: 'Fino a 4 persone',
      difficulty: 'Facile',
      meals: 'Pensione completa',
      included: [
        'Volo di andata e ritorno',
        'Villa sull\'acqua (6 notti)',
        'Pensione completa',
        'Snorkeling equipment',
        'Transfer in idrovolante',
        'Spa treatments inclusi'
      ],
      fullDescription: [
        'Le Maldive sono il paradiso terrestre per eccellenza. Acque cristalline, spiagge di sabbia bianca e villaggi sull\'acqua che sembrano sospesi nel tempo.',
        'Alloggerai in una villa di lusso sull\'acqua, con accesso diretto al reef. Ogni giorno potrai fare snorkeling tra pesci tropicali, mante e tartarughe marine.',
        'Il resort offre spa di lusso, ristoranti gourmet e attività acquatiche. I tramonti sono spettacolari e le notti stellate indimenticabili.'
      ],
      itinerary: [
        {
          day: 'Giorno 1',
          title: 'Arrivo alle Maldive',
          description: 'Arrivo all\'aeroporto di Malé, transfer in idrovolante al resort. Check-in nella villa sull\'acqua e primo snorkeling.'
        },
        {
          day: 'Giorno 2-3',
          title: 'Relax e Snorkeling',
          description: 'Giornate di relax sulla spiaggia privata, snorkeling nel reef, massaggi spa e cene romantiche al tramonto.'
        },
        {
          day: 'Giorno 4-5',
          title: 'Escursioni Marine',
          description: 'Gita in barca per avvistare delfini, snorkeling con mante, pesca tradizionale e cena di pesce fresco.'
        },
        {
          day: 'Giorno 6-7',
          title: 'Ultimi Giorni',
          description: 'Ultimo snorkeling, relax finale e partenza con idrovolante per Malé.'
        }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000'
      ]
    },
    {
      id: 'exotic-2',
      imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
      title: 'Hawaii Dream',
      subtitle: '10 giorni nelle isole del Pacifico',
      details: '10 giorni, 9 notti',
      price: '3200',
      link: '/tour/exotic-hawaii',
      description: 'Oahu, Maui e Big Island con vulcani, spiagge e cultura polinesiana.',
      duration: '10 giorni / 9 notti',
      groupSize: 'Fino a 8 persone',
      difficulty: 'Facile',
      meals: 'Colazione inclusa',
      included: [
        'Volo di andata e ritorno',
        'Hotel 4* su 3 isole (9 notti)',
        'Colazione quotidiana',
        'Transfer tra le isole',
        'Tour guidati delle isole',
        'Attività acquatiche incluse',
        'Lei making e cena luau'
      ],
      fullDescription: [
        'Le Hawaii sono un paradiso tropicale unico al mondo, dove la cultura polinesiana incontra la natura vulcanica. Questo tour ti porterà alla scoperta delle tre isole principali: Oahu, Maui e Big Island.',
        'Su Oahu visiterai Pearl Harbor e le spiagge di Waikiki. Su Maui ammirerai l\'alba dall\'Haleakala e farai whale watching. Su Big Island esplorerai i vulcani attivi e le spiagge di sabbia nera.',
        'Ogni isola ha la sua personalità unica: Oahu è vivace e cosmopolita, Maui è romantica e naturale, Big Island è selvaggia e vulcanica. Un\'esperienza indimenticabile nel cuore del Pacifico.'
      ],
      itinerary: [
        {
          day: 'Giorno 1-3',
          title: 'Oahu - L\'Isola del Cuore',
          description: 'Arrivo a Honolulu, visita Pearl Harbor, tour di Waikiki e Diamond Head. Snorkeling a Hanauma Bay e cena luau tradizionale.'
        },
        {
          day: 'Giorno 4-6',
          title: 'Maui - L\'Isola della Valle',
          description: 'Volo a Maui, alba sull\'Haleakala, Road to Hana, whale watching e relax sulle spiagge di Kaanapali.'
        },
        {
          day: 'Giorno 7-9',
          title: 'Big Island - L\'Isola dei Vulcani',
          description: 'Volo a Big Island, Hawaii Volcanoes National Park, spiagge di sabbia nera, snorkeling con mante e tour del caffè Kona.'
        },
        {
          day: 'Giorno 10',
          title: 'Partenza',
          description: 'Ultimo relax e volo di rientro da Kona.'
        }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000'
      ]
    },
    {
      id: 'exotic-3',
      imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
      title: 'Seychelles Luxury',
      subtitle: '8 giorni nell\'arcipelago paradisiaco',
      details: '8 giorni, 7 notti',
      price: '3500',
      link: '/tour/exotic-seychelles',
      description: 'Isole granitiche, spiagge da cartolina e resort di lusso.',
      duration: '8 giorni / 7 notti',
      groupSize: 'Fino a 6 persone',
      difficulty: 'Facile',
      meals: 'Pensione completa',
      included: [
        'Volo di andata e ritorno',
        'Resort 5* su 2 isole (7 notti)',
        'Pensione completa',
        'Transfer in elicottero tra isole',
        'Spa treatments inclusi',
        'Attività acquatiche illimitate',
        'Escursioni private alle isole'
      ],
      fullDescription: [
        'Le Seychelles sono l\'ultimo paradiso terrestre, con le loro isole granitiche uniche al mondo e spiagge da cartolina. Un arcipelago di 115 isole nell\'Oceano Indiano, dove la natura incontaminata incontra il lusso più raffinato.',
        'Alloggerai in resort di lusso su Mahé e Praslin, le due isole principali. Le spiagge di Anse Lazio e Anse Source d\'Argent sono considerate tra le più belle al mondo.',
        'Farai snorkeling tra le tartarughe marine, visiterai la Vallée de Mai (patrimonio UNESCO), esplorerai le isole deserte e ti rilasserai in spa di lusso con vista sull\'oceano.'
      ],
      itinerary: [
        {
          day: 'Giorno 1-3',
          title: 'Mahé - L\'Isola Principale',
          description: 'Arrivo a Mahé, check-in in resort 5*, esplorazione di Victoria, spiagge di Beau Vallon e Morne Seychellois National Park.'
        },
        {
          day: 'Giorno 4-5',
          title: 'Praslin - L\'Isola delle Palme',
          description: 'Transfer in elicottero a Praslin, Vallée de Mai (patrimonio UNESCO), spiagge di Anse Lazio e Anse Georgette.'
        },
        {
          day: 'Giorno 6-7',
          title: 'La Digue - L\'Isola del Relax',
          description: 'Gita giornaliera a La Digue, spiaggia di Anse Source d\'Argent, tour in bicicletta e snorkeling con tartarughe.'
        },
        {
          day: 'Giorno 8',
          title: 'Partenza',
          description: 'Ultimo relax e volo di rientro da Mahé.'
        }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000'
      ]
    }
  ],
  
  cultural: [
    {
      id: 'cultural-1',
      imageUrl: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      title: 'Roma Antica e Rinascimento',
      subtitle: '6 giorni nella Città Eterna',
      details: '6 giorni, 5 notti',
      price: '1200',
      link: '/tour/cultural-rome',
      description: 'Colosseo, Vaticano, Fori Imperiali e capolavori rinascimentali.',
      duration: '6 giorni / 5 notti',
      groupSize: 'Fino a 12 persone',
      difficulty: 'Facile',
      meals: 'Colazione inclusa',
      included: [
        'Volo di andata e ritorno',
        'Hotel 4* centro storico (5 notti)',
        'Colazione quotidiana',
        'Guida archeologica esperta',
        'Biglietti musei inclusi',
        'Tour privati Colosseo e Vaticano'
      ],
      fullDescription: [
        'Roma è un museo a cielo aperto, dove ogni pietra racconta una storia millenaria. Dalla Roma imperiale al Rinascimento, dalla Roma barocca a quella moderna.',
        'Visiterai il Colosseo e i Fori Imperiali con una guida archeologica, esplorerai i Musei Vaticani e la Cappella Sistina, ammirerai i capolavori di Michelangelo e Raffaello.',
        'Passeggerai per Trastevere, assaggerai la vera cucina romana, visiterai le catacombe e i sotterranei della città. Ogni giorno sarà un viaggio nel tempo.'
      ],
      itinerary: [
        {
          day: 'Giorno 1',
          title: 'Arrivo a Roma',
          description: 'Arrivo all\'aeroporto, transfer in hotel. Prima passeggiata nel centro storico: Piazza Navona, Pantheon e Fontana di Trevi.'
        },
        {
          day: 'Giorno 2',
          title: 'Roma Imperiale',
          description: 'Colosseo, Foro Romano e Palatino con guida archeologica. Pausa pranzo in trattoria tradizionale.'
        },
        {
          day: 'Giorno 3',
          title: 'Vaticano e Rinascimento',
          description: 'Musei Vaticani, Cappella Sistina e Basilica di San Pietro. Pomeriggio libero per shopping.'
        },
        {
          day: 'Giorno 4',
          title: 'Roma Barocca',
          description: 'Piazza di Spagna, Villa Borghese, Trastevere e Ghetto ebraico. Cena tipica romana.'
        },
        {
          day: 'Giorno 5',
          title: 'Catacombe e Sotterranei',
          description: 'Catacombe di San Callisto, Basilica di San Clemente e sotterranei. Ultima serata a Roma.'
        },
        {
          day: 'Giorno 6',
          title: 'Partenza',
          description: 'Colazione in hotel e transfer all\'aeroporto.'
        }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
        'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
        'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000'
      ]
    },
    {
      id: 'cultural-2',
      imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
      title: 'Parigi Artistica',
      subtitle: '7 giorni nella capitale dell\'arte',
      details: '7 giorni, 6 notti',
      price: '1800',
      link: '/tour/cultural-paris',
      description: 'Louvre, Orsay, Montmartre e quartieri artistici di Parigi.',
      duration: '7 giorni / 6 notti',
      groupSize: 'Fino a 10 persone',
      difficulty: 'Facile',
      meals: 'Colazione inclusa',
      included: [
        'Volo di andata e ritorno',
        'Hotel 4* centro storico (6 notti)',
        'Colazione quotidiana',
        'Guida d\'arte esperta',
        'Biglietti musei inclusi',
        'Tour privati dei musei',
        'Crociera sulla Senna'
      ],
      fullDescription: [
        'Parigi è la capitale mondiale dell\'arte, dove ogni angolo racconta una storia artistica. Dal Louvre al Musée d\'Orsay, da Montmartre al Marais, un viaggio attraverso i secoli dell\'arte francese.',
        'Visiterai i capolavori del Louvre, ammirerai l\'impressionismo all\'Orsay, esplorerai gli atelier di Montmartre e scoprirai i quartieri artistici del Marais e Saint-Germain-des-Prés.',
        'Ogni giorno sarà dedicato a un periodo artistico diverso: dal Rinascimento al Barocco, dall\'Impressionismo all\'Arte Moderna. Un\'esperienza culturale indimenticabile nella Ville Lumière.'
      ],
      itinerary: [
        {
          day: 'Giorno 1',
          title: 'Arrivo a Parigi',
          description: 'Arrivo all\'aeroporto, transfer in hotel. Prima passeggiata lungo la Senna e cena di benvenuto in brasserie tradizionale.'
        },
        {
          day: 'Giorno 2',
          title: 'Il Louvre e l\'Arte Classica',
          description: 'Visita completa del Louvre con guida d\'arte, focus su Mona Lisa e Venere di Milo. Pomeriggio libero per esplorare il Jardin des Tuileries.'
        },
        {
          day: 'Giorno 3',
          title: 'Impressionismo all\'Orsay',
          description: 'Musée d\'Orsay con capolavori di Monet, Van Gogh e Renoir. Passeggiata nel Quartiere Latino e visita della Sorbona.'
        },
        {
          day: 'Giorno 4',
          title: 'Montmartre e l\'Arte Moderna',
          description: 'Tour di Montmartre, Sacré-Cœur, Place du Tertre e atelier degli artisti. Visita al Musée Picasso nel Marais.'
        },
        {
          day: 'Giorno 5',
          title: 'Arte Contemporanea',
          description: 'Centre Pompidou, Musée d\'Art Moderne e quartiere di Saint-Germain-des-Prés. Crociera sulla Senna al tramonto.'
        },
        {
          day: 'Giorno 6',
          title: 'Versailles e l\'Arte Barocca',
          description: 'Gita a Versailles, visita del palazzo e dei giardini. Rientro a Parigi per ultima serata.'
        },
        {
          day: 'Giorno 7',
          title: 'Partenza',
          description: 'Colazione in hotel e transfer all\'aeroporto.'
        }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
        'https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
        'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000'
      ]
    },
    {
      id: 'cultural-3',
      imageUrl: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
      title: 'Egitto dei Faraoni',
      subtitle: '9 giorni tra piramidi e templi',
      details: '9 giorni, 8 notti',
      price: '2200',
      link: '/tour/cultural-egypt',
      description: 'Piramidi di Giza, Valle dei Re, Luxor e crociera sul Nilo.',
      duration: '9 giorni / 8 notti',
      groupSize: 'Fino a 15 persone',
      difficulty: 'Facile',
      meals: 'Pensione completa',
      included: [
        'Volo di andata e ritorno',
        'Hotel 5* Cairo e Luxor (4 notti)',
        'Crociera 5* sul Nilo (4 notti)',
        'Pensione completa',
        'Guida egittologa esperta',
        'Biglietti siti archeologici inclusi',
        'Transfer privati e voli interni'
      ],
      fullDescription: [
        'L\'Egitto è la culla della civiltà, dove la storia millenaria dei faraoni incontra la modernità. Un viaggio attraverso i più grandi tesori archeologici del mondo, dalle Piramidi di Giza alla Valle dei Re.',
        'Visiterai le Piramidi di Giza e la Sfinge, esplorerai il Museo Egizio del Cairo, navigherai sul Nilo in crociera di lusso e scoprirai i templi di Luxor, Karnak e Abu Simbel.',
        'Ogni giorno sarà un viaggio nel tempo, dalla civiltà dei faraoni all\'Egitto moderno. Un\'esperienza culturale unica nel cuore dell\'antico Egitto.'
      ],
      itinerary: [
        {
          day: 'Giorno 1-2',
          title: 'Cairo - Le Piramidi',
          description: 'Arrivo al Cairo, visita alle Piramidi di Giza e alla Sfinge, Museo Egizio e bazar di Khan el-Khalili.'
        },
        {
          day: 'Giorno 3-4',
          title: 'Luxor - La Valle dei Re',
          description: 'Volo a Luxor, Valle dei Re, Tempio di Hatshepsut, Colossi di Memnone e Tempio di Luxor.'
        },
        {
          day: 'Giorno 5-6',
          title: 'Crociera sul Nilo',
          description: 'Imbarco sulla crociera, Tempio di Karnak, navigazione sul Nilo e visita ai templi di Edfu e Kom Ombo.'
        },
        {
          day: 'Giorno 7-8',
          title: 'Aswan e Abu Simbel',
          description: 'Arrivo ad Aswan, visita ad Abu Simbel, Isola di Philae e mercato di Aswan.'
        },
        {
          day: 'Giorno 9',
          title: 'Partenza',
          description: 'Volo di rientro al Cairo e partenza internazionale.'
        }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
        'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000',
        'https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000'
      ]
    }
  ]
};
