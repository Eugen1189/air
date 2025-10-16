// Hook for getting translated content
import { useTranslation } from 'react-i18next';
import { toursTranslations } from '../data/translations/tours';
import { collectionsTranslations } from '../data/translations/collections';
import { tourDetailsTranslations } from '../data/translations/tourDetails';
import { blogPostsTranslations } from '../data/translations/blogPosts';

// Hook to get translated tour data (basic: title, details)
export const useTranslatedTour = (tourId) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const translation = toursTranslations[tourId]?.[currentLang];
  
  return translation || toursTranslations[tourId]?.es || {}; // Fallback to Spanish
};

// Hook to get full translated tour details (subtitle, description, included, itinerary, etc.)
export const useTranslatedTourDetails = (tourId) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const translation = tourDetailsTranslations[tourId]?.[currentLang];
  
  return translation || tourDetailsTranslations[tourId]?.es || {}; // Fallback to Spanish
};

// Hook to get translated collection data
export const useTranslatedCollection = (collectionId) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const translation = collectionsTranslations[collectionId]?.[currentLang];
  
  return translation || collectionsTranslations[collectionId]?.es || {}; // Fallback to Spanish
};

// Helper function to get translation directly (without hook)
export const getTranslatedTour = (tourId, lang) => {
  return toursTranslations[tourId]?.[lang] || toursTranslations[tourId]?.es || {};
};

export const getTranslatedTourDetails = (tourId, lang) => {
  return tourDetailsTranslations[tourId]?.[lang] || tourDetailsTranslations[tourId]?.es || {};
};

export const getTranslatedCollection = (collectionId, lang) => {
  return collectionsTranslations[collectionId]?.[lang] || collectionsTranslations[collectionId]?.es || {};
};

// Hook to get translated blog post data
export const useTranslatedBlogPost = (postId) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const translation = blogPostsTranslations[postId]?.[currentLang];
  
  return translation || blogPostsTranslations[postId]?.es || {}; // Fallback to Spanish
};

export const getTranslatedBlogPost = (postId, lang) => {
  return blogPostsTranslations[postId]?.[lang] || blogPostsTranslations[postId]?.es || {};
};

