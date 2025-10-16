// Language Dropdown for Header - Simplified
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageDropdown.scss';

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'es', flag: '🇪🇸', name: 'Español' },
    { code: 'en', flag: '🇬🇧', name: 'English' },
    { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
    { code: 'it', flag: '🇮🇹', name: 'Italiano' }
  ];

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Toggle clicked, isOpen:', !isOpen);
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng) => {
    console.log('Changing language to:', lng);
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  console.log('LanguageDropdown render, isOpen:', isOpen);

  return (
    <div className="lang-dropdown" ref={dropdownRef}>
      <button
        type="button"
        className={`lang-dropdown__trigger ${isOpen ? 'is-open' : ''}`}
        onClick={handleToggle}
        onTouchEnd={(e) => {
          e.preventDefault();
          handleToggle(e);
        }}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span className="flag">{currentLang.flag}</span>
        <span className="name">{currentLang.name}</span>
        <span className="arrow">▼</span>
      </button>

      <div className={`lang-dropdown__menu ${isOpen ? 'is-visible' : ''}`}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            type="button"
            onClick={() => changeLanguage(lang.code)}
            onTouchEnd={(e) => {
              e.preventDefault();
              changeLanguage(lang.code);
            }}
            className={`lang-option ${i18n.language === lang.code ? 'lang-option--active' : ''}`}
          >
            <span className="flag">{lang.flag}</span>
            <span className="name">{lang.name}</span>
            {i18n.language === lang.code && <span className="check">✓</span>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageDropdown;

