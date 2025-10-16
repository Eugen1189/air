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
          aria-label="Apri menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`mobile-nav ${isMenuOpen ? 'is-open' : ''}`}>
          <a href="#hit-tours" onClick={() => setIsMenuOpen(false)}>Tour Popolari</a>
          <a href="#collections" onClick={() => setIsMenuOpen(false)}>Collezioni</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>Chi Siamo</a>
          <a href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</a>
          <a href="/contacts" onClick={() => setIsMenuOpen(false)}>Contatti</a>
        </nav>

        <nav className="desktop-nav">
          <a href="#hit-tours">Tour Popolari</a>
          <a href="#collections">Collezioni</a>
          <a href="#about">Chi Siamo</a>
          <a href="/blog">Blog</a>
          <a href="/contacts">Contatti</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

