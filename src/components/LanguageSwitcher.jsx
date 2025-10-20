// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.scss';

/*
Приклади використання:

1. Стандартний варіант (всі кнопки мов):
<LanguageSwitcher variant="header" />

2. З іконкою глобуса (dropdown):
<LanguageSwitcher variant="header" showGlobeIcon={true} />

3. Для footer:
<LanguageSwitcher variant="footer" />

4. Для мобільного меню:
<LanguageSwitcher variant="mobile" />
*/

const LanguageSwitcher = ({ variant = 'header', showGlobeIcon = false }) => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'es', flag: '🇪🇸', label: 'ES', name: 'Español' },
    { code: 'en', flag: '🇬🇧', label: 'EN', name: 'English' },
    { code: 'de', flag: '🇩🇪', label: 'DE', name: 'Deutsch' },
    { code: 'it', flag: '🇮🇹', label: 'IT', name: 'Italiano' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  // Якщо showGlobeIcon = true, показуємо тільки поточну мову з іконкою глобуса
  if (showGlobeIcon) {
    return (
      <div className={`language-switcher language-switcher--${variant}`}>
        <button className="current-locale-button">
          <span>🌐</span>
          <span>{currentLanguage.label}</span>
        </button>
        <div className="locale-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`lang-option ${i18n.language === lang.code ? 'lang-option--active' : ''}`}
              title={lang.name}
              aria-label={`Switch to ${lang.name}`}
            >
              <span className="flag">{lang.flag}</span>
              <span className="name">{lang.name}</span>
              {i18n.language === lang.code && <span className="check">✓</span>}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Стандартний варіант з усіма кнопками
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

