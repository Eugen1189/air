import React from 'react';
import TourGallery from '../TourGallery/TourGallery';

const TourGallerySection = () => {
  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070' },
    { src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2070' },
    { src: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?q=80&w=2070' },
    { src: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c?q=80&w=2070' },
  ];

  return (
    <section style={{ padding: '60px 20px' }}>
      <h2 className="section-title">Галерея туру</h2>
      <p style={{ textAlign: 'center', marginBottom: '30px', color: '#6c757d' }}>
        Клікніть на фото для перегляду в повному розмірі
      </p>
      <TourGallery images={galleryImages} />
    </section>
  );
};

export default TourGallerySection;

