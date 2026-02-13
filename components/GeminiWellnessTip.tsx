
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const GeminiWellnessTip: React.FC = () => {
  const [tip, setTip] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTip = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: "Dê uma dica curta de 1 frase (máximo 15 palavras) de bem-estar mental para um trabalhador da Corteva (agronegócio) hoje. Seja inspirador e use um emoji.",
          config: {
            systemInstruction: "Você é um coach de bem-estar corporativo da Corteva Agriscience.",
            temperature: 0.8,
          },
        });
        setTip(response.text || 'Lembre-se de respirar fundo hoje! 🌱');
      } catch (error) {
        console.error('Error fetching AI tip:', error);
        setTip('Cultive bons pensamentos para colher ótimos resultados! 🚜');
      } finally {
        setLoading(false);
      }
    };

    fetchTip();
  }, []);

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-4 border border-indigo-100 flex items-center gap-3">
      <div className="bg-white p-2 rounded-full shadow-sm text-lg">💡</div>
      <div className="flex-1">
        <p className="text-[10px] uppercase font-bold text-indigo-400 tracking-widest mb-1">Dica de Bem-Estar IA</p>
        {loading ? (
          <div className="h-4 bg-indigo-200/50 rounded animate-pulse w-3/4"></div>
        ) : (
          <p className="text-sm italic text-gray-700 font-medium">"{tip}"</p>
        )}
      </div>
    </div>
  );
};

export default GeminiWellnessTip;
