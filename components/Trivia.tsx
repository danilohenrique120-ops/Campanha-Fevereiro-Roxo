
import React, { useState } from 'react';
import { TRIVIA_QUESTIONS } from '../constants';

const Trivia: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const generateNext = () => {
    const idx = Math.floor(Math.random() * TRIVIA_QUESTIONS.length);
    setCurrentQuestion(idx);
    setSelectedAnswer(null);
  };

  const handleAnswer = (idx: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);
    if (idx === TRIVIA_QUESTIONS[currentQuestion!].correct) {
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
          Nova Pergunta
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
          <p className="text-[10px] text-gray-400 mt-4 uppercase tracking-widest">
            Pontuação: {score} pontos
          </p>
        </div>
      )}
    </div>
  );
};

export default Trivia;
