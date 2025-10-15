import React from 'react';
import { Element } from 'react-scroll';

const AboutUsSection = () => {
  return (
    <Element name="about">
      <section className="about-us-section">
      <div className="about-us-container">
        <div className="about-us-column">
          <img 
            src="https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?q=80&w=1994" 
            alt="Команда туристичної компанії"
            className="about-us__image"
          />
        </div>
        <div className="about-us-column">
          <h2 className="section-title">Ми не продаємо тури. Ми створюємо враження.</h2>
          <p>
            Наша філософія проста: кожна подорож — це унікальна історія. 
            Ми не просто відправляємо вас у відомі місця, а допомагаємо відкрити їх по-новому. 
            Наша команда особисто розробляє кожен маршрут, а персональний консьєрж-сервіс гарантує, 
            що ваш відпочинок буде бездоганним від початку до кінця.
          </p>
          <a href="#" className="button">Дізнатися більше про нас</a>
        </div>
      </div>
    </section>
    </Element>
  );
};

export default AboutUsSection;

