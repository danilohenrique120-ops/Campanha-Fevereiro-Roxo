
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import MoodSelector from './components/MoodSelector';
import MemoryGame from './components/MemoryGame';
import Trivia from './components/Trivia';
import ActivePause from './components/ActivePause';
import SupportModal from './components/SupportModal';
import WellnessTip from './components/WellnessTip';
import { Mood } from './types';

const App: React.FC = () => {
  const [mood, setMood] = useState<Mood>(null);
  const [showSupportModal, setShowSupportModal] = useState(false);

  const handleMoodSelect = useCallback((selectedMood: Mood) => {
    setMood(selectedMood);
    if (selectedMood === 'purple') {
      setShowSupportModal(true);
    }
  }, []);

  const closeSupportModal = useCallback(() => {
    setShowSupportModal(false);
    setMood(null); // Reset or set to a "cared for" state
  }, []);

  return (
    <div className="min-h-screen pb-12">
      <Header />
      
      <main className="container mx-auto px-4 max-w-2xl mt-6 space-y-6">
        {/* Mood Section */}
        <section className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-center mb-4">Como você está se sentindo agora?</h3>
          <MoodSelector onSelect={handleMoodSelect} currentMood={mood} />
          {mood && mood !== 'purple' && (
            <p className={`mt-4 text-center font-bold text-sm ${
              mood === 'green' ? 'text-success' : 'text-yellow-600'
            }`}>
              {mood === 'green' ? "Ótimo! Mantenha o foco e bom turno! 🚀" : "Atenção. Que tal fazer a Pausa Ativa abaixo por 1 minuto? ⚠️"}
            </p>
          )}
        </section>

        {/* Standard Wellness Tip */}
        <WellnessTip />

        {/* Cognitive Game Section */}
        <section className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🧩</span>
            <h3 className="text-lg font-semibold">O Desafio do Turno</h3>
          </div>
          <p className="text-gray-600 mb-4 text-sm">Aqueça seus neurônios antes de começar o trabalho!</p>
          <MemoryGame />
        </section>

        {/* Trivia Section */}
        <section className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🧠</span>
            <h3 className="text-lg font-semibold">Trivia Cognitiva</h3>
          </div>
          <p className="text-gray-600 mb-4 text-sm">Acerte e ganhe pontos virtuais para a Gincana!</p>
          <Trivia />
        </section>

        {/* Active Pause Section */}
        <section className="bg-white rounded-2xl shadow-sm p-6 border-l-8 border-accent">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">⏸️</span>
            <h3 className="text-lg font-semibold">Pausa Ativa</h3>
          </div>
          <p className="text-gray-600 mb-6 text-sm">Sente-se sobrecarregado? Respire conosco por um momento.</p>
          <ActivePause />
        </section>
      </main>

      {/* Support Modal */}
      {showSupportModal && <SupportModal onClose={closeSupportModal} />}
    </div>
  );
};

export default App;
