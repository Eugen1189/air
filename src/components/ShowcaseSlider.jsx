// src/components/ShowcaseSlider.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './ShowcaseSlider.scss'; // Styles file

// Slider data - Featured tours only (best 3)
const toursData = [
  { id: 1, title: 'Costa Smeralda d\'Italia', location: 'Italia', image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1600&h=1000&fit=crop' },
  { id: 5, title: 'Isole Greche da Sogno', location: 'Grecia', image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1600&h=1000&fit=crop' },
  { id: 3, title: 'Fioritura del Sakura in Giappone', location: 'Giappone', image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1600&h=1000&fit=crop' },
];

const SLIDE_DURATION = 4000; // 4 seconds per slide - faster rotation

const ShowcaseSlider = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  const activeTour = toursData[activeIndex];

  // Function to start timer
  const startTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % toursData.length);
    }, SLIDE_DURATION);
  };

  // Start timer when activeIndex changes
  useEffect(() => {
    startTimer();
    return () => clearTimeout(timerRef.current); // Clean up timer on unmount
  }, [activeIndex]);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="showcase">
      <div className="showcase__background">
        {/* Render all backgrounds for smooth transition */}
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
          <Link to={`/tour/${activeTour.id}`} className="showcase__button">
            {t('Buttons.learnMore')}
          </Link>
        </div>
        
        {/* Slide indicators */}
        <div className="showcase__indicators">
          {toursData.map((tour, index) => (
            <button
              key={tour.id}
              className={`showcase__dot ${index === activeIndex ? 'is-active' : ''}`}
              onClick={() => handleCardClick(index)}
              aria-label={`Vai a ${tour.title}`}
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

