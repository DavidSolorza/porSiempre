import React, { useEffect, useRef } from 'react';

interface MeaningsProps {
  isDarkMode: boolean;
}

const Meanings: React.FC<MeaningsProps> = ({ isDarkMode }) => {
  const meaningsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-scale-in');
            }, index * 150);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = meaningsRef.current?.querySelectorAll('.meaning-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const meanings = [
    { word: 'Luz', description: 'Iluminas cada rincón oscuro de mi alma' },
    { word: 'Paz', description: 'En tus brazos encuentro mi hogar' },
    { word: 'Fuerza', description: 'Me das el valor para ser mi mejor versión' },
    { word: 'Alegría', description: 'Tu risa es la música más hermosa' },
    { word: 'Compañera', description: 'Mi aventurera favorita en esta vida' },
    { word: 'Inspiración', description: 'Cada logro tiene tu nombre escrito' },
    { word: 'Refugio', description: 'Donde mis miedos se transforman en sueños' },
    { word: 'Eternidad', description: 'Lo que significa nuestro amor para mí' }
  ];

  return (
    <section className={`py-20 px-6 ${
      isDarkMode ? 'bg-purple-800/30' : 'bg-pink-50/80'
    }`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-light text-center mb-16 ${
          isDarkMode ? 'text-pink-100' : 'text-purple-800'
        }`} style={{ fontFamily: 'Dancing Script, cursive' }}>
          Lo que tú significas para mí
        </h2>

        <div ref={meaningsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {meanings.map((meaning, index) => (
            <div
              key={index}
              className={`meaning-card opacity-0 group p-6 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                isDarkMode
                  ? 'bg-gradient-to-br from-pink-400/15 to-purple-400/15 border border-pink-300/25 hover:border-pink-300/50'
                  : 'bg-gradient-to-br from-white/70 to-pink-50/70 border border-purple-200/40 hover:border-purple-300/60'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-3 text-center ${
                isDarkMode ? 'text-pink-200' : 'text-purple-700'
              }`} style={{ fontFamily: 'Dancing Script, cursive' }}>
                {meaning.word}
              </h3>
              
              <p className={`text-sm text-center leading-relaxed ${
                isDarkMode ? 'text-pink-200/80' : 'text-purple-600/80'
              }`}>
                {meaning.description}
              </p>

              {/* Subtle glow effect */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-pink-400/10 to-purple-400/10' 
                  : 'bg-gradient-to-br from-pink-200/30 to-purple-200/30'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Meanings;