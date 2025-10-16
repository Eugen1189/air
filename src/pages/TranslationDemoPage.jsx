// src/pages/TranslationDemoPage.jsx
// Demo page to showcase i18n functionality
import React from 'react';
import TranslationDemo from '../components/TranslationDemo';

const TranslationDemoPage = () => {
  return (
    <div className="page-container">
      <TranslationDemo />
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px 40px',
        textAlign: 'center',
        color: '#6c757d'
      }}>
        <p style={{ fontSize: '1rem', marginBottom: '20px' }}>
          ⚠️ This is a demo page to showcase translation capabilities. 
          Remove this route from production.
        </p>
        <p style={{ fontSize: '0.9rem' }}>
          📚 Check <code>HOW_TO_USE_TRANSLATIONS.md</code> for detailed usage guide.
        </p>
      </div>
    </div>
  );
};

export default TranslationDemoPage;

