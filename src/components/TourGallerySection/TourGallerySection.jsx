import React from 'react';
import { useTranslation } from 'react-i18next';
import TourGallery from '../TourGallery/TourGallery';

const TourGallerySection = () => {
  const { t } = useTranslation();
  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070' },
    { src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070' },
    { src: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070' },
    { src: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070' },
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

