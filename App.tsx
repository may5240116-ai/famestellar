
import React, { useState } from 'react';
import { translations } from './translations';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('KO');
  const t = translations[lang];

  const toggleLang = () => setLang(prev => prev === 'KO' ? 'EN' : 'KO');

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-green-800 tracking-tighter uppercase">famestellar.com</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors font-medium">{t.nav.home}</a>
              <a href="#vision" className="text-gray-700 hover:text-green-600 transition-colors font-medium">{t.nav.vision}</a>
              <a href="#solution" className="text-gray-700 hover:text-green-600 transition-colors font-medium">{t.nav.solution}</a>
              <a href="#business" className="text-gray-700 hover:text-green-600 transition-colors font-medium">{t.nav.business}</a>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={toggleLang}
                className="flex items-center gap-2 px-4 py-2 border-2 border-green-600 text-green-700 rounded-full hover:bg-green-600 hover:text-white transition-all font-bold text-sm shadow-sm"
              >
                <i className="fas fa-globe"></i>
                {lang === 'KO' ? 'EN' : 'KO'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <p className="text-green-400 font-semibold mb-4 tracking-widest uppercase text-sm">{t.hero.subtitle}</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">{t.hero.title}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-10">{t.hero.description}</p>
          <div className="flex gap-4">
            <a href="#vision" className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg">
              {t.hero.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section id="vision" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-green-600 pl-4">{t.intro.header}</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>{t.intro.p1}</p>
                <p>{t.intro.p2}</p>
                <p>{t.intro.p3}</p>
                <p className="font-semibold text-green-700 bg-green-50 p-4 rounded-lg border border-green-100">{t.intro.p4}</p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000" 
                alt="Value Platform Technology" 
                className="rounded-2xl shadow-2xl border-4 border-white"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl hidden md:block border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <i className="fas fa-chart-line text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Platform Domain</p>
                    <p className="text-xl font-bold text-green-800">famestellar.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solution Section */}
      <section id="solution" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-16 text-gray-900">{t.solution.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {t.challenges.items.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-green-300 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
                <p className="text-gray-800 font-bold">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-green-900 rounded-3xl p-10 md:p-16 text-white text-left relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-green-400 font-bold mb-4 uppercase tracking-widest text-sm">{t.solution.subtitle}</h3>
              <p className="text-2xl md:text-3xl font-bold mb-6">{t.solution.description}</p>
              <div className="h-1.5 w-20 bg-green-500 mb-8 rounded-full"></div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <i className="fas fa-microchip"></i>
                {t.solution.processTitle}
              </h4>
              <p className="text-gray-300 mb-0 leading-relaxed">{t.solution.processDesc}</p>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 transform skew-x-12 translate-x-1/2"></div>
          </div>
        </div>
      </section>

      {/* Business Analysis Section */}
      <section id="business" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.business.title}</h2>
            <div className="w-24 h-1.5 bg-green-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-600 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-6">
                <i className="fas fa-file-invoice-dollar text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{t.business.predictTitle}</h3>
              <p className="text-gray-600 leading-relaxed mb-8">{t.business.predictDesc}</p>
              <div className="space-y-4 pt-8 border-t border-gray-200">
                <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-gray-100">
                  <span className="text-gray-500 font-medium">5-Day NFT Min Value</span>
                  <span className="font-bold text-green-700 text-lg">₩166.6</span>
                </div>
                <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-gray-100">
                  <span className="text-gray-500 font-medium">30-Day NFT Min Value</span>
                  <span className="font-bold text-green-700 text-lg">₩1,000</span>
                </div>
              </div>
            </div>

            <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-600 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-6">
                <i className="fas fa-sync-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{t.business.cycleTitle}</h3>
              <p className="text-gray-600 leading-relaxed mb-8">{t.business.cycleDesc}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-gray-100">
                  <p className="text-xs text-gray-400 font-bold uppercase mb-2">Reward Ratio</p>
                  <p className="text-3xl font-black text-green-700">70%</p>
                </div>
                <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-gray-100">
                  <p className="text-xs text-gray-400 font-bold uppercase mb-2">Operation</p>
                  <p className="text-3xl font-black text-gray-900">25%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 tracking-tighter text-green-400">FAMESTELLAR.COM</h3>
              <p className="text-gray-400 font-medium">{t.footer.author}</p>
            </div>
            <div className="flex gap-8 text-2xl text-gray-400">
              <a href="#" className="hover:text-green-500 transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-green-500 transition-colors"><i className="fab fa-telegram"></i></a>
              <a href="#" className="hover:text-green-500 transition-colors"><i className="fab fa-discord"></i></a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm font-medium">
            <p>{t.footer.rights}</p>
          </div>
        </div>
      </footer>

      {/* Persistent CTA (Mobile only) */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full px-6">
        <button className="w-full bg-green-600 text-white font-bold py-4 rounded-2xl shadow-2xl flex items-center justify-center gap-2 border-2 border-green-500 active:scale-95 transition-transform">
          <i className="fas fa-rocket"></i>
          {t.hero.cta}
        </button>
      </div>
    </div>
  );
};

export default App;
