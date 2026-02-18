
import React from 'react';

const WellnessTip: React.FC = () => {
  const tip = 'Lembre-se de fazer pequenas pausas durante o turno para relaxar a mente e o corpo. 🌱';

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-4 border border-indigo-100 flex items-center gap-3">
      <div className="bg-white p-2 rounded-full shadow-sm text-lg">💡</div>
      <div className="flex-1">
        <p className="text-[10px] uppercase font-bold text-indigo-400 tracking-widest mb-1">Dica de Bem-Estar</p>
        <p className="text-sm italic text-gray-700 font-medium">"{tip}"</p>
      </div>
    </div>
  );
};

export default WellnessTip;
