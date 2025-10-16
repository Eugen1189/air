import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTranslatedTour } from '../hooks/useTranslatedContent';

// Note: we no longer import local styles
const TourCard = ({ imageUrl, title, details, price, link, tourId }) => {
  const { t } = useTranslation();
  
  // Get translated tour content if tourId is provided
  const translatedContent = useTranslatedTour(tourId);
  
  // Use translated content if available, otherwise fallback to props
  const displayTitle = translatedContent?.title || title;
  const displayDetails = translatedContent?.details || details;
  
  // JSX structure now exactly matches your markup and styles
  return (
    <div className="tour-card">
      <img src={imageUrl} alt={displayTitle} className="tour-card__image" />
      <div className="tour-card__content">
        <h3 className="tour-card__title">{displayTitle}</h3>
        <p className="tour-card__details">{displayDetails}</p>
        <div className="tour-card__footer">
          <span className="tour-card__price">{price}€</span>
          <Link to={tourId ? `/tour/${tourId}` : link || '/tour/1'} className="tour-card__button">{t('Buttons.details')}</Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;

