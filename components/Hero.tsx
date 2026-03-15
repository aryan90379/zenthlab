// components/Hero.tsx
'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Staggered fade-up animation replacing your CSS @keyframes
    gsap.from('.hero-anim', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.2
    });

    // Float animation for the right card
    gsap.to('.hero-card-float', {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, { scope: container });

 return (
    <section className="min-h-screen flex items-center pt-[120px] pb-[80px] px-[6%] relative overflow-hidden" ref={container}>
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_60%_at_65%_45%,rgba(13,92,74,0.45)_0%,transparent_70%),radial-gradient(ellipse_35%_40%_at_15%_75%,rgba(232,160,32,0.07)_0%,transparent_60%)]"></div>
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="relative z-10 max-w-[700px]">
        <div className="hero-anim inline-flex items-center gap-[8px] bg-[#E8A020]/10 border border-[#E8A020]/30 text-amber-light text-[11px] font-medium tracking-[0.1em] uppercase px-[14px] py-[6px] rounded-full mb-[36px]">
          <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse"></span>
          Redefining Business-to-Customer Interaction
        </div>
        
        <h1 className="hero-anim font-syne text-[clamp(50px,6.5vw,88px)] font-extrabold leading-[1.02] tracking-[-0.025em] mb-[28px]">
          The layer between<br />
          companies <span className="[-webkit-text-stroke:1.5px_rgba(255,255,255,0.35)] text-transparent">and</span><br />
          <span className="text-amber">their world.</span>
        </h1>
        
        <p className="hero-anim text-[17px] font-light text-white/60 leading-[1.75] max-w-[560px] mb-[52px]">
          Zenthlab builds AI-native products that <strong className="text-white/85 font-normal">replace broken spend</strong> with measurable outcomes. We change how businesses engage patients, customers, partners, and supply chains — permanently.
        </p>
        
        <div className="hero-anim flex items-center gap-[18px] flex-wrap">
          <a href="#products" className="inline-flex items-center gap-[10px] bg-amber text-teal-deeper px-[30px] py-[14px] rounded-lg font-medium text-[15px] transition-all hover:bg-amber-light hover:-translate-y-[2px]">
            See our products
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#about" className="inline-flex items-center gap-[10px] bg-transparent text-white px-[30px] py-[14px] rounded-lg font-normal text-[15px] border border-white/14 transition-all hover:bg-white/5 hover:border-white/30">
            Our thesis
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7l6 6 6-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>

      <div className="hero-anim hidden lg:block absolute right-[6%] top-1/2 -translate-y-1/2 w-[360px]">
        <div className="hero-card-float bg-teal-dark/70 border border-white/14 rounded-[18px] p-[28px] backdrop-blur-md">
          <div className="font-syne text-[11px] font-bold tracking-[0.12em] uppercase text-amber mb-[20px]">Zenthlab at a glance</div>
          
          <div className="flex justify-between mb-[24px] pb-[20px] border-b border-white/10">
            <div className="text-center">
              <span className="font-syne text-[30px] font-extrabold text-white block leading-none">2</span>
              <span className="text-[10px] text-white/60 uppercase tracking-[0.07em] mt-[5px] block">Verticals</span>
            </div>
            <div className="text-center">
              <span className="font-syne text-[30px] font-extrabold text-white block leading-none">AI</span>
              <span className="text-[10px] text-white/60 uppercase tracking-[0.07em] mt-[5px] block">Native</span>
            </div>
            <div className="text-center">
              <span className="font-syne text-[30px] font-extrabold text-white block leading-none">₹0</span>
              <span className="text-[10px] text-white/60 uppercase tracking-[0.07em] mt-[5px] block">Wasted</span>
            </div>
          </div>
          
          <div className="mb-[13px]">
            <div className="flex justify-between text-[12px] mb-[6px] text-white/60">
              <span>DentFlow — Healthcare</span>
              <span className="text-[#5DCAA5]">Live</span>
            </div>
            <div className="h-[3px] bg-white/10 rounded-sm overflow-hidden">
              <div className="h-full rounded-sm bg-amber w-full"></div>
            </div>
          </div>
          
          <div className="mt-[4px]">
            <div className="flex justify-between text-[12px] mb-[6px] text-white/60">
              <span>SupplyIQ — Import/Export</span>
              <span className="text-amber-light">Building</span>
            </div>
            <div className="h-[3px] bg-white/10 rounded-sm overflow-hidden">
              <div className="h-full rounded-sm bg-[#E8A020]/45 w-[55%]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}