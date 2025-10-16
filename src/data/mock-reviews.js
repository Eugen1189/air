// src/data/mock-reviews.js
// Mock reviews data - reviews left by Italian travelers
export const mockReviews = [
  { 
    id: 1, 
    tourId: 1, 
    author: 'Elena Rossi', 
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5, 
    text: 'Viaggio incredibile! Organizzazione al massimo livello. La Costiera Amalfitana è ancora più bella di quanto immaginassi. Positano è magica!', 
    date: '2025-09-20' 
  },
  { 
    id: 2, 
    tourId: 1, 
    author: 'Marco Bianchi', 
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 4, 
    text: 'Tutto è stato fantastico, ma avrei preferito più tempo libero a Positano per esplorare le spiagge. Comunque esperienza meravigliosa!', 
    date: '2025-09-15' 
  },
  { 
    id: 3, 
    tourId: 1, 
    author: 'Giulia Ferrari', 
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 5, 
    text: 'La guida era eccellente e molto preparata. Hotel ottimo, cibo delizioso. Consiglio vivamente questo tour a tutti!', 
    date: '2025-08-28' 
  },
  { 
    id: 4, 
    tourId: 2, 
    author: 'Irene Conti', 
    avatar: 'https://i.pravatar.cc/150?img=9',
    rating: 5, 
    text: 'I fiordi sono semplicemente spaziali! Un\'esperienza che non dimenticherò mai. La Norvegia è pura magia della natura.', 
    date: '2025-08-10' 
  },
  { 
    id: 5, 
    tourId: 2, 
    author: 'Alessandro Marino', 
    avatar: 'https://i.pravatar.cc/150?img=13',
    rating: 5, 
    text: 'Paesaggi mozzafiato ad ogni angolo. La crociera sui fiordi è stata il punto culminante. Altamente raccomandato!', 
    date: '2025-07-22' 
  },
  { 
    id: 6, 
    tourId: 3, 
    author: 'Sofia Romano', 
    avatar: 'https://i.pravatar.cc/150?img=23',
    rating: 5, 
    text: 'La fioritura dei ciliegi è uno spettacolo incredibile. Il Giappone durante l\'Hanami è un sogno che si avvera. Organizzazione perfetta!', 
    date: '2025-04-15' 
  },
  { 
    id: 7, 
    tourId: 3, 
    author: 'Luca Esposito', 
    avatar: 'https://i.pravatar.cc/150?img=14',
    rating: 4, 
    text: 'Tour eccellente, ma Tokyo era un po\' frenetica per i miei gusti. Kyoto invece è stata una rivelazione - pace e bellezza assolute.', 
    date: '2025-04-08' 
  },
  { 
    id: 8, 
    tourId: 4, 
    author: 'Francesca Gallo', 
    avatar: 'https://i.pravatar.cc/150?img=24',
    rating: 5, 
    text: 'Safari incredibile! Abbiamo visto tutti i Big Five. Il ranger era molto esperto. Un\'esperienza africana autentica!', 
    date: '2025-06-12' 
  },
  { 
    id: 9, 
    tourId: 5, 
    author: 'Matteo Ricci', 
    avatar: 'https://i.pravatar.cc/150?img=15',
    rating: 5, 
    text: 'Santorini è un paradiso in terra. Il tramonto a Oia è indescrivibile. Le isole greche sono perfette per una fuga romantica!', 
    date: '2025-07-30' 
  },
  { 
    id: 10, 
    tourId: 5, 
    author: 'Chiara Lombardi', 
    avatar: 'https://i.pravatar.cc/150?img=25',
    rating: 4, 
    text: 'Bellissimo tour delle isole. L\'unico neo: troppi turisti a Mykonos ad agosto. Ma Santorini e Atene erano perfette!', 
    date: '2025-08-18' 
  },
  { 
    id: 11, 
    tourId: 6, 
    author: 'Andrea Colombo', 
    avatar: 'https://i.pravatar.cc/150?img=16',
    rating: 5, 
    text: 'Machu Picchu è stato emozionante. L\'altitudine è impegnativa ma ne vale assolutamente la pena. Esperienza che cambia la vita!', 
    date: '2025-05-25' 
  },
  { 
    id: 12, 
    tourId: 7, 
    author: 'Valentina Russo', 
    avatar: 'https://i.pravatar.cc/150?img=26',
    rating: 5, 
    text: 'Il Marocco è un caleidoscopio di colori e profumi. Marrakech è caotica ma affascinante. La notte nel deserto - magica!', 
    date: '2025-03-14' 
  },
];

// Function to get reviews for specific tour
export const getReviewsForTour = (tourId) => {
  return mockReviews.filter(review => review.tourId === parseInt(tourId));
};

// Calculate average rating for tour
export const getAverageRating = (tourId) => {
  const tourReviews = getReviewsForTour(tourId);
  if (tourReviews.length === 0) return 0;
  const sum = tourReviews.reduce((acc, review) => acc + review.rating, 0);
  return (sum / tourReviews.length).toFixed(1);
};

