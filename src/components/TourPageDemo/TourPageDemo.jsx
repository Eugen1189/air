import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BookingSidebar from '../BookingSidebar/BookingSidebar';
import ImportantInfo from '../ImportantInfo';
import TourGallery from '../TourGallery/TourGallery';
import Accordion from '../Accordion/Accordion';
import ReviewsSection from '../ReviewsSection';
import { getTourById, getTourBySlug } from '../../utils/tourUtils';
import { useTranslatedTourDetails } from '../../hooks/useTranslatedContent';

const TourPageDemo = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  
  // Спочатку намагаємося знайти тур за slug, потім за id
  let tour = getTourBySlug(id);
  if (!tour) {
    tour = getTourById(id); // Fallback до пошуку за id
  }
  
  // Get translated tour details if available (тільки для числових ID)
  const translatedDetails = useTranslatedTourDetails(parseInt(id) || 1);
  
  // Use translated content if available, otherwise fallback to original
  const displayTitle = translatedDetails?.title || tour.title;
  const displaySubtitle = translatedDetails?.subtitle || tour.subtitle;
  const displayDescription = translatedDetails?.description || tour.description;
  const displayIncluded = translatedDetails?.included || tour.included;
  const displayItinerary = translatedDetails?.itinerary || tour.itinerary;
  const displayFullDescription = translatedDetails?.fullDescription || tour.fullDescription;

  // Якщо тур не знайдено, показуємо повідомлення про помилку
  if (!tour) {
    return (
      <div className="tour-page-layout" style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ color: '#FFFFFF', marginBottom: '20px' }}>Tour non trovato</h1>
        <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '30px' }}>
          Il tour che stai cercando non esiste o è stato rimosso.
        </p>
        <a 
          href="/tours" 
          style={{ 
            color: 'var(--accent-color, #D9795D)', 
            textDecoration: 'none',
            fontWeight: '600'
          }}
        >
          ← Torna alla lista dei tour
        </a>
      </div>
    );
  }

  return (
    <div className="tour-page-layout" style={{ padding: '60px 20px' }}>
      {/* Main content */}
      <div className="tour-content">
        <h1 className="tour-header__title" style={{ marginBottom: '20px' }}>
          {displayTitle}
        </h1>
        
        <p className="tour-header__subtitle" style={{ marginBottom: '30px', color: '#6c757d' }}>
          {displaySubtitle}
        </p>

        <h3>{t('TourPage.tourInfo')}</h3>
        <p>
          {displayDescription}
        </p>

        {/* Tour details block */}
        <div className="tour-details-section">
          <div className="detail-item">
            <p className="detail-item__title">{t('TourPage.duration')}</p>
            <p className="detail-item__value">{tour.duration}</p>
          </div>
          <div className="detail-item">
            <p className="detail-item__title">{t('TourPage.groupSize')}</p>
            <p className="detail-item__value">{tour.groupSize}</p>
          </div>
          <div className="detail-item">
            <p className="detail-item__title">{t('TourPage.difficulty')}</p>
            <p className="detail-item__value">{tour.difficulty}</p>
          </div>
          <div className="detail-item">
            <p className="detail-item__title">{t('TourPage.meals')}</p>
            <p className="detail-item__value">{tour.meals}</p>
          </div>
        </div>

        <h3>{t('TourPage.included')}</h3>
        <ul style={{ lineHeight: '2' }}>
          {displayIncluded.map((item, index) => (
            <li key={index}>✈️ {item}</li>
          ))}
        </ul>

        <h3>{t('Common.details')}</h3>
        {displayFullDescription.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}

        {/* Important information section */}
        <ImportantInfo />

        {/* Tour gallery section */}
        <section style={{ padding: '60px 0' }}>
          <h2 className="section-title">{t('TourPage.gallery')}</h2>
          <p style={{ textAlign: 'center', marginBottom: '30px', color: '#6c757d' }}>
            Click on photo to view full size
          </p>
          <TourGallery images={tour.gallery} />
        </section>

        {/* Tour itinerary section */}
        <section className="itinerary-section" style={{ padding: '60px 0' }}>
          <h2 className="section-title">{t('TourPage.itinerary')}</h2>
          <Accordion items={displayItinerary} />
        </section>

        {/* Reviews Section */}
        <ReviewsSection tourId={id} />
      </div>

      {/* Sticky Sidebar with booking form */}
      <BookingSidebar price={tour.price} />
    </div>
  );
};

export default TourPageDemo;

