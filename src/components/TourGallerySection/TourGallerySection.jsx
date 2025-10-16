import React from 'react';
import { useTranslation } from 'react-i18next';
import TourGallery from '../TourGallery/TourGallery';

const TourGallerySection = () => {
  const { t } = useTranslation();
  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070' },
    { src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2070' },
    { src: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?q=80&w=2070' },
    { src: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c?q=80&w=2070' },
  ];

  return (
    <section style={{ padding: '60px 20px' }}>
      <h2 className="section-title">{t('TourPage.gallery')}</h2>
      <p style={{ textAlign: 'center', marginBottom: '30px', color: '#6c757d' }}>
        Click on the photo to view it full size
      </p>
      <TourGallery images={galleryImages} />
    </section>
  );
};

export default TourGallerySection;

