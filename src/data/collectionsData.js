export const collectionDetails = {
  gastro: {
    id: 'gastro',
    title: 'Tour Gastronomici',
    subtitle: 'Un viaggio attraverso i sapori del mondo',
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964',
    fullDescription: 'Immergiti in un\'esperienza culinaria indimenticabile. Scopri i segreti della cucina locale, incontra chef appassionati, visita mercati colorati e degusta piatti autentici preparati con ingredienti freschi di stagione. Ogni destinazione gastronomica offre non solo cibo delizioso, ma anche storie, tradizioni e cultura che rendono ogni boccone speciale.',
    bestTime: 'Il periodo migliore dipende dalla destinazione: primavera (marzo-maggio) e autunno (settembre-novembre) sono generalmente ideali per la maggior parte delle destinazioni gastronomiche, quando i prodotti locali sono al loro meglio e il clima è piacevole per le degustazioni all\'aperto.',
    destinations: [
      {
        name: 'Bologna, Italia',
        location: 'Emilia-Romagna, Italia',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000',
        description: 'Conosciuta come "La Grassa" per la sua ricca tradizione culinaria. Bologna è la capitale della pasta fresca: tortellini, tagliatelle al ragù, lasagne. Visita i mercati storici come il Mercato di Mezzo e impara a fare la pasta con le sfogline locali.',
        whyVisit: 'La culla della cucina italiana con corsi di cucina autentici e mercati secolari'
      },
      {
        name: 'San Sebastián, Spagna',
        location: 'Paesi Baschi, Spagna',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2000',
        description: 'La capitale mondiale dei pintxos con il maggior numero di stelle Michelin per metro quadrato. Esplora la Parte Vieja con i suoi bar di pintxos, visita il mercato de la Bretxa e prova i piatti stellati dei ristoranti come Arzak e Mugaritz.',
        whyVisit: 'La più alta concentrazione di stelle Michelin e cultura dei pintxos unica al mondo'
      },
      {
        name: 'Lyon, Francia',
        location: 'Auvergne-Rhône-Alpes, Francia',
        image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=2000',
        description: 'La capitale gastronomica della Francia con i suoi famosi "bouchons" tradizionali. Degusta la charcuterie locale, i quenelles, il saucisson e i formaggi regionali accompagnati dai vini della Valle del Rodano.',
        whyVisit: 'Riconosciuta come capitale mondiale della gastronomia con tradizioni culinarie secolari'
      },
      {
        name: 'Tokyo, Giappone',
        location: 'Kantō, Giappone',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2000',
        description: 'La città con più ristoranti stellati al mondo. Dal sushi di Tsukiji alle ramen di Shibuya, dai tempura di Ginza agli izakaya nascosti. Esperienza culinaria che spazia dalla tradizione all\'innovazione.',
        whyVisit: 'Il maggior numero di ristoranti stellati Michelin al mondo e street food eccezionale'
      }
    ]
  },
  relax: {
    id: 'relax',
    title: 'Viaggi per il Relax',
    subtitle: 'Ritrova la pace e l\'armonia interiore',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070',
    fullDescription: 'Concediti una pausa dal ritmo frenetico della vita quotidiana. Le nostre destinazioni benessere offrono l\'equilibrio perfetto tra rilassamento del corpo e della mente. Spa di lusso, bagni termali naturali, yoga al tramonto e meditazione guidata in ambienti mozzafiato. Ogni momento è progettato per ricaricare le tue energie.',
    bestTime: 'Le destinazioni benessere possono essere visitate tutto l\'anno. Primavera (aprile-giugno) e autunno (settembre-novembre) offrono temperature miti ideali per attività all\'aperto come yoga e meditazione.',
    destinations: [
      {
        name: 'Bali, Indonesia',
        location: 'Indonesia',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2000',
        description: 'L\'isola degli dei offre un\'esperienza spirituale unica. Resort spa di lusso a Ubud, templi antichi, risaie terrazzate e spiagge tranquille. Massaggi balinesi tradizionali, yoga quotidiano e cerimonie di purificazione.',
        whyVisit: 'Centro mondiale dello yoga e del benessere spirituale con natura rigogliosa'
      },
      {
        name: 'Terme di Saturnia, Italia',
        location: 'Toscana, Italia',
        image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2000',
        description: 'Sorgenti termali naturali gratuite immerse nella campagna toscana. Acque sulfuree a 37°C che scorrono da millenni, circondate da paesaggi mozzafiato. Combina il relax con degustazioni di vino e cucina toscana.',
        whyVisit: 'Terme naturali gratuite in uno dei paesaggi più belli d\'Italia'
      },
      {
        name: 'Blue Lagoon, Islanda',
        location: 'Grindavík, Islanda',
        image: 'https://images.unsplash.com/photo-1504870712357-65ea720d6078?q=80&w=2000',
        description: 'Una delle spa geotermiche più famose al mondo. Acque ricche di minerali a 39°C circondate da campi di lava. Trattamenti con silice e alghe, sauna, vapore e vista sull\'aurora boreale in inverno.',
        whyVisit: 'Esperienza unica in acque geotermiche con proprietà curative'
      },
      {
        name: 'Maldive',
        location: 'Oceano Indiano',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2000',
        description: 'Paradiso tropicale con resort spa di lusso su isole private. Ville sull\'acqua, spiagge di sabbia bianca, acque cristalline. Massaggi sulla spiaggia, yoga al tramonto e immersioni rilassanti tra i coralli.',
        whyVisit: 'L\'incarnazione del paradiso terrestre con resort spa esclusivi'
      }
    ]
  },
  active: {
    id: 'active',
    title: 'Vacanze Attive',
    subtitle: 'Avventure adrenaliniche per spiriti liberi',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070',
    fullDescription: 'Per chi cerca emozioni forti e avventure indimenticabili. Dalle vette delle montagne alle profondità dell\'oceano, ogni destinazione offre esperienze uniche che metteranno alla prova i tuoi limiti. Trekking, rafting, safari, immersioni, alpinismo - l\'adrenalina e le emozioni sono garantite.',
    bestTime: 'Estate (giugno-agosto) per attività in montagna e trekking, primavera e autunno per safari, tutto l\'anno per le attività tropicali. Verificare sempre le condizioni climatiche specifiche.',
    destinations: [
      {
        name: 'Dolomiti, Italia',
        location: 'Trentino-Alto Adige, Italia',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000',
        description: 'Patrimonio UNESCO con sentieri mozzafiato. Via ferrate, trekking di alta quota, arrampicata su pareti verticali, mountain bike sui passi dolomitici. D\'inverno: sci, ciaspolate e alpinismo su ghiaccio.',
        whyVisit: 'Le montagne più belle del mondo con sentieri per tutti i livelli'
      },
      {
        name: 'Queenstown, Nuova Zelanda',
        location: 'Otago, Nuova Zelanda',
        image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=2000',
        description: 'La capitale mondiale degli sport estremi. Bungee jumping, parapendio, jet boat, rafting sui fiumi glaciali, skydiving e trekking nei fiordi. Paesaggi spettacolari delle location del Signore degli Anelli.',
        whyVisit: 'La più alta concentrazione di attività adrenaliniche al mondo'
      },
      {
        name: 'Islanda',
        location: 'Nord Europa',
        image: 'https://images.unsplash.com/photo-1520769945061-0a448c463865?q=80&w=2000',
        description: 'Terra di ghiaccio e fuoco con paesaggi extraterrestri. Trekking sui ghiacciai, esplorazione di grotte di ghiaccio, avvistamento balene, immersioni tra le placche tettoniche a Silfra. D\'inverno: caccia all\'aurora boreale.',
        whyVisit: 'Paesaggi unici al mondo con avventure impossibili da trovare altrove'
      },
      {
        name: 'Parco Nazionale Kruger, Sud Africa',
        location: 'Mpumalanga, Sud Africa',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000',
        description: 'Safari fotografici emozionanti nei Big Five. Game drive all\'alba, safari a piedi con ranger armati, safari notturni. Possibilità di avvistare leoni, leopardi, elefanti, rinoceronti e bufali nel loro habitat naturale.',
        whyVisit: 'Uno dei migliori parchi safari del mondo con la massima probabilità di avvistamenti'
      }
    ]
  },
  family: {
    id: 'family',
    title: 'Vacanze Familiari',
    subtitle: 'Momenti preziosi da condividere insieme',
    imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070',
    fullDescription: 'Crea ricordi indimenticabili con tutta la famiglia. Destinazioni selezionate con cura per garantire divertimento, sicurezza e comfort per grandi e piccini. Parchi tematici, spiagge sicure, attività educative e intrattenimento per tutte le età. Ogni membro della famiglia troverà qualcosa di speciale.',
    bestTime: 'Estate (giugno-agosto) per le destinazioni balneari, primavera (aprile-maggio) e autunno (settembre-ottobre) per i parchi tematici con meno folla. Vacanze scolastiche per viaggi più lunghi.',
    destinations: [
      {
        name: 'Orlando, Florida',
        location: 'Stati Uniti',
        image: 'https://images.unsplash.com/photo-1607969104459-f10fbd9a3dde?q=80&w=2000',
        description: 'La capitale mondiale dei parchi tematici. Walt Disney World, Universal Studios, SeaWorld, Legoland e molti altri. Hotel a tema, spettacoli dal vivo, incontri con i personaggi e attrazioni per tutte le età.',
        whyVisit: 'La più grande concentrazione di parchi tematici al mondo'
      },
      {
        name: 'Costa del Sol, Spagna',
        location: 'Andalusia, Spagna',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2000',
        description: 'Spiagge sicure con acque calme, parchi acquatici, mini golf, zoo e acquari. Resort family-friendly con animazione per bambini, club ragazzi e attività per tutta la famiglia. Città storiche come Malaga e Granada facilmente raggiungibili.',
        whyVisit: 'Clima perfetto tutto l\'anno e infrastrutture eccellenti per famiglie'
      },
      {
        name: 'Copenaghen, Danimarca',
        location: 'Danimarca',
        image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=2000',
        description: 'Una delle città più family-friendly del mondo. Tivoli Gardens (il più antico parco divertimenti), castello di Amalienborg, museo delle navi vichinghe, acquario nazionale. Città sicura e perfetta per girare in bicicletta.',
        whyVisit: 'Città sicurissima con attrazioni educative e divertenti per bambini'
      },
      {
        name: 'Cinque Terre, Italia',
        location: 'Liguria, Italia',
        image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2000',
        description: 'Borghi colorati patrimonio UNESCO sul mare. Sentieri panoramici facili, spiagge tranquille, gelato artigianale e focaccia ligure. Treni che collegano i villaggi rendono gli spostamenti facili anche con bambini.',
        whyVisit: 'Paesaggi da cartolina con sentieri facili e mare cristallino'
      }
    ]
  }
};

