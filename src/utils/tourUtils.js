// Утиліти для роботи з турами
import { tourDetails } from '../data/toursData';
import { collectionTours } from '../data/collectionTours';

// Функція для отримання туру за ID
export const getTourById = (tourId) => {
  // Спочатку шукаємо в основних турах
  if (tourDetails[tourId]) {
    return tourDetails[tourId];
  }
  
  // Потім шукаємо в турах колекцій
  for (const collectionId in collectionTours) {
    const tours = collectionTours[collectionId];
    const tour = tours.find(t => t.id === tourId);
    if (tour) {
      return tour;
    }
  }
  
  // Якщо не знайдено, повертаємо перший тур як fallback
  return tourDetails[1];
};

// Функція для отримання туру за slug (як у Next.js getStaticProps)
export const getTourBySlug = (slug) => {
  // Спочатку шукаємо в основних турах
  for (const tourId in tourDetails) {
    const tour = tourDetails[tourId];
    if (tour.slug === slug) {
      return tour;
    }
  }
  
  // Потім шукаємо в турах колекцій
  for (const collectionId in collectionTours) {
    const tours = collectionTours[collectionId];
    const tour = tours.find(t => t.slug === slug);
    if (tour) {
      return tour;
    }
  }
  
  // Якщо не знайдено, повертаємо null
  return null;
};

// Функція, що імітує getStaticPaths з Next.js
export const getStaticPaths = () => {
  // Отримуємо всі тури (основні + з колекцій)
  const allTours = getAllTours();
  
  // Ми створюємо список усіх можливих шляхів на основі slug'ів з наших даних
  const paths = allTours
    .filter(tour => tour.slug) // Фільтруємо тільки тури з slug
    .map(tour => ({
      params: { slug: tour.slug },
    }));

  return { paths, fallback: false }; // fallback: false означає, що для неіснуючих slug буде 404
};

// Функція, що імітує getStaticProps з Next.js
export const getStaticProps = ({ params }) => {
  // Знаходимо тур, у якого 'slug' з масиву даних...
  const tour = getTourBySlug(params.slug); // <-- ...співпадає зі 'slug' з URL.

  // Якщо тур не знайдено, ми повертаємо notFound: true, що показує сторінку 404
  if (!tour) {
    return { notFound: true };
  }

  return {
    props: {
      tour,
    },
  };
};

// Функція для отримання всіх турів (основні + з колекцій)
export const getAllTours = () => {
  const allTours = [];
  
  // Додаємо основні тури
  Object.values(tourDetails).forEach(tour => {
    allTours.push(tour);
  });
  
  // Додаємо тури з колекцій
  Object.values(collectionTours).forEach(collectionToursList => {
    collectionToursList.forEach(tour => {
      allTours.push(tour);
    });
  });
  
  return allTours;
};
