import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '../Logo/Logo';

const SiteFooter = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-column footer-column--brand">
          <div className="footer-logo">
            <Logo variant="default" theme="dark" />
          </div>
          <p className="footer-tagline">
            {t('Footer.tagline')}
          </p>
          <div className="footer-social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              📷 Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              👥 Facebook
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              ✈️ Telegram
            </a>
          </div>
        </div>

        <div className="footer-column footer-column--navigation">
          <h4 className="footer-column__title">{t('Footer.navigation')}</h4>
          <ul className="footer-links-list">
            <li><Link to="/tours">{t('Navigation.allTours')}</Link></li>
            <li><Link to="/#about">{t('Navigation.aboutUs')}</Link></li>
            <li><Link to="/blog">{t('Navigation.blog')}</Link></li>
            <li><a href="/reviews">{t('TourPage.reviews')}</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><Link to="/contacts">{t('Navigation.contacts')}</Link></li>
          </ul>
        </div>

        <div className="footer-column footer-column--contact">
          <h4 className="footer-column__title">{t('Footer.contactUs')}</h4>
          <ul className="footer-links-list">
            <li>
              <a href="tel:+390612345678">📞 +39 06 1234 5678</a>
            </li>
            <li>
              <a href="tel:+390687654321">📞 +39 06 8765 4321</a>
            </li>
            <li>
              <a href="mailto:info@airtour.it">✉️ info@airtour.it</a>
            </li>
            <li>
              <a href="mailto:booking@airtour.it">✉️ booking@airtour.it</a>
            </li>
            <li style={{ marginTop: '10px' }}>
              <p style={{ margin: 0 }}>📍 Roma, Via del Corso, 1<br/>Centro "Galleria", ufficio 203</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p>&copy; {currentYear} Air Tour. {t('Footer.allRightsReserved')}.</p>
        <p>
          <a href="/privacy">{t('Footer.privacy')}</a>
          {' • '}
          <a href="/terms">{t('Footer.terms')}</a>
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;

