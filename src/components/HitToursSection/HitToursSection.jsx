import React from 'react';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import HitToursSlider from '../HitToursSlider/HitToursSlider';
import { hitTours } from '../../data/toursData';

const HitToursSection = () => {
  const { t } = useTranslation();
  
  return (
    <Element name="hit-tours">
      <section style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2 className="section-title">{t('HitTours.title')}</h2>
        <p className="section-subtitle">{t('HitTours.subtitle')}</p>
        <HitToursSlider tours={hitTours} />
      </section>
    </Element>
  );
};

export default HitToursSection;
