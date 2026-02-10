
import React from 'react';
import { MessageSquare, Star, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../config';

interface HeroProps {
  onDemoClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDemoClick }) => {
  const waLink = CONTACT_INFO.WhatsAppLink;

  return (
    <div className="relative pt-28 pb-16 md:pt-48 md:pb-40 overflow-hidden bg-[#0a0a0a]">
      {/* Luz de fundo dramática */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-full bg-amber-500/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8 md:mb-10">
            <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
            <span className="text-amber-500 font-black tracking-widest text-[8px] md:text-[10px] uppercase">O Sistema Favorito dos Melhores</span>
          </div>
          
          <h1 className="text-6xl md:text-[11rem] font-title mb-4 leading-[0.85] tracking-tight text-white italic uppercase">
            CENTRALIZANDO <span className="text-amber-500">O SUCESSO</span>
          </h1>
          
          <p className="text-lg md:text-3xl text-gray-400 mb-10 md:mb-14 max-w-2xl mx-auto leading-tight font-light italic">
            Profissionalize sua gestão, elimine faltas e <span className="text-white font-bold">multiplique seu lucro</span>.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto flex items-center justify-center gap-3 bg-amber-500 text-black px-10 py-5 rounded-2xl font-black text-xl md:text-2xl hover:scale-105 transition-all shadow-xl shadow-amber-500/20 uppercase italic"
            >
              <MessageSquare className="w-5 h-5 fill-black" />
              Adquirir agora
            </a>
            <button 
              onClick={onDemoClick}
              className="w-full md:w-auto flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all group uppercase tracking-widest italic"
            >
              Demonstração
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 border-t border-white/5 pt-10">
            {[
              { label: "GESTÃO", sub: "100% Simples" },
              { label: "LUCRO", sub: "Crescimento Real" },
              { label: "WHATS", sub: "Conectado 24h" }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <p className="text-4xl md:text-5xl font-title text-white group-hover:text-amber-500 transition-colors italic leading-none">{stat.label}</p>
                <p className="text-gray-500 text-[8px] md:text-[10px] font-black uppercase tracking-widest mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
