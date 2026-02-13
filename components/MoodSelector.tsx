
import React from 'react';
import { Mood } from '../types';

interface MoodSelectorProps {
  onSelect: (mood: Mood) => void;
  currentMood: Mood;
}

const MoodSelector: React.FC<MoodSelectorProps> = ({ onSelect, currentMood }) => {
  return (
    <div className="flex justify-around items-center">
      <button 
        onClick={() => onSelect('green')}
        className={`group flex flex-col items-center transition-transform hover:scale-110 p-2 rounded-xl ${currentMood === 'green' ? 'bg-green-50 ring-2 ring-success' : ''}`}
      >
        <span className="text-4xl mb-1">🟢</span>
        <span className="text-[10px] uppercase font-bold text-gray-500 group-hover:text-success">Alerta</span>
      </button>
      
      <button 
        onClick={() => onSelect('yellow')}
        className={`group flex flex-col items-center transition-transform hover:scale-110 p-2 rounded-xl ${currentMood === 'yellow' ? 'bg-yellow-50 ring-2 ring-yellow-400' : ''}`}
      >
        <span className="text-4xl mb-1">🟡</span>
        <span className="text-[10px] uppercase font-bold text-gray-500 group-hover:text-yellow-600">Cansado</span>
      </button>

      <button 
        onClick={() => onSelect('purple')}
        className={`group flex flex-col items-center transition-transform hover:scale-110 p-2 rounded-xl ${currentMood === 'purple' ? 'bg-purple-50 ring-2 ring-primary' : ''}`}
      >
        <span className="text-4xl mb-1">🟣</span>
        <span className="text-[10px] uppercase font-bold text-gray-500 group-hover:text-primary">Apoio</span>
      </button>
    </div>
  );
};

export default MoodSelector;
