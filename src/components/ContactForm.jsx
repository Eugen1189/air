import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
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
    <div className="contact-form">
      <h3>{t('Contacts.sendMessage')}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            placeholder=" " // Важливо: пробіл, а не порожній рядок
            required
          />
          <label htmlFor="name" className="form-label">
            {t('Contacts.fullName')} *
          </label>
        </div>

        <div className="form-group">
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder=" " // Важливо: пробіл, а не порожній рядок
            required
          />
          <label htmlFor="email" className="form-label">
            {t('Contacts.email')} *
          </label>
        </div>

        <div className="form-group">
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            placeholder=" " // Важливо: пробіл, а не порожній рядок
          />
          <label htmlFor="phone" className="form-label">
            {t('Contacts.phone')}
          </label>
        </div>

        <div className="form-group">
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-input"
            required
          >
            <option value="">{t('Contacts.selectOption')}</option>
            <option value="info">{t('Contacts.infoRequest')}</option>
            <option value="booking">{t('Contacts.bookingRequest')}</option>
            <option value="custom">{t('Contacts.customTour')}</option>
            <option value="support">{t('Contacts.support')}</option>
            <option value="other">{t('Contacts.other')}</option>
          </select>
          <label htmlFor="subject" className="form-label">
            {t('Contacts.subject')} *
          </label>
        </div>

        <div className="form-group">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-input"
            placeholder=" " // Важливо: пробіл, а не порожній рядок
            rows="6"
            required
          />
          <label htmlFor="message" className="form-label">
            {t('Contacts.message')} *
          </label>
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
  );
};

export default ContactForm;
