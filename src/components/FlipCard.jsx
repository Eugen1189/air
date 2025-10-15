// src/components/FlipCard.jsx
import React from 'react';
import './FlipCard.scss'; // Підключимо стилі, які створимо далі

const FlipCard = ({ imageSrc, title, link, description }) => {
  return (
    <a href={link} className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={imageSrc} alt={title} />
          <div className="overlay"></div>
          <h3>{title}</h3>
        </div>
        <div className="flip-card-back">
          <h3>{title}</h3>
          <p className="flip-card-description">{description}</p>
          <span className="flip-card-action">Дізнатися більше</span>
        </div>
      </div>
    </a>
  );
};

export default FlipCard;

