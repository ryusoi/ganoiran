
import React, { useState } from 'react';
import { X, Sun, Moon, Share2, Mail, ArrowRight, Instagram } from 'lucide-react';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

interface NavSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  setPage: (page: any) => void;
  toggleTheme: () => void;
  isDark: boolean;
  onShare: () => void;
}

const NavSidebar: React.FC<NavSidebarProps> = ({ isOpen, onClose, setPage, toggleTheme, isDark, onShare }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { t } = useLanguage();

  const links = [
    { label: t('nav_home'), page: 'home' },
    { label: t('nav_shop'), page: 'shop' },
    { label: t('nav_extract'), page: 'extract' },
    { label: t('nav_skincare'), page: 'skincare' },
    { label: t('nav_pets'), page: 'pets' },
    { label: t('nav_decor'), page: 'decor' },
    { label: t('nav_about'), page: 'about' },
    { label: t('nav_contact'), page: 'contact' },
  ];

  const handleLinkClick = (page: string) => {
    setPage(page);
    onClose();
  };

  const handleShareClick = () => {
    onShare();
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) setSubscribed(true);
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={onClose}
      />

      <div className={`fixed inset-y-0 left-0 z-[100] w-[85vw] md:w-[380px] bg-white dark:bg-[#0a0a0c] shadow-[0_0_50px_rgba(0,0,0,0.5)] transform transition-transform duration-500 cubic-bezier(0.22, 1, 0.36, 1) flex flex-col border-r border-neutral-200 dark:border-white/5 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        <div className="p-6 flex items-center justify-between border-b border-neutral-100 dark:border-white/5">
            <Logo className="h-12" textSize="text-xl" />
            <button 
                onClick={onClose} 
                className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors text-neutral-900 dark:text-white group"
            >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>
        </div>

        <div className="flex-1 overflow-y-auto py-8 px-8 flex flex-col gap-1 relative custom-scrollbar">
             <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.03] dark:opacity-[0.05] pointer-events-none grayscale">
                 <img src="https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/222.png" className="w-[300px]" alt="" />
             </div>

             {links.map((link, idx) => (
                <button 
                    key={idx}
                    onClick={() => handleLinkClick(link.page)}
                    className="group flex items-center justify-between py-3 border-b border-transparent hover:border-neutral-100 dark:hover:border-white/5 transition-all text-left"
                >
                    <span className="text-lg font-light tracking-wide text-neutral-500 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white transition-colors duration-300">
                        {link.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-emerald-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </button>
             ))}

             <button 
                onClick={handleShareClick}
                className="group flex items-center justify-between py-3 border-b border-transparent hover:border-neutral-100 dark:hover:border-white/5 transition-all text-left"
             >
                <span className="text-lg font-light tracking-wide text-neutral-500 group-hover:text-emerald-600 dark:text-neutral-400 dark:group-hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2">
                    {t('footer_share')} <Share2 className="w-4 h-4" />
                </span>
             </button>
        </div>

        <div className="p-6 bg-neutral-50 dark:bg-[#050505] border-t border-neutral-200 dark:border-white/5">
            <div className="mb-4">
               <LanguageSwitcher />
            </div>

            {!subscribed ? (
                <form onSubmit={handleSubscribe} className="relative mb-6 group">
                    <input 
                        type="email" 
                        placeholder="Join our newsletter" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent border-b border-neutral-300 dark:border-white/20 py-2 pr-10 text-xs text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 transition-colors"
                    />
                    <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-emerald-500 transition-colors">
                        <Mail className="w-4 h-4" />
                    </button>
                </form>
            ) : (
                <div className="mb-6 py-2 text-emerald-600 dark:text-emerald-400 text-xs font-medium flex items-center gap-2 animate-fade-in">
                    <span>✨ Subscribed successfully.</span>
                </div>
            )}

            <div className="flex items-center justify-between">
                <div className="flex gap-4">
                    <button onClick={toggleTheme} className="flex items-center gap-2 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        <span>{isDark ? 'Light' : 'Dark'}</span>
                    </button>
                </div>

                <div className="flex gap-3">
                    <a href="https://instagram.com" target="_blank" className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"><Instagram className="w-4 h-4"/></a>
                    <button onClick={handleShareClick} className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"><Share2 className="w-4 h-4" /></button>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default NavSidebar;
