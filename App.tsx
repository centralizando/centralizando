
import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Scissors, 
  Tag, 
  MessageSquare, 
  CheckCircle2, 
  ChevronRight, 
  Clock,
  BellRing,
  ArrowLeft,
  Zap,
  Sparkles,
  Smartphone,
  Star,
  Lock,
  TrendingUp,
  Gem,
  MessageCircle,
  ShieldAlert,
  XCircle,
  Fingerprint,
  DollarSign,
  Gift,
  AlertCircle
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingDemo from './components/BookingDemo';
import VideoPlayer from './components/VideoPlayer';
import Footer from './components/Footer';
import { CONFIG_VIDEOS, CONTACT_INFO, SITE_CONFIG } from './config';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'demo'>('home');
  const waLink = CONTACT_INFO.WhatsAppLink;

  useEffect(() => {
    // Configura o título da página a partir do config.ts
    document.title = SITE_CONFIG.TITLE;
    window.scrollTo(0, 0);
  }, [view]);

  const renderHome = () => (
    <>
      <Hero onDemoClick={() => setView('demo')} />

      {/* Seção de Diferenciais - O Fim das Agendas Comuns */}
      <section className="py-16 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="container mx-auto px-6 text-center mb-16 md:mb-24">
          <span className="text-amber-500 font-black tracking-[0.3em] text-[10px] uppercase mb-4 block">Diferenciais Exclusivos</span>
          <h2 className="text-4xl md:text-8xl font-title tracking-tight mb-6 italic text-white uppercase leading-[0.85]">
            POR QUE SOMOS <span className="text-amber-500">DIFERENTES</span> <br className="hidden md:block" /> DE AGENDAS COMUNS?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-xl font-light leading-relaxed">
            Agendas comuns apenas guardam nomes. O <strong>{SITE_CONFIG.BRAND_NAME}</strong> profissionaliza sua barbearia, blinda seu tempo e coloca dinheiro no seu bolso de forma inteligente.
          </p>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Identidade Própria - Diferencial #01 */}
          <div className="bg-[#111] p-8 rounded-[2.5rem] border border-white/5 hover:border-amber-500/30 transition-all group relative flex flex-col h-full">
            <div className="absolute -top-3 -left-3 bg-amber-500 text-black text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest italic z-10">Diferencial #01</div>
            <div className="bg-amber-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-500 transition-colors">
              <Fingerprint className="text-amber-500 group-hover:text-black w-8 h-8" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white uppercase italic leading-tight">Sua Marca, Sua Regras</h3>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base italic">
              Seu próprio sistema, suas fotos, seu site, seu nome, sua digital, você terá uma agenda para seus cliente que é exclusiva sua. Não é mais uma lista de barbeiros, é a sua barbearia digital.
            </p>
          </div>

          {/* WhatsApp Vinculado - Diferencial #02 */}
          <div className="bg-[#111] p-8 rounded-[2.5rem] border border-white/5 hover:border-green-500/30 transition-all group relative flex flex-col h-full">
            <div className="absolute -top-3 -left-3 bg-green-500 text-black text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest italic z-10">Diferencial #02</div>
            <div className="bg-green-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-green-500 transition-colors">
              <MessageCircle className="text-green-500 group-hover:text-black w-8 h-8" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white uppercase italic leading-tight">WhatsApp Vinculado</h3>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base italic">
              Você recebe direto no seu WhatsApp quando algum cliente agendar. Você é notificado de todas as ações do cliente, tudo direto no seu zap.
            </p>
          </div>

          {/* Notificação em 1 Clique / Evite No-Show - Diferencial #03 */}
          <div className="bg-[#111] p-8 rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 transition-all group relative flex flex-col h-full">
            <div className="absolute -top-3 -left-3 bg-blue-500 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest italic z-10">Diferencial #03</div>
            <div className="bg-blue-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-500 transition-colors">
              <BellRing className="text-blue-500 group-hover:text-white w-8 h-8" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white uppercase italic leading-tight">Notificação em 1 Clique</h3>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base italic">
              Notifique seu cliente com apenas um clique e evite os famosos no-show. Praticidade total para manter sua cadeira sempre ocupada e seu tempo valorizado.
            </p>
          </div>

          {/* Lucro vs Organização - Diferencial #04 */}
          <div className="bg-[#111] p-8 rounded-[2.5rem] border border-white/5 hover:border-green-500/30 transition-all group relative flex flex-col h-full">
            <div className="absolute -top-3 -left-3 bg-green-500 text-black text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest italic z-10">Diferencial #04</div>
            <div className="bg-green-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-green-500 transition-colors">
              <TrendingUp className="text-green-500 group-hover:text-black w-8 h-8" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white uppercase italic leading-tight">Gestão para Lucrar</h3>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base italic">
              Crie cupons para lotar dias lentos, identifique seus clientes VIP e gerencie seus ganhos com clareza total através do nosso dashboard inteligente.
            </p>
          </div>
        </div>
      </section>

      {/* Experiência Simulada */}
      <section className="py-16 md:py-24 bg-black border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full text-[10px] font-bold mb-6">
                <Sparkles className="w-3 h-3" /> DESIGN DE ELITE
              </div>
              <h4 className="text-4xl md:text-6xl font-title mb-6 leading-tight text-white uppercase italic">
                A EXPERIÊNCIA <span className="text-amber-500">BARBEIRO</span>
              </h4>
              <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed font-light italic">
                Seu cliente agendando em segundos, com uma interface que respira luxo.
              </p>
              
              <div className="grid grid-cols-1 gap-4 mb-10">
                {[
                  "Notificação Instantânea no Zap",
                  "Enviar lembretes em apenas 1 click",
                  "Layout Premium que Valoriza sua Marca"
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-center lg:justify-start gap-4 text-white text-base md:text-lg">
                    <div className="bg-green-500 p-1 rounded-full"><CheckCircle2 className="text-black w-3 h-3 md:w-4 md:h-4" /></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full max-w-md mx-auto lg:max-w-none">
              <BookingDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Preço */}
      <section className="py-20 md:py-32 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-500/5 blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          
          {/* Adendo de Exclusividade (No Topo da Seção) */}
          <div className="max-w-xl mx-auto flex items-start gap-3 bg-white/5 border border-white/10 p-4 rounded-xl text-left mb-8">
            <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-[10px] md:text-xs text-gray-400 font-light italic leading-relaxed">
                <strong>ADENDO:</strong> Por ser um sistema personalizado e especializado para cada pessoa, nem sempre estamos aceitando novos clientes. Garantimos a qualidade máxima para quem já está no topo.
              </p>
            </div>
          </div>

          {/* Selo de Novos Clientes (Abaixo do Adendo, agora Verde) */}
          <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-500 px-6 py-2 rounded-full text-xs font-black mb-8 uppercase tracking-widest border border-green-500/20">
            Estamos aceitando novos clientes
          </div>
          
          <h3 className="text-4xl md:text-6xl font-title text-white uppercase italic mb-4">TENHA TUDO ISSO POR APENAS</h3>
          
          <div className="flex flex-col items-center justify-center">
             <div className="flex items-start justify-center gap-2">
                <span className="text-3xl md:text-6xl font-title text-amber-500 mt-4 italic">R$</span>
                <span className="text-[10rem] md:text-[18rem] font-title leading-[0.8] text-white italic transition-all hover:text-amber-500">50</span>
             </div>
             <span className="text-2xl md:text-5xl font-title text-gray-500 uppercase italic tracking-widest mt-4">Por Mês</span>
          </div>
          
          {/* Oferta 1 Mês Grátis */}
          <div className="mt-12 mb-8 inline-block group">
            <div className="bg-green-500 text-black px-8 py-4 rounded-2xl flex flex-col md:flex-row items-center gap-4 transition-transform group-hover:scale-105">
              <Gift className="w-8 h-8 animate-bounce" />
              <div className="text-left">
                <p className="font-black text-xl md:text-2xl uppercase italic leading-none">TESTE GRÁTIS POR 30 DIAS</p>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1 opacity-80">Sem cartão de crédito. Peça seu acesso agora no WhatsApp.</p>
              </div>
            </div>
          </div>

          <p className="text-gray-400 mt-10 text-sm md:text-xl font-light italic max-w-xl mx-auto">
            Menos que o valor de um único corte para ter o controle total da sua barbearia na palma da mão.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-[#111] to-[#050505] p-8 md:p-20 rounded-[3rem] border border-white/5 text-center relative overflow-hidden">
            <h3 className="text-4xl md:text-8xl font-title mb-8 italic text-white uppercase leading-none">SAIA DO BÁSICO</h3>
            <p className="text-gray-400 text-lg md:text-2xl mb-12 max-w-xl mx-auto font-light leading-relaxed italic">
              Pare de perder tempo com agendas que não te trazem lucro. O {SITE_CONFIG.BRAND_NAME} é a ferramenta para quem quer dominar o mercado local.
            </p>
            
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full md:w-auto items-center justify-center gap-3 bg-[#25D366] text-black px-12 py-6 md:px-20 md:py-9 rounded-[2rem] font-black text-2xl md:text-4xl hover:scale-105 transition-all shadow-[0_20px_50px_rgba(37,211,102,0.3)] uppercase italic"
            >
              <MessageCircle className="w-8 h-8 md:w-12 md:h-12 fill-black" />
              Chama no Zap
            </a>
          </div>
        </div>
      </section>
    </>
  );

  const renderDemo = () => (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 animate-in fade-in slide-in-from-bottom-6 duration-500">
      <div className="container mx-auto px-6">
        <button 
          onClick={() => setView('home')}
          className="flex items-center gap-2 text-amber-500 font-black mb-10 uppercase tracking-widest text-xs"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </button>

        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-5xl md:text-9xl font-title tracking-tight mb-4 uppercase italic text-white leading-none">{SITE_CONFIG.BRAND_NAME} <span className="text-amber-500">TOUR</span></h2>
          <p className="text-gray-400 text-base md:text-2xl max-w-2xl mx-auto font-light leading-snug">Veja o sistema em ação nas mãos de quem já é elite.</p>
        </div>

        <div className="flex flex-col gap-20 md:gap-32 max-w-4xl mx-auto">
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center gap-3">
              <Smartphone className="text-amber-500 w-6 h-6 md:w-8 md:h-8" />
              <h3 className="text-2xl md:text-4xl font-title tracking-widest uppercase italic text-white">Lado do Cliente</h3>
            </div>
            <VideoPlayer url={CONFIG_VIDEOS.CLIENT_PAGE} title="Agendamento Super Rápido" />
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center gap-3">
              <Gem className="text-amber-500 w-6 h-6 md:w-8 md:h-8" />
              <h3 className="text-2xl md:text-4xl font-title tracking-widest uppercase italic text-white">Seu Painel</h3>
            </div>
            <VideoPlayer url={CONFIG_VIDEOS.BARBER_PAGE} title="Controle de Ganhos" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-500 selection:text-black bg-[#0a0a0a]">
      <Navbar onDemoClick={() => setView('demo')} onHomeClick={() => setView('home')} currentView={view} />
      
      <main className="flex-grow">
        {view === 'home' ? renderHome() : renderDemo()}

        <section className="py-20 md:py-24 bg-amber-500">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-7xl md:text-[15rem] font-title mb-2 text-black leading-[0.7] italic uppercase">O TOPO</h2>
            <p className="text-lg md:text-5xl mb-12 text-black font-black uppercase tracking-tighter italic">
              Saia do amadorismo. Seja {SITE_CONFIG.BRAND_NAME}.
            </p>
            <div className="flex flex-col items-center gap-10">
              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-black text-white px-12 py-8 md:px-24 md:py-12 rounded-[2rem] md:rounded-[3rem] font-black text-3xl md:text-5xl hover:scale-110 transition-all shadow-[0_30px_60px_rgba(0,0,0,0.4)] flex items-center justify-center gap-6 italic"
              >
                QUERO AGORA
              </a>
              <p className="text-black text-5xl md:text-8xl font-title leading-none italic">{CONTACT_INFO.DISPLAY_PHONE}</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
