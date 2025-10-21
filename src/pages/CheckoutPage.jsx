// src/pages/CheckoutPage.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StripeWrapper from '../components/StripeWrapper';
import PaymentForm from '../components/PaymentForm';
import { tourDetails } from '../data/toursData';
import { collectionTours } from '../data/collectionTours';
import { allTours } from '../data/allTours';
import './CheckoutPage.scss';

const CheckoutPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Спочатку намагаємося знайти тур в tourDetails
  let tour = tourDetails[id];
  
  // Якщо не знайдено, шукаємо в колекційних турах
  if (!tour) {
    // Шукаємо в усіх колекціях
    for (const collection of Object.values(collectionTours)) {
      const foundTour = collection.find(t => t.id === id || t.slug === id);
      if (foundTour) {
        tour = foundTour;
        break;
      }
    }
  }
  
  // Якщо все ще не знайдено, шукаємо в об'єднаному списку
  if (!tour) {
    tour = allTours.find(t => t.id === id || t.slug === id);
  }
  const [bookingDetails, setBookingDetails] = useState({
    guests: 1,
    date: '',
    name: '',
    email: '',
  });

  if (!tour) {
    return (
      <div className="error-page">
        <h1>Tour non trovato</h1>
        <p>Il tour che stai cercando non esiste.</p>
      </div>
    );
  }

  // Розрахунок загальної суми з урахуванням різних форматів ціни
  const tourPrice = typeof tour.price === 'string' ? parseInt(tour.price) : tour.price;
  const totalAmount = tourPrice * bookingDetails.guests;

  const handlePaymentSuccess = (paymentIntent) => {
    console.log('Payment successful:', paymentIntent);
    alert('Pagamento completato con successo! Riceverai una conferma via email.');
    navigate('/');
  };

  const handleInputChange = (e) => {
    setBookingDetails({
      ...bookingDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="checkout-page">
      {/* Header */}
      <div className="checkout-header">
        <h1 className="section-title">
          Checkout
        </h1>
        <p className="section-subtitle">
          Completa la prenotazione per il tuo viaggio
        </p>
      </div>

      <div className="checkout-layout">
        {/* Left Column - Booking Details */}
        <div>
          {/* Tour Summary */}
          <div className="tour-summary-card">
            <h2>
              Riepilogo Tour
            </h2>
            <div className="tour-summary-content">
              <img
                src={tour.gallery?.[0]?.src || tour.imageUrl || tour.image}
                alt={tour.title}
                className="tour-image"
              />
              <div className="tour-info">
                <h3>
                  {tour.title}
                </h3>
                <p>
                  ⏱️ {tour.duration || tour.details}
                </p>
                <p>
                  👥 {tour.groupSize || 'Fino a 12 persone'}
                </p>
                <p>
                  🏔️ Difficoltà: {tour.difficulty || 'Facile'}
                </p>
                {tour.subtitle && (
                  <p style={{ color: '#6c757d', fontSize: '14px' }}>
                    {tour.subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="booking-details-form">
            <h2>
              Dettagli Prenotazione
            </h2>

            <div className="form-group">
              <input
                type="text"
                name="name"
                value={bookingDetails.name}
                onChange={handleInputChange}
                required
                placeholder=" "
                className="form-input"
              />
              <label className="form-label">
                Nome Completo *
              </label>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={bookingDetails.email}
                onChange={handleInputChange}
                required
                placeholder=" "
                className="form-input"
              />
              <label className="form-label">
                Email *
              </label>
            </div>

            <div className="form-group">
              <input
                type="date"
                name="date"
                value={bookingDetails.date}
                onChange={handleInputChange}
                required
                min={new Date().toISOString().split('T')[0]}
                placeholder=" "
                className="form-input"
              />
              <label className="form-label">
                Data Partenza *
              </label>
            </div>

            <div className="form-group">
              <input
                type="number"
                name="guests"
                value={bookingDetails.guests}
                onChange={handleInputChange}
                min="1"
                max="15"
                required
                placeholder=" "
                className="form-input"
              />
              <label className="form-label">
                Numero di Persone *
              </label>
            </div>
          </div>
        </div>

        {/* Right Column - Payment */}
        <div>
          {/* Price Summary */}
          <div className="price-summary-card">
            <h2>
              Riepilogo Prezzo
            </h2>

            <div className="price-item">
              <span className="price-label">Prezzo per persona</span>
              <span className="price-value">{tourPrice}€</span>
            </div>

            <div className="price-item">
              <span className="price-label">Numero di persone</span>
              <span className="price-value">× {bookingDetails.guests}</span>
            </div>

            <div className="price-total">
              <span>Totale</span>
              <span>{totalAmount}€</span>
            </div>
          </div>

          {/* Payment Form */}
          <div className="payment-form-card">
            <h2>
              Informazioni di Pagamento
            </h2>

            <StripeWrapper>
              <PaymentForm
                amount={totalAmount}
                tourTitle={tour.title}
                onSuccess={handlePaymentSuccess}
              />
            </StripeWrapper>
          </div>

          {/* Trust Badges */}
          <div className="trust-badges">
            <p>
              ✓ Pagamento sicuro con crittografia SSL
            </p>
            <p>
              ✓ Cancellazione gratuita fino a 45 giorni prima
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

