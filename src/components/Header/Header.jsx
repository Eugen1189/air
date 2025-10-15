import React, { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <a href="/">
            <Logo />
          </a>
        </div>

        <button 
          className={`burger-button ${isMenuOpen ? 'is-active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Відкрити меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`mobile-nav ${isMenuOpen ? 'is-open' : ''}`}>
          <a href="#hit-tours" onClick={() => setIsMenuOpen(false)}>Популярні тури</a>
          <a href="#collections" onClick={() => setIsMenuOpen(false)}>Колекції</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>Про нас</a>
          <a href="/blog" onClick={() => setIsMenuOpen(false)}>Блог</a>
          <a href="/contacts" onClick={() => setIsMenuOpen(false)}>Контакти</a>
        </nav>

        <nav className="desktop-nav">
          <a href="#hit-tours">Популярні тури</a>
          <a href="#collections">Колекції</a>
          <a href="#about">Про нас</a>
          <a href="/blog">Блог</a>
          <a href="/contacts">Контакти</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

