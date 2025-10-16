// src/components/LocaleRouter.jsx
// Handles language prefixes in URL for React Router
// Example: /it/tours, /en/tours, /uk/tours

import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SUPPORTED_LOCALES = ['it', 'en', 'uk'];
const DEFAULT_LOCALE = 'it';

const LocaleRouter = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const firstSegment = pathSegments[0];

    // Check if first segment is a locale
    if (SUPPORTED_LOCALES.includes(firstSegment)) {
      // URL has locale prefix, sync with i18n
      if (i18n.language !== firstSegment) {
        i18n.changeLanguage(firstSegment);
      }
    } else {
      // No locale in URL, add default locale
      const savedLocale = localStorage.getItem('language') || DEFAULT_LOCALE;
      
      // Redirect to URL with locale prefix
      if (location.pathname !== '/') {
        navigate(`/${savedLocale}${location.pathname}${location.search}`, { replace: true });
      }
    }
  }, [location.pathname, i18n, navigate]);

  // Sync i18n language changes with URL
  useEffect(() => {
    const handleLanguageChange = (lng) => {
      const pathSegments = location.pathname.split('/').filter(Boolean);
      const firstSegment = pathSegments[0];

      if (SUPPORTED_LOCALES.includes(firstSegment)) {
        // Replace locale in URL
        const newPath = location.pathname.replace(`/${firstSegment}`, `/${lng}`);
        navigate(newPath, { replace: true });
      } else {
        // Add locale to URL
        navigate(`/${lng}${location.pathname}`, { replace: true });
      }
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n, location.pathname, navigate]);

  return <>{children}</>;
};

export default LocaleRouter;

// Helper function to get path without locale prefix
export const getPathWithoutLocale = (pathname) => {
  const pathSegments = pathname.split('/').filter(Boolean);
  const firstSegment = pathSegments[0];

  if (SUPPORTED_LOCALES.includes(firstSegment)) {
    return '/' + pathSegments.slice(1).join('/');
  }

  return pathname;
};

// Helper function to add locale to path
export const getLocalizedPath = (path, locale) => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${cleanPath}`;
};

