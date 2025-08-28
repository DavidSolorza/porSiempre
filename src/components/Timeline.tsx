import React, { useEffect, useRef } from 'react';
import { Heart, Calendar, MapPin, Coffee, Music, Camera } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

const Timeline: React.FC<HeroProps> = ({ isDarkMode }) => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = timelineRef.current?.querySelectorAll('.timeline-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const timelineEvents = [
    {
      icon: Heart,
      date: "El día que te conocí",
      title: "Primer encuentro",
      description: "El momento en que nuestras miradas se cruzaron y el tiempo se detuvo."
    },
    {
      icon: Coffee,
      date: "Nuestra primera cita",
      title: "Café y conversaciones",
      description: "Horas que se volvieron minutos hablando de nuestros sueños."
    },
    {
      icon: Music,
      date: "Tu canción favorita",
      title: "Melodías compartidas", 
      description: "Cuando descubrí que tu música favorita se volvió la banda sonora de mi vida."
    },
    {
      icon: Camera,
      date: "Primer viaje juntos",
      title: "Aventuras compartidas",
      description: "El mundo se volvió más hermoso cuando comenzamos a explorarlo juntos."
    }
  ];

  return (
    <section id="timeline" className={`py-20 px-6 ${
      isDarkMode ? 'bg-purple-900/20' : 'bg-white/40'
    } backdrop-blur-sm`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-light text-center mb-16 ${
          isDarkMode ? 'text-pink-100' : 'text-purple-800'
        }`} style={{ fontFamily: 'Dancing Script, cursive' }}>
          Nuestra Historia
        </h2>

        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${
            isDarkMode ? 'bg-gradient-to-b from-pink-400/50 to-purple-400/50' : 'bg-gradient-to-b from-pink-300 to-purple-400'
          } rounded-full`} />

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`timeline-item opacity-0 relative flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                <div className={`p-6 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  isDarkMode
                    ? 'bg-white/10 border border-pink-300/20'
                    : 'bg-white/60 border border-purple-200/40'
                }`}>
                  <p className={`text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-pink-300' : 'text-purple-500'
                  }`}>
                    {event.date}
                  </p>
                  <h3 className={`text-xl md:text-2xl font-semibold mb-3 ${
                    isDarkMode ? 'text-pink-100' : 'text-purple-800'
                  }`}>
                    {event.title}
                  </h3>
                  <p className={`text-base leading-relaxed ${
                    isDarkMode ? 'text-pink-200/80' : 'text-purple-600/80'
                  }`}>
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Timeline marker */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-pink-400 to-purple-400' 
                  : 'bg-gradient-to-br from-pink-300 to-purple-400'
              } shadow-lg`}>
                <event.icon size={20} className="text-white" />
              </div>

              <div className="flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;