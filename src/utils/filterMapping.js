// Mapping between translated and original Italian values for filtering

export const getOriginalValue = (translatedValue, t) => {
  // Map of translations to original Italian values
  const mapping = {
    // All
    [t('Filters.all')]: 'Tutti',
    
    // Destinations
    [t('Filters.italy')]: 'Italia',
    [t('Filters.greece')]: 'Grecia',
    [t('Filters.japan')]: 'Giappone',
    [t('Filters.norway')]: 'Norvegia',
    [t('Filters.kenya')]: 'Kenya',
    [t('Filters.peru')]: 'Perù',
    [t('Filters.morocco')]: 'Marocco',
    [t('Filters.newZealand')]: 'Nuova Zelanda',
    [t('Filters.thailand')]: 'Thailandia',
    
    // Types
    [t('Filters.relax')]: 'Relax',
    [t('Filters.active')]: 'Attivo',
    [t('Filters.cultural')]: 'Culturale',
    [t('Filters.adventure')]: 'Avventura',
    
    // Difficulty
    [t('Filters.easy')]: 'Facile',
    [t('Filters.medium')]: 'Medio',
    [t('Filters.hard')]: 'Difficile',
    
    // Duration
    [t('Filters.days1to7')]: '1-7 giorni',
    [t('Filters.days8to10')]: '8-10 giorni',
    [t('Filters.days11to14')]: '11-14 giorni',
    
    // Price
    [t('Filters.priceUnder1000')]: 'Meno di 1000€',
    [t('Filters.price1000to2000')]: '1000-2000€',
    [t('Filters.priceOver2000')]: 'Più di 2000€'
  };
  
  return mapping[translatedValue] || translatedValue;
};

