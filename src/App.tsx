import React, { useState, useEffect } from 'react';
import { Play, Pause, Moon, Sun } from 'lucide-react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Future from './components/Future';
import Meanings from './components/Meanings';
import Promise from './components/Promise';
import Footer from './components/Footer';
import FloatingHearts from './components/FloatingHearts';
import AudioPlayer from './components/AudioPlayer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Detect system preference for dark mode
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900' 
        : 'bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100'
    }`}>
      <FloatingHearts isDarkMode={isDarkMode} />
      
      {/* Dark mode toggle */}
      <button
        onClick={toggleDarkMode}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 ${
          isDarkMode 
            ? 'bg-white/10 text-pink-200 hover:bg-white/20' 
            : 'bg-black/10 text-purple-600 hover:bg-black/20'
        }`}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <AudioPlayer isDarkMode={isDarkMode} />
      
      <Hero isDarkMode={isDarkMode} />
      <Timeline isDarkMode={isDarkMode} />
      <Future isDarkMode={isDarkMode} />
      <Meanings isDarkMode={isDarkMode} />
      <Promise isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;