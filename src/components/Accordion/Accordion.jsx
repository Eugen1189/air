import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleItem = (index) => {
    // If clicked on already open - close it, otherwise - open new one
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`accordion-item ${openIndex === index ? 'is-open' : ''}`}
        >
          <button 
            className="accordion-header"
            onClick={() => toggleItem(index)}
          >
            <span className="accordion-header__day">{item.day}</span>
            <h3 className="accordion-header__title">{item.title}</h3>
            <span className="accordion-header__icon">+</span>
          </button>
          <div className="accordion-content">
            <p className="section-paragraph">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

