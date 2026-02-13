
import React, { useState, useEffect, useCallback } from 'react';
import { GAME_ICONS } from '../constants';

const MemoryGame: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [targetIcon, setTargetIcon] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);

  const startRound = useCallback(() => {
    const randomTarget = GAME_ICONS[Math.floor(Math.random() * GAME_ICONS.length)];
    // Pick 4 unique icons including the target
    const shuffled = [...GAME_ICONS].sort(() => 0.5 - Math.random()).slice(0, 4);
    if (!shuffled.includes(randomTarget)) {
      shuffled[Math.floor(Math.random() * 4)] = randomTarget;
    }
    
    setTargetIcon(randomTarget);
    setOptions(shuffled.sort(() => 0.5 - Math.random()));
    setFeedback(null);
    setIsActive(true);
  }, []);

  const handleChoice = (icon: string) => {
    if (icon === targetIcon) {
      setFeedback('Correto! ⚡');
      setTimeout(() => {
        setIsActive(false);
      }, 800);
    } else {
      setFeedback('Tente novamente! ❌');
    }
  };

  return (
    <div className="w-full">
      {!isActive ? (
        <button 
          onClick={startRound}
          className="w-full bg-primary hover:bg-lightPurple text-white font-semibold py-3 px-6 rounded-full transition-all shadow-md"
        >
          Jogar Memória Rápida
        </button>
      ) : (
        <div className="text-center animate-in fade-in duration-300">
          <p className="text-sm font-medium text-gray-500 mb-2">Encontre o par do ícone mostrado!</p>
          <div className="text-6xl my-4 drop-shadow-sm">{targetIcon}</div>
          
          <div className="grid grid-cols-2 gap-3 max-w-[240px] mx-auto mb-4">
            {options.map((icon, idx) => (
              <button
                key={idx}
                onClick={() => handleChoice(icon)}
                className="h-20 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center text-3xl transition-colors shadow-sm"
              >
                {icon}
              </button>
            ))}
          </div>

          {feedback && (
            <p className={`font-bold text-sm ${feedback.includes('Correto') ? 'text-success' : 'text-red-500'}`}>
              {feedback}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
