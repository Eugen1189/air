import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
    <div style={{ padding: '100px 20px 60px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#0A2342' }}>
          {t('Contacts.title')}
        </h1>
        <p style={{ fontSize: '1.3rem', color: '#6c757d', maxWidth: '700px', margin: '0 auto' }}>
          {t('Contacts.subtitle')}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '50px' }}>
        {/* Contact Form */}
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '25px', color: '#0A2342' }}>
            {t('Contacts.sendMessage')}
          </h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>
                {t('Contacts.fullName')} *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '15px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>
                {t('Contacts.email')} *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '15px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>
                {t('Contacts.phone')}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '15px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>
                {t('Contacts.subject')} *
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '15px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              >
                <option value="">{t('Contacts.selectOption')}</option>
                <option value="info">{t('Contacts.infoRequest')}</option>
                <option value="booking">{t('Contacts.bookingRequest')}</option>
                <option value="custom">{t('Contacts.customTour')}</option>
                <option value="support">{t('Contacts.support')}</option>
                <option value="other">{t('Contacts.other')}</option>
              </select>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>
                {t('Contacts.message')} *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                style={{
                  width: '100%',
                  padding: '15px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '18px',
                backgroundColor: '#D9795D',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c4684d'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#D9795D'}
            >
              {t('Contacts.send')}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '25px', color: '#0A2342' }}>
            {t('Contacts.contactInfo')}
          </h2>

          {/* Contact Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
            <div style={{
              padding: '25px',
              backgroundColor: '#f8f9fa',
              borderRadius: '12px',
              borderLeft: '4px solid #D9795D'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📍</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: '#0A2342' }}>{t('Contacts.address')}</h3>
              <p style={{ color: '#6c757d', lineHeight: '1.6', margin: 0 }}>
                Roma, Via del Corso, 1<br />
                Centro "Galleria", ufficio 203<br />
                00186 Roma, Italia
              </p>
            </div>

            <div style={{
              padding: '25px',
              backgroundColor: '#f8f9fa',
              borderRadius: '12px',
              borderLeft: '4px solid #D9795D'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📞</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: '#0A2342' }}>{t('Contacts.phone')}</h3>
              <p style={{ color: '#6c757d', lineHeight: '1.6', margin: 0 }}>
                <a href="tel:+390612345678" style={{ color: '#6c757d', textDecoration: 'none' }}>
                  +39 06 1234 5678
                </a><br />
                <a href="tel:+390687654321" style={{ color: '#6c757d', textDecoration: 'none' }}>
                  +39 06 8765 4321
                </a>
              </p>
            </div>

            <div style={{
              padding: '25px',
              backgroundColor: '#f8f9fa',
              borderRadius: '12px',
              borderLeft: '4px solid #D9795D'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>✉️</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: '#0A2342' }}>{t('Contacts.email')}</h3>
              <p style={{ color: '#6c757d', lineHeight: '1.6', margin: 0 }}>
                <a href="mailto:info@airtour.it" style={{ color: '#6c757d', textDecoration: 'none' }}>
                  info@airtour.it
                </a><br />
                <a href="mailto:booking@airtour.it" style={{ color: '#6c757d', textDecoration: 'none' }}>
                  booking@airtour.it
                </a>
              </p>
            </div>

            <div style={{
              padding: '25px',
              backgroundColor: '#f8f9fa',
              borderRadius: '12px',
              borderLeft: '4px solid #D9795D'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🕒</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: '#0A2342' }}>{t('Contacts.workingHours')}</h3>
              <p style={{ color: '#6c757d', lineHeight: '1.6', margin: 0 }}>
                {t('Contacts.mondayFriday')}<br />
                {t('Contacts.saturday')}<br />
                {t('Contacts.sunday')}
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div style={{
            padding: '30px',
            backgroundColor: '#0A2342',
            borderRadius: '12px',
            color: 'white',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>{t('Contacts.followSocial')}</h3>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', fontSize: '2rem' }}>
              <a href="https://instagram.com" style={{ color: 'white' }}>📷</a>
              <a href="https://facebook.com" style={{ color: 'white' }}>👥</a>
              <a href="https://t.me" style={{ color: 'white' }}>✈️</a>
              <a href="https://youtube.com" style={{ color: 'white' }}>📹</a>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div style={{ marginTop: '60px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '25px', textAlign: 'center', color: '#0A2342' }}>
          {t('Contacts.visitUs')}
        </h2>
        <div style={{
          width: '100%',
          height: '400px',
          backgroundColor: '#e0e0e0',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#6c757d',
          fontSize: '1.2rem'
        }}>
          🗺️ {t('Contacts.mapPlaceholder')}
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;

