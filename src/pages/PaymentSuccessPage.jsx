// src/pages/PaymentSuccessPage.jsx
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PaymentSuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Optional: Auto redirect to home after 10 seconds
    const timer = setTimeout(() => {
      // navigate('/');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '600px',
        textAlign: 'center',
        backgroundColor: 'white',
        padding: '60px 40px',
        borderRadius: '20px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
      }}>
        {/* Success Icon */}
        <div style={{
          width: '100px',
          height: '100px',
          backgroundColor: '#28a745',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 30px',
          fontSize: '3rem'
        }}>
          ✓
        </div>

        {/* Success Message */}
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '20px',
          color: '#0A2342'
        }}>
          Pagamento Completato!
        </h1>

        <p style={{
          fontSize: '1.2rem',
          color: '#6c757d',
          marginBottom: '30px',
          lineHeight: '1.6'
        }}>
          Grazie per la tua prenotazione! Riceverai una conferma via email 
          con tutti i dettagli del tuo viaggio entro pochi minuti.
        </p>

        {/* Booking Details */}
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '25px',
          borderRadius: '12px',
          marginBottom: '30px',
          textAlign: 'left'
        }}>
          <h3 style={{
            fontSize: '1.3rem',
            marginBottom: '15px',
            color: '#0A2342'
          }}>
            Cosa Succede Ora?
          </h3>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'start', gap: '10px' }}>
              <span>✉️</span>
              <span>Riceverai un'email di conferma con i dettagli della prenotazione</span>
            </li>
            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'start', gap: '10px' }}>
              <span>📱</span>
              <span>Verrai aggiunto alla chat di gruppo del tour su Telegram/WhatsApp</span>
            </li>
            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'start', gap: '10px' }}>
              <span>📋</span>
              <span>Riceverai informazioni dettagliate su cosa portare e documenti necessari</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'start', gap: '10px' }}>
              <span>🎉</span>
              <span>Preparati per un'avventura indimenticabile!</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/"
            style={{
              padding: '15px 35px',
              backgroundColor: '#D9795D',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c4684d'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#D9795D'}
          >
            Torna alla Home
          </Link>

          <Link
            to="/tours"
            style={{
              padding: '15px 35px',
              backgroundColor: 'transparent',
              color: '#0A2342',
              border: '2px solid #0A2342',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0A2342';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#0A2342';
            }}
          >
            Esplora Altri Tour
          </Link>
        </div>

        {/* Support Contact */}
        <p style={{
          marginTop: '40px',
          fontSize: '0.95rem',
          color: '#6c757d'
        }}>
          Domande? <a href="mailto:info@airtour.it" style={{ color: '#D9795D', fontWeight: '600' }}>Contattaci</a>
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;

