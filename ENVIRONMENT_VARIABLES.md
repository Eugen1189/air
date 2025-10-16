# Environment Variables Configuration

## 🔐 Required Environment Variables

### For Netlify Deployment

Set these variables in your Netlify dashboard:
**Site settings > Environment variables**

| Variable Name | Description | Example |
|---------------|-------------|---------|
| `VITE_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key (test mode) | `pk_test_51...` |
| `VITE_API_URL` | Backend API URL (optional) | `https://api.example.com` |

---

## 🧪 For Local Development

Create a `.env.local` file in the root directory:

```env
# Stripe Configuration
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_test_key_here

# API Configuration (if needed)
VITE_API_URL=http://localhost:3000

# Google Analytics (optional)
VITE_GA_ID=G-XXXXXXXXXX
```

**Important Notes:**
- ✅ All variables must start with `VITE_` to be accessible in the app
- ✅ `.env.local` is in `.gitignore` (never commit it!)
- ✅ For production, use `pk_live_...` Stripe key (not `pk_test_...`)

---

## 🔍 Where to Get Stripe Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Navigate to **Developers > API keys**
3. Copy **Publishable key** (starts with `pk_test_` or `pk_live_`)
4. Paste it into Netlify environment variables or `.env.local`

---

## ✅ Verification

After setting environment variables, verify they're loaded:

```javascript
console.log('Stripe Key:', import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
```

If `undefined`, check:
- Variable name starts with `VITE_`
- Netlify build was triggered after adding variables
- `.env.local` exists in root directory (for local dev)

---

## 🚀 Netlify Deployment Variables

**Option 1: Via Netlify Dashboard**
1. Go to your site in Netlify
2. Click **Site settings**
3. Click **Environment variables**
4. Click **Add a variable**
5. Add `VITE_STRIPE_PUBLISHABLE_KEY` with your key
6. Click **Save**
7. Trigger a new deploy

**Option 2: Via Netlify CLI**
```bash
netlify env:set VITE_STRIPE_PUBLISHABLE_KEY pk_test_your_key_here
```

---

## 📌 Security Best Practices

- ❌ **Never** commit API keys to git
- ❌ **Never** use secret keys (`sk_`) in frontend code
- ✅ **Always** use publishable keys (`pk_`) in frontend
- ✅ **Always** use test keys (`pk_test_`) during development
- ✅ **Always** use live keys (`pk_live_`) in production

---

**Last Updated:** October 2025

