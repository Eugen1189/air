import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { mockTours } from '../data/mock-tours';
import FilterSidebar from '../components/FilterSidebar';
import TourCardDetailed from '../components/TourCardDetailed';
import './ToursListPage.scss';

const ToursListPage = () => {
  const { t } = useTranslation();
  
  // Store original Italian values in state (for filtering logic)
  const [filters, setFilters] = useState({
    destination: 'Tutti',
    type: 'Tutti',
    duration: 'Tutti',
    difficulty: 'Tutti',
    priceRange: 'Tutti',
    searchQuery: ''
  });
  
  // Mobile filters overlay state
  const [filtersOpen, setFiltersOpen] = useState(false);
  
  // Prevent body scroll when filters open
  useEffect(() => {
    if (filtersOpen) {
      document.body.classList.add('filters-open');
    } else {
      document.body.classList.remove('filters-open');
    }
    
    return () => {
      document.body.classList.remove('filters-open');
    };
  }, [filtersOpen]);

  // Filter logic - now works directly with Italian values stored in state
  const filteredTours = mockTours.filter(tour => {
    // Destination filter
    if (filters.destination !== 'Tutti' && tour.destination !== filters.destination) {
      return false;
    }

    // Type filter
    if (filters.type !== 'Tutti' && tour.type !== filters.type) {
      return false;
    }

    // Duration filter
    if (filters.duration !== 'Tutti') {
      if (filters.duration === '1-7 giorni' && tour.duration > 7) return false;
      if (filters.duration === '8-10 giorni' && (tour.duration < 8 || tour.duration > 10)) return false;
      if (filters.duration === '11-14 giorni' && tour.duration < 11) return false;
    }

    // Difficulty filter
    if (filters.difficulty !== 'Tutti' && tour.difficulty !== filters.difficulty) {
      return false;
    }

    // Price range filter
    if (filters.priceRange !== 'Tutti') {
      if (filters.priceRange === 'Meno di 1000€' && tour.price >= 1000) return false;
      if (filters.priceRange === '1000-2000€' && (tour.price < 1000 || tour.price > 2000)) return false;
      if (filters.priceRange === 'Più di 2000€' && tour.price <= 2000) return false;
    }

    // Search query filter
    if (filters.searchQuery && !tour.title.toLowerCase().includes(filters.searchQuery.toLowerCase())) {
      return false;
    }

    return true;
  });

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const resetFilters = () => {
    setFilters({
      destination: 'Tutti',
      type: 'Tutti',
      duration: 'Tutti',
      difficulty: 'Tutti',
      priceRange: 'Tutti',
      searchQuery: ''
    });
  };

  return (
    <div className="tours-list-page" style={{ padding: '100px 20px 60px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#0A2342' }}>
          {t('ToursPage.title')}
        </h1>
        <p style={{ fontSize: '1.3rem', color: '#6c757d', maxWidth: '800px', margin: '0 auto' }}>
          {t('ToursPage.subtitle')}
        </p>
      </div>
      
      {/* Mobile Filter Toggle Button */}
      <button 
        className="filters-toggle-button" 
        onClick={() => setFiltersOpen(true)}
      >
        🔍 {t('ToursPage.filtersTitle')}
      </button>

      {/* Mobile Filters Fullscreen Overlay */}
      <div className={`filters-mobile-wrapper ${filtersOpen ? 'is-open' : ''}`}>
        <div className="filters-mobile-header">
          <h2>{t('ToursPage.filtersTitle')}</h2>
          <button 
            className="filters-close-button"
            onClick={() => setFiltersOpen(false)}
            aria-label="Close filters"
          >
            ✕
          </button>
        </div>
        <div className="filters-mobile-content">
          <FilterSidebar 
            filters={filters}
            onFilterChange={handleFilterChange}
            onReset={resetFilters}
            resultsCount={filteredTours.length}
          />
        </div>
        <div className="filters-mobile-footer">
          <button 
            className="filters-apply-button"
            onClick={() => setFiltersOpen(false)}
          >
            {t('ToursPage.showResults', { count: filteredTours.length })}
          </button>
        </div>
      </div>

      {/* Main Layout: Filters + Tours */}
      <div className="tours-layout" style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '40px', alignItems: 'start' }}>
        
        {/* Desktop Filters Sidebar */}
        <div className="desktop-filters">
          <FilterSidebar 
            filters={filters}
            onFilterChange={handleFilterChange}
            onReset={resetFilters}
            resultsCount={filteredTours.length}
          />
        </div>

        {/* Tours Grid */}
        <div>
          {filteredTours.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '80px 20px',
              backgroundColor: '#f8f9fa',
              borderRadius: '16px'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🔍</div>
              <h3 style={{ fontSize: '2rem', marginBottom: '15px', color: '#0A2342' }}>
                {t('ToursPage.noToursFound')}
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#6c757d', marginBottom: '25px' }}>
                {t('ToursPage.tryModifyFilters')}
              </p>
              <button
                onClick={resetFilters}
                style={{
                  padding: '15px 35px',
                  backgroundColor: '#D9795D',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                {t('ToursPage.clearAllFilters')}
              </button>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px'
            }}>
              {filteredTours.map((tour) => (
                <TourCardDetailed key={tour.id} tour={tour} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Custom Tour Section */}
      <div style={{
        marginTop: '60px',
        backgroundColor: '#f8f9fa',
        padding: '40px',
        borderRadius: '16px',
        textAlign: 'center'
      }}>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#0A2342' }}>
          {t('ToursPage.customTourSection.title')}
        </h3>
        <p style={{ fontSize: '1.1rem', color: '#6c757d', marginBottom: '25px', maxWidth: '800px', margin: '0 auto 25px' }}>
          {t('ToursPage.customTourSection.description')}
        </p>
        <Link 
          to="/contacts"
          style={{
            display: 'inline-block',
            backgroundColor: '#D9795D',
            color: 'white',
            padding: '15px 40px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.1rem',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#c4684d';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#D9795D';
          }}
        >
          {t('ToursPage.customTourSection.contactButton')}
        </Link>
      </div>
    </div>
  );
};

export default ToursListPage;

