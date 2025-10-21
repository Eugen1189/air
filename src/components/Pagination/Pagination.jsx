import React from 'react';
import './Pagination.scss';

const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  itemsPerPage = 6,
  totalItems = 0 
}) => {
  // Генеруємо масив номерів сторінок для відображення
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5; // Максимальна кількість видимих сторінок
    
    if (totalPages <= maxVisiblePages) {
      // Якщо сторінок мало, показуємо всі
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Якщо сторінок багато, показуємо з "..." в середині
      if (currentPage <= 3) {
        // Початок: 1, 2, 3, 4, ..., остання
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Кінець: 1, ..., передостання, остання-2, остання-1, остання
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Середина: 1, ..., поточна-1, поточна, поточна+1, ..., остання
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  if (totalPages <= 1) {
    return null; // Не показуємо пагінацію, якщо сторінка тільки одна
  }

  return (
    <div className="pagination">
      <div className="pagination-info">
        Показано {((currentPage - 1) * itemsPerPage) + 1}-{Math.min(currentPage * itemsPerPage, totalItems)} з {totalItems} турів
      </div>
      
      <div className="pagination-controls">
        {/* Кнопка "Попередня" */}
        <button
          className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Попередня сторінка"
        >
          ←
        </button>

        {/* Номери сторінок */}
        <div className="pagination-pages">
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              className={`pagination-btn ${
                page === currentPage ? 'active' : ''
              } ${page === '...' ? 'ellipsis' : ''}`}
              onClick={() => typeof page === 'number' && onPageChange(page)}
              disabled={page === '...'}
              aria-label={page === '...' ? 'Більше сторінок' : `Сторінка ${page}`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Кнопка "Наступна" */}
        <button
          className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Наступна сторінка"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Pagination;
