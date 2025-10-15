import React from 'react';
import { Element } from 'react-scroll';
import FlipCard from '../FlipCard';
import { collections } from '../../data/toursData';

const ThemedCollectionsSection = () => {
  return (
    <Element name="collections">
      <section className="themed-collections-section">
      <h2 className="section-title">Натхнення для вашої наступної пригоди</h2>
      <div className="collections-grid">
        {collections.map(collection => (
          <FlipCard
            key={collection.id}
            link={collection.link}
            imageSrc={collection.imageUrl}
            title={collection.title}
            description={collection.description}
          />
        ))}
      </div>
    </section>
    </Element>
  );
};

export default ThemedCollectionsSection;

