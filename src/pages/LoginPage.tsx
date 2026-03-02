import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowLeft, Activity } from 'lucide-react';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log('Login attempt', { email, password });
    navigate('/');
  };

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Left Side - Visual */}
      <div className="hidden lg:flex w-1/2 bg-brand-primary relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-secondary opacity-90" />
        <div className="relative z-10 text-white p-12 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
            <Activity className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-6">Bem-vindo ao CIAL</h2>
          <p className="text-lg text-brand-lighter max-w-md mx-auto">
            Acesse o sistema para gerenciar e monitorar a linha de montagem com eficiência e precisão.
          </p>
        </div>
        {/* Decorative circles */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl" />
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">
        <button 
          onClick={() => navigate('/')}
          className="absolute top-8 left-8 text-gray-500 hover:text-brand-primary dark:text-gray-400 dark:hover:text-brand-accent transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar
        </button>

        {/* Form Box */}
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 md:p-10 transition-all">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Login</h1>
            <p className="text-gray-500 dark:text-gray-400">Entre com suas credenciais para acessar</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Senha</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 cursor-pointer group">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary/20 cursor-pointer"
                />
                <span className="text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">Manter conectado</span>
              </label>
              <a href="#" className="text-brand-primary hover:text-brand-secondary font-medium transition-colors">
                Esqueci a senha
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-brand-primary hover:bg-brand-secondary text-white font-semibold rounded-xl shadow-lg hover:shadow-brand-primary/30 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Entrar
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Não tem uma conta?{' '}
              <button
                onClick={() => navigate('/register')}
                className="text-brand-primary hover:text-brand-secondary font-bold hover:underline transition-all"
              >
                Cadastre-se
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
