
import React, { useState, useEffect } from 'react';
import { TRIVIA_QUESTIONS } from '../constants';

const Trivia: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [availableIndices, setAvailableIndices] = useState<number[]>([]);

  // Initialize indices on mount or when all questions have been used
  useEffect(() => {
    if (availableIndices.length === 0) {
      const allIndices = Array.from({ length: TRIVIA_QUESTIONS.length }, (_, i) => i);
      // Shuffle the initial list to provide variety even after resets
      setAvailableIndices(allIndices.sort(() => Math.random() - 0.5));
    }
  }, [availableIndices]);

  const generateNext = () => {
    if (availableIndices.length === 0) return;

    // Take the last item from the shuffled pool to ensure no repeats until pool is empty
    const nextPool = [...availableIndices];
    const nextIdx = nextPool.pop()!;
    
    setAvailableIndices(nextPool);
    setCurrentQuestion(nextIdx);
    setSelectedAnswer(null);
  };

  const handleAnswer = (idx: number) => {
    if (selectedAnswer !== null || currentQuestion === null) return;
    setSelectedAnswer(idx);
    if (idx === TRIVIA_QUESTIONS[currentQuestion].correct) {
      setScore(s => s + 1);
    }
  };

  const q = currentQuestion !== null ? TRIVIA_QUESTIONS[currentQuestion] : null;

  return (
    <div className="w-full text-center">
      {!q ? (
        <button 
          onClick={generateNext}
          className="w-full border-2 border-primary text-primary hover:bg-purple-50 font-semibold py-2 px-6 rounded-full transition-all"
        >
          Começar Trivia
        </button>
      ) : (
        <div className="animate-in slide-in-from-bottom-2 duration-300">
          <p className="font-semibold text-gray-800 mb-4">{q.q}</p>
          <div className="space-y-2 mb-4">
            {q.a.map((opt, idx) => {
              const isCorrect = idx === q.correct;
              const isSelected = idx === selectedAnswer;
              
              let btnClass = "w-full text-left p-3 rounded-lg border transition-all ";
              if (selectedAnswer !== null) {
                if (isCorrect) btnClass += "bg-success text-white border-success";
                else if (isSelected) btnClass += "bg-red-500 text-white border-red-500";
                else btnClass += "bg-gray-50 text-gray-400 border-gray-100";
              } else {
                btnClass += "bg-gray-100 hover:bg-gray-200 border-gray-200 text-gray-700";
              }

              return (
                <button 
                  key={idx} 
                  disabled={selectedAnswer !== null}
                  onClick={() => handleAnswer(idx)}
                  className={btnClass}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          <button 
            onClick={generateNext}
            className="text-primary text-sm font-bold hover:underline"
          >
            Próxima Pergunta →
          </button>
          <div className="flex justify-between items-center mt-4">
             <p className="text-[10px] text-gray-400 uppercase tracking-widest">
              Pontuação: {score} pontos
            </p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest">
              Restantes: {availableIndices.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Trivia;
