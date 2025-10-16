// src/components/TourCardDetailed.jsx
// Detailed tour card for Tours List Page
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTranslatedTour, useTranslatedTourDetails } from '../hooks/useTranslatedContent';
import { getTranslatedFilterValue } from '../utils/filterOptions';

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
    <Link 
      to={`/tour/${tour.id}`}
      style={{
        textDecoration: 'none',
        color: 'inherit',
        display: 'block',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        height: '100%'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
      }}
    >
      {/* Tour Image */}
      <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
        <img 
          src={tour.image}
          alt={displayTitle}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        
        {/* Price Badge */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          backgroundColor: '#D9795D',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '20px',
          fontWeight: '600',
          fontSize: '1.1rem'
        }}>
          {tour.price}€
        </div>
        
        {/* Type Badge */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          backgroundColor: 'rgba(10, 35, 66, 0.9)',
          color: 'white',
          padding: '6px 14px',
          borderRadius: '20px',
          fontWeight: '600',
          fontSize: '0.85rem'
        }}>
          {translatedType}
        </div>
      </div>

      {/* Tour Info */}
      <div style={{ padding: '25px' }}>
        <h3 style={{ 
          fontSize: '1.6rem', 
          marginBottom: '15px',
          color: '#0A2342',
          fontWeight: '700'
        }}>
          {displayTitle}
        </h3>
        
        <p style={{ 
          color: '#6c757d',
          marginBottom: '20px',
          lineHeight: '1.6',
          fontSize: '0.95rem',
          minHeight: '60px'
        }}>
          {displayDescription}
        </p>

        {/* Tour Details Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '15px',
          marginBottom: '20px',
          paddingTop: '20px',
          borderTop: '1px solid #e0e0e0'
        }}>
          <div>
            <div style={{ fontSize: '0.85rem', color: '#999', marginBottom: '5px' }}>
              📍 {t('ToursPage.card.destination')}
            </div>
            <div style={{ fontWeight: '600', color: '#333' }}>
              {translatedDestination}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', color: '#999', marginBottom: '5px' }}>
              ⏱️ {t('ToursPage.card.duration')}
            </div>
            <div style={{ fontWeight: '600', color: '#333' }}>
              {tour.duration} {t('TourCard.days')}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', color: '#999', marginBottom: '5px' }}>
              🏔️ {t('ToursPage.card.difficulty')}
            </div>
            <div style={{ fontWeight: '600', color: '#333' }}>
              {translatedDifficulty}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', color: '#999', marginBottom: '5px' }}>
              🎯 {t('ToursPage.card.type')}
            </div>
            <div style={{ fontWeight: '600', color: '#333' }}>
              {translatedType}
            </div>
          </div>
        </div>

        {/* View Details Button */}
        <div style={{
          backgroundColor: '#0A2342',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          textAlign: 'center',
          fontWeight: '600',
          transition: 'background-color 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#D9795D';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#0A2342';
        }}
        >
          {t('ToursPage.card.detailsButton')} →
        </div>
      </div>
    </Link>
  );
};

export default TourCardDetailed;

