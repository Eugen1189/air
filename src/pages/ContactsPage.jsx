import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaFacebookF, FaTelegramPlane, FaYoutube } from 'react-icons/fa';
import './ContactsPage.scss';

const ContactsPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('Contacts.thankYou'));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contacts-page">
      {/* Header */}
      <div className="contacts-header">
        <h1>{t('Contacts.title')}</h1>
        <p>{t('Contacts.subtitle')}</p>
      </div>

      <div className="contacts-grid">
        {/* Contact Form */}
        <div className="contact-form-section">
          <h2>{t('Contacts.sendMessage')}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>{t('Contacts.fullName')} *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>{t('Contacts.email')} *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>{t('Contacts.phone')}</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>{t('Contacts.subject')} *</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">{t('Contacts.selectOption')}</option>
                <option value="info">{t('Contacts.infoRequest')}</option>
                <option value="booking">{t('Contacts.bookingRequest')}</option>
                <option value="custom">{t('Contacts.customTour')}</option>
                <option value="support">{t('Contacts.support')}</option>
                <option value="other">{t('Contacts.other')}</option>
              </select>
            </div>

            <div className="form-group">
              <label>{t('Contacts.message')} *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
              />
            </div>

            <button
              type="submit"
              className="submit-button"
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c4684d'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#D9795D'}
            >
              {t('Contacts.send')}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info-section">
          <h2>{t('Contacts.contactInfo')}</h2>

          {/* Contact Cards */}
          <div className="contact-info-cards">
            <div className="contact-card">
              <h3>📍 {t('Contacts.address')}</h3>
              <p>
                Roma, Via del Corso, 1<br />
                Centro "Galleria", ufficio 203<br />
                00186 Roma, Italia
              </p>
            </div>

            <div className="contact-card">
              <h3>📞 {t('Contacts.phone')}</h3>
              <p>
                <a href="tel:+390612345678">+39 06 1234 5678</a><br />
                <a href="tel:+390687654321">+39 06 8765 4321</a>
              </p>
            </div>

            <div className="contact-card">
              <h3>✉️ {t('Contacts.email')}</h3>
              <p>
                <a href="mailto:info@airtour.it">info@airtour.it</a><br />
                <a href="mailto:booking@airtour.it">booking@airtour.it</a>
              </p>
            </div>

            <div className="contact-card">
              <h3>🕒 {t('Contacts.workingHours')}</h3>
              <p>
                {t('Contacts.mondayFriday')}<br />
                {t('Contacts.saturday')}<br />
                {t('Contacts.sunday')}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <h2>{t('Contacts.visitUs')}</h2>
        <div className="map-placeholder">
          🗺️ {t('Contacts.mapPlaceholder')}
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;

