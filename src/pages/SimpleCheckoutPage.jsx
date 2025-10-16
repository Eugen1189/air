// src/pages/SimpleCheckoutPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';
import { tourDetails } from '../data/toursData';

// Your Stripe publishable key
// IMPORTANT: Replace with your actual key from https://dashboard.stripe.com/apikeys
const stripePromise = loadStripe('pk_test_YOUR_PUBLISHABLE_KEY_HERE');

const SimpleCheckoutPage = () => {
  const { id } = useParams();
  const tour = tourDetails[id] || tourDetails[1];

  return (
    <div className="container" style={{ padding: '100px 20px 60px', maxWidth: '900px', margin: '0 auto' }}>
      {/* Tour Information */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '30px',
        borderRadius: '16px',
        marginBottom: '40px'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '15px', color: '#0A2342' }}>
          Checkout
        </h1>
        
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
          <img
            src={tour.gallery[0].src}
            alt={tour.title}
            style={{
              width: '150px',
              height: '100px',
              objectFit: 'cover',
              borderRadius: '8px'
            }}
          />
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#0A2342' }}>
              {tour.title}
            </h2>
            <p style={{ color: '#6c757d', marginBottom: '5px' }}>
              ⏱️ {tour.duration}
            </p>
            <p style={{ color: '#6c757d' }}>
              💰 Prezzo: {tour.price}€ per persona
            </p>
          </div>
        </div>

        <div style={{
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '8px'
        }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', color: '#0A2342' }}>
            Cosa è incluso:
          </h3>
          <ul style={{ margin: 0, paddingLeft: '20px', color: '#333' }}>
            {tour.included.slice(0, 3).map((item, index) => (
              <li key={index} style={{ marginBottom: '8px' }}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Payment Form wrapped in Stripe Elements */}
      <Elements stripe={stripePromise}>
        <CheckoutForm tourPrice={tour.price} />
      </Elements>

      {/* Additional Info */}
      <div style={{
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#fff3cd',
        borderRadius: '12px',
        border: '1px solid #ffc107'
      }}>
        <p style={{ margin: 0, fontSize: '0.95rem', color: '#856404' }}>
          💡 <strong>Nota:</strong> Questa è una demo. In produzione, sostituisci la chiave Stripe 
          e configura il backend per elaborare i pagamenti reali.
        </p>
      </div>

      {/* Test Cards Info */}
      <div style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#d1ecf1',
        borderRadius: '12px',
        border: '1px solid #17a2b8'
      }}>
        <h4 style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#0c5460' }}>
          🧪 Carte di Test Stripe
        </h4>
        <p style={{ margin: '0 0 10px', fontSize: '0.9rem', color: '#0c5460' }}>
          Usa queste carte per testare i pagamenti:
        </p>
        <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.9rem', color: '#0c5460' }}>
          <li><strong>Successo:</strong> 4242 4242 4242 4242</li>
          <li><strong>Fallimento:</strong> 4000 0000 0000 9995</li>
          <li><strong>Data:</strong> Qualsiasi data futura (es. 12/34)</li>
          <li><strong>CVC:</strong> Qualsiasi 3 cifre (es. 123)</li>
        </ul>
      </div>
    </div>
  );
};

export default SimpleCheckoutPage;

