
import React from 'react';

interface SupportModalProps {
  onClose: () => void;
}

const SupportModal: React.FC<SupportModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-2xl p-8 text-center shadow-2xl scale-in duration-300">
        <h2 className="text-2xl font-bold text-primary mb-2">Estamos com você! 💜</h2>
        <p className="text-gray-600 mb-6">Sua saúde mental é prioridade. Não há problema em pedir apoio quando as coisas parecem difíceis.</p>
        
        <div className="bg-purple-50 p-6 rounded-xl text-left mb-6 border border-purple-100">
          <p className="font-bold text-primary mb-3 text-sm">Canais de Apoio Imediato:</p>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">📞</span>
              <span><strong>Canais de Ajuda Corteva:</strong> entre em contato com os canais de ajuda.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">👷</span>
              <span><strong>CIPEIRO:</strong> Procure um representante da CIPA em sua área.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">🗣️</span>
              <span><strong>Advocates:</strong> Converse com um Advocate.</span>
            </li>
          </ul>
        </div>
        
        <p className="text-xs text-gray-500 mb-6 uppercase tracking-wider">Você não está sozinho nessa jornada.</p>
        
        <button 
          onClick={onClose}
          className="w-full bg-primary hover:bg-lightPurple text-white font-bold py-3 rounded-xl transition-colors"
        >
          Entendido, vou procurar ajuda
        </button>
      </div>
    </div>
  );
};

export default SupportModal;
