// src/components/ReviewsList.jsx
import React from 'react';
import './ReviewsList.scss';

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
      <div className="no-reviews">
        <div className="no-reviews-icon">💬</div>
        <h3 className="no-reviews-title">
          Nessuna recensione ancora
        </h3>
        <p className="no-reviews-text">
          Sii il primo a condividere la tua esperienza con questo tour!
        </p>
      </div>
    );
  }

  return (
    <div className="reviews-list">
      <h3 className="section-title">
        Recensioni dei Clienti
      </h3>
      
      <div className="reviews-container">
        {reviewsForTour.map(review => (
          <div
            key={review.id}
            className="review-item"
          >
            {/* Review Header */}
            <div className="review-header">
              {review.avatar && (
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="review-avatar"
                />
              )}
              <div className="review-info">
                <h4 className="review-author">
                  {review.author}
                </h4>
                <div className="review-date">
                  {formatDate(review.date)}
                </div>
              </div>
              <div className="review-stars">
                {renderStars(review.rating)}
              </div>
            </div>

            {/* Review Text */}
            <p className="review-text">
              {review.text}
            </p>

            {/* Helpful Button */}
            <div className="review-actions">
              <button className="helpful-button">
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

