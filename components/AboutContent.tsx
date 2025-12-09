
import React, { useEffect, useState } from 'react';
import { FlaskConical, Dna, ShieldCheck } from 'lucide-react';
import ScienceBackground from './ScienceBackground';
import { useLanguage } from '../contexts/LanguageContext';

const AboutContent: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        setOffset(window.pageYOffset);
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#101014] text-white font-sans overflow-hidden">
      
      {/* 1. HERO SHADER BACKGROUND */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
         <ScienceBackground />
         <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
         <div className="relative z-10 text-center px-6 animate-on-scroll fade-in">
             <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-900/10 backdrop-blur-md mb-6">
                 <span className="text-blue-300 text-xs font-bold tracking-[0.2em] uppercase">{t('about_badge')}</span>
             </div>
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 drop-shadow-[0_0_30px_rgba(100,100,255,0.4)] mb-8 whitespace-pre-line">
                 {t('about_title')}
             </h1>
             <p className="text-xl text-blue-100/80 font-light max-w-2xl mx-auto leading-relaxed">
                 {t('about_sub')}
             </p>
         </div>
      </section>

      {/* 2. EXISTING CONTENT (Restyled) */}
      <div className="relative z-10 bg-[#101014] border-t border-white/5">
        <div className="prose prose-invert max-w-5xl mx-auto px-6 py-24 font-sans leading-relaxed text-center">
            
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-serif mb-6 text-white">{t('about_log_title')}</h2>
                <p className="text-xl text-emerald-400 font-light">{t('about_log_sub')}</p>
            </div>

            <div className="bg-[#1E1E26] p-8 md:p-12 rounded-3xl border border-white/10 mb-16 hover:border-emerald-500/30 transition-colors shadow-2xl">
                <h3 className="text-2xl font-serif text-white mb-4">{t('about_abstract')}</h3>
                <p className="text-gray-300 text-lg">
                {t('about_abstract_desc')}
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-20">
                <div className="flex flex-col items-center bg-emerald-950/20 p-8 rounded-3xl border border-emerald-500/20">
                <h3 className="text-xl font-bold text-emerald-400 mb-6 uppercase tracking-wider">{t('about_log_sys')}</h3>
                <ul className="space-y-4 text-gray-300 text-left inline-block w-full">
                    <li className="flex items-start gap-3"><span className="text-emerald-500 font-bold text-lg">✓</span> {t('about_log_1')}</li>
                    <li className="flex items-start gap-3"><span className="text-emerald-500 font-bold text-lg">✓</span> {t('about_log_2')}</li>
                    <li className="flex items-start gap-3"><span className="text-emerald-500 font-bold text-lg">✓</span> {t('about_log_3')}</li>
                    <li className="flex items-start gap-3"><span className="text-emerald-500 font-bold text-lg">✓</span> {t('about_log_4')}</li>
                </ul>
                </div>
                <div className="flex flex-col items-center bg-red-950/10 p-8 rounded-3xl border border-red-500/10 opacity-80">
                <h3 className="text-xl font-bold text-red-400 mb-6 uppercase tracking-wider">{t('about_saw_sys')}</h3>
                <ul className="space-y-4 text-gray-400 text-left inline-block w-full">
                    <li className="flex items-start gap-3"><span>•</span> {t('about_saw_1')}</li>
                    <li className="flex items-start gap-3"><span>•</span> {t('about_saw_2')}</li>
                    <li className="flex items-start gap-3"><span>•</span> {t('about_saw_3')}</li>
                    <li className="flex items-start gap-3"><span>•</span> {t('about_saw_4')}</li>
                </ul>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 text-left mb-20">
                <div>
                    <h2 className="text-3xl font-serif text-white mt-4 mb-6">{t('about_lignin_title')}</h2>
                    <p className="text-gray-300 leading-loose">
                        {t('about_lignin_desc')}
                    </p>
                </div>
                <div>
                    <h2 className="text-3xl font-serif text-white mt-4 mb-6">{t('about_energy_title')}</h2>
                    <p className="text-gray-300 leading-loose">
                        {t('about_energy_desc')}
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-center gap-3 mb-10">
                <FlaskConical className="w-8 h-8 text-emerald-400"/> 
                <h2 className="text-3xl font-serif text-white m-0">{t('about_mech')}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-20">
                <div className="bg-[#1E1E26] p-8 rounded-3xl border border-white/5 hover:bg-emerald-900/10 transition-colors">
                <h4 className="text-xl font-bold text-emerald-400 mb-4 flex items-center justify-center gap-2"><Dna className="w-5 h-5"/> {t('about_triterpenes')}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {t('about_triterpenes_desc')}
                </p>
                </div>
                <div className="bg-[#1E1E26] p-8 rounded-3xl border border-white/5 hover:bg-emerald-900/10 transition-colors">
                <h4 className="text-xl font-bold text-emerald-400 mb-4 flex items-center justify-center gap-2"><ShieldCheck className="w-5 h-5"/> {t('about_beta')}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {t('about_beta_desc')}
                </p>
                </div>
            </div>

            <div className="p-10 bg-gradient-to-br from-emerald-900/40 to-black border border-emerald-500/20 rounded-3xl text-center shadow-2xl">
                <h3 className="text-2xl font-serif text-white mb-4">{t('about_commit')}</h3>
                <p className="text-emerald-100 text-lg font-light max-w-2xl mx-auto">
                {t('about_commit_desc')}
                </p>
            </div>
        </div>
      </div>

      {/* 3. NEW SECTION: ANTLER CULTIVATION METHOD */}
      <section className="relative w-full min-h-screen bg-black flex items-center justify-center py-24 border-t border-white/10 overflow-hidden">
           {/* Video Background */}
           <div className="absolute inset-0 flex items-center justify-center">
               <video 
                   src="https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/GROW%20ROOM.mp4"
                   className="w-full h-full object-contain"
                   autoPlay muted loop playsInline
               />
               <div className="absolute inset-0 bg-black/70"></div>
           </div>

           <div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-on-scroll fade-in">
                <div className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-900/20 backdrop-blur-md mb-6">
                    <span className="text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase">{t('about_antler_badge')}</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] leading-tight text-chrome whitespace-pre-line">
                    {t('about_antler_title')}
                </h2>

                <div className="bg-[#101014]/60 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl text-left">
                    <p className="text-lg text-gray-200 leading-loose font-light mb-6">
                        {t('about_antler_p1')}
                    </p>
                    <p className="text-lg text-gray-200 leading-loose font-light">
                        {t('about_antler_p2')}
                    </p>
                </div>
           </div>
      </section>

      {/* 4. PARALLAX VIDEO FOOTER */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center border-t border-white/10">
            {/* Parallax Container */}
            <div 
                className="absolute inset-0 w-full h-[120%]"
                style={{ 
                    // Calculate parallax: start translating up as user scrolls down
                    transform: `translateY(${Math.max(-100, (offset * 0.08) - 150)}px)` 
                }}
            >
                <video 
                    src="https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/MYCOLOGY%20SCIENCE1.mp4"
                    className="w-full h-full object-cover opacity-60"
                    autoPlay muted loop playsInline
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 text-center max-w-4xl px-6">
                <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-2xl">
                    {t('about_evo')}
                </h2>
                <p className="text-2xl text-neutral-200 font-light mb-8">
                    {t('about_fungi')}
                </p>
                <button className="px-8 py-4 border border-white/30 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm">
                    {t('about_papers')}
                </button>
            </div>
      </section>

    </div>
  );
};

export default AboutContent;
