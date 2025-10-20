// Приклад використання функцій getStaticPaths та getStaticProps (як у Next.js)
// src/pages/tours/[slug].js

import { getStaticPaths, getStaticProps } from '../utils/tourUtils';

// Приклад використання функції getStaticPaths
export async function getStaticPaths() {
  // Ми створюємо список усіх можливих шляхів на основі slug'ів з наших даних
  const paths = mockTours.map(tour => ({
    params: { slug: tour.slug },
  }));

  return { paths, fallback: false }; // fallback: false означає, що для неіснуючих slug буде 404
}

// Приклад використання функції getStaticProps
export async function getStaticProps({ params }) {
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
}

// Приклад використання в React компоненті
import React from 'react';
import { useParams } from 'react-router-dom';
import { getTourBySlug } from '../utils/tourUtils';

const TourPage = () => {
  const { slug } = useParams();
  
  // Використовуємо нашу функцію для отримання туру
  const tour = getTourBySlug(slug);
  
  // Якщо тур не знайдено, показуємо 404
  if (!tour) {
    return (
      <div>
        <h1>Tour non trovato</h1>
        <p>Il tour che stai cercando non esiste.</p>
      </div>
    );
  }
  
  // Рендеримо тур
  return (
    <div>
      <h1>{tour.title}</h1>
      <p>{tour.description}</p>
      <p>Prezzo: €{tour.price}</p>
    </div>
  );
};

export default TourPage;
