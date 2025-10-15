import React from 'react';
import { useSticky } from '../../hooks/useSticky';

const BookingSidebar = ({ price = '950' }) => {
  const { elementRef, isSticky } = useSticky();

  return (
    <aside 
      ref={elementRef} 
      className={`tour-sidebar ${isSticky ? 'is-sticky' : ''}`}
    >
      <div className="booking-widget">
        <div className="booking-widget__price">
          {price}€ <span>/ за особу</span>
        </div>
        
        <div className="form-group">
          <label className="form-label">Дата від</label>
          <input type="date" className="form-input" />
        </div>
        
        <div className="form-group">
          <label className="form-label">Кількість осіб</label>
          <input type="number" className="form-input" min="1" defaultValue="2" />
        </div>
        
        <button className="booking-widget__button">
          Забронювати тур
        </button>
        
        <p style={{ fontSize: '14px', color: '#6c757d', marginTop: '15px', textAlign: 'center' }}>
          Без комісій • Миттєве підтвердження
        </p>
      </div>
    </aside>
  );
};

export default BookingSidebar;

