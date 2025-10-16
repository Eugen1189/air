// src/components/PaymentForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = ({ amount, tourTitle, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't loaded yet
      return;
    }

    setIsProcessing(true);
    setErrorMessage('');

    try {
      // IMPORTANT: Replace with your actual backend API endpoint
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount * 100, // Stripe uses cents
          currency: 'eur',
          tourTitle: tourTitle,
        }),
      });

      const { clientSecret } = await response.json();

      // Confirm payment with Stripe
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setErrorMessage(result.error.message);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          // Payment successful
          if (onSuccess) {
            onSuccess(result.paymentIntent);
          }
          // Redirect to success page
          navigate('/payment-success');
        }
      }
    } catch (error) {
      setErrorMessage('Si è verificato un errore durante il pagamento. Riprova.');
    } finally {
      setIsProcessing(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#333',
        fontFamily: 'Inter, sans-serif',
        '::placeholder': {
          color: '#999',
        },
      },
      invalid: {
        color: '#dc3545',
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      {/* Card Element */}
      <div style={{
        padding: '15px',
        border: '2px solid #e0e0e0',
        borderRadius: '8px',
        marginBottom: '20px',
        backgroundColor: 'white'
      }}>
        <CardElement options={cardElementOptions} />
      </div>

      {/* Error Message */}
      {errorMessage && (
        <div style={{
          padding: '12px',
          backgroundColor: '#f8d7da',
          color: '#721c24',
          borderRadius: '8px',
          marginBottom: '20px',
          fontSize: '0.95rem'
        }}>
          {errorMessage}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        style={{
          width: '100%',
          padding: '16px',
          backgroundColor: isProcessing ? '#6c757d' : '#D9795D',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1.1rem',
          fontWeight: '700',
          cursor: isProcessing ? 'not-allowed' : 'pointer',
          transition: 'background-color 0.3s ease',
          opacity: !stripe || isProcessing ? 0.7 : 1
        }}
      >
        {isProcessing ? 'Elaborazione...' : `Paga ${amount}€`}
      </button>

      {/* Security Note */}
      <div style={{
        marginTop: '15px',
        textAlign: 'center',
        fontSize: '0.85rem',
        color: '#6c757d'
      }}>
        🔒 Pagamento sicuro protetto da Stripe
      </div>
    </form>
  );
};

export default PaymentForm;

