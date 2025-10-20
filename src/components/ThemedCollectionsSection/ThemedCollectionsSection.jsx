import React from 'react';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import FlipCard from '../FlipCard';
import { collections } from '../../data/toursData';

const ThemedCollectionsSection = () => {
  const { t } = useTranslation();
  
  return (
    <Element name="collections">
      <section className="themed-collections-section">
      <h2 className="section-title">{t('Collections.title')}</h2>
      <p className="section-subtitle">{t('Collections.subtitle')}</p>
      <div className="collections-grid">
        {collections.map(collection => (
          <FlipCard
            key={collection.id}
            collectionId={collection.id}
            link={`/collection/${collection.slug}`} // Оновлюємо посилання з використанням slug
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

