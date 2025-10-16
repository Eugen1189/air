import { useState, useEffect, useRef } from 'react';

export const useSticky = () => {
  const [isSticky, setSticky] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // entry.isIntersecting will be true when "sentinel" element is on screen
        // We want isSticky to be true when "sentinel" is NOT on screen
        setSticky(!entry.isIntersecting);
      },
      // rootMargin: '-1px' ensures that isIntersecting becomes false as soon as
      // sentinel element completely disappears at the top of the screen
      { rootMargin: '-1px 0px 0px 0px', threshold: 1 }
    );

    // Create "sentinel" element and place it before our sticky block
    const sentinel = document.createElement('div');
    sentinel.style.height = '1px'; // Make it invisible

    const currentElement = elementRef.current;
    if (currentElement) {
      currentElement.before(sentinel);
      observer.observe(sentinel);
    }

    return () => {
      if (sentinel && observer) {
        observer.unobserve(sentinel);
        // Remove sentinel element if component unmounts
        sentinel.remove();
      }
    };
  }, []);

  return { elementRef, isSticky };
};

