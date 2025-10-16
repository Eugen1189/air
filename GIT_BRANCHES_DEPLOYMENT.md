# 🌿 Git Branches & Netlify Deployment Guide

## 📋 Recommended Branch Strategy

### **Branch Structure:**

```
main (or master)     ← Production branch (live site)
└── develop          ← Development branch (testing)
```

---

## 🎯 **Best Practice Approach:**

### **Option 1: Main Branch Only (Recommended for Solo Projects)**

**Setup:**
```bash
# 1. Ensure you're on main branch
git checkout main

# 2. Merge everything to main
git merge develop

# 3. Push to repository
git push origin main
```

**Netlify Configuration:**
- Deploy from: `main` branch
- Production URL: `https://your-site.netlify.app`
- Auto-deploy: Yes

**Advantages:**
- ✅ Simple
- ✅ One production site
- ✅ Clear deployment flow

---

### **Option 2: Separate Branches with Preview (Recommended for Teams)**

**Setup:**

**1. Production (main branch):**
```bash
git checkout main
git push origin main
```
→ Deploys to: `https://your-site.netlify.app` (LIVE)

**2. Development (develop branch):**
```bash
git checkout develop
git push origin develop
```
→ Deploys to: `https://develop--your-site.netlify.app` (STAGING)

**Netlify Configuration:**

```toml
# In netlify.toml

[build]
  command = "npm run build"
  publish = "dist"

# Production deploys (main branch)
[context.production]
  command = "npm run build"
  publish = "dist"

# Branch deploys (develop branch)
[context.develop]
  command = "npm run build"
  publish = "dist"

# Deploy previews (pull requests)
[context.deploy-preview]
  command = "npm run build"
```

**In Netlify Dashboard:**
1. Go to: **Site settings > Build & deploy > Deploy contexts**
2. Set **Production branch**: `main`
3. Enable **Branch deploys**: Add `develop`
4. Enable **Deploy previews**: All pull requests

**Advantages:**
- ✅ Test changes on staging URL before going live
- ✅ Safe production deployment
- ✅ Team can review on develop URL

---

## 🚀 **Deployment Workflow:**

### **Workflow 1: Direct to Production (Simple)**

```bash
# 1. Merge develop to main
git checkout main
git merge develop

# 2. Push to main
git push origin main

# 3. Netlify auto-deploys to production
# → https://your-site.netlify.app
```

---

### **Workflow 2: Test Then Deploy (Safe)**

```bash
# Step 1: Push to develop (for testing)
git checkout develop
git add .
git commit -m "New features"
git push origin develop

# → Netlify deploys to:
# https://develop--your-site.netlify.app

# Step 2: Test on staging URL
# ✓ Check all features
# ✓ Test on mobile
# ✓ Verify translations

# Step 3: Merge to main (go live)
git checkout main
git merge develop
git push origin main

# → Netlify deploys to production:
# https://your-site.netlify.app
```

---

## ⚙️ **Netlify Dashboard Configuration:**

### **Step-by-Step Setup:**

**1. Initial Setup:**
```
1. Go to netlify.com
2. Click "Add new site"
3. Choose your Git provider
4. Select repository: air-tour-react
5. Choose branch: main (for production)
6. Build command: npm run build
7. Publish directory: dist
8. Click "Deploy site"
```

**2. Enable Branch Deploys (Optional):**
```
1. Go to Site settings
2. Build & deploy → Continuous deployment
3. Click "Edit settings"
4. Production branch: main
5. Branch deploys: Add "develop"
6. Deploy previews: All pull requests
7. Save
```

**3. Environment Variables:**
```
1. Site settings → Environment variables
2. Add variable:
   Key: VITE_STRIPE_PUBLISHABLE_KEY
   Value: pk_test_your_key_here
   Scopes: All deploy contexts (or select specific)
3. Save
4. Trigger redeploy
```

---

## 🌿 **Two Branches Strategy:**

### **Branch 1: `main` (Production)**

**Purpose:** Live website

**Commands:**
```bash
# Deploy to production
git checkout main
git merge develop  # Merge tested changes
git push origin main

# Result:
# → https://your-site.netlify.app
```

**Rules:**
- ✅ Only tested code
- ✅ Always stable
- ✅ Direct deployment to live site

---

### **Branch 2: `develop` (Staging)**

**Purpose:** Testing and development

**Commands:**
```bash
# Deploy to staging
git checkout develop
git add .
git commit -m "Feature: Add new tour"
git push origin develop

# Result:
# → https://develop--your-site.netlify.app
```

**Rules:**
- ✅ Experimental features
- ✅ Test before production
- ✅ Team collaboration

---

## 📊 **Comparison:**

| Aspect | Main Only | Main + Develop |
|--------|-----------|----------------|
| **URLs** | 1 (production) | 2 (prod + staging) |
| **Testing** | Test locally | Test on live staging URL |
| **Safety** | Direct to live | Preview before live |
| **Team Work** | Basic | Better for teams |
| **Cost** | Free | Free (Netlify includes branch deploys) |

---

## 🎯 **Recommended for Your Project:**

### **If Solo Developer:**
```bash
# Keep it simple - main branch only
git checkout main
git merge develop
git push origin main
# → Deploy to production
```

### **If Team / Want Safety:**
```bash
# Use both branches
git push origin develop  # → Staging URL
# Test everything
git push origin main     # → Production URL
```

---

## 🔄 **Current Situation - What to Do Now:**

### **Option A: Deploy Main Branch (Quickest)**

```bash
# 1. Check current branch
git branch

# 2. Switch to main
git checkout main

# 3. Merge develop (if needed)
git merge develop

# 4. Push to main
git push origin main

# 5. Deploy on Netlify
# - Connect to main branch
# - Deploy!
```

---

### **Option B: Keep Both Branches (Professional)**

```bash
# 1. Push both branches
git push origin main
git push origin develop

# 2. On Netlify:
# - Primary deploy: main branch
# - Branch deploy: develop branch

# 3. You'll get 2 URLs:
# - https://your-site.netlify.app (main)
# - https://develop--your-site.netlify.app (develop)
```

---

## 📝 **Quick Decision Guide:**

**Choose Main Only if:**
- ✅ You work alone
- ✅ Want simplicity
- ✅ Test locally is enough

**Choose Main + Develop if:**
- ✅ Work in team
- ✅ Want staging environment
- ✅ Need client preview before live
- ✅ Want extra safety

---

## 🚀 **Recommended Steps RIGHT NOW:**

```bash
# 1. Check branches
git branch
# See which branch you're on

# 2. Ensure all work is committed
git status

# 3. Merge to main
git checkout main
git merge develop
git push origin main

# 4. Deploy on Netlify
# - Choose "main" branch
# - Add env vars
# - Deploy!

# Result: Live site from main branch ✅
```

---

## 💡 **Pro Tip:**

After first deployment, you can enable **Deploy Previews** in Netlify:
- Every push to `develop` → Preview URL
- Every push to `main` → Production URL
- Free on Netlify!

---

## ✅ **Summary:**

**Simplest Path (Do This Now):**
1. `git checkout main`
2. `git merge develop`
3. `git push origin main`
4. Deploy `main` branch on Netlify

**Production URL:** `https://your-site.netlify.app`

**Done! 🎉**

---

**Last Updated:** October 2025

