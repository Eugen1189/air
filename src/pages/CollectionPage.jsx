import React from 'react';
import { useParams } from 'react-router-dom';
import { collectionDetails } from '../data/collectionsData';

const CollectionPage = () => {
  const { id } = useParams();
  const collection = collectionDetails[id];

  if (!collection) {
    return (
      <div style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>Collezione non trovata</h1>
        <p>La collezione che stai cercando non esiste.</p>
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
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#333' }}>
          {collection.fullDescription}
        </p>
      </section>

      {/* Destinations */}
      <section>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', color: '#0A2342' }}>
          Destinazioni Consigliate
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {collection.destinations.map((destination, index) => (
            <div key={index} style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease'
            }}>
              <img 
                src={destination.image} 
                alt={destination.name}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '25px' }}>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '10px',
                  color: '#0A2342'
                }}>
                  {destination.name}
                </h3>
                <p style={{ 
                  fontSize: '0.95rem',
                  color: '#6c757d',
                  marginBottom: '15px'
                }}>
                  📍 {destination.location}
                </p>
                <p style={{ 
                  lineHeight: '1.6',
                  color: '#333',
                  marginBottom: '15px'
                }}>
                  {destination.description}
                </p>
                <div style={{
                  padding: '15px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px'
                }}>
                  <p style={{ 
                    margin: 0,
                    fontWeight: 600,
                    color: '#D9795D'
                  }}>
                    💡 {destination.whyVisit}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Time to Visit */}
      <section style={{ 
        marginTop: '60px',
        padding: '40px',
        backgroundColor: '#f8f9fa',
        borderRadius: '12px'
      }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '20px', color: '#0A2342' }}>
          Periodo Migliore per Visitare
        </h3>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
          {collection.bestTime}
        </p>
      </section>
    </div>
  );
};

export default CollectionPage;

