// src/components/TourCardDetailed.jsx
// Detailed tour card for Tours List Page
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTranslatedTour, useTranslatedTourDetails } from '../hooks/useTranslatedContent';
import { getTranslatedFilterValue } from '../utils/filterOptions';
import './TourCardDetailed.scss';

const TourCardDetailed = ({ tour }) => {
  const { t } = useTranslation();
  
  // Get translated tour content
  const translatedBasic = useTranslatedTour(tour.id);
  const translatedDetails = useTranslatedTourDetails(tour.id);
  
  // Use translated content if available, otherwise fallback
  const displayTitle = translatedBasic?.title || tour.title;
  const displayDescription = translatedDetails?.description || tour.description || `Scopri ${tour.destination} in ${tour.duration} giorni`;
  
  // Translate filter values (destination, type, difficulty)
  const translatedDestination = getTranslatedFilterValue(tour.destination, t);
  const translatedType = getTranslatedFilterValue(tour.type, t);
  const translatedDifficulty = getTranslatedFilterValue(tour.difficulty, t);
  
  return (
    <article className="tour-card-detailed">
      <Link 
        to={`/tour/${tour.id}`}
        style={{
          textDecoration: 'none',
          color: 'inherit',
          display: 'block',
          height: '100%'
        }}
      >
        {/* Tour Image */}
        <div className="tour-card-detailed__image">
          <img 
            src={tour.image}
            alt={displayTitle}
          />
          
          {/* Price Badge */}
          <div className="tour-card-detailed__price-badge">
            {tour.price}€
          </div>
          
          {/* Type Badge */}
          <div className="tour-card-detailed__type-badge">
            {translatedType}
          </div>
        </div>

        {/* Tour Info */}
        <div className="tour-card-detailed__content">
          <div className="tour-card-detailed__meta">
            <span>📍 {translatedDestination}</span>
            <span>⏱️ {tour.duration} {t('TourCard.days')}</span>
            <span>🏔️ {translatedDifficulty}</span>
          </div>

          <h3 className="tour-card-detailed__title">
            {displayTitle}
          </h3>
          
          <p className="tour-card-detailed__description">
            {displayDescription}
          </p>

          <div className="tour-card-detailed__link">
            {t('ToursPage.card.detailsButton')} →
          </div>
        </div>
      </Link>
    </article>
  );
};

export default TourCardDetailed;

