// src/utils/mockStripeApi.js
// Mock API endpoint to simulate Stripe payment intent creation
// In production, this should be a real backend API endpoint

export const createPaymentIntent = async ({ amount, currency, tourTitle }) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Mock response that simulates what your backend would return
  // In real implementation, your backend would call:
  // const paymentIntent = await stripe.paymentIntents.create({
  //   amount: amount,
  //   currency: currency,
  // });
  
  return {
    clientSecret: 'mock_client_secret_' + Date.now(),
    // In production, this would be the real client secret from Stripe
  };
};

// Example of what your backend endpoint should look like:
/*
// Backend (Node.js/Express example)
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency, tourTitle } = req.body;
    
    // Create a PaymentIntent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
      metadata: {
        tourTitle: tourTitle,
      },
    });
    
    res.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
*/

