// src/components/BookingWidget.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingSchema } from '../schemas/bookingSchema';

const BookingWidget = () => {
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
      // !!! ВАЖЛИВО: Замініть URL на вашу реальну API-адресу !!!
      const response = await fetch('https://api.example.com/book-tour', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Помилка мережі або сервера.');
      }

      const result = await response.json();
      setServerMessage({ type: 'success', text: 'Ваша заявка успішно відправлена!' });

    } catch (error) {
      setServerMessage({ type: 'error', text: 'Виникла помилка. Спробуйте ще раз.' });
    }
  };

  return (
    <div className="booking-widget">
      <div className="booking-widget__price">
        1200€ <span>/ за особу</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Ім'я</label>
          <input id="name" {...register('name')} className="form-input" />
          {errors.name && <p className="form-error">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input id="email" type="email" {...register('email')} className="form-input" />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="date" className="form-label">Дата</label>
          <input id="date" type="date" {...register('date')} className="form-input" />
          {errors.date && <p className="form-error">{errors.date.message}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="guests" className="form-label">Кількість гостей</label>
          <input id="guests" type="number" defaultValue="1" {...register('guests')} className="form-input" />
          {errors.guests && <p className="form-error">{errors.guests.message}</p>}
        </div>

        <button type="submit" className="booking-widget__button" disabled={isSubmitting}>
          {isSubmitting ? 'Відправка...' : 'Забронювати'}
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

