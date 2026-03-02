import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowLeft, Activity, CheckCircle } from 'lucide-react';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration logic
    console.log('Register attempt', formData);
    navigate('/login');
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
          <h2 className="text-4xl font-bold mb-6">Junte-se ao CIAL</h2>
          <p className="text-lg text-brand-lighter max-w-md mx-auto">
            Cadastre-se para começar a otimizar a linha de montagem e ter acesso a todas as funcionalidades do sistema.
          </p>
          
          <div className="mt-12 space-y-4 text-left max-w-sm mx-auto">
            <div className="flex items-center space-x-3 text-brand-lighter/90">
              <CheckCircle className="w-5 h-5 text-brand-accent" />
              <span>Acesso completo ao painel</span>
            </div>
            <div className="flex items-center space-x-3 text-brand-lighter/90">
              <CheckCircle className="w-5 h-5 text-brand-accent" />
              <span>Relatórios detalhados</span>
            </div>
            <div className="flex items-center space-x-3 text-brand-lighter/90">
              <CheckCircle className="w-5 h-5 text-brand-accent" />
              <span>Suporte prioritário</span>
            </div>
          </div>
        </div>
        {/* Decorative circles */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl" />
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative overflow-y-auto">
        <button 
          onClick={() => navigate('/')}
          className="absolute top-8 left-8 text-gray-500 hover:text-brand-primary dark:text-gray-400 dark:hover:text-brand-accent transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar
        </button>

        {/* Form Box */}
        <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 md:p-10 transition-all my-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Crie sua conta</h1>
            <p className="text-gray-500 dark:text-gray-400">Preencha os dados abaixo para começar</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Nome</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
                  </div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                    placeholder="João"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Último Nome</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                    placeholder="Silva"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Confirmação de Senha</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
                </div>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-brand-primary hover:bg-brand-secondary text-white font-semibold rounded-xl shadow-lg hover:shadow-brand-primary/30 transform hover:-translate-y-0.5 transition-all duration-200 mt-2"
            >
              Realizar Cadastro
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Já tem uma conta?{' '}
              <button
                onClick={() => navigate('/login')}
                className="text-brand-primary hover:text-brand-secondary font-bold hover:underline transition-all"
              >
                Fazer login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
