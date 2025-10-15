import React from 'react';
// import Header from './components/Header/Header';  // Базовий варіант (CSS)
import HeaderWithScroll from './components/Header/HeaderWithScroll';  // Розширений варіант (react-scroll)
import ShowcaseSlider from './components/ShowcaseSlider';
import HitToursSection from './components/HitToursSection/HitToursSection';
import ThemedCollectionsSection from './components/ThemedCollectionsSection/ThemedCollectionsSection';
import AboutUsSection from './components/AboutUsSection/AboutUsSection';
import TourGallerySection from './components/TourGallerySection/TourGallerySection';
import ItinerarySection from './components/ItinerarySection/ItinerarySection';
import TourPageDemo from './components/TourPageDemo/TourPageDemo';
import SiteFooter from './components/SiteFooter/SiteFooter';

function App() {
  return (
    <>
      <HeaderWithScroll />
      <ShowcaseSlider />
      <main style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <HitToursSection />
        <ThemedCollectionsSection />
        <AboutUsSection />
        <TourGallerySection />
        <ItinerarySection />
        <TourPageDemo />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
