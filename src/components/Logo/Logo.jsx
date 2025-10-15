import React from 'react';

const Logo = ({ variant = 'default', theme = 'light' }) => {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    icon: {
      fontSize: variant === 'large' ? '32px' : '24px',
    },
    text: {
      fontFamily: 'Cormorant Garamond, serif',
      fontWeight: '700',
      fontSize: variant === 'large' ? '36px' : '28px',
      color: theme === 'dark' ? '#FFFFFF' : '#F4B942',
    }
  };

  return (
    <div style={styles.container}>
      <span style={styles.icon}>✈️</span>
      <span style={styles.text}>Air Tour</span>
    </div>
  );
};

export default Logo;

