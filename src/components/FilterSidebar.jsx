// src/components/FilterSidebar.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { originalFilterOptions, getTranslatedFilterValue } from '../utils/filterOptions';
import './FilterSidebar.scss';

const FilterSidebar = ({ filters, onFilterChange, onReset, resultsCount }) => {
  const { t } = useTranslation();
  
  return (
    <aside className="filter-sidebar">
      {/* Desktop Header */}
      <div className="filters-header">
        <h3>{t('ToursPage.filtersTitle')}</h3>
        <button onClick={onReset} className="clear-button">
          {t('ToursPage.clearButton')}
        </button>
      </div>
      
      {/* Filters Container */}
      <div className="filters-container">
      
      {/* Search */}
      <div style={{ marginBottom: '25px' }}>
        <label style={{ display: 'block', fontWeight: '600', marginBottom: '10px', color: '#333', fontSize: '0.95rem' }}>
          🔎 {t('ToursPage.searchLabel')}
        </label>
        <input
          type="text"
          value={filters.searchQuery}
          onChange={(e) => onFilterChange('searchQuery', e.target.value)}
          placeholder={t('ToursPage.searchPlaceholder')}
          style={{
            width: '100%',
            padding: '12px',
            border: '2px solid #e0e0e0',
            borderRadius: '8px',
            fontSize: '1rem'
          }}
        />
      </div>

      {/* Destination */}
      <div style={{ marginBottom: '25px' }}>
        <label style={{ display: 'block', fontWeight: '600', marginBottom: '10px', color: '#333', fontSize: '0.95rem' }}>
          📍 {t('ToursPage.destinationLabel')}
        </label>
        <select
          value={filters.destination}
          onChange={(e) => onFilterChange('destination', e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            border: '2px solid #e0e0e0',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer',
            backgroundColor: 'white'
          }}
        >
          {originalFilterOptions.destinations.map((dest) => (
            <option key={dest} value={dest}>
              {getTranslatedFilterValue(dest, t)}
            </option>
          ))}
        </select>
      </div>

      {/* Type */}
      <div style={{ marginBottom: '25px' }}>
        <label style={{ display: 'block', fontWeight: '600', marginBottom: '10px', color: '#333', fontSize: '0.95rem' }}>
          🎯 {t('ToursPage.tourTypeLabel')}
        </label>
        <select
          value={filters.type}
          onChange={(e) => onFilterChange('type', e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            border: '2px solid #e0e0e0',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer',
            backgroundColor: 'white'
          }}
        >
          {originalFilterOptions.types.map((type) => (
            <option key={type} value={type}>
              {getTranslatedFilterValue(type, t)}
            </option>
          ))}
        </select>
      </div>

      {/* Duration */}
      <div style={{ marginBottom: '25px' }}>
        <label style={{ display: 'block', fontWeight: '600', marginBottom: '10px', color: '#333', fontSize: '0.95rem' }}>
          ⏱️ {t('ToursPage.durationLabel')}
        </label>
        <select
          value={filters.duration}
          onChange={(e) => onFilterChange('duration', e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            border: '2px solid #e0e0e0',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer',
            backgroundColor: 'white'
          }}
        >
          {originalFilterOptions.durations.map((dur) => (
            <option key={dur} value={dur}>
              {getTranslatedFilterValue(dur, t)}
            </option>
          ))}
        </select>
      </div>

      {/* Difficulty */}
      <div style={{ marginBottom: '25px' }}>
        <label style={{ display: 'block', fontWeight: '600', marginBottom: '10px', color: '#333', fontSize: '0.95rem' }}>
          🏔️ {t('ToursPage.difficultyLabel')}
        </label>
        <select
          value={filters.difficulty}
          onChange={(e) => onFilterChange('difficulty', e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            border: '2px solid #e0e0e0',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer',
            backgroundColor: 'white'
          }}
        >
          {originalFilterOptions.difficulties.map((diff) => (
            <option key={diff} value={diff}>
              {getTranslatedFilterValue(diff, t)}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div style={{ marginBottom: '25px' }}>
        <label style={{ display: 'block', fontWeight: '600', marginBottom: '10px', color: '#333', fontSize: '0.95rem' }}>
          💰 {t('ToursPage.priceRangeLabel')}
        </label>
        <select
          value={filters.priceRange}
          onChange={(e) => onFilterChange('priceRange', e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            border: '2px solid #e0e0e0',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer',
            backgroundColor: 'white'
          }}
        >
          {originalFilterOptions.priceRanges.map((range) => (
            <option key={range} value={range}>
              {getTranslatedFilterValue(range, t)}
            </option>
          ))}
        </select>
      </div>

      {/* Results Count */}
      <div className="results-count">
        ✓ {resultsCount === 1 ? t('ToursPage.toursFoundOne', { count: resultsCount }) : t('ToursPage.toursFoundOther', { count: resultsCount })}
      </div>
      </div> {/* End filters-container */}
    </aside>
  );
};

export default FilterSidebar;

