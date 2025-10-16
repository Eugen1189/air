// src/components/StripeWrapper.jsx
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// IMPORTANT: Replace with your actual Stripe publishable key
// Get it from: https://dashboard.stripe.com/apikeys
const stripePromise = loadStripe('pk_test_YOUR_PUBLISHABLE_KEY_HERE');

const StripeWrapper = ({ children }) => {
  const options = {
    // Appearance customization
    appearance: {
      theme: 'stripe',
      variables: {
        colorPrimary: '#D9795D',
        colorBackground: '#ffffff',
        colorText: '#333333',
        colorDanger: '#dc3545',
        fontFamily: 'Inter, sans-serif',
        spacingUnit: '4px',
        borderRadius: '8px',
      },
    },
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      {children}
    </Elements>
  );
};

export default StripeWrapper;

