// src/components/FlipCard.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTranslatedCollection } from '../hooks/useTranslatedContent';
import './FlipCard.scss'; // Import styles

const FlipCard = ({ imageSrc, title, link, description, collectionId }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Get translated collection content if collectionId is provided
  const translatedContent = useTranslatedCollection(collectionId);
  
  // Use translated content if available, otherwise fallback to props
  const displayTitle = translatedContent?.title || title;
  const displayDescription = translatedContent?.description || description;

  // Handle card click on mobile - flip the card
  const handleCardClick = (e) => {
    // Check if screen width is mobile (< 768px)
    if (window.innerWidth < 768) {
      e.preventDefault();
      setIsFlipped(!isFlipped);
    }
  };

  // Handle button click - navigate to collection page
  const handleButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Smooth scroll to top before navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Navigate after short delay for smooth transition
    setTimeout(() => {
      navigate(link);
    }, 300);
  };

  return (
    <div 
      className={`flip-card ${isFlipped ? 'is-flipped' : ''}`}
      onClick={handleCardClick}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={imageSrc} alt={displayTitle} />
          <div className="overlay"></div>
          <h3>{displayTitle}</h3>
        </div>
        <div className="flip-card-back">
          <h3>{displayTitle}</h3>
          <p className="flip-card-description">{displayDescription}</p>
          <button 
            className="flip-card-button"
            onClick={handleButtonClick}
          >
            {t('Buttons.learnMore')} →
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

