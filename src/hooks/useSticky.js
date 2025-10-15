import { useState, useEffect, useRef } from 'react';

export const useSticky = () => {
  const [isSticky, setSticky] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // entry.isIntersecting буде true, коли "дозорний" елемент на екрані
        // Ми хочемо, щоб isSticky було true, коли "дозорний" НЕ на екрані
        setSticky(!entry.isIntersecting);
      },
      // rootMargin: '-1px' гарантує, що isIntersecting стане false як тільки
      // дозорний елемент повністю зникне вгорі екрану.
      { rootMargin: '-1px 0px 0px 0px', threshold: 1 }
    );

    // Створюємо "дозорний" елемент і ставимо його перед нашим sticky-блоком
    const sentinel = document.createElement('div');
    sentinel.style.height = '1px'; // Робимо його невидимим

    const currentElement = elementRef.current;
    if (currentElement) {
      currentElement.before(sentinel);
      observer.observe(sentinel);
    }

    return () => {
      if (sentinel && observer) {
        observer.unobserve(sentinel);
        // Прибираємо дозорний елемент, якщо компонент розмонтовується
        sentinel.remove();
      }
    };
  }, []);

  return { elementRef, isSticky };
};

