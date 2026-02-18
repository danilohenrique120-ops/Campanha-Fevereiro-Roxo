import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-primary to-lightPurple text-white py-6 px-4 shadow-lg text-center">
      <h1 className="text-2xl font-bold flex items-center justify-center gap-2">
        CIPA BrainGuard
        <span className="text-green-400 drop-shadow-sm">🛡️</span>
      </h1>
      <p className="text-sm opacity-90 mt-1 uppercase tracking-wide">Fevereiro Roxo - CIPA COSMÓPOLIS</p>
    </header>
  );
};

export default Header;