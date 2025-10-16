# ✅ Pre-Deployment Checklist

Complete this checklist before deploying to production.

---

## 📋 Required Files (All Created ✅)

- [x] `netlify.toml` - Netlify configuration
- [x] `public/_redirects` - SPA routing redirects
- [x] `.gitignore` - Excludes node_modules, dist, .env
- [x] `README.md` - Complete documentation
- [x] `package.json` - All dependencies listed

---

## 🔧 Configuration Check

### 1. Environment Variables

- [ ] Stripe test key ready: `pk_test_...`
- [ ] (Production) Stripe live key: `pk_live_...`
- [ ] API URL configured (if applicable)
- [ ] All sensitive data in environment variables (not in code!)

**Set in Netlify:**
```
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
```

### 2. Build Configuration

- [x] Build command: `npm run build`
- [x] Publish directory: `dist`
- [x] Node version: 18
- [x] Package.json scripts correct

### 3. Routing

- [x] `_redirects` file in `public/` folder
- [x] Redirect rule: `/* /index.html 200`
- [x] All React Router routes tested locally

---

## 🧪 Local Testing

### Before Deploying:

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# ✓ Test all pages
# ✓ Test all 4 languages
# ✓ Test navigation
# ✓ Test forms

# Build for production
npm run build
# ✓ Check for build errors
# ✓ Verify dist/ folder created

# Preview production build
npm run preview
# ✓ Test at http://localhost:4173
# ✓ Test all functionality again
```

### Testing Checklist:

- [ ] Homepage loads
- [ ] All routes work (tours, blog, contacts)
- [ ] Language switcher (ES, EN, DE, IT)
- [ ] Tour filtering works
- [ ] Tour detail pages display
- [ ] Blog posts load
- [ ] Collection pages work
- [ ] Contact form validates
- [ ] Stripe payment form displays
- [ ] Images load correctly
- [ ] Mobile responsive on all pages
- [ ] No console errors
- [ ] Links work correctly

---

## 🌐 Translation Check

- [ ] Spanish (default) works
- [ ] English translations complete
- [ ] German translations complete
- [ ] Italian translations complete
- [ ] Filter categories translate
- [ ] Tour cards translate
- [ ] Blog posts translate
- [ ] UI elements translate

---

## 💳 Stripe Configuration

### Test Mode (Development)

- [ ] Test publishable key set
- [ ] Test cards work:
  - `4242 4242 4242 4242` (success)
  - `4000 0000 0000 9995` (decline)

### Production Mode (When Ready)

- [ ] Live publishable key obtained
- [ ] Live key set in Netlify environment
- [ ] Webhook endpoints configured (if needed)
- [ ] Backend API ready (if applicable)
- [ ] Terms of service link updated
- [ ] Privacy policy link updated

---

## 📱 Performance Check

- [ ] Images optimized (compressed)
- [ ] Code splitting enabled (Vite default)
- [ ] Lazy loading for routes
- [ ] No large bundle sizes
- [ ] Lighthouse score > 90 (run in Chrome DevTools)

**Run Lighthouse:**
1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Click "Generate report"
4. Check scores:
   - Performance: > 90
   - Accessibility: > 90
   - Best Practices: > 90
   - SEO: > 90

---

## 🔐 Security Check

- [ ] No API keys in source code
- [ ] Environment variables used for secrets
- [ ] HTTPS enabled (auto on Netlify)
- [ ] Security headers configured (in netlify.toml)
- [ ] No sensitive data in console.log
- [ ] .env files in .gitignore

---

## 📦 Git Repository Check

```bash
# Check git status
git status
# Should show no uncommitted changes to critical files

# Check remote
git remote -v
# Should show correct repository URL

# Check branch
git branch
# Should be on 'main' or 'master'
```

- [ ] All changes committed
- [ ] Pushed to remote repository
- [ ] Repository is accessible
- [ ] README.md updated
- [ ] No sensitive files committed

---

## 🚀 Netlify Deployment Steps

### First-Time Deploy:

1. [ ] Go to [netlify.com](https://www.netlify.com)
2. [ ] Click "Add new site"
3. [ ] Connect Git repository
4. [ ] Verify build settings (auto-detected)
5. [ ] Add environment variables
6. [ ] Click "Deploy site"
7. [ ] Wait for build (2-3 minutes)
8. [ ] Check deploy log for errors
9. [ ] Test live site

### Subsequent Deploys:

```bash
# Just push to git!
git add .
git commit -m "Update content"
git push origin main
# Netlify auto-deploys ✨
```

---

## ✅ Post-Deployment Testing

### On Live Site:

Visit your Netlify URL: `https://your-site.netlify.app`

- [ ] Homepage loads
- [ ] All routes accessible
- [ ] Language switcher works
- [ ] Tours page filters work
- [ ] Tour details load
- [ ] Blog posts display
- [ ] Collections work
- [ ] Contact form submits
- [ ] Stripe form displays (test mode)
- [ ] Images load
- [ ] Mobile responsive
- [ ] No 404 errors on refresh
- [ ] HTTPS enabled (🔒)

### Test Payments:

- [ ] Use test card: `4242 4242 4242 4242`
- [ ] Enter any future date (12/34)
- [ ] Enter any CVC (123)
- [ ] Payment processes successfully
- [ ] Redirects to success page

---

## 🎨 Custom Domain (Optional)

If adding custom domain:

1. [ ] Domain purchased
2. [ ] DNS records configured
3. [ ] Domain added in Netlify
4. [ ] HTTPS certificate issued (auto)
5. [ ] Primary domain set
6. [ ] Test domain loads site

---

## 📊 Monitoring Setup

### After Deploy:

- [ ] Check Netlify deploy status
- [ ] Monitor build logs
- [ ] Set up error tracking (optional: Sentry)
- [ ] Enable Netlify Analytics (optional, paid)
- [ ] Or add Google Analytics (free)

---

## 🔄 Rollback Plan

If something goes wrong:

1. Go to Netlify dashboard
2. Click "Deploys"
3. Find last working deploy
4. Click "..." → "Publish deploy"
5. Site reverts instantly

**Or via CLI:**
```bash
netlify rollback
```

---

## 📝 Final Checklist Before Going Live

- [ ] All above items checked
- [ ] Team reviewed the site
- [ ] Content proofread (all 4 languages)
- [ ] Legal pages ready (if needed)
- [ ] Support email set up
- [ ] Social media links updated
- [ ] Analytics configured
- [ ] Backup plan ready
- [ ] Monitoring enabled

---

## 🎉 Deployment Complete!

Once all checks pass:

```bash
# Your site is live at:
https://your-site.netlify.app

# Or custom domain:
https://www.airtour.com
```

**Share the news! 🚀**

- [ ] Announce on social media
- [ ] Send to stakeholders
- [ ] Add to portfolio
- [ ] Update README with live link

---

## 📞 Need Help?

- **Netlify Docs:** https://docs.netlify.com
- **Community Forum:** https://answers.netlify.com
- **Deployment Guide:** See `NETLIFY_DEPLOYMENT.md`
- **Environment Variables:** See `ENVIRONMENT_VARIABLES.md`

---

**Good luck with your deployment! 🌟**

---

**Last Updated:** October 2025

