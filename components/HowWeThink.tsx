"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HowWeThink() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out"
      }
    );
  }, []);

  return (
    <section className="py-[100px] px-[6%] bg-teal-dark border-t border-white/10" id="how">
      <div className="max-w-[1160px] mx-auto">
        <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-amber mb-4 block">How we operate</span>
        <h2 className="font-syne text-[clamp(32px,4vw,54px)] font-extrabold leading-[1.08] tracking-[-0.022em] mb-4">Built on four<br/>non-negotiables.</h2>
        
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[56px]"
        >
          {/* Item 1 */}
          <div className="relative group bg-teal-dark p-[40px_28px] rounded-[18px] border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] card">
            <div className="font-syne text-[42px] font-extrabold text-amber leading-none mb-[14px] opacity-85">01</div>
            <div className="font-syne text-[15px] font-bold mb-[10px] leading-[1.3]">Displace existing spend, don't ask for new budget</div>
            <p className="text-[13px] text-white/60 leading-[1.7] font-light">We identify what a business already pays for that doesn't work — and replace it. The customer gets more, pays the same or less, and our product earns its spot immediately.</p>
          </div>
          {/* Item 2 */}
          <div className="relative group bg-teal-dark p-[40px_28px] rounded-[18px] border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] card">
            <div className="font-syne text-[42px] font-extrabold text-amber leading-none mb-[14px] opacity-85">02</div>
            <div className="font-syne text-[15px] font-bold mb-[10px] leading-[1.3]">The interface is the product</div>
            <p className="text-[13px] text-white/60 leading-[1.7] font-light">We obsess over how companies and their customers interact — every touchpoint, every friction point. The software is just the vehicle. The interaction is what we're redesigning.</p>
          </div>

          {/* Item 3 */}
          <div className="relative group bg-teal-dark p-[40px_28px] rounded-[18px] border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] card">
            <div className="font-syne text-[42px] font-extrabold text-amber leading-none mb-[14px] opacity-85">03</div>
            <div className="font-syne text-[15px] font-bold mb-[10px] leading-[1.3]">India-native by default</div>
            <p className="text-[13px] text-white/60 leading-[1.7] font-light">WhatsApp-first. Tally-compatible. Rupee-denominated ROI. Designed for the way Indian businesses actually run — not a Western product localised as an afterthought.</p>
          </div>

          {/* Item 4 */}
          <div className="relative group bg-teal-dark p-[40px_28px] rounded-[18px] border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] card">
            <div className="font-syne text-[42px] font-extrabold text-amber leading-none mb-[14px] opacity-85">04</div>
            <div className="font-syne text-[15px] font-bold mb-[10px] leading-[1.3]">Founder in the field</div>
            <p className="text-[13px] text-white/60 leading-[1.7] font-light">No enterprise sales playbook. We sit with operators, learn the real workflow, and build what the actual pain demands. Direct feedback loop, zero layers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

<style jsx>{`
  .card {
    position: relative;
  }

  .card::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 18px;
    padding: 1px; /* border thickness */
    background: linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent);
    opacity: 0;
    transition: opacity 0.4s ease;
    -webkit-mask: 
      linear-gradient(#000 0 0) content-box, 
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
  }

  .card:hover::before {
    opacity: 1;
    animation: borderShine 1.2s linear infinite;
  }

  @keyframes borderShine {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
`}</style>