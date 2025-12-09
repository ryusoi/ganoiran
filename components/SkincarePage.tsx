
import React from 'react';
import SunflowerHero from './SunflowerHero';
import { Sparkles, Activity, ShieldCheck, Sun, Moon, Droplets, Zap, Flame } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { STORAGE_URL, formatPrice } from '../data';

const SkincarePage: React.FC<{ addToCart: (product: any) => void }> = ({ addToCart }) => {
  const { t } = useLanguage();
  
  const ganoLuna = {
      id: 'c3d4e5f6-a7b8-49ca-93d2-3456789012cd',
      name: t('prod_luna_name'),
      price_rials: '8700000',
      image_url: 'media/gano_luna_night.png',
      active: true,
      category: 'skincare'
  };

  const ganoSol = {
      id: 'd4e5f6a7-b8c9-4adb-94e3-4567890123de',
      name: t('prod_sol_name'),
      price_rials: '7500000',
      image_url: 'media/gano_sol_day_gel.png',
      active: true,
      category: 'skincare'
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 font-sans transition-colors duration-500">
      
      {/* Hero Section */}
      <SunflowerHero />

      {/* Intro Philosophy */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
          <div className="animate-on-scroll fade-in">
             <span className="text-emerald-500 font-medium tracking-widest uppercase text-xs mb-4 block">{t('skin_bio_badge')}</span>
             <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 dark:text-white mb-8 leading-tight whitespace-pre-line">
                {t('skin_bio_title')}
             </h2>
             <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                {t('skin_bio_desc')}
             </p>
          </div>
      </section>

      {/* Scientific Icons Grid */}
      <section className="bg-neutral-50 dark:bg-neutral-800/50 py-20 border-y border-neutral-100 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
             <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-neutral-800 shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <Activity className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="font-serif font-bold text-neutral-900 dark:text-white mb-2">{t('skin_col')}</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">{t('skin_col_sub')}</p>
             </div>
             <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-neutral-800 shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <ShieldCheck className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="font-serif font-bold text-neutral-900 dark:text-white mb-2">{t('skin_derma')}</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">{t('skin_derma_sub')}</p>
             </div>
             <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-neutral-800 shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <Flame className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="font-serif font-bold text-neutral-900 dark:text-white mb-2">{t('skin_burn')}</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">{t('skin_burn_sub')}</p>
             </div>
             <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-neutral-800 shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <Sparkles className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="font-serif font-bold text-neutral-900 dark:text-white mb-2">{t('skin_cell')}</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">{t('skin_cell_sub')}</p>
             </div>
          </div>
      </section>

      {/* Product Showcase: Gano Luna */}
      <section className="py-24 max-w-7xl mx-auto px-6">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square lg:aspect-[4/5] group">
               <video 
                  src="https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/Gano%20Luna.mp4" 
                  className="w-full h-full object-cover"
                  autoPlay muted loop playsInline
               />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="flex flex-col justify-center">
               <div className="flex items-center gap-2 mb-4">
                  <Moon className="w-5 h-5 text-indigo-400" />
                  <span className="text-sm font-bold tracking-widest uppercase text-indigo-400">{t('skin_luna_badge')}</span>
               </div>
               <h2 className="text-5xl font-serif text-neutral-900 dark:text-white mb-6">{t('prod_luna_name')}</h2>
               <h3 className="text-xl text-neutral-500 mb-8 font-light">{t('skin_luna_sub')}</h3>
               
               <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8">
                  {t('prod_luna_long')}
               </p>

               <div className="p-6 bg-neutral-50 dark:bg-white/5 rounded-2xl border border-neutral-200 dark:border-white/10 mb-8">
                  <h4 className="font-bold text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
                     <Zap className="w-4 h-4 text-amber-400" /> {t('skin_potency')}
                  </h4>
                  <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-2">
                     <li>• {t('prod_luna_ben1')}</li>
                     <li>• {t('prod_luna_ben2')}</li>
                     <li>• {t('prod_luna_ben3')}</li>
                  </ul>
               </div>

               <div className="flex items-center justify-between">
                  <span className="text-3xl font-serif text-neutral-900 dark:text-white">{formatPrice(ganoLuna.price_rials)} {t('currency')}</span>
                  <button 
                     onClick={() => addToCart(ganoLuna)}
                     className="px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
                  >
                     {t('feat_add')}
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* Product Showcase: Gano Sol */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-neutral-100 dark:border-white/5">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 flex flex-col justify-center">
               <div className="flex items-center gap-2 mb-4">
                  <Sun className="w-5 h-5 text-amber-500" />
                  <span className="text-sm font-bold tracking-widest uppercase text-amber-500">{t('skin_sol_badge')}</span>
               </div>
               <h2 className="text-5xl font-serif text-neutral-900 dark:text-white mb-6">{t('prod_sol_name')}</h2>
               <h3 className="text-xl text-neutral-500 mb-8 font-light">{t('skin_sol_sub')}</h3>
               
               <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8">
                  {t('prod_sol_long')}
               </p>

               <div className="p-6 bg-neutral-50 dark:bg-white/5 rounded-2xl border border-neutral-200 dark:border-white/10 mb-8">
                  <h4 className="font-bold text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
                     <Droplets className="w-4 h-4 text-blue-400" /> {t('skin_healing')}
                  </h4>
                  <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-2">
                     <li>• {t('prod_sol_ben1')}</li>
                     <li>• {t('prod_sol_ben2')}</li>
                     <li>• {t('prod_sol_ben3')}</li>
                  </ul>
               </div>

               <div className="flex items-center justify-between">
                  <span className="text-3xl font-serif text-neutral-900 dark:text-white">{formatPrice(ganoSol.price_rials)} {t('currency')}</span>
                  <button 
                     onClick={() => addToCart(ganoSol)}
                     className="px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
                  >
                     {t('feat_add')}
                  </button>
               </div>
            </div>
            <div className="order-1 lg:order-2 relative rounded-3xl overflow-hidden shadow-2xl aspect-square lg:aspect-[4/5] group">
               <video 
                  src="https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/Gano%20Sol.mp4" 
                  className="w-full h-full object-cover"
                  autoPlay muted loop playsInline
               />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default SkincarePage;
