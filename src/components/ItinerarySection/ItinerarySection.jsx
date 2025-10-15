import React from 'react';
import Accordion from '../Accordion/Accordion';
import { itinerary } from '../../data/toursData';

const ItinerarySection = () => {
  return (
    <section className="itinerary-section" style={{ padding: '60px 20px' }}>
      <h2 className="section-title">Програма туру по днях</h2>
      <Accordion items={itinerary} />
    </section>
  );
};

export default ItinerarySection;

