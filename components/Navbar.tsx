
import React from 'react';
import { Scissors } from 'lucide-react';
import { CONTACT_INFO } from '../config';

interface NavbarProps {
  onDemoClick: () => void;
  onHomeClick: () => void;
  currentView: 'home' | 'demo';
}

const Navbar: React.FC<NavbarProps> = ({ onDemoClick, onHomeClick, currentView }) => {
  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <button 
          onClick={onHomeClick}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="bg-amber-500 p-1.5 rounded-lg">
            <Scissors className="text-black w-5 h-5 md:w-6 md:h-6" />
          </div>
          <span className="text-xl md:text-3xl font-title tracking-tighter italic uppercase">CENTRALIZANDO</span>
        </button>
        
        <div className="hidden lg:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
          <button onClick={onHomeClick} className={`transition-colors ${currentView === 'home' ? 'text-amber-500' : 'hover:text-amber-500'}`}>Início</button>
          <button onClick={onDemoClick} className={`transition-colors ${currentView === 'demo' ? 'text-amber-500' : 'hover:text-amber-500'}`}>Demonstração</button>
        </div>

        <button 
          onClick={onDemoClick}
          className="bg-white text-black px-5 py-2.5 md:px-8 md:py-3.5 rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-amber-500 transition-all shadow-lg active:scale-95"
        >
          COMO FUNCIONA?
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
