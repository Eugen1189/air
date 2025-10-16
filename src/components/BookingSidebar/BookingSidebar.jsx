import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSticky } from '../../hooks/useSticky';

const BookingSidebar = ({ price = '950' }) => {
  const { t } = useTranslation();
  const { elementRef, isSticky } = useSticky();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate(`/checkout/${id}`);
  };

  return (
    <aside 
      ref={elementRef} 
      className={`tour-sidebar ${isSticky ? 'is-sticky' : ''}`}
    >
      <div className="booking-widget">
        <div className="booking-widget__price">
          {price}€ <span>/ {t('BookingWidget.pricePerPerson')}</span>
        </div>
        
        <div className="form-group">
          <label className="form-label">{t('BookingWidget.dateFrom')}</label>
          <input type="date" className="form-input" />
        </div>
        
        <div className="form-group">
          <label className="form-label">{t('BookingWidget.guests')}</label>
          <input type="number" className="form-input" min="1" defaultValue="2" />
        </div>
        
        <button 
          className="booking-widget__button"
          onClick={handleBookingClick}
        >
          {t('BookingWidget.bookTour')}
        </button>
        
        <p style={{ fontSize: '14px', color: '#6c757d', marginTop: '15px', textAlign: 'center' }}>
          {t('BookingWidget.noCommission')} • {t('BookingWidget.instantConfirm')}
        </p>
      </div>
    </aside>
  );
};

export default BookingSidebar;

