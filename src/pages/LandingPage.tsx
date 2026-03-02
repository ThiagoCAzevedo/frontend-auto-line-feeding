import { useNavigate } from 'react-router-dom';
import { ArrowRight, Activity, Zap, Shield, Database, Layout } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';

// IMPORT DA LOGO
import seseLogo from '../assets/sese_blue_logo.png'; // ajuste o caminho conforme sua estrutura

export default function LandingPage() {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between relative">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              CIAL
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-gray-600 hover:text-brand-primary dark:text-gray-300 dark:hover:text-brand-accent transition-colors font-medium"
            >
              Sobre o CIAL
            </button>
            <button
              onClick={() => scrollToSection('beneficios')}
              className="text-gray-600 hover:text-brand-primary dark:text-gray-300 dark:hover:text-brand-accent transition-colors font-medium"
            >
              Benefícios
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => navigate('/login')}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium transition-colors"
            >
              Entrar
            </button>
            <button
              onClick={() => navigate('/register')}
              className="px-5 py-2.5 bg-brand-primary hover:bg-brand-secondary text-white rounded-lg font-medium transition-colors shadow-lg shadow-brand-primary/30"
            >
              Começar Agora
            </button>
          </div>
        </div>
      </header>

      {/* ================= HERO SECTION — OPÇÃO A ================= */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Efeitos de fundo */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* COLUNA ESQUERDA */}
            <div className="text-center md:text-left">

              <div className="text-center md:text-left">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white leading-tight">
                  Central Inteligente de {' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                    Atendimento de Linha
                </span>
                </h1>
 
              </div>

              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-[48ch] leading-relaxed mx-auto md:mx-0">
                O sistema CIAL revolucionou o atendimento automático da nossa linha de montagem,
                otimizando o fluxo de peças e garantindo a eficiência máxima em cada takt.
              </p>
            </div>

            {/* COLUNA DIREITA — LOGO + BOTÕES CENTRALIZADOS */}
            <div className="flex">
              <div className="flex flex-col items-center ml-auto">
                
                {/* LOGO */}
                <img
                  src={seseLogo}
                  alt="Logo Sesé"
                  className="
                    block
                    w-[280px] sm:w-[360px] md:w-[460px] lg:w-[540px]
                    h-auto
                    object-contain
                    drop-shadow-[0_0_22px_rgba(37,99,235,0.18)]
                  "
                />

                {/* BOTÕES CENTRALIZADOS EM RELAÇÃO À LOGO */}
                <div className="mt-20 flex flex-col sm:flex-row gap-4 items-center">
                  <button
                    onClick={() => navigate('/register')}
                    className="px-7 py-4 bg-brand-primary hover:bg-brand-secondary text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-brand-primary/50 flex items-center justify-center group"
                  >
                    Criar Conta Gratuita
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => scrollToSection('sobre')}
                    className="px-7 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl font-semibold transition-all shadow-sm hover:shadow-md"
                  >
                    Saiba Mais
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
      {/* ================= FIM HERO SECTION ================= */}

      {/* ======= Sobre, Benefícios, Footer — mantidos iguais ======= */}

      {/* Sobre o Sistema Section */}
      <section id="sobre" className="py-24 bg-gray-50 dark:bg-gray-800/50 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 aspect-video flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-accent/5" />
                <div className="text-center z-10">
                  <Database className="w-16 h-16 mx-auto text-brand-primary/40 mb-4 group-hover:scale-110 transition-transform duration-500" />
                  <span className="text-gray-400 font-medium">Interface do Sistema CIAL</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                O que o CIAL faz?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Desenvolvido internamente pela equipe da Sesé, o CIAL (Central Inteligente de Atendimento de Linha)
                é o cérebro por trás da nossa linha de montagem automatizada.
              </p>

              <ul className="space-y-4">
                {[
                  'Cálculos matemáticos precisos em tempo real',
                  'Monitoramento do takt time da linha',
                  'Gestão automática de consumo de peças',
                  'Solicitação inteligente de reabastecimento'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center mt-1 mr-3">
                      <div className="w-2 h-2 rounded-full bg-brand-primary" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Por que o CIAL é essencial?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Benefícios diretos que impactam a produtividade e a qualidade da nossa produção.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-brand-primary" />,
                title: 'Alta Eficiência',
                desc: 'Redução drástica no tempo de parada de linha por falta de componentes.'
              },
              {
                icon: <Shield className="w-8 h-8 text-brand-primary" />,
                title: 'Confiabilidade',
                desc: 'Dados precisos e cálculos robustos garantem a operação contínua.'
              },
              {
                icon: <Layout className="w-8 h-8 text-brand-primary" />,
                title: 'Interface Intuitiva',
                desc: 'Design moderno e fácil de usar para operadores e gestores.'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-white dark:bg-gray-700 flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                <Activity className="w-6 h-6 text-brand-primary" />
                <span className="text-2xl font-bold text-white">CIAL</span>
              </div>
              <p className="text-gray-400 max-w-xs">
                Central Inteligente de Atendimento de Linha. Inovação e eficiência para a indústria.
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-gray-500 mb-2">Idealizadores do Sistema</p>
              <div className="flex flex-col space-y-1">
                <span className="font-medium text-gray-300">Thiago Canato de Azevedo</span>
                <span className="font-medium text-gray-300">Nata da Silva</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Sesé. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos</a>
              <a href="#" className="hover:text-white transition-colors">Suporte</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}