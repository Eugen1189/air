// src/components/BookingWidget.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { bookingSchema } from '../schemas/bookingSchema';
import './BookingWidget.scss';

const BookingWidget = () => {
  const { t } = useTranslation();
  const [serverMessage, setServerMessage] = useState({ type: '', text: '' });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data) => {
    setServerMessage({ type: '', text: '' });
    try {
      // !!! IMPORTANT: Replace URL with your actual API address !!!
      const response = await fetch('https://api.example.com/book-tour', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Errore di rete o del server.');
      }

      const result = await response.json();
      setServerMessage({ type: 'success', text: t('Common.success') });

    } catch (error) {
      setServerMessage({ type: 'error', text: t('Common.error') });
    }
  };

  return (
    <div className="booking-widget">
      <div className="booking-widget__price">
        1200€ <span>/ {t('BookingWidget.pricePerPerson')}</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-group">
          <input id="name" {...register('name')} className="form-input" placeholder=" " />
          <label htmlFor="name" className="form-label">{t('Contacts.name')}</label>
          {errors.name && <p className="form-error">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <input id="email" type="email" {...register('email')} className="form-input" placeholder=" " />
          <label htmlFor="email" className="form-label">{t('Contacts.email')}</label>
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <input id="date" type="date" {...register('date')} className="form-input" placeholder=" " />
          <label htmlFor="date" className="form-label">{t('BookingWidget.dateFrom')}</label>
          {errors.date && <p className="form-error">{errors.date.message}</p>}
        </div>
        
        <div className="form-group">
          <input id="guests" type="number" defaultValue="1" {...register('guests')} className="form-input" placeholder=" " />
          <label htmlFor="guests" className="form-label">{t('BookingWidget.guests')}</label>
          {errors.guests && <p className="form-error">{errors.guests.message}</p>}
        </div>

        <button type="submit" className="booking-widget__button" disabled={isSubmitting}>
          {isSubmitting ? t('Common.loading') : t('Buttons.book')}
        </button>

        {serverMessage.text && (
          <p className={`server-message server-message--${serverMessage.type}`}>
            {serverMessage.text}
          </p>
        )}
      </form>
    </div>
  );
};

export default BookingWidget;

