import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '../Logo/Logo';
import { FaInstagram, FaFacebookF, FaTelegramPlane, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const SiteFooter = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      {/* Animated Wave Background */}
      <div className="footer-background">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="100%" height="100%" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice">
          <defs>
            <linearGradient id="bg" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: 'rgba(100, 181, 246, 0.5)'}}></stop>
              <stop offset="100%" style={{stopColor: 'rgba(129, 212, 250, 0.2)'}}></stop>
            </linearGradient>
            <path id="wave" fill="url(#bg)" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
              s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106h-2303.957V502.589z" />
          </defs>
          <g>
            <use xlinkHref='#wave' opacity='.4'>
              <animateTransform 
                attributeName="transform" 
                attributeType="XML" 
                type="translate" 
                dur="8s"
                calcMode="spline" 
                values="270 230; -334 180; 270 230" 
                keyTimes="0; .5; 1"
                keySplines="0.42, 0, 0.58, 1.0; 0.42, 0, 0.58, 1.0" 
                repeatCount="indefinite" />
            </use>
            <use xlinkHref='#wave' opacity='.6'>
              <animateTransform 
                attributeName="transform" 
                attributeType="XML" 
                type="translate" 
                dur="6s"
                calcMode="spline" 
                values="-270 230;243 220;-270 230" 
                keyTimes="0; .6; 1"
                keySplines="0.42, 0, 0.58, 1.0; 0.42, 0, 0.58, 1.0" 
                repeatCount="indefinite" />
            </use>
            <use xlinkHref='#wave' opacity='.9'>
              <animateTransform 
                attributeName="transform" 
                attributeType="XML" 
                type="translate" 
                dur="4s"
                calcMode="spline" 
                values="0 230;-140 200;0 230" 
                keyTimes="0; .4; 1"
                keySplines="0.42, 0, 0.58, 1.0; 0.42, 0, 0.58, 1.0" 
                repeatCount="indefinite" />
            </use>
          </g>
        </svg>
      </div>
      
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
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <FaTelegramPlane />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
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
              <a href="tel:+390612345678" className="contact-link">
                <FaPhone className="contact-icon" />
                <span>+39 06 1234 5678</span>
              </a>
            </li>
            <li>
              <a href="tel:+390687654321" className="contact-link">
                <FaPhone className="contact-icon" />
                <span>+39 06 8765 4321</span>
              </a>
            </li>
            <li>
              <a href="mailto:info@volare-travel.com" className="contact-link">
                <FaEnvelope className="contact-icon" />
                <span>info@volare-travel.com</span>
              </a>
            </li>
            <li>
              <a href="mailto:booking@volare-travel.com" className="contact-link">
                <FaEnvelope className="contact-icon" />
                <span>booking@volare-travel.com</span>
              </a>
            </li>
            <li className="address-item">
              <div className="contact-link">
                <FaMapMarkerAlt className="contact-icon contact-icon--address" />
                <span>
                  Roma, Via del Corso, 1<br/>
                  Centro "Galleria", ufficio 203
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p>&copy; {currentYear} Elysian Ways. {t('Footer.allRightsReserved')}.</p>
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

