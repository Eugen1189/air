// Об'єднаний список всіх турів (існуючі + колекційні)
import { mockTours } from './mock-tours.js';
import { collectionTours } from './collectionTours.js';

// Функція для об'єднання всіх турів
export const getAllTours = () => {
  const allTours = [...mockTours];
  
  // Додаємо тури з колекцій
  Object.values(collectionTours).forEach(collection => {
    collection.forEach(tour => {
      // Перетворюємо структуру колекційних турів в формат mockTours
      const formattedTour = {
        id: tour.id,
        title: tour.title,
        slug: tour.slug || tour.id,
        image: tour.imageUrl,
        price: parseInt(tour.price),
        destination: getDestinationFromTour(tour),
        duration: parseInt(tour.duration?.split(' ')[0]) || getDurationFromDetails(tour.details),
        type: getTypeFromCollection(tour),
        difficulty: tour.difficulty || 'Facile',
        // Додаткові поля для детальної інформації
        subtitle: tour.subtitle,
        details: tour.details,
        description: tour.description,
        link: tour.link,
        duration: tour.duration,
        groupSize: tour.groupSize,
        meals: tour.meals,
        included: tour.included,
        fullDescription: tour.fullDescription,
        itinerary: tour.itinerary,
        gallery: tour.gallery
      };
      allTours.push(formattedTour);
    });
  });
  
  return allTours;
};

// Допоміжні функції для визначення параметрів
const getDestinationFromTour = (tour) => {
  const title = tour.title.toLowerCase();
  if (title.includes('bologna') || title.includes('italia')) return 'Italia';
  if (title.includes('san sebastian') || title.includes('spagna')) return 'Spagna';
  if (title.includes('lione') || title.includes('francia')) return 'Francia';
  if (title.includes('bali') || title.includes('indonesia')) return 'Indonesia';
  if (title.includes('saturnia') || title.includes('toscana')) return 'Italia';
  if (title.includes('blue lagoon') || title.includes('islanda')) return 'Islanda';
  if (title.includes('dolomiti') || title.includes('trentino')) return 'Italia';
  if (title.includes('queenstown') || title.includes('nuova zelanda')) return 'Nuova Zelanda';
  if (title.includes('orlando') || title.includes('florida')) return 'Stati Uniti';
  if (title.includes('costa del sol') || title.includes('andalusia')) return 'Spagna';
  if (title.includes('copenaghen') || title.includes('danimarca')) return 'Danimarca';
  if (title.includes('cinque terre') || title.includes('liguria')) return 'Italia';
  if (title.includes('maldive')) return 'Maldive';
  if (title.includes('hawaii')) return 'Hawaii';
  if (title.includes('seychelles')) return 'Seychelles';
  if (title.includes('roma') || title.includes('lazio')) return 'Italia';
  if (title.includes('parigi') || title.includes('francia')) return 'Francia';
  if (title.includes('egitto') || title.includes('cairo')) return 'Egitto';
  return 'Internazionale';
};

const getDurationFromDetails = (details) => {
  if (!details) return 7;
  const match = details.match(/(\d+)\s+giorni/);
  return match ? parseInt(match[1]) : 7;
};

const getTypeFromCollection = (tour) => {
  // Визначаємо тип на основі ID або назви
  const id = tour.id.toLowerCase();
  if (id.includes('gastro')) return 'Gastronomico';
  if (id.includes('relax')) return 'Relax';
  if (id.includes('active')) return 'Attivo';
  if (id.includes('family')) return 'Familiare';
  if (id.includes('exotic')) return 'Esotico';
  if (id.includes('cultural')) return 'Culturale';
  return 'Misto';
};

// Експортуємо об'єднаний список
export const allTours = getAllTours();

// Експортуємо також окремі колекції для зручності
export { collectionTours };
