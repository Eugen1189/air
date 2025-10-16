# Stripe Payment Integration Guide

This project includes a complete Stripe payment integration template for tour bookings.

## 📦 Installed Packages

```bash
npm install @stripe/react-stripe-js @stripe/stripe-js
```

## 🏗️ Components Structure

### Two Implementation Options:

#### Option 1: Simple Template (Recommended for learning)
**Components:**
1. **CheckoutForm.jsx** + **CheckoutForm.scss** - Simple payment form template
   - Basic CardElement integration
   - Simple success/error handling
   - Minimal styling
   
2. **SimpleCheckoutPage.jsx** - Simple checkout page
   - Tour information display
   - Wraps CheckoutForm in Elements provider
   - Test cards information
   - Perfect for understanding Stripe basics

**Usage:**
```jsx
// In App.jsx, use:
<Route path="/checkout/:id" element={<SimpleCheckoutPage />} />
```

#### Option 2: Full Implementation (Production-ready)
**Components:**
1. **StripeWrapper.jsx** - Reusable Stripe Provider
   - Configures appearance theme
   - Centralized Stripe configuration
   
2. **PaymentForm.jsx** - Advanced payment form
   - Full error handling
   - Backend API integration
   - Custom styling
   - Security features
   
3. **CheckoutPage.jsx** - Complete checkout flow
   - Two-column layout
   - Booking details form
   - Tour summary with image
   - Price calculation
   - Payment integration
   - Trust badges

4. **PaymentSuccessPage.jsx** - Success confirmation
   - Success message
   - Next steps information
   - Navigation options

**Usage:**
```jsx
// In App.jsx, use:
<Route path="/checkout/:id" element={<CheckoutPage />} />
```

### Switch Between Versions:
In `src/App.jsx`, uncomment the version you want to use:
```jsx
{/* Simple version: */}
<Route path="/checkout/:id" element={<SimpleCheckoutPage />} />

{/* OR Full version: */}
<Route path="/checkout/:id" element={<CheckoutPage />} />
```

## 🔧 Setup Instructions

### Step 1: Get Stripe Keys
1. Sign up at https://stripe.com
2. Go to https://dashboard.stripe.com/apikeys
3. Copy your **Publishable key** (starts with `pk_test_...` for test mode)
4. Copy your **Secret key** (starts with `sk_test_...` for test mode)

### Step 2: Configure Frontend
In `src/components/StripeWrapper.jsx`:
```javascript
const stripePromise = loadStripe('pk_test_YOUR_PUBLISHABLE_KEY_HERE');
```
Replace with your actual publishable key.

### Step 3: Create Backend API
You need a backend endpoint to create payment intents. Example:

**Node.js/Express:**
```javascript
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.post('/api/create-payment-intent', async (req, res) => {
  const { amount, currency, tourTitle } = req.body;
  
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount, // in cents
    currency: currency,
    metadata: { tourTitle },
  });
  
  res.json({ clientSecret: paymentIntent.client_secret });
});
```

### Step 4: Update API Endpoint
In `src/components/PaymentForm.jsx`:
```javascript
const response = await fetch('/api/create-payment-intent', {
  // Replace with your actual backend URL
```

## 🧪 Testing

Stripe provides test card numbers:

### Successful Payment:
- **Card**: 4242 4242 4242 4242
- **Expiry**: Any future date (e.g., 12/34)
- **CVC**: Any 3 digits (e.g., 123)
- **ZIP**: Any 5 digits (e.g., 12345)

### Failed Payment (insufficient funds):
- **Card**: 4000 0000 0000 9995

### Requires Authentication (3D Secure):
- **Card**: 4000 0025 0000 3155

More test cards: https://stripe.com/docs/testing

## 🚀 Usage Flow

1. User clicks "Prenota il tour" on tour page
2. Redirects to `/checkout/:id`
3. User fills booking details
4. User enters card information (handled securely by Stripe)
5. Payment is processed
6. On success: redirect to confirmation page
7. User receives email confirmation

## 🔒 Security Notes

- ✅ Card data never touches your server (handled by Stripe)
- ✅ PCI compliance handled by Stripe
- ✅ All payments use HTTPS
- ✅ Client secret is single-use only

## 💡 Next Steps

1. Set up your Stripe account
2. Create backend API endpoint
3. Configure webhook for payment confirmations
4. Add email notifications
5. Create success/confirmation page
6. Test with Stripe test cards
7. Switch to live mode when ready

## 📚 Resources

- Stripe Docs: https://stripe.com/docs
- React Integration: https://stripe.com/docs/stripe-js/react
- Payment Intents: https://stripe.com/docs/payments/payment-intents
- Webhooks: https://stripe.com/docs/webhooks

