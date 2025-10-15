import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Logo from '../Logo/Logo';

const HeaderWithScroll = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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

  // Налаштування для react-scroll
  const scrollConfig = {
    spy: true,           // Підсвічує активне посилання
    smooth: true,        // Плавна прокрутка
    offset: -70,         // Відступ від header (70px)
    duration: 800,       // Тривалість анімації (800ms)
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <Link to="hit-tours" {...scrollConfig} duration={500}>
            <Logo />
          </Link>
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
          <Link 
            to="hit-tours" 
            {...scrollConfig}
            onClick={closeMenu}
            activeClass="active"
          >
            Популярні тури
          </Link>
          <Link 
            to="collections" 
            {...scrollConfig}
            onClick={closeMenu}
            activeClass="active"
          >
            Колекції
          </Link>
          <Link 
            to="about" 
            {...scrollConfig}
            onClick={closeMenu}
            activeClass="active"
          >
            Про нас
          </Link>
          <a href="/blog" onClick={closeMenu}>Блог</a>
          <a href="/contacts" onClick={closeMenu}>Контакти</a>
        </nav>

        <nav className="desktop-nav">
          <Link 
            to="hit-tours" 
            {...scrollConfig}
            activeClass="active"
          >
            Популярні тури
          </Link>
          <Link 
            to="collections" 
            {...scrollConfig}
            activeClass="active"
          >
            Колекції
          </Link>
          <Link 
            to="about" 
            {...scrollConfig}
            activeClass="active"
          >
            Про нас
          </Link>
          <a href="/blog">Блог</a>
          <a href="/contacts">Контакти</a>
        </nav>
      </div>
    </header>
  );
};

export default HeaderWithScroll;


