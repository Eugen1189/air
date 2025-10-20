// src/components/RecommendedTours.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { collections } from '../data/toursData';
import { collectionTours } from '../data/collectionTours';
import './RecommendedTours.scss';

const RecommendedTours = () => {
  return (
    <section className="recommendations-section">
      <h2 className="section-title">Destinazioni Consigliate</h2>
      <div className="collections-container">
        {/* Беремо перші 3 колекції для демонстрації */}
        {collections.slice(0, 3).map(collection => (
          <div key={collection.id} className="collection-block">
            {/* Картка колекції */}
            <Link 
              to={collection.link} 
              className="collection-card"
            >
              <img 
                src={collection.imageUrl} 
                alt={collection.title}
                className="collection-card__image"
              />
              <div className="collection-card__overlay"></div>
              <div className="collection-card__content">
                <h3 className="collection-card__title">{collection.title}</h3>
                <p className="collection-card__description">{collection.description}</p>
              </div>
            </Link>

            {/* Рекомендовані тури для цієї колекції */}
            <div className="recommended-tours">
              <h4 className="recommended-tours__title">Tours Consigliati</h4>
              <div className="tours-grid">
                {collectionTours[collection.id]?.map(tour => (
                  <Link 
                    key={tour.id} 
                    to={tour.link} 
                    className="tour-card-small"
                  >
                    <img 
                      src={tour.imageUrl} 
                      alt={tour.title}
                      className="tour-card-small__image"
                    />
                    <div className="tour-card-small__content">
                      <h5 className="tour-card-small__title">{tour.title}</h5>
                      <p className="tour-card-small__details">{tour.details}</p>
                      <p className="tour-card-small__price">{tour.price}€</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedTours;
