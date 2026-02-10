
import React from 'react';
import { Scissors, Github, Linkedin, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../config';

const Footer: React.FC = () => {
  const waLink = CONTACT_INFO.WhatsAppLink;

  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-amber-500 p-2 rounded-lg">
              <Scissors className="text-black w-5 h-5" />
            </div>
            <span className="text-xl font-title tracking-tighter uppercase italic">CENTRALIZANDO</span>
          </div>

          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm italic">Gestão definitiva para barbeiros de alta performance.</p>
            <p className="text-amber-500 text-sm font-bold mt-1 uppercase tracking-widest">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="hover:underline">Suporte Direto: {CONTACT_INFO.DISPLAY_PHONE}</a>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-600 text-[10px] uppercase tracking-[0.4em] font-black">
          &copy; {new Date().getFullYear()} CENTRALIZANDO - Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
