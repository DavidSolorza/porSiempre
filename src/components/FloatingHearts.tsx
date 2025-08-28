import React from 'react';

interface FloatingHeartsProps {
  isDarkMode: boolean;
}

const FloatingHearts: React.FC<FloatingHeartsProps> = ({ isDarkMode }) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className={`absolute animate-float-heart opacity-20 ${
            isDarkMode ? 'text-pink-300' : 'text-purple-300'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 15}px`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 10 + 15}s`,
          }}
        >
          ♥
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;