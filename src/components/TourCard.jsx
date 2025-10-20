import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTranslatedTour } from '../hooks/useTranslatedContent';
import OptimizedImage from './OptimizedImage';
import './TourCard.scss';
const TourCard = ({ imageUrl, title, details, price, link, tourId, duration, difficulty }) => {
  const { t } = useTranslation();
  
  // Get translated tour content if tourId is provided
  const translatedContent = useTranslatedTour(tourId);
  
  // Use translated content if available, otherwise fallback to props
  const displayTitle = translatedContent?.title || title;
  const displayDetails = translatedContent?.details || details;
  const displayDuration = translatedContent?.duration || duration;
  const displayDifficulty = translatedContent?.difficulty || difficulty;
  
  // JSX structure now exactly matches your markup and styles
  return (
    <div className="tour-card">
      <OptimizedImage 
        src={imageUrl} 
        alt={displayTitle} 
        className="tour-card__image"
        width={400}
        height={300}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="tour-card__content">
        {/* Meta information like in blog cards */}
        {(displayDuration || displayDifficulty) && (
          <div className="tour-card__meta">
            {displayDuration && <span>⏱️ {displayDuration}</span>}
            {displayDifficulty && <span>🎯 {displayDifficulty}</span>}
          </div>
        )}
        
        <h3 className="tour-card__title">
          <Link to={tourId ? `/tour/${tourId}` : link || '/tour/1'}>
            {displayTitle}
          </Link>
        </h3>
        <p className="tour-card__description">{displayDetails}</p>
        <div className="tour-card__footer">
          <span className="tour-card__price">{price}€</span>
          <Link to={tourId ? `/tour/${tourId}` : link || '/tour/1'} className="tour-card__button">{t('Buttons.details')}</Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;

