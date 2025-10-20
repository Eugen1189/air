import React, { useState } from 'react';
import { getReviewsForTour, getAverageRating } from '../data/mock-reviews';
import ReviewsList from './ReviewsList';
import ReviewForm from './ReviewForm';
import './ReviewsSection.scss';

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
    <section className="reviews-section">
      {/* Header with Average Rating */}
      <div className="reviews-summary">
        <h2 className="section-title">
          Recensioni dei Viaggiatori
        </h2>
        
        <div className="rating-container">
          <div className="rating-number">
            {averageRating}
          </div>
          <div className="rating-details">
            <div className="stars">
              {renderStars(Math.round(averageRating))}
            </div>
            <div className="rating-text">
              Basato su {reviews.length} {reviews.length === 1 ? 'recensione' : 'recensioni'}
            </div>
          </div>
        </div>

        {/* Add Review Button */}
        <button
          onClick={() => setShowForm(!showForm)}
          className={`add-review-button ${showForm ? 'cancel' : ''}`}
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

