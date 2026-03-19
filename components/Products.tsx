// components/Products.tsx
'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';



export default function Products() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.product-card') as HTMLElement[];
    
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate tilt
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        gsap.to(card, {
          rotateX,
          rotateY,
          transformPerspective: 1000,
          ease: 'power2.out',
          duration: 0.4
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          ease: 'elastic.out(1, 0.3)',
          duration: 1.2
        });
      });
    });
  }, { scope: container });

 return (
  <section className="py-[100px] px-[6%] bg-teal-deeper" id="products" ref={container}>
    <div className="max-w-[1160px] mx-auto">
      <div className="flex flex-wrap justify-between items-end mb-[56px] gap-6">
        <div>
          <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-amber mb-4 block">Our products</span>
          <h2 className="font-syne text-[clamp(32px,4vw,54px)] font-extrabold leading-[1.08] tracking-[-0.022em] mb-0">Two verticals.<br/>One mission.</h2>
        </div>
        <p className="text-[15px] text-white/60 max-w-[340px] font-light leading-[1.7]">Replacing the broken interface between businesses and the people they serve — intelligently, measurably.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* DentFlow Card */}
        <div className="product-card bg-teal-dark border border-amber/20 rounded-[22px] p-[40px] relative overflow-hidden transition-all duration-300 hover:-translate-y-1 group">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-amber to-amber-light origin-left transform scale-x-100 transition-transform duration-300"></div>
          <span className="inline-flex items-center gap-[6px] text-[10px] font-semibold tracking-[0.1em] uppercase px-3 py-1 rounded-full mb-[28px] bg-[#1D9E75]/15 text-[#5DCAA5]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5DCAA5] animate-pulse"></span> Live now
          </span>
          {/* Card Content... */}
          <div className="w-[54px] h-[54px] rounded-[14px] bg-amber/10 flex items-center justify-center mb-[22px]"></div> {/* Insert SVG */}
          <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-amber mb-2">Healthcare · Medical</div>
          <div className="font-syne text-[28px] font-extrabold mb-[14px] tracking-[-0.01em]">DentFlow</div>
          <p className="text-[15px] font-normal text-white/85 leading-[1.5] mb-4">AI-powered patient engagement and growth for the medical sector.</p>
          <p className="text-[14px] text-white/60 leading-[1.75] font-light mb-[32px]">Starting with dental — expanding across the full medical ecosystem...</p>
          
          <div className="grid grid-cols-2 gap-3 mb-[32px]">
            <div className="bg-white/5 border border-white/10 rounded-[10px] p-[14px_16px]">
              <div className="text-[12px] font-medium mb-1 text-white/85">Patient Reactivation</div>
              <div className="text-[11px] text-white/60 leading-[1.5]">Dormant patients back in chair via automated WhatsApp flows</div>
            </div>
            {/* Add other pillars here... */}
          </div>
          <a href="#contact" className="inline-flex items-center gap-[9px] text-[13px] font-medium text-amber-light border-b border-transparent hover:border-amber-light transition-colors pb-[1px]">Book a demo</a>
        </div>

        {/* SupplyIQ Card structure goes here using the exact same Tailwind classes as above, just changing the tag color to bg-amber/10 text-amber-light */}
      </div>
    </div>
  </section>
);
}