import React, { useState } from 'react';
import { Heart, X } from 'lucide-react';

interface PromiseProps {
  isDarkMode: boolean;
}

const Promise: React.FC<PromiseProps> = ({ isDarkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className={`py-20 px-6 ${
      isDarkMode ? 'bg-black/30' : 'bg-purple-100/40'
    }`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-4xl md:text-5xl font-light mb-8 ${
          isDarkMode ? 'text-pink-100' : 'text-purple-800'
        }`} style={{ fontFamily: 'Dancing Script, cursive' }}>
          Mi Promesa Eterna
        </h2>

        <p className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed ${
          isDarkMode ? 'text-pink-200/80' : 'text-purple-600/80'
        }`}>
          Tengo algo especial que decirte, palabras que nacen desde lo más profundo de mi corazón.
        </p>

        <button
          onClick={openModal}
          className={`group inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
            isDarkMode
              ? 'bg-gradient-to-r from-pink-500/30 to-purple-500/30 backdrop-blur-md text-pink-100 border-2 border-pink-400/30 hover:border-pink-400/60'
              : 'bg-gradient-to-r from-pink-400/20 to-purple-400/20 backdrop-blur-md text-purple-700 border-2 border-purple-400/30 hover:border-purple-400/60'
          }`}
          aria-label="Abrir promesa"
        >
          <Heart size={24} className="animate-pulse" />
          Abrir mi promesa
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className={`relative max-w-2xl w-full rounded-3xl p-8 md:p-12 animate-scale-in ${
              isDarkMode
                ? 'bg-gradient-to-br from-purple-900/95 to-pink-900/95 border border-pink-300/30'
                : 'bg-gradient-to-br from-white/95 to-pink-50/95 border border-purple-300/30'
            } backdrop-blur-md shadow-2xl`}>
              
              <button
                onClick={closeModal}
                className={`absolute top-4 right-4 p-2 rounded-full transition-colors hover:scale-110 ${
                  isDarkMode ? 'text-pink-200 hover:bg-pink-400/20' : 'text-purple-600 hover:bg-purple-200/30'
                }`}
                aria-label="Cerrar promesa"
              >
                <X size={24} />
              </button>

              <div className="text-center">
                <Heart size={32} className={`mx-auto mb-6 animate-pulse ${
                  isDarkMode ? 'text-pink-300' : 'text-purple-500'
                }`} />
                
                <h3 className={`text-3xl md:text-4xl font-light mb-8 ${
                  isDarkMode ? 'text-pink-100' : 'text-purple-800'
                }`} style={{ fontFamily: 'Dancing Script, cursive' }}>
                  Mi Promesa Eterna
                </h3>

                <div className={`text-lg md:text-xl leading-relaxed space-y-4 ${
                  isDarkMode ? 'text-pink-200/90' : 'text-purple-700/90'
                }`}>
                  <p>
                    <em>Prometo amarte</em> con cada fibra de mi ser, en los días de sol radiante 
                    y en las noches de tormenta.
                  </p>
                  
                  <p>
                    <em>Prometo cuidarte</em>, ser tu refugio seguro, tu apoyo incondicional 
                    y tu cómplice en cada aventura.
                  </p>
                  
                  <p>
                    <em>Prometo caminar contigo</em> por todos los senderos de la vida, 
                    celebrando cada triunfo y superando cada desafío juntos.
                  </p>

                  <p className="text-2xl mt-8 font-light" style={{ fontFamily: 'Dancing Script, cursive' }}>
                    Porque tú eres mi ayer, mi hoy y mi para siempre.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Promise;