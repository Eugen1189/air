// src/components/ReviewsList.jsx
import React from 'react';

const ReviewsList = ({ tourId, reviews }) => {
  // Use passed reviews or empty array
  const reviewsForTour = reviews || [];
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const renderStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  if (reviewsForTour.length === 0) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '60px 20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '12px',
        margin: '20px 0'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '15px' }}>💬</div>
        <h3 style={{ fontSize: '1.5rem', color: '#0A2342', marginBottom: '10px' }}>
          Nessuna recensione ancora
        </h3>
        <p style={{ color: '#6c757d' }}>
          Sii il primo a condividere la tua esperienza con questo tour!
        </p>
      </div>
    );
  }

  return (
    <div className="reviews-list">
      <h3 className="section-title" style={{ fontSize: '2rem', marginBottom: '30px', color: '#0A2342' }}>
        Recensioni dei Clienti
      </h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
        {reviewsForTour.map(review => (
          <div
            key={review.id}
            className="review-item"
            style={{
              backgroundColor: '#ffffff',
              padding: '30px',
              borderRadius: '12px',
              border: '2px solid #f0f0f0',
              transition: 'border-color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#D9795D'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#f0f0f0'}
          >
            {/* Review Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
              {review.avatar && (
                <img
                  src={review.avatar}
                  alt={review.author}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
              )}
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '5px', color: '#0A2342', fontWeight: '600' }}>
                  {review.author}
                </h4>
                <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                  {formatDate(review.date)}
                </div>
              </div>
              <div style={{ fontSize: '1.3rem' }}>
                {renderStars(review.rating)}
              </div>
            </div>

            {/* Review Text */}
            <p style={{
              color: '#333',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              margin: 0
            }}>
              {review.text}
            </p>

            {/* Helpful Button */}
            <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
              <button
                style={{
                  padding: '8px 20px',
                  backgroundColor: 'transparent',
                  border: '1px solid #e0e0e0',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  color: '#6c757d',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#D9795D';
                  e.currentTarget.style.color = '#D9795D';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e0e0e0';
                  e.currentTarget.style.color = '#6c757d';
                }}
              >
                👍 Utile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsList;

