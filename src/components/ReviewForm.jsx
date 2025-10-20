// src/components/ReviewForm.jsx
import React, { useState } from 'react';
import './ReviewForm.scss';

const ReviewForm = ({ tourId, onReviewSubmit }) => {
  const [formData, setFormData] = useState({
    author: '',
    rating: 5,
    text: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const review = {
      id: Date.now(),
      tourId: parseInt(tourId),
      author: formData.author,
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
      rating: parseInt(formData.rating),
      text: formData.text,
      date: new Date().toISOString().split('T')[0]
    };

    onReviewSubmit(review);
    setFormData({ author: '', rating: 5, text: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="review-form">
      <h3 className="form-title">
        Lascia la Tua Recensione
      </h3>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            placeholder=" " // Важливо: пробіл, а не порожній рядок
            className="form-input"
          />
          <label className="form-label">
            Il Tuo Nome *
          </label>
        </div>

        <div className="form-group">
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="form-select"
          >
            <option value="5">⭐⭐⭐⭐⭐ Eccellente</option>
            <option value="4">⭐⭐⭐⭐☆ Molto buono</option>
            <option value="3">⭐⭐⭐☆☆ Buono</option>
            <option value="2">⭐⭐☆☆☆ Discreto</option>
            <option value="1">⭐☆☆☆☆ Scarso</option>
          </select>
          <label className="form-label">
            Valutazione *
          </label>
        </div>

        <div className="form-group">
          <textarea
            name="text"
            value={formData.text}
            onChange={handleChange}
            required
            rows="5"
            placeholder=" " // Важливо: пробіл, а не порожній рядок
            className="form-textarea"
          />
          <label className="form-label">
            La Tua Recensione *
          </label>
        </div>

        <button
          type="submit"
          className="submit-button"
        >
          Invia Recensione
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;

