// Helper functions for translating filter values

// Map Italian filter values to translation keys
const filterValueToKey = {
  // All
  'Tutti': 'all',
  
  // Destinations
  'Italia': 'italy',
  'Grecia': 'greece',
  'Giappone': 'japan',
  'Norvegia': 'norway',
  'Kenya': 'kenya',
  'Perù': 'peru',
  'Marocco': 'morocco',
  'Nuova Zelanda': 'newZealand',
  'Thailandia': 'thailand',
  
  // Types
  'Relax': 'relax',
  'Attivo': 'active',
  'Culturale': 'cultural',
  'Avventura': 'adventure',
  
  // Difficulty
  'Facile': 'easy',
  'Medio': 'medium',
  'Difficile': 'hard',
  
  // Duration
  '1-7 giorni': 'days1to7',
  '8-10 giorni': 'days8to10',
  '11-14 giorni': 'days11to14',
  
  // Price
  'Meno di 1000€': 'priceUnder1000',
  '1000-2000€': 'price1000to2000',
  'Più di 2000€': 'priceOver2000'
};

// Translate filter value
export const translateFilterValue = (value, t) => {
  const key = filterValueToKey[value];
  if (key) {
    return t(`Filters.${key}`);
  }
  return value; // Return original if no translation found
};

// Get translated filter options
export const getTranslatedFilterOptions = (t) => {
  return {
    destinations: [
      t('Filters.all'),
      t('Filters.italy'),
      t('Filters.greece'),
      t('Filters.japan'),
      t('Filters.norway'),
      t('Filters.kenya'),
      t('Filters.peru'),
      t('Filters.morocco'),
      t('Filters.newZealand'),
      t('Filters.thailand')
    ],
    types: [
      t('Filters.all'),
      t('Filters.relax'),
      t('Filters.active'),
      t('Filters.cultural'),
      t('Filters.adventure')
    ],
    durations: [
      t('Filters.all'),
      t('Filters.days1to7'),
      t('Filters.days8to10'),
      t('Filters.days11to14')
    ],
    difficulties: [
      t('Filters.all'),
      t('Filters.easy'),
      t('Filters.medium'),
      t('Filters.hard')
    ],
    priceRanges: [
      t('Filters.all'),
      t('Filters.priceUnder1000'),
      t('Filters.price1000to2000'),
      t('Filters.priceOver2000')
    ]
  };
};

// Map translated value back to original Italian (for filtering logic)
export const getOriginalFilterValue = (translatedValue, filterType, t) => {
  const options = getTranslatedFilterOptions(t);
  const originalOptions = {
    destinations: ['Tutti', 'Italia', 'Grecia', 'Giappone', 'Norvegia', 'Kenya', 'Perù', 'Marocco', 'Nuova Zelanda', 'Thailandia'],
    types: ['Tutti', 'Relax', 'Attivo', 'Culturale', 'Avventura'],
    durations: ['Tutti', '1-7 giorni', '8-10 giorni', '11-14 giorni'],
    difficulties: ['Tutti', 'Facile', 'Medio', 'Difficile'],
    priceRanges: ['Tutti', 'Meno di 1000€', '1000-2000€', 'Più di 2000€']
  };
  
  const index = options[filterType]?.indexOf(translatedValue);
  if (index !== -1 && index !== undefined) {
    return originalOptions[filterType][index];
  }
  
  return translatedValue;
};

