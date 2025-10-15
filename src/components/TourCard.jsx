import React from 'react';

// Зверніть увагу: ми більше не імпортуємо локальні стилі
const TourCard = ({ imageUrl, title, details, price, link }) => {
  // Структура JSX тепер точно відповідає вашій верстці та стилям
  return (
    <div className="tour-card">
      <img src={imageUrl} alt={title} className="tour-card__image" />
      <div className="tour-card__content">
        <h3 className="tour-card__title">{title}</h3>
        <p className="tour-card__details">{details}</p>
        <div className="tour-card__footer">
          <span className="tour-card__price">{price}€</span>
          <a href={link} className="tour-card__button">Детальніше</a>
        </div>
      </div>
    </div>
  );
};

export default TourCard;

