import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, Events } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '../Logo/Logo';
import LanguageDropdown from '../LanguageDropdown';
import LanguageSwitcher from '../LanguageSwitcher';

const HeaderWithScroll = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Track scroll position to change header style
  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if scrolled more than 50px
      setIsScrolled(window.scrollY > 50);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  // Cleanup react-scroll events on unmount
  useEffect(() => {
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  // Configuration for react-scroll
  const scrollConfig = {
    spy: true,           // Highlights active link
    smooth: true,        // Smooth scrolling
    offset: -70,         // Offset from header (70px)
    duration: 800,       // Animation duration (800ms)
  };

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <RouterLink to="/">
            <Logo />
          </RouterLink>
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

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="mobile-overlay" onClick={closeMenu}></div>
        )}

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMenuOpen ? 'is-open' : ''}`}>
          {isHomePage ? (
            <>
              <ScrollLink 
                to="collections" 
                {...scrollConfig}
                onClick={closeMenu}
                activeClass="active"
              >
                {t('Navigation.collections')}
              </ScrollLink>
              <ScrollLink 
                to="about" 
                {...scrollConfig}
                onClick={closeMenu}
                activeClass="active"
              >
                {t('Navigation.aboutUs')}
              </ScrollLink>
            </>
          ) : (
            <>
              <RouterLink to="/#collections" onClick={closeMenu}>{t('Navigation.collections')}</RouterLink>
              <RouterLink to="/#about" onClick={closeMenu}>{t('Navigation.aboutUs')}</RouterLink>
            </>
          )}
          <RouterLink to="/tours" onClick={closeMenu}>{t('Navigation.tours')}</RouterLink>
          <RouterLink to="/blog" onClick={closeMenu}>{t('Navigation.blog')}</RouterLink>
          <RouterLink to="/contacts" onClick={closeMenu}>{t('Navigation.contacts')}</RouterLink>
          
          {/* Language Switcher in Mobile Menu */}
          <div className="mobile-lang-switcher">
            <LanguageSwitcher variant="mobile" />
          </div>
        </nav>

        <nav className="desktop-nav">
          {isHomePage ? (
            <>
              <ScrollLink 
                to="collections" 
                {...scrollConfig}
                activeClass="active"
              >
                {t('Navigation.collections')}
              </ScrollLink>
              <ScrollLink 
                to="about" 
                {...scrollConfig}
                activeClass="active"
              >
                {t('Navigation.aboutUs')}
              </ScrollLink>
            </>
          ) : (
            <>
              <RouterLink to="/#collections">{t('Navigation.collections')}</RouterLink>
              <RouterLink to="/#about">{t('Navigation.aboutUs')}</RouterLink>
            </>
          )}
          <RouterLink to="/tours">{t('Navigation.tours')}</RouterLink>
          <RouterLink to="/blog">{t('Navigation.blog')}</RouterLink>
          <RouterLink to="/contacts">{t('Navigation.contacts')}</RouterLink>
        </nav>

        {/* Language Dropdown */}
        <div style={{ marginLeft: '20px' }}>
          <LanguageDropdown />
        </div>
      </div>
    </header>
  );
};

export default HeaderWithScroll;


