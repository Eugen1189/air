import React from 'react';
import OptimizedImage from '../OptimizedImage';

const Logo = ({ variant = 'default', theme = 'light' }) => {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    logoImage: {
      width: variant === 'large' ? '50px' : '40px',
      height: variant === 'large' ? '50px' : '40px',
      objectFit: 'contain',
      filter: theme === 'dark' ? 'brightness(1.1)' : 'drop-shadow(0 2px 6px rgba(0,0,0,0.15))',
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: '1',
    },
    mainText: {
      fontFamily: 'Cormorant Garamond, serif',
      fontWeight: '700',
      fontSize: variant === 'large' ? '36px' : '28px',
      color: theme === 'dark' ? '#FFFFFF' : '#E8F5E9',
      letterSpacing: '1.5px',
      textShadow: theme === 'dark' ? 'none' : '0 2px 8px rgba(0,0,0,0.3)',
    },
    subText: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: '300',
      fontSize: variant === 'large' ? '10px' : '8px',
      color: theme === 'dark' ? 'rgba(255,255,255,0.7)' : '#81D4FA',
      letterSpacing: '2.5px',
      textTransform: 'uppercase',
      marginTop: '-1px',
    }
  };

  return (
    <div style={styles.container}>
      <OptimizedImage 
        src="/Gemini_Generated_Image_hnyrk9hnyrk9hnyr.png" 
        alt="Elysian Ways Logo" 
        width={variant === 'large' ? 50 : 40}
        height={variant === 'large' ? 50 : 40}
        style={styles.logoImage}
        sizes="(max-width: 768px) 40px, 50px"
      />
      <div style={styles.textContainer}>
        <span style={styles.mainText}>Elysian Ways</span>
      </div>
    </div>
  );
};

export default Logo;

