
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const SunflowerHero: React.FC = () => {
  const N = 420;
  const SIZE = 500;
  const DOT_R = 1.2;
  const MARGIN = 10;
  const CX = SIZE / 2;
  const CY = SIZE / 2;
  const MAX_R = CX - MARGIN - DOT_R;
  const GOLDEN = Math.PI * (3 - Math.sqrt(5));
  const DUR = 2.2;
  const { t } = useLanguage();

  const circles = Array.from({ length: N }).map((_, i) => {
    const frac = (i + 0.5) / N;
    const r = Math.sqrt(frac) * MAX_R;
    const theta = (i + 0.5) * GOLDEN;
    const x = CX + r * Math.cos(theta);
    const y = CY + r * Math.sin(theta);

    return (
      <circle
        key={i}
        cx={x}
        cy={y}
        r={DOT_R}
        fill="#fff"
        opacity="0.5"
      >
        <animate
          attributeName="r"
          values={`${DOT_R * 0.7};${DOT_R * 1.4};${DOT_R * 0.7}`}
          dur={`${DUR}s`}
          begin={`${frac * DUR}s`}
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.6 1;0.4 0 0.6 1"
        />
        <animate
          attributeName="opacity"
          values="0.33;1;0.33"
          dur={`${DUR}s`}
          begin={`${frac * DUR}s`}
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.6 1;0.4 0 0.6 1"
        />
      </circle>
    );
  });

  return (
    <div className="relative w-full h-[80vh] bg-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-60">
        <svg
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            className="w-full h-full max-w-[800px] max-h-[800px]"
            style={{ minWidth: '100%', minHeight: '100%', objectFit: 'cover' }}
        >
            <g>{circles}</g>
        </svg>
      </div>
      
      {/* Overlay Content */}
      <div className="relative z-10 text-center flex flex-col items-center">
         <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#ffd700] via-[#bf953f] to-[#aa771c] drop-shadow-[0_0_25px_rgba(255,215,0,0.5)] tracking-widest animate-pulse">
            {t('skin_hero_title')}
         </h1>
         <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#ffd700] to-transparent my-6"></div>
         <p className="text-neutral-400 uppercase tracking-[0.5em] text-sm md:text-base font-light">
            {t('skin_hero_sub')}
         </p>
      </div>
    </div>
  );
};

export default SunflowerHero;
