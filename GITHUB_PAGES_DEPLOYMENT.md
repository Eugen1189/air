# 🚀 GitHub Pages Deployment Guide

## ✨ GitHub Pages - Безкоштовна Альтернатива Netlify

GitHub Pages надає **безкоштовний hosting** для статичних сайтів прямо з вашого репозиторію!

---

## 📋 **Що Вже Налаштовано:**

### ✅ **1. Vite Configuration**
**Файл:** `vite.config.js`
```javascript
export default defineConfig({
  base: '/Air-tour/', // Назва вашого репозиторію
})
```

### ✅ **2. GitHub Actions Workflow**
**Файл:** `.github/workflows/deploy.yml`
- Автоматичний build при push в `master`
- Deploy на GitHub Pages
- Node.js 18
- Environment variables support

### ✅ **3. Jekyll Bypass**
**Файл:** `public/.nojekyll`
- Дозволяє GitHub Pages обробляти файли з `_`

---

## 🎯 **Deployment Steps:**

### **STEP 1: Enable GitHub Pages**

1. **Відкрийте ваш репозиторій:**
   ```
   https://github.com/Eugen1189/Air-tour
   ```

2. **Перейдіть в Settings:**
   - Click на таб **"Settings"**
   - В лівому меню знайдіть **"Pages"**

3. **Configure Source:**
   - **Source:** GitHub Actions (обов'язково!)
   - (Не вибирайте "Deploy from a branch" - використайте Actions!)

4. **Save**

---

### **STEP 2: Add Environment Variables (Stripe)**

1. **В Settings → Secrets and variables → Actions:**
   - Click **"New repository secret"**
   - Name: `VITE_STRIPE_PUBLISHABLE_KEY`
   - Value: `pk_test_your_stripe_key_here`
   - Click **"Add secret"**

---

### **STEP 3: Push Changes & Deploy**

```bash
# 1. Add новий workflow
git add .github/workflows/deploy.yml
git add vite.config.js
git add public/.nojekyll

# 2. Commit
git commit -m "Add GitHub Pages deployment"

# 3. Push to master
git push origin master

# 4. GitHub Actions автоматично:
#    ✓ Build your site
#    ✓ Deploy to GitHub Pages
#    ✓ Make it live!
```

---

### **STEP 4: Check Deployment**

1. **Go to Actions tab** на GitHub
2. Подивіться на workflow **"Deploy to GitHub Pages"**
3. Чекайте ~2-3 хвилини
4. Статус має стати ✅ **Success**

---

## 🌐 **Your Site Will Be Live At:**

```
https://eugen1189.github.io/Air-tour/
```

**Or custom domain (if configured):**
```
https://www.your-domain.com
```

---

## 🔧 **How It Works:**

```
git push origin master
       ↓
GitHub Actions triggered
       ↓
npm ci (install dependencies)
       ↓
npm run build (create dist/)
       ↓
Deploy dist/ to gh-pages branch
       ↓
Site live at eugen1189.github.io/Air-tour/
```

---

## ⚙️ **Configuration Files:**

### ✅ Created:
1. `.github/workflows/deploy.yml` - GitHub Actions workflow
2. `public/.nojekyll` - Bypass Jekyll processing
3. `vite.config.js` - Updated with base path

---

## 🆚 **GitHub Pages vs Netlify:**

| Feature | GitHub Pages | Netlify |
|---------|--------------|---------|
| **Cost** | ✅ Free | ⚠️ Paid (after credits) |
| **Custom Domain** | ✅ Yes | ✅ Yes |
| **HTTPS** | ✅ Auto | ✅ Auto |
| **Deploy Speed** | ~2-3 min | ~2-3 min |
| **Forms** | ❌ No | ✅ Yes |
| **Functions** | ❌ No | ✅ Yes |
| **Redirects** | ⚠️ Limited | ✅ Full |
| **Build Minutes** | ✅ Unlimited | ⚠️ Limited |

**Для вашого SPA проекту GitHub Pages підходить ідеально! ✅**

---

## 📱 **SPA Routing Fix (Important!):**

GitHub Pages не підтримує SPA redirects за замовчуванням.

**Solution: 404.html trick**

Create `public/404.html`:
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Air Tour</title>
  <script>
    // Redirect all 404s to index.html with the path as a query
    sessionStorage.redirect = location.href;
  </script>
  <meta http-equiv="refresh" content="0;URL='/Air-tour/'">
</head>
<body></body>
</html>
```

Then update `index.html` to read the redirect.

**Або простіше:** Use hash routing instead!

---

## 🔄 **Alternative: Hash Router (Recommended for GitHub Pages)**

If you have routing issues, use hash routing:

**Update `src/App.jsx`:**
```javascript
// Change from BrowserRouter to HashRouter
import { HashRouter as Router } from 'react-router-dom';

// Rest stays the same
```

**Result:**
- URLs: `https://eugen1189.github.io/Air-tour/#/tours`
- No 404 issues
- Works perfectly on GitHub Pages

---

## 🎯 **Quick Start (Do This Now):**

```bash
# 1. Commit workflow files
git add .
git commit -m "Add GitHub Pages deployment"

# 2. Push to master
git push origin master

# 3. Enable GitHub Pages:
#    - Go to Settings → Pages
#    - Source: GitHub Actions
#    - Save

# 4. Watch deployment:
#    - Go to Actions tab
#    - See workflow running

# 5. Site live in 2-3 minutes!
#    https://eugen1189.github.io/Air-tour/
```

---

## ✅ **Advantages of GitHub Pages:**

✅ **100% FREE** - No credit card, no limits  
✅ **Unlimited Bandwidth** - No traffic limits  
✅ **Auto SSL** - HTTPS by default  
✅ **Fast** - CDN delivery  
✅ **Simple** - Just push to master  
✅ **Reliable** - 99.9% uptime  

---

## 📞 **Troubleshooting:**

### Issue: 404 on routes

**Solution:** Use HashRouter (see above)

### Issue: Base path wrong

**Solution:** Check `vite.config.js` base matches repo name

### Issue: Build fails

**Solution:** Check Actions logs, verify dependencies

---

## 🎉 **You're Ready!**

GitHub Pages is **FREE** and perfect for your project!

**Just push and it's live! 🚀**

---

**Last Updated:** October 2025  
**Cost:** FREE ✅  
**Deployment:** Automatic  
**URL:** https://eugen1189.github.io/Air-tour/

