
import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CultivationVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const { t } = useLanguage();

  // Robust toggle logic to handle "The play() request was interrupted by a call to pause()" error
  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setHasStarted(true);
            // State update is handled by the 'play' event listener
          })
          .catch(error => {
            // Auto-play was prevented or interrupted.
            // This catches the specific "interrupted by pause" error.
            console.log("Playback interrupted/prevented:", error);
          });
      }
    } else {
      video.pause();
      // State update is handled by the 'pause' event listener
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Sync state with actual video events
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force aggressive preloading
    video.preload = "auto";

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    
    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    
    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
    };
  }, []);

  return (
    <section className="py-12 md:py-24 bg-neutral-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 animate-on-scroll fade-in">
           <span className="text-emerald-500 font-mono text-xs tracking-widest uppercase mb-2 block">{t('cult_farm')}</span>
           <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">{t('cult_title')}</h2>
           <p className="text-neutral-400 max-w-2xl mx-auto font-light">
             {t('cult_desc')}
           </p>
        </div>

        {/* Video Container - Larger on mobile (60vh), uncropped content (object-contain) */}
        <div 
          className="relative w-full h-[60vh] md:h-auto md:aspect-[21/9] bg-black rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group cursor-pointer"
          onClick={(e) => togglePlay(e)}
        >
          <video
            ref={videoRef}
            src="https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/Gano%20Shakh%20Cult..mp4"
            className="w-full h-full object-contain bg-black"
            playsInline
            loop
            preload="auto"
          />

          {/* Dark Gradient Overlay (Only when not playing or paused initially) */}
          <div className={`absolute inset-0 bg-black/60 transition-opacity duration-700 flex flex-col items-center justify-center text-center p-8 ${hasStarted && isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
             
             {/* Initial Call to Action Content */}
             {!hasStarted && (
                <div className="transform transition-transform duration-700 hover:scale-105">
                   <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-emerald-500/30 bg-emerald-900/20 backdrop-blur-md mb-6 animate-[pulse_3s_infinite]">
                      <Sparkles className="w-3 h-3 text-emerald-400" />
                      <span className="text-[10px] uppercase tracking-widest text-emerald-300 font-bold">{t('cult_anime')}</span>
                   </div>
                   
                   {/* Dynamic Shining Title */}
                   <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500 mb-6 drop-shadow-2xl tracking-tight text-chrome">
                      {t('cult_log')}
                   </h3>
                   
                   <p className="text-neutral-300 max-w-lg mx-auto text-sm md:text-base leading-relaxed font-light mb-8">
                      {t('cult_log_desc')}
                   </p>

                   <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-emerald-600 group-hover:border-emerald-500 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] mx-auto">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                   </div>
                </div>
             )}

             {/* Re-show Play Button if Paused after starting */}
             {hasStarted && !isPlaying && (
                 <div className="w-20 h-20 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-emerald-600 transition-all">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                 </div>
             )}
          </div>

          {/* Controls Bar (Always visible but unobtrusive) */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent">
             <div className="flex gap-4">
                 <button 
                    onClick={togglePlay}
                    className="p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors text-white"
                 >
                    {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                 </button>
             </div>
             
             <button 
                onClick={toggleMute}
                className="p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors text-white"
             >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
             </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CultivationVideo;
