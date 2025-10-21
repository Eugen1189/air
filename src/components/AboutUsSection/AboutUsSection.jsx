import React from 'react';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const AboutUsSection = () => {
  const { t } = useTranslation();
  
  return (
    <Element name="about">
      <section className="about-us-section">
      <div className="about-us-container">
        <div className="about-us-column">
          <img 
            src="https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1994" 
            alt={t('AboutUs.title')}
            className="about-us__image"
          />
        </div>
        <div className="about-us-column">
          <h3 className="about-us__subtitle">{t('AboutUs.subtitle')}</h3>
          <h2 className="section-title">{t('AboutUs.title')}</h2>
          <p>{t('AboutUs.description')}</p>
          
          <div className="about-us__features">
            <div className="feature">
              <h4>{t('AboutUs.experience')}</h4>
              <p>{t('AboutUs.experienceText')}</p>
            </div>
            <div className="feature">
              <h4>{t('AboutUs.quality')}</h4>
              <p>{t('AboutUs.qualityText')}</p>
            </div>
            <div className="feature">
              <h4>{t('AboutUs.support')}</h4>
              <p>{t('AboutUs.supportText')}</p>
            </div>
          </div>
          
          <a href="#" className="button">{t('Buttons.learnMore')}</a>
        </div>
      </div>
    </section>
    </Element>
  );
};

export default AboutUsSection;

