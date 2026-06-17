'use client';

import { useState, useEffect } from 'react';
import { FaHome } from 'react-icons/fa';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-20">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-black text-white dark:bg-white dark:text-black shadow-lg hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-opacity-75"
        >
          <FaHome size={24} />
        </button>
      )}
    </div>
  );
}
