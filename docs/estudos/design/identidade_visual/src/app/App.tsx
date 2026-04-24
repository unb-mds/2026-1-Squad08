import { Bell, Search, ClipboardList, Eye, Scale, BarChart3, Clock, AlertCircle, CheckCircle, Shield, FileText, TrendingUp } from 'lucide-react';
import logoShield from '../imports/1c2e71f5-d0d4-4dbd-aae9-8aec3a9399ff_(1)-1.png';
import gearIcon from '../imports/image.png';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F1F5F9]">
      {/* Header */}
      <header className="bg-[#1E40AF] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-2xl p-3 shadow-lg">
                <img src={logoShield} alt="Logo" className="w-24 h-24 object-contain" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight uppercase" style={{ fontFamily: "'EB Garamond', serif", letterSpacing: '0.05em' }}>Guardiões da Lei</h1>
                <p className="text-sm text-white/90 uppercase tracking-wide" style={{ fontSize: '11px' }}>Proteção de Crianças na Internet</p>
              </div>
            </div>
            <nav className="flex items-center gap-8">
              <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-white/80 transition-colors">
                <FileText className="w-5 h-5" strokeWidth={2} />
                Projetos
              </a>
              <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-white/80 transition-colors">
                <AlertCircle className="w-5 h-5" strokeWidth={2} />
                Alertas
              </a>
              <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-white/80 transition-colors">
                <TrendingUp className="w-5 h-5" strokeWidth={2} />
                Análises
              </a>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <img src={gearIcon} alt="Configurações" className="w-6 h-6 brightness-0 invert" />
              </button>
              <button className="relative p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Bell className="w-6 h-6" strokeWidth={2} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#EA580C] rounded-full"></span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-2">Dashboard de Monitoramento</h2>
          <p className="text-[#475569]">Acompanhe projetos de lei e políticas públicas relacionadas à proteção infantil digital</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            icon={<ClipboardList className="w-5 h-5" strokeWidth={2} />}
            title="Projetos Ativos"
            value="24"
            bgColor="bg-[#EFF6FF]"
            iconColor="text-[#2563EB]"
          />
          <StatsCard
            icon={<Shield className="w-5 h-5" strokeWidth={2} />}
            title="Proteções Ativas"
            value="12"
            bgColor="bg-[#D1FAE5]"
            iconColor="text-[#059669]"
          />
          <StatsCard
            icon={<AlertCircle className="w-5 h-5" strokeWidth={2} />}
            title="Alertas Urgentes"
            value="3"
            bgColor="bg-[#FFF7ED]"
            iconColor="text-[#EA580C]"
          />
          <StatsCard
            icon={<Eye className="w-5 h-5" strokeWidth={2} />}
            title="Em Monitoramento"
            value="48"
            bgColor="bg-[#EDE9FE]"
            iconColor="text-[#7C3AED]"
          />
        </div>

        {/* Alert Banner */}
        <div className="mb-8 bg-[#FFF7ED] border-l-4 border-[#EA580C] rounded-lg p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-[#EA580C] flex-shrink-0 mt-0.5" strokeWidth={2} />
            <div className="flex-1">
              <h3 className="font-semibold text-[#0F172A] mb-1">Atenção: Prazo Próximo</h3>
              <p className="text-sm text-[#475569] mb-3">
                O PL 3428/2026 sobre Regulamentação de Redes Sociais para Menores entra em votação em 5 dias.
                Participação pública é necessária até 19/04/2026.
              </p>
              <button className="bg-[#EA580C] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#C2410C] transition-colors">
                Ver Detalhes
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#475569]" strokeWidth={2} />
            <input
              type="text"
              placeholder="Buscar projetos de lei, temas ou instituições..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-[#E2E8F0] rounded-lg text-[#0F172A] placeholder:text-[#475569] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Law Covers Panel */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#0F172A] mb-4" style={{ fontFamily: "'EB Garamond', serif" }}>Biblioteca Legislativa</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            <LawCover
              title="Lei Geral de Proteção de Dados"
              code="Lei nº 13.709/2018"
              imageUrl="https://images.unsplash.com/photo-1633295971194-006030b6e6a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
              officialUrl="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
            />
            <LawCover
              title="Marco Civil da Internet"
              code="Lei nº 12.965/2014"
              imageUrl="https://images.unsplash.com/photo-1592244974920-f1733aca870c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
              officialUrl="https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm"
            />
            <LawCover
              title="Estatuto da Criança e do Adolescente"
              code="Lei nº 8.069/1990"
              imageUrl="https://images.unsplash.com/photo-1552791940-3326fb84bbfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
              officialUrl="https://www.planalto.gov.br/ccivil_03/leis/l8069.htm"
            />
            <LawCover
              title="Lei Carolina Dieckmann"
              code="Lei nº 12.737/2012"
              imageUrl="https://images.unsplash.com/photo-1760205085646-2ce78b07c189?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
              officialUrl="https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12737.htm"
            />
            <LawCover
              title="Crimes Cibernéticos"
              code="Lei nº 14.155/2021"
              imageUrl="https://images.unsplash.com/photo-1521987285768-78e0e06b4ec0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
              officialUrl="https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14155.htm"
            />
            <LawCover
              title="Lei Anti-Cyberbullying"
              code="Lei nº 14.811/2024"
              imageUrl="https://images.unsplash.com/photo-1553870982-a594869cd5d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
              officialUrl="https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/L14811.htm"
            />
            <LawCover
              title="Proteção de Dados Pessoais de Crianças"
              code="Res. CD/ANPD nº 1/2024"
              imageUrl="https://images.unsplash.com/photo-1728287186308-c45b342e613b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
              officialUrl="https://www.gov.br/anpd/pt-br"
            />
            <LawCover
              title="Diretrizes de Proteção Online"
              code="Decreto nº 11.829/2023"
              imageUrl="https://images.unsplash.com/photo-1759398454483-856641e0e013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
              officialUrl="https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/decreto/D11829.htm"
            />
          </div>
        </div>

        {/* Legislation Cards */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#0F172A] mb-4" style={{ fontFamily: "'EB Garamond', serif" }}>Projetos de Lei Recentes</h3>
          <div className="space-y-4">
            <LegislationCard
              code="PL 3428/2026"
              title="Regulamentação de Redes Sociais para Menores de 16 Anos"
              description="Estabelece regras para criação de contas, verificação de idade e proteção de dados de crianças e adolescentes em plataformas digitais."
              status="urgente"
              category="Redes Sociais"
              date="12/04/2026"
              author="Senado Federal"
            />
            <LegislationCard
              code="PL 2891/2026"
              title="Educação Digital Obrigatória no Ensino Fundamental"
              description="Torna obrigatório o ensino de segurança digital, privacidade e cidadania online nas escolas públicas e privadas."
              status="analise"
              category="Educação"
              date="08/04/2026"
              author="Câmara dos Deputados"
            />
            <LegislationCard
              code="PL 2654/2026"
              title="Proteção Contra Cyberbullying e Assédio Online"
              description="Define cyberbullying como crime e estabelece medidas protetivas para vítimas menores de idade."
              status="ativo"
              category="Proteção Legal"
              date="02/04/2026"
              author="Câmara dos Deputados"
            />
            <LegislationCard
              code="PL 2103/2026"
              title="Transparência em Algoritmos de Recomendação para Menores"
              description="Obriga plataformas digitais a divulgarem critérios de algoritmos que recomendam conteúdo a usuários menores de 18 anos."
              status="aprovado"
              category="Transparência"
              date="28/03/2026"
              author="Senado Federal"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ActionCard
            icon={<Scale className="w-6 h-6" strokeWidth={2} />}
            title="Participação Pública"
            description="Contribua com consultas públicas abertas"
            color="text-[#2563EB]"
            bgColor="bg-[#EFF6FF]"
          />
          <ActionCard
            icon={<BarChart3 className="w-6 h-6" strokeWidth={2} />}
            title="Análises e Relatórios"
            description="Acesse relatórios detalhados sobre legislação"
            color="text-[#7C3AED]"
            bgColor="bg-[#EDE9FE]"
          />
          <ActionCard
            icon={<Bell className="w-6 h-6" strokeWidth={2} />}
            title="Configurar Alertas"
            description="Receba notificações sobre temas de interesse"
            color="text-[#059669]"
            bgColor="bg-[#D1FAE5]"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1E40AF] border-t border-[#1D4ED8] mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between text-sm text-white/80">
            <p>© 2026 Sistema de Monitoramento Legislativo - Proteção Infantil Digital</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Sobre</a>
              <a href="#" className="hover:text-white transition-colors">Contato</a>
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Components
function StatsCard({ icon, title, value, bgColor, iconColor }: {
  icon: React.ReactNode;
  title: string;
  value: string;
  bgColor: string;
  iconColor: string;
}) {
  return (
    <div className="bg-white rounded-lg p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className={`${bgColor} ${iconColor} p-3 rounded-lg`}>
          {icon}
        </div>
        <div>
          <p className="text-sm text-[#475569] mb-1">{title}</p>
          <p className="text-2xl font-bold text-[#0F172A]">{value}</p>
        </div>
      </div>
    </div>
  );
}

function LegislationCard({ code, title, description, status, category, date, author }: {
  code: string;
  title: string;
  description: string;
  status: 'urgente' | 'analise' | 'ativo' | 'aprovado';
  category: string;
  date: string;
  author: string;
}) {
  const statusConfig = {
    urgente: { bg: 'bg-[#FEE2E2]', text: 'text-[#991B1B]', label: 'Urgente' },
    analise: { bg: 'bg-[#DBEAFE]', text: 'text-[#1E40AF]', label: 'Em Análise' },
    ativo: { bg: 'bg-[#FFF7ED]', text: 'text-[#C2410C]', label: 'Ativo' },
    aprovado: { bg: 'bg-[#DCFCE7]', text: 'text-[#166534]', label: 'Aprovado' },
  };

  const config = statusConfig[status];

  return (
    <div className="bg-white rounded-lg p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#2563EB] transition-all cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-semibold text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded">
            {code}
          </span>
          <span className={`${config.bg} ${config.text} text-xs font-semibold px-3 py-1 rounded-full`}>
            {config.label}
          </span>
        </div>
        <span className="bg-[#EDE9FE] text-[#7C3AED] text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      <h4 className="text-lg font-semibold text-[#0F172A] mb-2">{title}</h4>
      <p className="text-sm text-[#475569] leading-relaxed mb-4">{description}</p>

      <div className="flex items-center gap-4 text-xs text-[#475569]">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" strokeWidth={2} />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-1">
          <Scale className="w-4 h-4" strokeWidth={2} />
          <span>{author}</span>
        </div>
      </div>
    </div>
  );
}

function ActionCard({ icon, title, description, color, bgColor }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}) {
  return (
    <div className="bg-white rounded-lg p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all cursor-pointer group">
      <div className={`${bgColor} ${color} p-3 rounded-lg inline-flex mb-4 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h4 className="font-semibold text-[#0F172A] mb-2">{title}</h4>
      <p className="text-sm text-[#475569]">{description}</p>
    </div>
  );
}

function LawCover({ title, code, imageUrl, officialUrl }: {
  title: string;
  code: string;
  imageUrl: string;
  officialUrl: string;
}) {
  return (
    <a
      href={officialUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        <div className="aspect-[3/4] relative">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 p-4 flex flex-col justify-end">
            <p className="text-white/80 text-xs font-mono mb-1">{code}</p>
            <h4 className="text-white font-semibold text-sm leading-tight" style={{ fontFamily: "'EB Garamond', serif" }}>
              {title}
            </h4>
          </div>
          <div className="absolute top-2 right-2 bg-[#2563EB] text-white px-2 py-1 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            Ver Lei
          </div>
        </div>
      </div>
    </a>
  );
}
