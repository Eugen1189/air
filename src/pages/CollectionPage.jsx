import React from 'react';
import { useParams } from 'react-router-dom';
import { collectionDetails } from '../data/collectionsData';
import CollectionToursSection from '../components/CollectionToursSection';
import './CollectionPage.scss';

const CollectionPage = () => {
  const { id } = useParams(); // id тепер є slug (наприклад, 'gastro-tours')
  const collection = collectionDetails[id];

  // Якщо дані ще завантажуються або колекція не знайдена
  if (!collection) {
    return (
      <div style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ color: '#FFFFFF', marginBottom: '20px' }}>Collezione non trovata</h1>
        <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '30px' }}>
          La collezione che stai cercando non esiste.
        </p>
        <a 
          href="/" 
          style={{ 
            color: 'var(--accent-color, #D9795D)', 
            textDecoration: 'none',
            fontWeight: '600'
          }}
        >
          ← Torna alla home
        </a>
      </div>
    );
  }

  return (
    <div style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Hero Section */}
      <div style={{ 
        backgroundImage: `url(${collection.imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '40px',
        marginBottom: '60px',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))',
          borderRadius: '16px'
        }}></div>
        <div style={{ position: 'relative', zIndex: 2, color: 'white' }}>
          <h1 style={{ fontSize: '3rem', margin: '0 0 15px 0' }}>{collection.title}</h1>
          <p style={{ fontSize: '1.3rem', margin: 0 }}>{collection.subtitle}</p>
        </div>
      </div>

      {/* Description */}
      <section style={{ marginBottom: '60px' }}>
        <p className="page-description">
          {collection.fullDescription}
        </p>
      </section>

      {/* Tours for this specific collection */}
      <CollectionToursSection collectionId={collection.id} />

      {/* Best Time to Visit */}
      <section className="info-block">
        <h3 className="info-block__title">
          Periodo Migliore per Visitare
        </h3>
        <p className="info-block__text">
          {collection.bestTime}
        </p>
      </section>
    </div>
  );
};

export default CollectionPage;

