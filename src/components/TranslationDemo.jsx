// src/components/TranslationDemo.jsx
// Interactive demo component showing translation capabilities
import React from 'react';
import { useTranslation } from 'react-i18next';
import './TranslationDemo.scss';

const TranslationDemo = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="translation-demo">
      <div className="translation-demo__header">
        <h1>🌐 {t('HomePage.title')}</h1>
        <p>{t('HomePage.subtitle')}</p>
      </div>

      <div className="translation-demo__controls">
        <h3>Language Switcher:</h3>
        <div className="language-buttons">
          <button 
            onClick={() => changeLanguage('it')}
            className={i18n.language === 'it' ? 'active' : ''}
          >
            🇮🇹 Italiano
          </button>
          <button 
            onClick={() => changeLanguage('en')}
            className={i18n.language === 'en' ? 'active' : ''}
          >
            🇬🇧 English
          </button>
          <button 
            onClick={() => changeLanguage('uk')}
            className={i18n.language === 'uk' ? 'active' : ''}
          >
            🇺🇦 Українська
          </button>
        </div>
        <p className="current-lang">
          Current language: <strong>{i18n.language.toUpperCase()}</strong>
        </p>
      </div>

      <div className="translation-demo__examples">
        <h3>Translation Examples:</h3>
        
        <div className="example-section">
          <h4>Navigation:</h4>
          <ul>
            <li>{t('Navigation.home')}</li>
            <li>{t('Navigation.tours')}</li>
            <li>{t('Navigation.collections')}</li>
            <li>{t('Navigation.aboutUs')}</li>
            <li>{t('Navigation.blog')}</li>
            <li>{t('Navigation.contacts')}</li>
          </ul>
        </div>

        <div className="example-section">
          <h4>Buttons:</h4>
          <div className="button-examples">
            <button className="demo-button">{t('Buttons.details')}</button>
            <button className="demo-button primary">{t('Buttons.book')}</button>
            <button className="demo-button">{t('Buttons.learnMore')}</button>
            <button className="demo-button">{t('Buttons.contact')}</button>
          </div>
        </div>

        <div className="example-section">
          <h4>Tour Information:</h4>
          <div className="tour-info-grid">
            <div className="info-item">
              <span className="label">{t('TourPage.duration')}:</span>
              <span className="value">8 days</span>
            </div>
            <div className="info-item">
              <span className="label">{t('TourPage.groupSize')}:</span>
              <span className="value">12-16</span>
            </div>
            <div className="info-item">
              <span className="label">{t('TourPage.difficulty')}:</span>
              <span className="value">Medium</span>
            </div>
          </div>
        </div>

        <div className="example-section">
          <h4>Booking Widget:</h4>
          <div className="booking-demo">
            <label>{t('BookingWidget.dateFrom')}</label>
            <input type="date" />
            <label>{t('BookingWidget.guests')}</label>
            <input type="number" defaultValue="2" />
            <button className="demo-button primary">
              {t('BookingWidget.bookTour')}
            </button>
          </div>
        </div>

        <div className="example-section">
          <h4>Common Messages:</h4>
          <div className="status-messages">
            <div className="status loading">{t('Common.loading')}</div>
            <div className="status error">{t('Common.error')}</div>
            <div className="status success">{t('Common.success')}</div>
          </div>
        </div>
      </div>

      <div className="translation-demo__code">
        <h3>How to Use:</h3>
        <pre><code>{`import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('HomePage.title')}</h1>
      <button>{t('Buttons.book')}</button>
    </div>
  );
};`}</code></pre>
      </div>
    </div>
  );
};

export default TranslationDemo;

