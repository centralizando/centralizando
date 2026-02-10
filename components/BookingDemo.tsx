
import React, { useState } from 'react';
import { Calendar, Clock, Scissors, Tag, CheckCircle, Star, MessageSquare } from 'lucide-react';

const mockServices = [
  { id: '1', name: 'Combo: Corte + Barba', price: 65.00, duration: 55 },
  { id: '2', name: 'Degradê na Régua', price: 45.00, duration: 30 },
  { id: '3', name: 'Nevou / Platinado', price: 120.00, duration: 120 },
];

const BookingDemo: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  const applyCoupon = () => {
    if (coupon.toUpperCase() === 'TOP10') {
      setDiscount(selectedService.price * 0.1);
    }
  };

  const finalPrice = selectedService ? Math.max(0, selectedService.price - discount) : 0;

  return (
    <div className="bg-[#111] border border-white/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
      <div className="bg-amber-500 p-4 md:p-6 text-black flex justify-between items-center italic">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 fill-black" />
          <span className="text-[10px] md:text-sm font-black uppercase tracking-widest">Simulação</span>
        </div>
        <div className="flex gap-1.5">
          {[1, 2, 3].map(s => (
            <div key={s} className={`h-1 w-6 md:w-8 rounded-full ${step >= s ? 'bg-black' : 'bg-black/20'}`}></div>
          ))}
        </div>
      </div>

      <div className="p-6 md:p-10 min-h-[460px] md:min-h-[520px] flex flex-col justify-center">
        {step === 1 && (
          <div className="space-y-4 md:space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h4 className="text-2xl md:text-3xl font-title tracking-widest mb-4 italic text-white">O Que Vamos Fazer?</h4>
            {mockServices.map(s => (
              <button
                key={s.id}
                onClick={() => { setSelectedService(s); setStep(2); }}
                className="w-full p-4 md:p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-amber-500 transition-all flex justify-between items-center text-left"
              >
                <div>
                  <p className="font-bold text-base md:text-xl text-white">{s.name}</p>
                  <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">{s.duration} MIN</p>
                </div>
                <span className="font-title text-2xl md:text-3xl text-amber-500 italic">R$ {s.price}</span>
              </button>
            ))}
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300 text-center">
            <h4 className="text-2xl md:text-3xl font-title tracking-widest italic text-white">Escolha a Hora</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {['09:00', '10:30', '14:00', '16:00', '17:30', '19:00'].map(t => (
                <button
                  key={t}
                  onClick={() => setStep(3)}
                  className="py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-amber-500 hover:text-black font-black transition-all text-xs italic"
                >
                  {t}
                </button>
              ))}
            </div>
            <button onClick={() => setStep(1)} className="text-[10px] text-gray-500 underline uppercase tracking-widest">Voltar</button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex flex-col gap-2">
              <p className="text-[10px] text-amber-500 uppercase font-black tracking-widest">Resumo:</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold text-white leading-none">{selectedService.name}</p>
                <p className="text-2xl font-title text-amber-500 italic">R$ {selectedService.price}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="CUPOM" 
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="bg-black border border-white/10 rounded-xl px-4 py-3 flex-grow focus:outline-none focus:border-amber-500 text-xs font-bold text-white uppercase"
              />
              <button onClick={applyCoupon} className="bg-white text-black px-6 py-3 rounded-xl font-black text-[10px]">OK</button>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
              <div className="flex justify-between items-end">
                 <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Total</p>
                 <p className="text-5xl md:text-6xl font-title text-amber-500 italic leading-none">R$ {finalPrice}</p>
              </div>
              <button 
                onClick={() => setStep(4)}
                className="w-full bg-amber-500 text-black py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl shadow-amber-500/20 italic uppercase"
              >
                CONFIRMAR
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-6 animate-in zoom-in-95 duration-500">
            <div className="w-20 h-20 md:w-28 md:h-28 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30">
              <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-black" />
            </div>
            <h4 className="text-4xl md:text-5xl font-title italic uppercase text-white leading-tight">PRONTO!</h4>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 w-full flex items-center justify-center gap-3">
              <MessageSquare className="w-5 h-5 text-amber-500" />
              <p className="text-xs font-bold text-white">WHATSAPP NOTIFICADO</p>
            </div>
            <button onClick={() => setStep(1)} className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Novo Teste</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingDemo;
