import React from 'react';
import OptimizedImage from '../OptimizedImage';

const CollectionCard = ({ link, imageUrl, title }) => {
  return (
    <a href={link} className="collection-card">
      <OptimizedImage 
        src={imageUrl} 
        alt={title} 
        className="collection-card__background"
        width={400}
        height={250}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="collection-card__overlay"></div>
      <h3 className="collection-card__title">{title}</h3>
    </a>
  );
};

export default CollectionCard;

