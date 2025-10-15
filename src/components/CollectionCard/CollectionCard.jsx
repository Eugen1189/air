import React from 'react';

const CollectionCard = ({ link, imageUrl, title }) => {
  return (
    <a href={link} className="collection-card">
      <img src={imageUrl} alt={title} className="collection-card__background" />
      <div className="collection-card__overlay"></div>
      <h3 className="collection-card__title">{title}</h3>
    </a>
  );
};

export default CollectionCard;

