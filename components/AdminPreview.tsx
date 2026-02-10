
import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  Users, 
  Scissors, 
  Tag, 
  BarChart3, 
  Clock, 
  Trash2, 
  Plus, 
  ToggleLeft, 
  ToggleRight,
  ShieldAlert,
  CalendarCheck,
  MessageSquare,
  Crown,
  Ban,
  CalendarDays
} from 'lucide-react';

type Tab = 'dashboard' | 'users' | 'services' | 'coupons' | 'settings';

const AdminPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');

  // Simulated Database State from SQL schema
  const [services, setServices] = useState([
    { id: '1', name: 'Corte Degradê', price: 45.00, duration: 30, active: true },
    { id: '2', name: 'Barba Terapia', price: 35.00, duration: 40, active: true },
    { id: '3', name: 'Combo Premium', price: 75.00, duration: 60, active: false },
  ]);

  const [users, setUsers] = useState([
    { id: '1', name: 'João Silva', phone: '(17) 99123-4567', is_blocked: false, is_vip: true },
    { id: '2', name: 'Maria Santos', phone: '(17) 99765-4321', is_blocked: true, is_vip: false },
    { id: '3', name: 'Ricardo Lima', phone: '(17) 99888-1111', is_blocked: false, is_vip: false },
  ]);

  const [coupons, setCoupons] = useState([
    { id: '1', code: 'BARBER10', type: 'percentage', value: 10, limit: 100, used: 45, active: true },
    { id: '2', code: 'PRIMEIRA_VEZ', type: 'fixed', value: 5, limit: 50, used: 12, active: true },
  ]);

  const [settings, setSettings] = useState({
    work_start: '08:00',
    work_end: '19:00',
    lunch_start: '12:00',
    lunch_end: '13:00',
    auto_confirm: true,
    work_days: [1,2,3,4,5,6]
  });

  const toggleService = (id: string) => {
    setServices(services.map(s => s.id === id ? { ...s, active: !s.active } : s));
  };

  const toggleUserBlock = (id: string) => {
    setUsers(users.map(u => u.id === id ? { ...u, is_blocked: !u.is_blocked } : u));
  };

  const toggleUserVip = (id: string) => {
    setUsers(users.map(u => u.id === id ? { ...u, is_vip: !u.is_vip } : u));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-black/40 p-5 rounded-2xl border border-white/5">
                <p className="text-gray-500 text-xs uppercase tracking-tighter mb-1">Ganhos Brutos (Original)</p>
                <p className="text-3xl font-title text-amber-500">R$ 4.250,00</p>
              </div>
              <div className="bg-black/40 p-5 rounded-2xl border border-white/5">
                <p className="text-gray-500 text-xs uppercase tracking-tighter mb-1">Descontos Aplicados</p>
                <p className="text-3xl font-title text-red-400">- R$ 380,00</p>
              </div>
              <div className="bg-black/40 p-5 rounded-2xl border border-white/5">
                <p className="text-gray-500 text-xs uppercase tracking-tighter mb-1">Saldo Final Líquido</p>
                <p className="text-3xl font-title text-green-400">R$ 3.870,00</p>
              </div>
            </div>
            <div className="bg-black/20 p-6 rounded-2xl border border-white/5">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <CalendarCheck className="w-4 h-4 text-amber-500" /> Próximos Atendimentos
              </h4>
              <div className="space-y-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 font-bold">U</div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold text-white">Cliente #{i + 120}</p>
                          {i === 1 && <Crown className="w-3 h-3 text-amber-500" />}
                        </div>
                        <p className="text-xs text-gray-500">Corte Social • 14:30</p>
                      </div>
                    </div>
                    <span className="text-xs px-2 py-1 rounded bg-green-500/10 text-green-500">Confirmado</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'users':
        return (
          <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-300">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-lg">Base de Clientes</h4>
              <div className="text-xs text-gray-500 italic">VIPs: {users.filter(u => u.is_vip).length} | Bloqueados: {users.filter(u => u.is_blocked).length}</div>
            </div>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 text-gray-400 uppercase text-[10px] tracking-widest font-bold">
                  <tr>
                    <th className="p-4">Nome / Status</th>
                    <th className="p-4">Telefone</th>
                    <th className="p-4 text-center">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {users.map(u => (
                    <tr key={u.id} className={`hover:bg-white/5 transition-colors ${u.is_blocked ? 'opacity-50' : ''}`}>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{u.name}</span>
                          {u.is_vip && <Crown className="w-3 h-3 text-amber-500" />}
                        </div>
                        {u.is_blocked && <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest">BLOQUEADO</span>}
                      </td>
                      <td className="p-4 text-gray-400 font-mono text-xs">{u.phone}</td>
                      <td className="p-4">
                        <div className="flex items-center justify-center gap-3">
                          <button 
                            onClick={() => toggleUserVip(u.id)}
                            className={`p-2 rounded-lg transition-colors ${u.is_vip ? 'bg-amber-500/20 text-amber-500' : 'text-gray-500 hover:bg-white/5'}`}
                            title="Alternar VIP"
                          >
                            <Crown className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => toggleUserBlock(u.id)}
                            className={`p-2 rounded-lg transition-colors ${u.is_blocked ? 'bg-red-500/20 text-red-500' : 'text-gray-500 hover:bg-red-500/10'}`}
                            title={u.is_blocked ? "Desbloquear" : "Bloquear Usuário"}
                          >
                            <Ban className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-300 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h5 className="text-xs font-bold uppercase tracking-widest text-amber-500 border-b border-amber-500/20 pb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Períodos de Atendimento
                </h5>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] text-gray-500 mb-1 block uppercase">Abre às</label>
                    <input type="time" value={settings.work_start} className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-sm focus:border-amber-500 outline-none" />
                  </div>
                  <div>
                    <label className="text-[10px] text-gray-500 mb-1 block uppercase">Fecha às</label>
                    <input type="time" value={settings.work_end} className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-sm focus:border-amber-500 outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] text-amber-500/70 mb-1 block uppercase">Início Almoço</label>
                    <input type="time" value={settings.lunch_start} className="w-full bg-white/5 border border-amber-500/20 rounded-lg p-2 text-sm focus:border-amber-500 outline-none" />
                  </div>
                  <div>
                    <label className="text-[10px] text-amber-500/70 mb-1 block uppercase">Fim Almoço</label>
                    <input type="time" value={settings.lunch_end} className="w-full bg-white/5 border border-amber-500/20 rounded-lg p-2 text-sm focus:border-amber-500 outline-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="text-xs font-bold uppercase tracking-widest text-amber-500 border-b border-amber-500/20 pb-2 flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" /> Dias de Funcionamento
                </h5>
                <div className="flex flex-wrap gap-2">
                  {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'].map((day, idx) => (
                    <button 
                      key={day}
                      className={`px-3 py-2 rounded-lg text-xs font-bold border transition-all ${settings.work_days.includes(idx) ? 'bg-amber-500 border-amber-600 text-black' : 'bg-black/40 border-white/10 text-gray-500'}`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold">Auto-Confirmar</p>
                    <p className="text-[10px] text-gray-500">Agendamentos confirmados sem sua ação</p>
                  </div>
                  <button onClick={() => setSettings({...settings, auto_confirm: !settings.auto_confirm})}>
                    {settings.auto_confirm ? <ToggleRight className="w-8 h-8 text-amber-500" /> : <ToggleLeft className="w-8 h-8 text-gray-500" />}
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-amber-500/10 p-4 rounded-xl border border-amber-500/20">
               <p className="text-xs text-amber-500 font-medium">💡 Estes dados alimentam diretamente a tabela <b>settings</b> do banco Neon, garantindo que o seu sistema reflita seu horário real.</p>
            </div>
          </div>
        );
      
      default:
        return <div className="py-20 text-gray-500">Funcionalidade do banco de dados em processamento...</div>;
    }
  };

  return (
    <div className="bg-[#111] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="flex flex-col lg:flex-row min-h-[500px]">
        {/* Navigation Sidebar */}
        <aside className="w-full lg:w-64 bg-[#1a1a1a] p-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`flex-shrink-0 lg:w-full p-3 rounded-xl flex items-center gap-3 font-bold transition-all text-sm ${activeTab === 'dashboard' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <BarChart3 className="w-5 h-5" /> 
            <span className="hidden lg:inline">Financeiro</span>
          </button>
          <button 
            onClick={() => setActiveTab('users')}
            className={`flex-shrink-0 lg:w-full p-3 rounded-xl flex items-center gap-3 font-bold transition-all text-sm ${activeTab === 'users' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <Users className="w-5 h-5" /> 
            <span className="hidden lg:inline">Controle de Clientes</span>
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`flex-shrink-0 lg:w-full p-3 rounded-xl flex items-center gap-3 font-bold transition-all text-sm ${activeTab === 'settings' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <SettingsIcon className="w-5 h-5" /> 
            <span className="hidden lg:inline">Configurações</span>
          </button>
          <div className="hidden lg:block flex-grow"></div>
          <div className="p-4 bg-black/40 rounded-xl hidden lg:block">
             <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Status DB</p>
             <div className="flex items-center gap-2 mt-1">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
               <span className="text-[9px] font-mono text-green-500">NEON DATABASE READY</span>
             </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-grow p-6 lg:p-10 relative">
          <div className="flex justify-between items-center mb-10 border-b border-white/5 pb-6">
            <h3 className="text-2xl font-title tracking-wide text-white capitalize">{activeTab}</h3>
            <div className="flex items-center gap-4">
               <MessageSquare className="w-5 h-5 text-amber-500" />
               <div className="text-right">
                  <p className="text-[10px] text-gray-500 leading-none">WhatsApp</p>
                  <p className="text-xs font-bold text-white">CONECTADO</p>
               </div>
            </div>
          </div>

          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminPreview;
