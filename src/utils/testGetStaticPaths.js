// Тест функції getStaticPaths
import { getStaticPaths, getAllTours } from './tourUtils.js';

// Тестуємо функцію getStaticPaths
const testGetStaticPaths = () => {
  console.log('=== Тест getStaticPaths ===');
  
  try {
    const result = getStaticPaths();
    console.log('Результат getStaticPaths:', result);
    console.log('Кількість шляхів:', result.paths.length);
    
    // Показуємо перші 5 шляхів
    console.log('Перші 5 шляхів:');
    result.paths.slice(0, 5).forEach((path, index) => {
      console.log(`${index + 1}. /tour/${path.params.slug}`);
    });
    
    // Перевіряємо, чи всі тури мають slug
    const allTours = getAllTours();
    const toursWithoutSlug = allTours.filter(tour => !tour.slug);
    
    if (toursWithoutSlug.length > 0) {
      console.log('⚠️ Тури без slug:', toursWithoutSlug.map(t => t.id));
    } else {
      console.log('✅ Всі тури мають slug');
    }
    
    return result;
  } catch (error) {
    console.error('Помилка в getStaticPaths:', error);
    return null;
  }
};

// Експортуємо для використання
export { testGetStaticPaths };

// Якщо файл запускається безпосередньо
if (typeof window !== 'undefined') {
  testGetStaticPaths();
}

