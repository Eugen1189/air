# 🌍 Air Tour React - Multilingual Travel Booking Platform

A modern, responsive travel booking platform built with React, featuring a comprehensive tour catalog, blog, collection pages, and integrated payment processing.

![React](https://img.shields.io/badge/React-19.1.1-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.7-purple)
![i18next](https://img.shields.io/badge/i18next-25.6.0-green)
![Stripe](https://img.shields.io/badge/Stripe-Integrated-brightgreen)

---

## ✨ Features

### 🌐 **Multilingual Support (i18n)**
- **4 Languages**: Spanish (default), English, German, Italian
- **Full Content Translation**: All UI elements, tour details, blog posts, and collections
- **Dynamic Language Switching**: Instant content updates without page reload
- **Persistent Language Selection**: User preference saved in localStorage

### 🏖️ **Tour Management**
- **9+ Detailed Tours**: Complete itineraries with day-by-day breakdowns
- **Advanced Filtering**: Search by destination, type, duration, difficulty, and price
- **Responsive Tour Cards**: Detailed information with translated content
- **Dynamic Tour Pages**: Full tour descriptions with galleries and itineraries

### 📝 **Blog System**
- **8 Blog Posts**: Fully translated articles across all languages
- **Category Filtering**: Destinations, Gastronomy, Sustainable Travel, Tips & Tricks
- **Related Posts**: Context-aware recommendations
- **Newsletter Integration**: Subscription form for updates

### 🎨 **Themed Collections**
- **4 Curated Collections**: Gastronomic Tours, Relaxation Trips, Active Vacations, Family Holidays
- **Interactive Flip Cards**: Mobile-responsive with tap-to-flip functionality
- **Smooth Navigation**: Animated page transitions

### 💳 **Payment Integration**
- **Stripe Integration**: Secure payment processing
- **Booking System**: Form validation with React Hook Form + Zod
- **Checkout Flow**: Complete payment experience with success pages

### 📱 **Responsive Design**
- **Mobile-First Approach**: Optimized for all screen sizes
- **Touch-Friendly**: Tap interactions for mobile devices
- **Smooth Animations**: CSS transitions and fade-in effects

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd air-tour-react

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
air-tour-react/
├── public/
│   ├── locales/           # Translation files (es, en, de, it)
│   └── images/            # Static images
├── src/
│   ├── components/        # React components
│   │   ├── Header/        # Navigation header
│   │   ├── ShowcaseSlider/ # Hero slider
│   │   ├── TourCard.jsx   # Tour card component
│   │   ├── FlipCard.jsx   # Collection card with flip effect
│   │   ├── FilterSidebar.jsx # Tour filtering
│   │   └── ...
│   ├── pages/             # Page components
│   │   ├── ToursListPage.jsx
│   │   ├── BlogPage.jsx
│   │   ├── ContactsPage.jsx
│   │   ├── CheckoutPage.jsx
│   │   └── ...
│   ├── data/              # Mock data and translations
│   │   ├── toursData.js
│   │   ├── collectionsData.js
│   │   ├── mock-posts.js
│   │   ├── translations/  # Multilingual content
│   │   │   ├── tours.js
│   │   │   ├── tourDetails.js
│   │   │   ├── collections.js
│   │   │   └── blogPosts.js
│   ├── hooks/             # Custom React hooks
│   │   └── useTranslatedContent.js
│   ├── utils/             # Utility functions
│   │   ├── filterOptions.js
│   │   ├── filterMapping.js
│   │   └── mockStripeApi.js
│   ├── i18n/              # i18n configuration
│   │   └── config.js
│   ├── schemas/           # Validation schemas (Zod)
│   ├── styles/            # SCSS styles
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── package.json
└── vite.config.js
```

---

## 🌍 Internationalization (i18n)

### Supported Languages

| Language | Code | Status |
|----------|------|--------|
| 🇪🇸 Spanish | `es` | Default ✅ |
| 🇬🇧 English | `en` | Complete ✅ |
| 🇩🇪 German | `de` | Complete ✅ |
| 🇮🇹 Italian | `it` | Complete ✅ |

### Translation Coverage

- ✅ **UI Elements**: All buttons, labels, placeholders
- ✅ **Navigation**: Header, footer, breadcrumbs
- ✅ **Tour Content**: Names, descriptions, itineraries
- ✅ **Blog Posts**: Full HTML content for all articles
- ✅ **Collections**: Titles, descriptions, recommended places
- ✅ **Forms**: Booking, contact, newsletter
- ✅ **Filter Options**: All category values

### Usage Example

```jsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('HomePage.title')}</h1>
      <button>{t('Buttons.bookNow')}</button>
    </div>
  );
}
```

### Adding Translations

1. Add keys to JSON files: `public/locales/{es,en,de,it}/translation.json`
2. Use `t()` function in components
3. For content (tours/blog), add to `src/data/translations/`

---

## 💳 Payment Integration (Stripe)

### Test Mode

The application uses Stripe in test mode. Use these test cards:

| Card Number | Description |
|-------------|-------------|
| `4242 4242 4242 4242` | Successful payment |
| `4000 0000 0000 9995` | Declined payment |

**Test Details:**
- Any future expiry date (e.g., 12/34)
- Any 3-digit CVC
- Any postal code

### Configuration

Set your Stripe publishable key in `src/components/StripeWrapper.jsx`:

```javascript
const stripePromise = loadStripe('pk_test_YOUR_KEY_HERE');
```

For production, see `STRIPE_INTEGRATION.md` for backend setup.

---

## 🎨 Styling

- **SCSS/SASS**: Modular stylesheets with variables
- **Responsive Design**: Mobile-first breakpoints
- **Animations**: Smooth transitions and fade effects
- **Color Palette**:
  - Primary: `#0A2342` (Navy Blue)
  - Secondary: `#D9795D` (Coral)
  - Accent: `#F4A261` (Orange)

---

## 📦 Key Dependencies

| Package | Purpose |
|---------|---------|
| `react-router-dom` | Client-side routing |
| `react-i18next` | Internationalization |
| `@stripe/react-stripe-js` | Payment processing |
| `react-hook-form` | Form handling |
| `zod` | Schema validation |
| `swiper` | Carousels/sliders |
| `react-scroll` | Smooth scrolling |
| `sass` | CSS preprocessing |

---

## 🛣️ Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero slider |
| `/tours` | Tours catalog with filters |
| `/tour/:id` | Individual tour details |
| `/collection/:id` | Themed collection page |
| `/blog` | Blog listing with categories |
| `/blog/:slug` | Individual blog post |
| `/contacts` | Contact form and info |
| `/checkout/:id` | Booking checkout |
| `/payment-success` | Payment confirmation |

---

## 🧩 Custom Hooks

### `useTranslatedContent()`

Fetch translated tour/blog/collection content:

```jsx
import { useTranslatedTour, useTranslatedTourDetails } from './hooks/useTranslatedContent';

function TourCard({ tourId }) {
  const tour = useTranslatedTour(tourId);
  const details = useTranslatedTourDetails(tourId);
  
  return (
    <div>
      <h3>{tour.title}</h3>
      <p>{details.description}</p>
    </div>
  );
}
```

### `useSticky()`

Create sticky sidebar elements:

```jsx
import { useSticky } from './hooks/useSticky';

function Sidebar() {
  const stickyRef = useSticky();
  return <div ref={stickyRef}>Sticky Content</div>;
}
```

---

## 🧪 Development

### Available Scripts

```bash
npm run dev      # Start dev server (port 5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Code Quality

- **ESLint**: Configured with React and hooks rules
- **Modern JavaScript**: ES6+ features
- **Component Structure**: Functional components with hooks
- **Styling**: BEM-inspired naming conventions

---

## 🌟 Key Features Breakdown

### 1. Homepage
- Hero slider with 3 featured destinations
- Popular tours carousel (Swiper.js)
- Themed collections (flip cards)
- About Us section
- Multilingual footer

### 2. Tours Page (`/tours`)
- Advanced filtering (destination, type, duration, difficulty, price)
- Real-time search
- 9 detailed tour cards
- Responsive grid layout
- Custom tour inquiry section

### 3. Tour Details Page (`/tour/:id`)
- Full tour description
- What's included list
- Day-by-day itinerary
- Photo gallery (lightbox)
- Reviews and ratings
- Booking sidebar with form

### 4. Blog
- 8 fully translated articles
- Category filters (7 categories)
- Related posts
- Newsletter subscription
- Share functionality

### 5. Collections
- 4 themed collections
- Mobile-responsive flip cards
- Recommended destinations
- Best time to visit info
- Smooth page transitions

---

## 📱 Mobile Responsiveness

- **Breakpoints**:
  - Mobile: `< 768px`
  - Tablet: `768px - 1024px`
  - Desktop: `> 1024px`

- **Mobile Features**:
  - Tap-to-flip collection cards
  - Touch-friendly navigation
  - Optimized images
  - Hamburger menu (if implemented)

---

## 🔮 Future Enhancements

- [ ] User authentication (login/register)
- [ ] Wishlist/favorites functionality
- [ ] Real-time availability checking
- [ ] User reviews and ratings (persistent)
- [ ] Email notifications
- [ ] Admin panel for content management
- [ ] Integration with real CMS (Contentful, Strapi)
- [ ] Social media sharing with Open Graph tags
- [ ] PWA support (offline mode)
- [ ] Analytics integration (Google Analytics)

---

## 🚀 Deployment

### Deploy to Netlify (Recommended)

**Quick Deploy:**

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy)

**Manual Deploy:**

1. **Push to Git**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin master
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://www.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build settings are auto-detected from `netlify.toml`

3. **Set Environment Variables**
   - Go to Site settings → Environment variables
   - Add `VITE_STRIPE_PUBLISHABLE_KEY` with your Stripe key
   - (See `ENVIRONMENT_VARIABLES.md` for details)

4. **Deploy**
   - Click "Deploy site"
   - Wait 2-3 minutes
   - Your site is live! 🎉

**Files Configured for Netlify:**
- ✅ `netlify.toml` - Build configuration
- ✅ `public/_redirects` - SPA routing support
- ✅ Environment variables template

**For detailed deployment guide, see:** [`NETLIFY_DEPLOYMENT.md`](./NETLIFY_DEPLOYMENT.md)

### Deploy to Other Platforms

<details>
<summary>Vercel</summary>

```bash
npm install -g vercel
vercel
```

Build settings:
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
</details>

<details>
<summary>GitHub Pages</summary>

Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

Then deploy:
```bash
npm run build
npx gh-pages -d dist
```
</details>

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is private and proprietary.

---

## 👨‍💻 Author

Air Tour React - Travel Booking Platform

---

## 🙏 Acknowledgments

- React Team for the amazing framework
- Stripe for payment infrastructure
- i18next for internationalization
- Swiper.js for carousel components
- All open-source contributors

---

## 📞 Support

For issues or questions:
- Open an issue in the repository
- Contact: info@airtour.com (example)

---

**Built with ❤️ using React + Vite**

---

## 🔧 Troubleshooting

### Common Issues

**Issue**: Translations not loading  
**Solution**: Check that JSON files exist in `public/locales/{lang}/translation.json`

**Issue**: Stripe errors  
**Solution**: Verify your publishable key and use test cards in development

**Issue**: Images not loading  
**Solution**: Ensure images are in `public/images/` directory

---

**Last Updated**: October 2025
