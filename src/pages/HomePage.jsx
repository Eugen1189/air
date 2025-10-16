import React from 'react';
import ShowcaseSlider from '../components/ShowcaseSlider';
import ThemedCollectionsSection from '../components/ThemedCollectionsSection/ThemedCollectionsSection';
import AboutUsSection from '../components/AboutUsSection/AboutUsSection';

const HomePage = () => {
  return (
    <>
      <ShowcaseSlider />
      <main style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <ThemedCollectionsSection />
        <AboutUsSection />
      </main>
    </>
  );
};

export default HomePage;

