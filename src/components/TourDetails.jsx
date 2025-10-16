// src/components/TourDetails.jsx
import React from 'react';
import './TourDetails.scss'; // Styles file for this component

// Icons can be imported from library like react-icons
// import { FaRegClock, FaUsers, FaMountain, FaUtensils } from 'react-icons/fa';

const TourDetails = () => {
  return (
    <div className="tour-details-section">
      <div className="detail-item">
        {/* <FaRegClock className="detail-item__icon" /> */}
        <p className="detail-item__title">Durata</p>
        <p className="detail-item__value">8 giorni / 7 notti</p>
      </div>
      <div className="detail-item">
        {/* <FaUsers className="detail-item__icon" /> */}
        <p className="detail-item__title">Dimensione del gruppo</p>
        <p className="detail-item__value">Fino a 12 persone</p>
      </div>
      <div className="detail-item">
        {/* <FaMountain className="detail-item__icon" /> */}
        <p className="detail-item__title">Livello di difficoltà</p>
        <p className="detail-item__value">Medio</p>
      </div>
      <div className="detail-item">
        {/* <FaUtensils className="detail-item__icon" /> */}
        <p className="detail-item__title">Pasti</p>
        <p className="detail-item__value">Colazione inclusa</p>
      </div>
    </div>
  );
};

export default TourDetails;

