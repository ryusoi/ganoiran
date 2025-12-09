
import React, { useEffect, useState } from 'react';
import { Instagram, Wind, Sun, Clock, Brain, Eye, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ReishiDecorPage: React.FC = () => {
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
    <div className="min-h-screen bg-neutral-900 text-white font-sans overflow-hidden">
      
      {/* 1. PARALLAX HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 w-full h-[120%]"
          style={{ transform: `translateY(${offset * 0.5}px)` }}
        >
           <video 
              src="https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/Reishi%20Decor%202.mp4"
              className="w-full h-full object-cover opacity-80"
              autoPlay muted loop playsInline
           />
           <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-neutral-900"></div>
        </div>

        <div className="relative z-10 text-center px-6 animate-on-scroll fade-in mix-blend-screen">
           <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tighter mb-4 text-gold-chrome drop-shadow-2xl">
              {t('decor_title')}
           </h1>
           <p className="text-xl md:text-2xl font-light tracking-[0.3em] text-neutral-300 uppercase">
              {t('decor_sub')}
           </p>
        </div>
      </section>

      {/* 2. THE ARTISTIC PROCESS */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll slide-right">
               <div className="w-16 h-1 bg-gradient-to-r from-[#aa771c] to-transparent mb-8"></div>
               <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight whitespace-pre-line">
                  {t('decor_process')}
               </h2>
               <p className="text-neutral-400 text-lg leading-relaxed mb-6 font-light">
                  {t('decor_p1')}
               </p>
               <p className="text-neutral-400 text-lg leading-relaxed mb-8 font-light">
                  {t('decor_p2')}
               </p>
               
               <div className="flex gap-8 text-neutral-500">
                  <div className="flex flex-col items-center">
                     <Clock className="w-6 h-6 mb-2 text-[#aa771c]" />
                     <span className="text-xs uppercase tracking-widest">{t('decor_24m')}</span>
                  </div>
                  <div className="flex flex-col items-center">
                     <Sun className="w-6 h-6 mb-2 text-[#aa771c]" />
                     <span className="text-xs uppercase tracking-widest">{t('decor_light')}</span>
                  </div>
                  <div className="flex flex-col items-center">
                     <Wind className="w-6 h-6 mb-2 text-[#aa771c]" />
                     <span className="text-xs uppercase tracking-widest">{t('decor_air')}</span>
                  </div>
               </div>
            </div>

            <div className="relative h-[600px] w-full animate-on-scroll scale-in">
               <div className="absolute inset-0 border border-white/10 rounded-full overflow-hidden shadow-[0_0_50px_rgba(170,119,28,0.2)]">
                   <video 
                      src="https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/Reishi%20Decor%20Natural%20Sculpture.mp4"
                      className="w-full h-full object-cover opacity-60"
                      autoPlay muted loop playsInline
                   />
               </div>
            </div>
         </div>
      </section>

      {/* 3. NEUROAESTHETICS */}
      <section className="py-24 bg-black/50 border-y border-white/5">
         <div className="max-w-7xl mx-auto px-6 text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 whitespace-pre-line">{t('decor_neuro')}</h2>
         </div>

         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
             <div className="bg-[#1a1a1e] p-8 rounded-3xl border border-white/5 hover:border-[#aa771c]/30 transition-colors group">
                 <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#aa771c]/20 transition-colors">
                     <Eye className="w-6 h-6 text-white group-hover:text-[#aa771c]" />
                 </div>
                 <h3 className="text-xl font-serif text-white mb-3">{t('decor_visual')}</h3>
                 <p className="text-neutral-500 text-sm leading-relaxed">
                     {t('decor_visual_desc')}
                 </p>
             </div>
             <div className="bg-[#1a1a1e] p-8 rounded-3xl border border-white/5 hover:border-[#aa771c]/30 transition-colors group">
                 <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#aa771c]/20 transition-colors">
                     <Heart className="w-6 h-6 text-white group-hover:text-[#aa771c]" />
                 </div>
                 <h3 className="text-xl font-serif text-white mb-3">{t('decor_stress')}</h3>
                 <p className="text-neutral-500 text-sm leading-relaxed">
                     {t('decor_stress_desc')}
                 </p>
             </div>
             <div className="bg-[#1a1a1e] p-8 rounded-3xl border border-white/5 hover:border-[#aa771c]/30 transition-colors group">
                 <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#aa771c]/20 transition-colors">
                     <Brain className="w-6 h-6 text-white group-hover:text-[#aa771c]" />
                 </div>
                 <h3 className="text-xl font-serif text-white mb-3">{t('decor_micro')}</h3>
                 <p className="text-neutral-500 text-sm leading-relaxed">
                     {t('decor_micro_desc')}
                 </p>
             </div>
         </div>
      </section>

      {/* 4. JOIN COMMUNITY */}
      <section className="py-32 text-center px-6">
         <h2 className="text-4xl font-serif text-white mb-8">{t('decor_join')}</h2>
         <a 
           href="https://www.instagram.com/reishidecor" 
           target="_blank" 
           rel="noreferrer"
           className="group px-10 py-5 bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/10 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center gap-4 mx-auto shadow-2xl hover:shadow-[0_0_50px_rgba(225,48,108,0.4)] hover:scale-105 active:scale-95"
         >
             <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FFD600] via-[#FF0100] to-[#D800B9] flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Instagram className="w-5 h-5 text-white" />
             </div>
             <span className="text-lg tracking-widest group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#833AB4] group-hover:via-[#FD1D1D] group-hover:to-[#FCB045] transition-all">Reishi Decor</span>
         </a>
      </section>

    </div>
  );
};

export default ReishiDecorPage;
