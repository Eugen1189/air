import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const defaultImages = [
  { src: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070' },
  { src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2070' },
  { src: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?q=80&w=2070' },
  { src: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c?q=80&w=2070' },
];

const TourGallery = ({ images = defaultImages }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const openLightbox = (index) => {
    setImageIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="tour-gallery">
      <div className="tour-gallery__main-image" onClick={() => openLightbox(0)}>
        <img 
          src={images[0].src} 
          alt="Головне фото туру" 
          style={{ 
            cursor: 'pointer', 
            width: '100%', 
            borderRadius: '12px',
            objectFit: 'cover',
            height: '400px'
          }} 
        />
      </div>

      {images.length > 1 && (
        <div className="tour-gallery__thumbnails" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
          gap: '10px', 
          marginTop: '20px' 
        }}>
          {images.slice(1).map((image, index) => (
            <img 
              key={index} 
              src={image.src} 
              alt={`Фото ${index + 2}`}
              onClick={() => openLightbox(index + 1)}
              style={{ 
                cursor: 'pointer', 
                width: '100%', 
                height: '150px', 
                objectFit: 'cover', 
                borderRadius: '8px' 
              }}
            />
          ))}
        </div>
      )}

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={images}
        index={imageIndex}
      />
    </div>
  );
};

export default TourGallery;

