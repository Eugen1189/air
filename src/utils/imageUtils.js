// Utility functions for image handling

// Default placeholder images for different categories
export const placeholderImages = {
  tour: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070',
  collection: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070',
  blog: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070',
  destination: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2070',
  gallery: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?q=80&w=2070'
};

// Function to get image with fallback
export const getImageWithFallback = (imageUrl, category = 'tour') => {
  if (!imageUrl || imageUrl === '') {
    return placeholderImages[category] || placeholderImages.tour;
  }
  return imageUrl;
};

// Function to check if image URL is valid
export const isValidImageUrl = (url) => {
  if (!url) return false;
  
  // Check if it's a valid URL
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Function to optimize image URL with size parameters
export const optimizeImageUrl = (url, width = 2070, quality = 80) => {
  if (!isValidImageUrl(url)) {
    return getImageWithFallback(url);
  }
  
  // If it's an Unsplash URL, add optimization parameters
  if (url.includes('unsplash.com')) {
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}q=${quality}&w=${width}`;
  }
  
  return url;
};

// Function to get multiple optimized images for gallery
export const getOptimizedGallery = (images, width = 2070, quality = 80) => {
  if (!images || !Array.isArray(images)) {
    return [getImageWithFallback('', 'gallery')];
  }
  
  return images.map(img => {
    const imageUrl = typeof img === 'string' ? img : img.src || img.imageUrl;
    return {
      src: optimizeImageUrl(imageUrl, width, quality),
      alt: img.alt || 'Gallery image'
    };
  });
};

