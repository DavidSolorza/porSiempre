import React, { useEffect, useRef } from 'react';

interface FutureProps {
  isDarkMode: boolean;
}

const Future: React.FC<FutureProps> = ({ isDarkMode }) => {
  const futureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-reveal');
            }, index * 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = futureRef.current?.querySelectorAll('.future-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const futureEvents = [
    { year: '2029', emoji: '🎓', text: 'Nos graduamos juntos de la universidad' },
    { year: '2030', emoji: '🏡', text: 'Nuestro hogar lleno de amor' },
    { year: '2031', emoji: '✈️', text: 'Viajes por el mundo, creando recuerdos' },
    { year: '2032', emoji: '🐶', text: 'Adoptamos una mascota' },
    { year: '2033', emoji: '💍', text: 'Nuestra boda' },
    { year: '2034+', emoji: '❤️', text: 'Una vida entera juntos' }
  ];

  return (
    <section className={`py-20 px-6 ${
      isDarkMode ? 'bg-black/20' : 'bg-purple-50/60'
    }`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-light text-center mb-16 ${
          isDarkMode ? 'text-pink-100' : 'text-purple-800'
        }`} style={{ fontFamily: 'Dancing Script, cursive' }}>
          Nuestro Futuro
        </h2>

        <div ref={futureRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {futureEvents.map((event, index) => (
            <div
              key={index}
              className={`future-card opacity-0 group relative p-8 rounded-2xl backdrop-blur-md transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                isDarkMode
                  ? 'bg-gradient-to-br from-pink-400/10 to-purple-400/10 border border-pink-300/20 hover:border-pink-300/40'
                  : 'bg-gradient-to-br from-white/60 to-pink-50/60 border border-purple-200/30 hover:border-purple-300/50'
              }`}
            >
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 text-3xl transition-all duration-300 group-hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-pink-400/20 to-purple-400/20' 
                    : 'bg-gradient-to-br from-pink-100 to-purple-100'
                }`}>
                  {event.emoji}
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 ${
                  isDarkMode ? 'text-pink-100' : 'text-purple-700'
                }`} style={{ fontFamily: 'Dancing Script, cursive' }}>
                  {event.year}
                </h3>
                
                <p className={`text-base leading-relaxed ${
                  isDarkMode ? 'text-pink-200/80' : 'text-purple-600/80'
                }`}>
                  {event.text}
                </p>
              </div>

              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-pink-400/5 to-purple-400/5' 
                  : 'bg-gradient-to-br from-pink-200/20 to-purple-200/20'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Future;