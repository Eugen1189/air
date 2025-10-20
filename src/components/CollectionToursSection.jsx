// src/components/CollectionToursSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { collectionTours } from '../data/collectionTours';
import './CollectionToursSection.scss';

const CollectionToursSection = ({ collectionId }) => {
  // Отримуємо тури для конкретної колекції
  const tours = collectionTours[collectionId] || [];

  if (tours.length === 0) {
    return (
      <section className="collection-tours-section">
        <h2 className="section-title">Tours Consigliati</h2>
        <p className="no-tours-message">Nessun tour disponibile per questa collezione.</p>
      </section>
    );
  }

  return (
    <section className="collection-tours-section">
      <h2 className="section-title">Tours Consigliati</h2>
      <div className="tours-grid">
        {tours.map(tour => (
          <Link 
            key={tour.id} 
            to={tour.link} 
            className="tour-card"
            style={{ 
              backgroundColor: 'rgba(0, 255, 0, 0.5)', 
              border: '3px solid red',
              color: 'yellow'
            }}
          >
            <img 
              src={tour.imageUrl} 
              alt={tour.title}
              className="tour-card__image"
            />
            <div className="tour-card__content">
              <h3 className="tour-card__title" style={{ color: 'yellow', fontSize: '24px' }}>{tour.title}</h3>
              <p className="tour-card__details">{tour.details}</p>
              <p className="tour-card__price">{tour.price}€</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CollectionToursSection;
