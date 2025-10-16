import React, { useState } from 'react';
import { getReviewsForTour, getAverageRating } from '../data/mock-reviews';
import ReviewsList from './ReviewsList';
import ReviewForm from './ReviewForm';

const ReviewsSection = ({ tourId }) => {
  const [reviews, setReviews] = useState(getReviewsForTour(tourId));
  const [showForm, setShowForm] = useState(false);

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
    : 0;

  const handleReviewSubmit = (review) => {
    setReviews([review, ...reviews]);
    setShowForm(false);
    alert('Grazie per la tua recensione!');
  };

  const renderStars = (rating) => {
    return '⭐'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating));
  };

  return (
    <section style={{ margin: '60px 0' }}>
      {/* Header with Average Rating */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', color: '#0A2342' }}>
          Recensioni dei Viaggiatori
        </h2>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
          <div style={{
            fontSize: '3rem',
            fontWeight: '700',
            color: '#D9795D'
          }}>
            {averageRating}
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>
              {renderStars(Math.round(averageRating))}
            </div>
            <div style={{ color: '#6c757d', fontSize: '1rem' }}>
              Basato su {reviews.length} {reviews.length === 1 ? 'recensione' : 'recensioni'}
            </div>
          </div>
        </div>

        {/* Add Review Button */}
        <button
          onClick={() => setShowForm(!showForm)}
          style={{
            padding: '15px 35px',
            backgroundColor: showForm ? '#6c757d' : '#D9795D',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
        >
          {showForm ? 'Annulla' : '✍️ Scrivi una Recensione'}
        </button>
      </div>

      {/* Review Form */}
      {showForm && (
        <ReviewForm 
          tourId={tourId}
          onReviewSubmit={handleReviewSubmit}
        />
      )}

      {/* Reviews List */}
      <ReviewsList tourId={tourId} reviews={reviews} />
    </section>
  );
};

export default ReviewsSection;

