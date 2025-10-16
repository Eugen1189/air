// Original Italian filter options (for state and filtering)
export const originalFilterOptions = {
  destinations: ['Tutti', 'Italia', 'Grecia', 'Giappone', 'Norvegia', 'Kenya', 'Perù', 'Marocco', 'Nuova Zelanda', 'Thailandia'],
  types: ['Tutti', 'Relax', 'Attivo', 'Culturale', 'Avventura'],
  durations: ['Tutti', '1-7 giorni', '8-10 giorni', '11-14 giorni'],
  difficulties: ['Tutti', 'Facile', 'Medio', 'Difficile'],
  priceRanges: ['Tutti', 'Meno di 1000€', '1000-2000€', 'Più di 2000€']
};

// Get translated display text for a value
export const getTranslatedFilterValue = (value, t) => {
  const mapping = {
    'Tutti': t('Filters.all'),
    // Destinations
    'Italia': t('Filters.italy'),
    'Grecia': t('Filters.greece'),
    'Giappone': t('Filters.japan'),
    'Norvegia': t('Filters.norway'),
    'Kenya': t('Filters.kenya'),
    'Perù': t('Filters.peru'),
    'Marocco': t('Filters.morocco'),
    'Nuova Zelanda': t('Filters.newZealand'),
    'Thailandia': t('Filters.thailand'),
    // Types
    'Relax': t('Filters.relax'),
    'Attivo': t('Filters.active'),
    'Culturale': t('Filters.cultural'),
    'Avventura': t('Filters.adventure'),
    // Difficulty
    'Facile': t('Filters.easy'),
    'Medio': t('Filters.medium'),
    'Difficile': t('Filters.hard'),
    // Duration
    '1-7 giorni': t('Filters.days1to7'),
    '8-10 giorni': t('Filters.days8to10'),
    '11-14 giorni': t('Filters.days11to14'),
    // Price
    'Meno di 1000€': t('Filters.priceUnder1000'),
    '1000-2000€': t('Filters.price1000to2000'),
    'Più di 2000€': t('Filters.priceOver2000')
  };
  
  return mapping[value] || value;
};

