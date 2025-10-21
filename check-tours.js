// Скрипт для перевірки турів без зображень
const fs = require('fs');
const path = require('path');

// Читаємо файл allTours.js
const allToursPath = path.join(__dirname, 'src', 'data', 'allTours.js');
const content = fs.readFileSync(allToursPath, 'utf8');

// Виконуємо код для отримання allTours
eval(content.replace('export const allTours = getAllTours();', 'const allTours = getAllTours();'));

console.log('Загальна кількість турів:', allTours.length);
console.log('\nТури без зображень:');

allTours.forEach((tour, index) => {
  const hasImage = tour.image || tour.imageUrl;
  if (!hasImage) {
    console.log(`${index + 1}. ID: ${tour.id}, Назва: ${tour.title}`);
  }
});

console.log('\nВсі тури з їх зображеннями:');
allTours.forEach((tour, index) => {
  const image = tour.image || tour.imageUrl || 'НЕМАЄ ЗОБРАЖЕННЯ';
  console.log(`${index + 1}. ${tour.title} - ${image}`);
});
