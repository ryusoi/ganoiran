
import React, { useState, useEffect } from 'react';
import { 
    Instagram, Phone, Mail, MapPin, Send, MessageCircle, 
    Factory, Building2, CheckCircle2, ArrowRight 
} from 'lucide-react';
import { db } from '../lib/firebase';
import { ref, push } from 'firebase/database';
import GeometricBackground from './GeometricBackground';
import { useLanguage } from '../contexts/LanguageContext';

const ContactPage: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', query: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
        requestAnimationFrame(() => setOffset(window.pageYOffset));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!formData.name || !formData.query) return;

      setStatus('sending');

      try {
          const contactsRef = ref(db, 'contact_messages');
          await push(contactsRef, {
              ...formData,
              timestamp: new Date().toISOString(),
              status: 'new'
          });

          setTimeout(() => {
              setStatus('success');
              setFormData({ name: '', email: '', query: '' });
              setTimeout(() => setStatus('idle'), 5000);
          }, 1500);
      } catch (error) {
          console.error("Error submitting form:", error);
          setStatus('idle');
          alert("Connection error. Please try again.");
      }
  };

  return (
    <div className="min-h-screen bg-neutral-900 font-sans text-white overflow-x-hidden">
        
        {/* 1. PARALLAX VIDEO HEADER */}
        <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
            <div 
                className="absolute inset-0 w-full h-[120%]"
                style={{ transform: `translateY(${offset * 0.5}px)` }}
            >
                <video 
                    src="https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/INFOCONTACTS.mp4"
                    className="w-full h-full object-cover opacity-70"
                    autoPlay muted loop playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-neutral-900"></div>
            </div>

            <div className="relative z-10 text-center px-6 animate-on-scroll fade-in">
                <span className="inline-block px-3 py-1 mb-4 rounded-full border border-emerald-500/50 bg-emerald-900/30 text-emerald-400 text-xs font-bold tracking-widest uppercase backdrop-blur-md">
                    {t('contact_support')}
                </span>
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
                    {t('contact_title')}
                </h1>
                <p className="text-xl text-neutral-200 font-light max-w-2xl mx-auto">
                    {t('contact_desc')}
                </p>
            </div>
        </section>

        {/* 2. INSTAGRAM HIGHLIGHT */}
        <section className="relative z-20 -mt-10 px-6 max-w-lg mx-auto mb-20">
            <a 
                href="https://instagram.com/ganoshakh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-2xl shadow-[0_10px_40px_rgba(219,39,119,0.4)] hover:shadow-[0_15px_60px_rgba(219,39,119,0.6)] transform hover:-translate-y-1 transition-all duration-300 border border-white/20"
            >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-pink-600 shadow-inner">
                        <Instagram className="w-7 h-7" />
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-lg">@ganoshakh</h3>
                        <p className="text-pink-100 text-xs font-medium">5K+ Followers • Official Community</p>
                    </div>
                </div>
                <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
                    <ArrowRight className="w-5 h-5 text-white" />
                </div>
            </a>
        </section>

        {/* 3. CONTACT GRID */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Mrs. Parvin - WhatsApp */}
                <a 
                    href="https://wa.me/989196214129" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group bg-neutral-800/50 p-6 rounded-3xl border border-white/5 hover:bg-[#25D366]/10 hover:border-[#25D366]/50 transition-all duration-300 cursor-pointer"
                >
                    <div className="w-14 h-14 rounded-2xl bg-[#25D366]/20 flex items-center justify-center text-[#25D366] mb-4 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(37,211,102,0.2)]">
                        <MessageCircle className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-serif text-white mb-1 group-hover:text-[#25D366] transition-colors">{t('contact_mrs')}</h3>
                    <p className="text-xs text-neutral-400 uppercase tracking-widest mb-3">{t('contact_sales')}</p>
                    <p className="text-sm font-mono text-neutral-300">+98 919 621 4129</p>
                </a>

                {/* Email */}
                <a 
                    href="mailto:ganoshakh@gmail.com"
                    className="group bg-neutral-800/50 p-6 rounded-3xl border border-white/5 hover:bg-red-500/10 hover:border-red-500/50 transition-all duration-300 cursor-pointer"
                >
                    <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                        <Mail className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-serif text-white mb-1 group-hover:text-red-500 transition-colors">{t('contact_email_title')}</h3>
                    <p className="text-xs text-neutral-400 uppercase tracking-widest mb-3">24/7 Response</p>
                    <p className="text-sm font-mono text-neutral-300">ganoshakh@gmail.com</p>
                </a>

                {/* Telephone */}
                <a 
                    href="tel:0218869879"
                    className="group bg-neutral-800/50 p-6 rounded-3xl border border-white/5 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                >
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                        <Phone className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-serif text-white mb-1 group-hover:text-blue-500 transition-colors">{t('contact_head')}</h3>
                    <p className="text-xs text-neutral-400 uppercase tracking-widest mb-3">{t('contact_direct')}</p>
                    <p className="text-sm font-mono text-neutral-300">021-886-9879</p>
                </a>

                {/* Telegram */}
                <a 
                    href="https://t.me/+S5-f03cnK2hkZGU0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group bg-neutral-800/50 p-6 rounded-3xl border border-white/5 hover:bg-[#0088cc]/10 hover:border-[#0088cc]/50 transition-all duration-300 cursor-pointer"
                >
                    <div className="w-14 h-14 rounded-2xl bg-[#0088cc]/20 flex items-center justify-center text-[#0088cc] mb-4 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,136,204,0.2)]">
                        <Send className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-serif text-white mb-1 group-hover:text-[#0088cc] transition-colors">{t('contact_clinique')}</h3>
                    <p className="text-xs text-neutral-400 uppercase tracking-widest mb-3">{t('contact_channel')}</p>
                    <p className="text-sm font-mono text-neutral-300">Join Community</p>
                </a>
            </div>
        </section>

        {/* MRS. SHAMILA ASEFI SECTION (Compact & Moved Down) */}
        <section className="relative z-20 px-6 max-w-xl mx-auto mb-24 animate-on-scroll fade-in">
            <div className="relative rounded-2xl overflow-hidden border border-pink-500/20 bg-[#121215] shadow-lg group hover:border-pink-500/40 transition-all duration-500">
                {/* Subtle Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-600/10 blur-[50px] rounded-full pointer-events-none"></div>
                
                <div className="p-5 flex items-center gap-5 relative z-10">
                    {/* Compact Visual Icon */}
                    <div className="relative w-16 h-16 flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-full animate-pulse opacity-50 blur-sm"></div>
                        <div className="relative w-full h-full bg-black rounded-full border border-white/10 flex items-center justify-center overflow-hidden">
                             <Instagram className="w-7 h-7 text-white" />
                        </div>
                    </div>

                    {/* Compact Text Content */}
                    <div className="flex-1">
                        <h3 className="text-lg font-serif text-white mb-0.5">{t('contact_shamila_name')}</h3>
                        <p className="text-pink-400 text-[10px] font-bold uppercase tracking-widest mb-2">{t('contact_shamila_role')}</p>
                        <p className="text-neutral-400 text-xs leading-relaxed font-light line-clamp-2 mb-3">
                            {t('contact_shamila_desc')}
                        </p>
                        
                        <a 
                            href="https://www.instagram.com/shamila_asefi" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-[10px] uppercase tracking-wide hover:shadow-[0_0_15px_rgba(219,39,119,0.4)] transition-all transform hover:-translate-y-0.5 text-white"
                        >
                            <Instagram className="w-3 h-3" />
                            {t('contact_shamila_btn')}
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* 4. ADDRESSES & FORM DASHBOARD */}
        <section className="max-w-7xl mx-auto px-6 mb-24 grid lg:grid-cols-2 gap-12">
            
            {/* Left: Addresses */}
            <div className="space-y-6">
                <div className="bg-[#1a1a1e] p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Building2 className="w-24 h-24 text-white" />
                    </div>
                    <h3 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                        <MapPin className="w-6 h-6 text-emerald-500" /> {t('contact_head_addr')}
                    </h3>
                    <address className="not-italic text-neutral-400 leading-loose whitespace-pre-line">
                        {t('contact_addr_tehran')} <span className="text-emerald-500 font-bold">#24</span>
                    </address>
                </div>

                <div className="bg-[#1a1a1e] p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Factory className="w-24 h-24 text-white" />
                    </div>
                    <h3 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                        <MapPin className="w-6 h-6 text-amber-500" /> {t('contact_factory')}
                    </h3>
                    <address className="not-italic text-neutral-400 leading-loose whitespace-pre-line">
                        {t('contact_addr_mazandaran')} <span className="text-amber-500 font-bold">#51</span>
                    </address>
                </div>
            </div>

            {/* Right: Direct Message Dashboard */}
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                <h3 className="text-3xl font-serif text-white mb-2">{t('contact_dm')}</h3>
                <p className="text-neutral-400 mb-8 text-sm">
                    {t('contact_send_desc')}
                </p>

                {status === 'success' ? (
                    <div className="h-full flex flex-col items-center justify-center py-12 animate-fade-in text-center">
                        <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                        </div>
                        <h4 className="text-2xl font-serif text-white mb-2">{t('contact_success')}</h4>
                        <p className="text-neutral-400 max-w-xs">
                            {t('contact_sent_msg')}
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">{t('contact_name')}</label>
                            <input 
                                type="text" 
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full bg-[#111] border border-neutral-700 rounded-xl p-4 text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors"
                                placeholder={t('contact_name')}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">{t('contact_email')}</label>
                            <input 
                                type="email"
                                required 
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="w-full bg-[#111] border border-neutral-700 rounded-xl p-4 text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors"
                                placeholder={t('login_placeholder')}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">{t('contact_query')}</label>
                            <textarea 
                                required
                                rows={4}
                                value={formData.query}
                                onChange={(e) => setFormData({...formData, query: e.target.value})}
                                className="w-full bg-[#111] border border-neutral-700 rounded-xl p-4 text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                                placeholder={t('contact_query')}
                            />
                        </div>

                        <button 
                            type="submit" 
                            disabled={status === 'sending'}
                            className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {status === 'sending' ? 'Sending...' : (
                                <>{t('contact_submit')} <Send className="w-4 h-4" /></>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </section>

        {/* 5. GEOMETRIC FOOTER BACKGROUND */}
        <section className="relative w-full h-screen border-t border-white/5">
            <GeometricBackground />
        </section>

    </div>
  );
};

export default ContactPage;
