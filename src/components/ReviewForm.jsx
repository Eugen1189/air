// src/components/ReviewForm.jsx
import React, { useState } from 'react';

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
    <div style={{
      backgroundColor: '#f8f9fa',
      padding: '35px',
      borderRadius: '16px',
      marginBottom: '40px',
      border: '2px solid #D9795D'
    }}>
      <h3 style={{ fontSize: '1.8rem', marginBottom: '25px', color: '#0A2342' }}>
        Lascia la Tua Recensione
      </h3>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#333' }}>
            Il Tuo Nome *
          </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            placeholder="Come ti chiami?"
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '1rem'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#333' }}>
            Valutazione *
          </label>
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer',
              backgroundColor: 'white'
            }}
          >
            <option value="5">⭐⭐⭐⭐⭐ Eccellente</option>
            <option value="4">⭐⭐⭐⭐☆ Molto buono</option>
            <option value="3">⭐⭐⭐☆☆ Buono</option>
            <option value="2">⭐⭐☆☆☆ Discreto</option>
            <option value="1">⭐☆☆☆☆ Scarso</option>
          </select>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#333' }}>
            La Tua Recensione *
          </label>
          <textarea
            name="text"
            value={formData.text}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Condividi la tua esperienza con questo tour..."
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '1rem',
              resize: 'vertical'
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '15px 40px',
            backgroundColor: '#D9795D',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c4684d'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#D9795D'}
        >
          Invia Recensione
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;

