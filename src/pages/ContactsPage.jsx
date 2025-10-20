import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaFacebookF, FaTelegramPlane, FaYoutube } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import GoogleMap from '../components/GoogleMap';
import './ContactsPage.scss';

const ContactsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="contacts-page">
      {/* Header */}
      <div className="contacts-header">
        <h1 className="section-title">{t('Contacts.title')}</h1>
        <p className="section-subtitle">{t('Contacts.subtitle')}</p>
      </div>

      <div className="contacts-grid contact-layout">
        {/* Contact Form */}
        <div className="contact-form-section">
          <ContactForm />
        </div>

        {/* Contact Info */}
        <div className="contact-info-section">
          <div className="contact-info-panel">
            <h3>{t('Contacts.contactInfo')}</h3>

            {/* Contact Info Items */}
            <div className="info-item">
              <div className="icon">📍</div>
              <div className="text">
                <strong>{t('Contacts.address')}</strong>
                <p>
                  Roma, Via del Corso, 1<br />
                  Centro "Galleria", ufficio 203<br />
                  00186 Roma, Italia
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">📞</div>
              <div className="text">
                <strong>{t('Contacts.phone')}</strong>
                <p>
                  <a href="tel:+390612345678">+39 06 1234 5678</a><br />
                  <a href="tel:+390687654321">+39 06 8765 4321</a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">✉️</div>
              <div className="text">
                <strong>{t('Contacts.email')}</strong>
                <p>
                  <a href="mailto:info@airtour.it">info@airtour.it</a><br />
                  <a href="mailto:booking@airtour.it">booking@airtour.it</a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">🕒</div>
              <div className="text">
                <strong>{t('Contacts.workingHours')}</strong>
                <p>
                  {t('Contacts.mondayFriday')}<br />
                  {t('Contacts.saturday')}<br />
                  {t('Contacts.sunday')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <h2 className="section-title">Vieni a Trovarci</h2>
        <GoogleMap />
      </div>
    </div>
  );
};

export default ContactsPage;

