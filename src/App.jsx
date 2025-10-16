import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header/Header';  // Basic variant (CSS)
import HeaderWithScroll from './components/Header/HeaderWithScroll';  // Extended variant (react-scroll)
import SiteFooter from './components/SiteFooter/SiteFooter';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import HomePage from './pages/HomePage';
import ToursListPage from './pages/ToursListPage';
import TourPage from './pages/TourPage';
import CollectionPage from './pages/CollectionPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactsPage from './pages/ContactsPage';
import CheckoutPage from './pages/CheckoutPage';
import SimpleCheckoutPage from './pages/SimpleCheckoutPage';
import PaymentSuccessPage from './pages/PaymentSuccessPage';
import TranslationDemoPage from './pages/TranslationDemoPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <HeaderWithScroll />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tours" element={<ToursListPage />} />
        <Route path="/tour/:id" element={<TourPage />} />
        
        {/* Checkout routes - Two variants available: */}
        <Route path="/checkout/:id" element={<CheckoutPage />} />  {/* Full version with all details */}
        {/* <Route path="/checkout/:id" element={<SimpleCheckoutPage />} /> */}  {/* Simple template version */}
        
        <Route path="/payment-success" element={<PaymentSuccessPage />} />
        <Route path="/collection/:id" element={<CollectionPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        
        {/* i18n Demo page - Remove in production */}
        <Route path="/i18n-demo" element={<TranslationDemoPage />} />
      </Routes>
      <SiteFooter />
    </Router>
  );
}

export default App;
