// components/HowWeThink.tsx
export default function HowWeThink() {
return (
  <section className="py-[100px] px-[6%] bg-teal-dark border-t border-white/10" id="how">
    <div className="max-w-[1160px] mx-auto">
      <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-amber mb-4 block">How we operate</span>
      <h2 className="font-syne text-[clamp(32px,4vw,54px)] font-extrabold leading-[1.08] tracking-[-0.022em] mb-4">Built on four<br/>non-negotiables.</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-white/10 rounded-[18px] overflow-hidden mt-[56px]">
        {/* Item 1 */}
        <div className="bg-teal-dark p-[40px_28px] transition-colors hover:bg-teal/50">
          <div className="font-syne text-[42px] font-extrabold text-amber leading-none mb-[14px] opacity-85">01</div>
          <div className="font-syne text-[15px] font-bold mb-[10px] leading-[1.3]">Displace existing spend, don't ask for new budget</div>
          <p className="text-[13px] text-white/60 leading-[1.7] font-light">We identify what a business already pays for that doesn't work — and replace it. The customer gets more, pays the same or less, and our product earns its spot immediately.</p>
        </div>
        {/* Replicate for items 02, 03, 04 using the exact same wrapper div classes */}
      </div>
    </div>
  </section>
);
}