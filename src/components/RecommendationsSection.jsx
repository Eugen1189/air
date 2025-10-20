import React from 'react';
import './RecommendationsSection.scss';

const RecommendationsSection = () => {
  const recommendations = [
    {
      id: 1,
      title: 'Roma',
      description: 'Столиця Італії з багатою історією'
    },
    {
      id: 2,
      title: 'Флоренція',
      description: 'Колыбель Ренесансу'
    },
    {
      id: 3,
      title: 'Венеція',
      description: 'Місто на воді'
    },
    {
      id: 4,
      title: 'Мілан',
      description: 'Столиця моди'
    },
    {
      id: 5,
      title: 'Неаполь',
      description: 'Батьківщина піци'
    }
  ];

  return (
    <section className="recommendations-section">
      <div className="recommendations-grid">
        {recommendations.map((recommendation) => (
          <div key={recommendation.id} className="recommendation-card">
            <h3>{recommendation.title}</h3>
            <p>{recommendation.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendationsSection;
