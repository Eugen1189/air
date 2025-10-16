// src/pages/CheckoutPage.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StripeWrapper from '../components/StripeWrapper';
import PaymentForm from '../components/PaymentForm';
import { tourDetails } from '../data/toursData';

const CheckoutPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tour = tourDetails[id];
  const [bookingDetails, setBookingDetails] = useState({
    guests: 1,
    date: '',
    name: '',
    email: '',
  });

  if (!tour) {
    return (
      <div style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>Tour non trovato</h1>
        <p>Il tour che stai cercando non esiste.</p>
      </div>
    );
  }

  const totalAmount = tour.price * bookingDetails.guests;

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
    <div style={{ padding: '100px 20px 60px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#0A2342' }}>
          Checkout
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#6c757d' }}>
          Completa la prenotazione per il tuo viaggio
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '40px',
        '@media (min-width: 768px)': {
          gridTemplateColumns: '1.5fr 1fr'
        }
      }}>
        {/* Left Column - Booking Details */}
        <div>
          {/* Tour Summary */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '30px',
            borderRadius: '16px',
            marginBottom: '30px'
          }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#0A2342' }}>
              Riepilogo Tour
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '150px 1fr',
              gap: '20px',
              alignItems: 'start'
            }}>
              <img
                src={tour.gallery[0].src}
                alt={tour.title}
                style={{
                  width: '100%',
                  height: '120px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#0A2342' }}>
                  {tour.title}
                </h3>
                <p style={{ color: '#6c757d', marginBottom: '5px' }}>
                  ⏱️ {tour.duration}
                </p>
                <p style={{ color: '#6c757d', marginBottom: '5px' }}>
                  👥 {tour.groupSize}
                </p>
                <p style={{ color: '#6c757d' }}>
                  🏔️ Difficoltà: {tour.difficulty}
                </p>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '16px',
            border: '2px solid #e0e0e0'
          }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '25px', color: '#0A2342' }}>
              Dettagli Prenotazione
            </h2>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#333' }}>
                Nome Completo *
              </label>
              <input
                type="text"
                name="name"
                value={bookingDetails.name}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#333' }}>
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={bookingDetails.email}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#333' }}>
                Data Partenza *
              </label>
              <input
                type="date"
                name="date"
                value={bookingDetails.date}
                onChange={handleInputChange}
                required
                min={new Date().toISOString().split('T')[0]}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#333' }}>
                Numero di Persone *
              </label>
              <input
                type="number"
                name="guests"
                value={bookingDetails.guests}
                onChange={handleInputChange}
                min="1"
                max="15"
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Column - Payment */}
        <div>
          {/* Price Summary */}
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '16px',
            border: '2px solid #e0e0e0',
            marginBottom: '30px'
          }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '25px', color: '#0A2342' }}>
              Riepilogo Prezzo
            </h2>

            <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#6c757d' }}>Prezzo per persona</span>
              <span style={{ fontWeight: '600' }}>{tour.price}€</span>
            </div>

            <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#6c757d' }}>Numero di persone</span>
              <span style={{ fontWeight: '600' }}>× {bookingDetails.guests}</span>
            </div>

            <div style={{
              borderTop: '2px solid #e0e0e0',
              paddingTop: '15px',
              marginTop: '15px',
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#0A2342'
            }}>
              <span>Totale</span>
              <span>{totalAmount}€</span>
            </div>
          </div>

          {/* Payment Form */}
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '16px',
            border: '2px solid #D9795D'
          }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '25px', color: '#0A2342' }}>
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
          <div style={{
            marginTop: '20px',
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <p style={{ margin: '0 0 10px', fontSize: '0.9rem', color: '#6c757d' }}>
              ✓ Pagamento sicuro con crittografia SSL
            </p>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#6c757d' }}>
              ✓ Cancellazione gratuita fino a 45 giorni prima
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

