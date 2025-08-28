import React, { useEffect, useRef } from 'react';
import { Heart, ArrowDown } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div ref={heroRef} className="text-center z-10 px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight ${
            isDarkMode ? 'text-pink-100' : 'text-purple-800'
          }`} style={{ fontFamily: 'Dancing Script, cursive' }}>
            Tú eres mi futuro,
            <span className="block mt-2 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              mi amor eterno
            </span>
          </h1>
          
          <p className={`text-lg md:text-xl lg:text-2xl font-light mb-12 max-w-2xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-pink-200/80' : 'text-purple-600/80'
          }`} style={{ fontFamily: 'Inter, sans-serif' }}>
            En cada latido de mi corazón vive tu nombre, 
            en cada sueño encuentro tu sonrisa, 
            en cada mañana renace mi amor por ti.
          </p>

          <button
            onClick={scrollToTimeline}
            className={`group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              isDarkMode
                ? 'bg-gradient-to-r from-pink-400/20 to-purple-400/20 backdrop-blur-md text-pink-100 border border-pink-300/30 hover:border-pink-300/50'
                : 'bg-gradient-to-r from-pink-400/10 to-purple-400/10 backdrop-blur-md text-purple-700 border border-purple-300/30 hover:border-purple-300/50'
            }`}
            aria-label="Comenzar nuestro viaje"
          >
            <Heart size={20} className="animate-pulse" />
            Comenzar nuestro viaje
            <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Bokeh effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float opacity-20 ${
              isDarkMode ? 'bg-pink-300' : 'bg-purple-300'
            }`}
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 4}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;