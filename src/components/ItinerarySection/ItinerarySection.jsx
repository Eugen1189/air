import React from 'react';
import { useTranslation } from 'react-i18next';
import Accordion from '../Accordion/Accordion';
import { itinerary } from '../../data/toursData';

const ItinerarySection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="itinerary-section" style={{ padding: '60px 20px' }}>
      <h2 className="section-title">{t('TourPage.itinerary')}</h2>
      <Accordion items={itinerary} />
    </section>
  );
};

export default ItinerarySection;

