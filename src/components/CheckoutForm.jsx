// src/components/CheckoutForm.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './CheckoutForm.scss';

const CheckoutForm = ({ tourPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    // 1. Get client_secret from our backend
    // In real life this will be a fetch request
    // const response = await fetch('/api/create-payment-intent', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ amount: tourPrice * 100 }) // Price in cents
    // });
    // const { clientSecret } = await response.json();
    
    // For template, we simulate getting clientSecret
    const clientSecret = 'sk_test_..._dummy_secret'; // This is a fake key for demonstration

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`Pagamento non riuscito: ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      // Redirect to success page
      setTimeout(() => navigate('/payment-success'), 1500);
    }
  };
  
  if (succeeded) {
    return (
      <div className="payment-success">
        <h2>Grazie!</h2>
        <p>La tua prenotazione è confermata. La ricevuta è stata inviata alla tua email.</p>
      </div>
    );
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <h3 className="section-title">Pagamento Sicuro</h3>
      <CardElement 
        id="card-element" 
        options={{ 
          hidePostalCode: true,
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
        }} 
      />
      <button disabled={processing || !stripe || !elements} id="submit">
        <span id="button-text">
          {processing ? "Elaborazione..." : `Paga ${tourPrice}€`}
        </span>
      </button>
      {error && <div className="card-error" role="alert">{error}</div>}
      
      <div className="security-note">
        🔒 Pagamento sicuro protetto da Stripe
      </div>
    </form>
  );
};

export default CheckoutForm;

