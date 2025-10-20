// src/components/FlipCard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaCrown } from 'react-icons/fa';
import { useTranslatedCollection } from '../hooks/useTranslatedContent';
import OptimizedImage from './OptimizedImage';
import './FlipCard.scss'; // Import styles

const FlipCard = ({ imageSrc, title, link, description, collectionId }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Get translated collection content if collectionId is provided
  const translatedContent = useTranslatedCollection(collectionId);
  
  // Use translated content if available, otherwise fallback to props
  const displayTitle = translatedContent?.title || title;

  // Handle card click on mobile - flip the card
  const handleCardClick = (e) => {
    // Only flip if clicking directly on card (not on button)
    if (window.innerWidth < 768 && !e.target.closest('button')) {
      e.preventDefault();
      setIsFlipped(!isFlipped);
    }
  };

  // Handle button click - navigate to collection page
  const handleButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('Button clicked! Navigating to:', link);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Navigate to the collection page
    setTimeout(() => {
      navigate(link);
    }, 200);
  };

  // Get translated description
  const displayDescription = translatedContent?.description || description;

  return (
    <div 
      className={`collection-card ${isFlipped ? 'is-flipped' : ''}`}
      onClick={handleCardClick}
    >
      <div className="collection-card-inner">
        {/* Front side - Image with title */}
        <div className="collection-card-front">
          <OptimizedImage 
            src={imageSrc} 
            alt={displayTitle}
            width={400}
            height={300}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="collection-card-overlay"></div>
          <div className="collection-card-content">
            <h3 className="collection-card-title">{displayTitle}</h3>
          </div>
        </div>
        
        {/* Back side - Text description with button */}
        <div className="collection-card-back">
          <div className="collection-card-content">
            <h3 className="collection-card-title">{displayTitle}</h3>
            <p className="collection-card-description">{displayDescription}</p>
            <button 
              className="collection-card-button"
              onClick={handleButtonClick}
            >
              <FaCrown className="button-icon" />
              <span>{t('Buttons.learnMore')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

