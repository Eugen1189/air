import React, { useState } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  loading = 'lazy',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  // Fallback image for errors - красиве зображення з іконкою камери
  const fallbackSrc = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmOGY5ZmEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlOWVjZWYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PGNpcmNsZSBjeD0iMTUwIiBjeT0iMTAwIiByPSIzMCIgZmlsbD0iI2NjYyIgb3BhY2l0eT0iMC4zIi8+PHBhdGggZD0iTTEzNSAxMDBhMTUgMTUgMCAxIDEgMzAgMCAxNSAxNSAwIDEgMSAtMzAgMHoiIGZpbGw9IiNjY2MiIG9wYWNpdHk9IjAuNSIvPjxwYXRoIGQ9Ik0xNDAgOTVsNS01aDEwdjEwaC0xMGwtNS01eiIgZmlsbD0iIzk5OSIvPjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk5vIGltYWdlPC90ZXh0Pjwvc3ZnPg==';

  return (
    <div 
      className={`optimized-image-container ${className}`}
      style={{ 
        width: width ? `${width}px` : '100%', 
        height: height ? `${height}px` : 'auto',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <img
        src={hasError ? fallbackSrc : src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
        {...props}
      />
      
      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              border: '3px solid #ddd',
              borderTop: '3px solid #666',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 10px'
            }}></div>
            Завантаження...
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
