import React from 'react';
import { Element } from 'react-scroll';
import HitToursSlider from '../HitToursSlider/HitToursSlider';
import { hitTours } from '../../data/toursData';

const HitToursSection = () => {
  return (
    <Element name="hit-tours">
      <section style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2 className="section-title">Найпопулярніше цього сезону</h2>
        <HitToursSlider tours={hitTours} />
      </section>
    </Element>
  );
};

export default HitToursSection;
