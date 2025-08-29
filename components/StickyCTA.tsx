import React, { useState, useEffect } from 'react';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const targetSection = document.querySelector('[data-section="bene-different"]');
      if (targetSection) {
        const rect = targetSection.getBoundingClientRect();
        const isPastSection = rect.bottom < 0;
        setIsVisible(isPastSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-pink-600 text-white p-4 z-50 shadow-lg border-t-2 border-pink-700">
      <div className="max-w-4xl mx-auto flex justify-center">
                       <a
                 href="https://benebalance.com/products/bene-rls-supplement"
                 className="bg-white text-pink-600 hover:bg-pink-50 font-bold py-3 px-8 rounded-full transition flex items-center gap-2 shadow-lg whitespace-nowrap"
               >
          GET STARTED NOW
          <span>→</span>
        </a>
      </div>
    </div>
  );
};

export default StickyCTA; 