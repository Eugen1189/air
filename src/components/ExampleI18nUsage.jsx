// src/components/ExampleI18nUsage.jsx
// Example of how to use translations in components
import React from 'react';
import { useTranslation } from 'react-i18next';

const ExampleI18nUsage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Basic usage */}
      <h1>{t('HomePage.title')}</h1>
      <p>{t('HomePage.subtitle')}</p>

      {/* Button with translation */}
      <button>{t('Buttons.details')}</button>
      <button>{t('Buttons.book')}</button>

      {/* Navigation links */}
      <nav>
        <a href="/tours">{t('Navigation.allTours')}</a>
        <a href="/about">{t('Navigation.aboutUs')}</a>
      </nav>

      {/* Conditional text */}
      <p>
        {5} {t('Filters.toursFound')}
      </p>
    </div>
  );
};

export default ExampleI18nUsage;

/* 
HOW TO USE TRANSLATIONS IN YOUR COMPONENTS:

1. Import the hook:
   import { useTranslation } from 'react-i18next';

2. Use the hook in your component:
   const { t, i18n } = useTranslation();

3. Use translations:
   {t('key.path')} - for simple text
   {t('key', { variable: value })} - for interpolation
   
4. Change language:
   i18n.changeLanguage('it') - Italian
   i18n.changeLanguage('en') - English
   i18n.changeLanguage('uk') - Ukrainian

5. Get current language:
   i18n.language - returns current language code

EXAMPLES:

// Simple translation
<h1>{t('HomePage.title')}</h1>

// Button text
<button>{t('Buttons.book')}</button>

// With variables (add to translation files)
{t('welcome', { name: 'Marco' })}
// translation: "Benvenuto, {{name}}!"

// Plural forms
{count} {count === 1 ? t('tourFound') : t('toursFound')}

// Conditional by language
{i18n.language === 'it' ? 'Ciao' : 'Hello'}
*/

