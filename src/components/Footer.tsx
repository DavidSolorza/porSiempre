import React from 'react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <footer className={`py-12 px-6 text-center ${
      isDarkMode ? 'bg-purple-900/40' : 'bg-gradient-to-t from-purple-100/60 to-transparent'
    }`}>
      <div className="max-w-4xl mx-auto">
        <h3 className={`text-2xl md:text-3xl font-light mb-4 flex items-center justify-center gap-2 ${
          isDarkMode ? 'text-pink-200' : 'text-purple-700'
        }`} style={{ fontFamily: 'Dancing Script, cursive' }}>
          Desde hoy y para siempre
          <span className="animate-pulse">♥</span>
          <span className="animate-pulse" style={{ animationDelay: '0.5s' }}>♥</span>
          <span className="animate-pulse" style={{ animationDelay: '1s' }}>♥</span>
        </h3>
        
        <p className={`text-sm opacity-70 ${
          isDarkMode ? 'text-pink-200' : 'text-purple-600'
        }`}>
          Hecho con todo el amor del mundo
        </p>
      </div>
    </footer>
  );
};

export default Footer;