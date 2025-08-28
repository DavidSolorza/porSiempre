import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

interface AudioPlayerProps {
  isDarkMode: boolean;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ isDarkMode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Using a romantic instrumental from a royalty-free source
        audioRef.current.src = "https://www.soundjay.com/misc/sounds/romantic-music.mp3";
        audioRef.current.play().catch(() => {
          // Fallback if audio fails to load
          console.log('Audio playback requires user interaction');
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3;
      audio.loop = true;
    }
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={togglePlayPause}
        className={`group flex items-center gap-3 px-4 py-3 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 ${
          isDarkMode
            ? 'bg-white/10 text-pink-200 hover:bg-white/20 border border-pink-300/20'
            : 'bg-black/10 text-purple-600 hover:bg-black/20 border border-purple-300/30'
        }`}
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        <Volume2 size={18} />
        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        <span className="text-sm font-medium hidden sm:block">
          {isPlaying ? 'Pausar' : 'Música'}
        </span>
      </button>
      
      <audio ref={audioRef} preload="none" />
    </div>
  );
};

export default AudioPlayer;