// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.scss';

const LanguageSwitcher = ({ variant = 'header' }) => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'es', flag: '🇪🇸', label: 'ES', name: 'Español' },
    { code: 'en', flag: '🇬🇧', label: 'EN', name: 'English' },
    { code: 'de', flag: '🇩🇪', label: 'DE', name: 'Deutsch' },
    { code: 'it', flag: '🇮🇹', label: 'IT', name: 'Italiano' }
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <div className={`language-switcher language-switcher--${variant}`}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`lang-button ${i18n.language === lang.code ? 'lang-button--active' : ''}`}
          title={lang.name}
          aria-label={`Switch to ${lang.name}`}
        >
          <span className="flag">{lang.flag}</span>
          <span className="code">{lang.label}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;

