// src/components/ShowcaseSlider.jsx
import React, { useState, useEffect, useRef } from 'react';
import './ShowcaseSlider.scss'; // Створимо файл зі стилями

// Дані для слайдера (ті ж, що ми використовували раніше)
const toursData = [
  { id: 1, title: 'Смарагдове узбережжя Італії', location: 'Італія', image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1600&h=1000&fit=crop' },
  { id: 2, title: 'Магія Норвезьких фіордів', location: 'Норвегія', image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1600&h=1000&fit=crop' },
  { id: 3, title: 'Квітуча сакура в Японії', location: 'Японія', image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1600&h=1000&fit=crop' },
  { id: 4, title: 'Сафарі в Кенії', location: 'Кенія', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&h=1000&fit=crop' },
];

const SLIDE_DURATION = 6000; // 6 секунд на слайд

const ShowcaseSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  const activeTour = toursData[activeIndex];

  // Функція для запуску таймера
  const startTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % toursData.length);
    }, SLIDE_DURATION);
  };

  // Запускаємо таймер при зміні activeIndex
  useEffect(() => {
    startTimer();
    return () => clearTimeout(timerRef.current); // Очищаємо таймер при розмонтуванні
  }, [activeIndex]);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="showcase">
      <div className="showcase__background">
        {/* Рендеримо всі фони для плавного переходу */}
        {toursData.map((tour, index) => (
          <img
            key={tour.id}
            src={tour.image}
            alt={tour.title}
            className={`showcase__bg-image ${index === activeIndex ? 'is-active' : ''}`}
          />
        ))}
      </div>

      <div className="showcase__content">
        <div className="showcase__title-block">
          <p className="showcase__location">{activeTour.location}</p>
          <h2 className="showcase__title">{activeTour.title}</h2>
        </div>
        
        {/* Індикатори слайдів */}
        <div className="showcase__indicators">
          {toursData.map((tour, index) => (
            <button
              key={tour.id}
              className={`showcase__dot ${index === activeIndex ? 'is-active' : ''}`}
              onClick={() => handleCardClick(index)}
              aria-label={`Перейти до ${tour.title}`}
            >
              <span className="showcase__dot-progress" style={{ animationDuration: `${SLIDE_DURATION}ms` }}></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSlider;

