
import React from 'react';

const ActivePause: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex items-center justify-center w-32 h-32 mb-6">
        <div className="absolute w-12 h-12 bg-lightPurple rounded-full animate-breathe blur-sm opacity-50"></div>
        <div className="w-16 h-16 bg-primary rounded-full animate-breathe shadow-lg z-10"></div>
      </div>
      <p className="text-center text-sm text-gray-700 max-w-[200px]">
        Inspire quando o círculo <span className="font-bold text-primary">crescer</span>, <br /> 
        expire quando <span className="font-bold text-accent">diminuir</span>.
      </p>
    </div>
  );
};

export default ActivePause;
