# 🚀 Netlify Deployment Guide

Complete guide for deploying Air Tour React app to Netlify.

---

## 📋 Prerequisites

- GitHub/GitLab/Bitbucket account
- Netlify account (free tier available)
- Your code pushed to a Git repository

---

## 🎯 Quick Deploy (Recommended)

### Method 1: Deploy via Netlify Dashboard

**Step 1: Push Code to Git**
```bash
git add .
git commit -m "Ready for Netlify deployment"
git push origin main
```

**Step 2: Connect to Netlify**
1. Go to [netlify.com](https://www.netlify.com)
2. Click **"Add new site" → "Import an existing project"**
3. Choose your Git provider (GitHub/GitLab/Bitbucket)
4. Select your repository `air-tour-react`

**Step 3: Configure Build Settings**

Netlify should auto-detect settings from `netlify.toml`, but verify:

| Setting | Value |
|---------|-------|
| **Build command** | `npm run build` |
| **Publish directory** | `dist` |
| **Node version** | `18` |

**Step 4: Add Environment Variables**
1. Click **"Show advanced"**
2. Click **"New variable"**
3. Add: `VITE_STRIPE_PUBLISHABLE_KEY` = `pk_test_your_key_here`
4. (See `ENVIRONMENT_VARIABLES.md` for details)

**Step 5: Deploy**
1. Click **"Deploy site"**
2. Wait 2-3 minutes for build to complete
3. Your site is live! 🎉

---

## ⚡ Method 2: Deploy via Netlify CLI

**Step 1: Install Netlify CLI**
```bash
npm install -g netlify-cli
```

**Step 2: Login to Netlify**
```bash
netlify login
```

**Step 3: Initialize Site**
```bash
netlify init
```

Follow prompts:
- Create a new site or link to existing
- Connect to Git repository
- Build command: `npm run build`
- Publish directory: `dist`

**Step 4: Set Environment Variables**
```bash
netlify env:set VITE_STRIPE_PUBLISHABLE_KEY pk_test_your_key_here
```

**Step 5: Deploy**
```bash
# Deploy to preview URL
netlify deploy

# Deploy to production
netlify deploy --prod
```

---

## 🔧 Configuration Files

### ✅ `netlify.toml` (Already Created)

```toml
[build]
  command = "npm run build"
  publish = "dist"
  node_version = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**What it does:**
- ✅ Configures build settings
- ✅ Enables React Router (SPA redirects)
- ✅ Sets security headers
- ✅ Optimizes caching for assets

### ✅ `public/_redirects` (Already Created)

```
/*    /index.html   200
```

**What it does:**
- ✅ Redirects all routes to `index.html`
- ✅ Allows React Router to handle routing
- ✅ Prevents 404 errors on page refresh

---

## 🌍 Custom Domain (Optional)

### Add Custom Domain

1. Go to **Site settings > Domain management**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `www.airtour.com`)
4. Follow DNS configuration instructions

### Enable HTTPS (Automatic)

Netlify automatically provisions SSL certificates via Let's Encrypt.

---

## 🔄 Continuous Deployment

**Automatic Deployments:**
- ✅ Every push to `main` branch triggers a new deploy
- ✅ Preview deployments for pull requests
- ✅ Automatic rollback on failed builds

**Deploy Contexts:**
```toml
# In netlify.toml (optional)

[context.production]
  command = "npm run build"
  
[context.deploy-preview]
  command = "npm run build"
  
[context.branch-deploy]
  command = "npm run build"
```

---

## 📊 Build Logs & Debugging

### View Build Logs

1. Go to **Deploys** tab
2. Click on a deploy
3. View **Deploy log**

### Common Build Errors

**Error: `npm ERR! Missing script: "build"`**
- **Solution:** Verify `package.json` has `"build": "vite build"`

**Error: `Cannot find module 'vite'`**
- **Solution:** Netlify will auto-install dependencies. Check `package.json`.

**Error: Routes return 404**
- **Solution:** Verify `_redirects` file exists in `public/` folder

**Error: Environment variables not working**
- **Solution:** Check variables are prefixed with `VITE_` and set in Netlify dashboard

---

## 🎨 Netlify Features to Enable

### 1. Deploy Previews
- **Path:** Site settings > Build & deploy > Deploy previews
- **Enable:** Pull request previews
- **Benefit:** Test changes before merging

### 2. Forms (Optional)
If you want to use Netlify Forms for contact form:

```jsx
// In ContactsPage.jsx
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  {/* ...fields */}
</form>
```

### 3. Functions (Optional)
For serverless functions (e.g., Stripe webhook handling):

Create `netlify/functions/` folder with handler files.

### 4. Analytics (Optional)
- **Path:** Site settings > Analytics
- **Enable:** Netlify Analytics (paid feature)
- **Alternative:** Use Google Analytics (free)

---

## 🔐 Security Headers

Already configured in `netlify.toml`:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

**What they do:**
- ✅ Prevent clickjacking attacks
- ✅ Enable XSS protection
- ✅ Prevent MIME type sniffing
- ✅ Control referrer information

---

## ⚙️ Performance Optimizations

### Already Configured:

**1. Asset Caching**
```toml
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

**2. Image Optimization**
- Use Netlify's built-in image optimization
- Or use external CDN (Cloudinary, Imgix)

**3. Code Splitting**
- Vite automatically code-splits your app
- Lazy load routes with `React.lazy()`

---

## 🧪 Testing Deployment

### Preview Before Going Live

```bash
# Build locally
npm run build

# Preview production build
npm run preview

# Open http://localhost:4173
```

### Test on Netlify Deploy Preview

1. Create a new branch
2. Push changes
3. Open pull request
4. Netlify creates preview URL
5. Test thoroughly
6. Merge to `main` when ready

---

## 📈 Post-Deployment Checklist

After successful deployment, verify:

- [ ] All pages load correctly
- [ ] React Router navigation works
- [ ] Language switcher works (4 languages)
- [ ] Images load properly
- [ ] Forms submit correctly
- [ ] Stripe payment test works
- [ ] Blog posts display
- [ ] Tour details pages work
- [ ] Mobile responsive design
- [ ] HTTPS is enabled (🔒 icon in browser)
- [ ] Custom domain connected (if applicable)

---

## 🔄 Update Deployment

**Auto-deploy (Recommended):**
```bash
git add .
git commit -m "Update content"
git push origin main
# Netlify auto-deploys! ✨
```

**Manual deploy via CLI:**
```bash
netlify deploy --prod
```

---

## 🆘 Troubleshooting

### Issue: Site Shows 404

**Solution:**
- Check `public/_redirects` exists
- Verify `netlify.toml` has redirects configuration
- Trigger new deploy

### Issue: Environment Variables Not Working

**Solution:**
```bash
# Check if variables are set
netlify env:list

# Set missing variables
netlify env:set VITE_STRIPE_PUBLISHABLE_KEY pk_test_xxx
```

### Issue: Build Fails

**Solution:**
- Check build logs in Netlify dashboard
- Verify `package.json` scripts
- Test build locally: `npm run build`

### Issue: Blank Page After Deploy

**Solution:**
- Check browser console for errors
- Verify `dist/` folder contains files
- Check base URL in `vite.config.js`

---

## 📞 Support Resources

- **Netlify Docs:** https://docs.netlify.com
- **Community Forum:** https://answers.netlify.com
- **Status Page:** https://www.netlifystatus.com
- **Twitter:** @Netlify

---

## 🎉 You're Live!

After deployment, your site will be available at:

```
https://your-site-name.netlify.app
```

Or your custom domain:

```
https://www.airtour.com
```

**Share your live site! 🌍**

---

## 🚀 Next Steps

1. **Set up custom domain** (optional)
2. **Enable deploy previews** for pull requests
3. **Add Netlify badge** to README:
   ```markdown
   [![Netlify Status](https://api.netlify.com/api/v1/badges/your-site-id/deploy-status)](https://app.netlify.com/sites/your-site-name/deploys)
   ```
4. **Monitor analytics** (via Netlify or Google Analytics)
5. **Set up Stripe production keys** when ready for real payments

---

**Deployment Date:** October 2025  
**Platform:** Netlify  
**Status:** Ready to Deploy! ✅

---

**Happy Deploying! 🚀**

