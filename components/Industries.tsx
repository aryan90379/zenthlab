// components/Industries.tsx
'use client';

import { useState } from 'react';

export default function Industries() {
  const [activeTab, setActiveTab] = useState<'healthcare' | 'trade'>('healthcare');

  return (
    <section className="py-[100px] px-[6%] bg-teal-deeper" id="industries">
      <div className="max-w-[1160px] mx-auto">
        <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-amber mb-4 block">Market focus</span>
        <h2 className="font-syne text-[clamp(32px,4vw,54px)] font-extrabold leading-[1.08] tracking-[-0.022em] mb-[32px]">Where we go deep</h2>

        <div className="flex gap-[12px] flex-wrap mb-[56px]">
          <button 
            className={`flex items-center gap-[10px] bg-teal-dark border rounded-full px-[20px] py-[11px] text-[13px] font-normal cursor-pointer transition-all ${
              activeTab === 'healthcare' 
                ? 'border-amber/35 text-white bg-amber/10' 
                : 'border-white/10 text-white/60 hover:border-amber/35 hover:text-white hover:bg-amber/10'
            }`}
            onClick={() => setActiveTab('healthcare')}
          >
            <span className={`w-[7px] h-[7px] rounded-full ${activeTab === 'healthcare' ? 'bg-amber' : 'bg-white/20'}`}></span>
            Healthcare &amp; Medical
          </button>
          <button 
            className={`flex items-center gap-[10px] bg-teal-dark border rounded-full px-[20px] py-[11px] text-[13px] font-normal cursor-pointer transition-all ${
              activeTab === 'trade' 
                ? 'border-amber/35 text-white bg-amber/10' 
                : 'border-white/10 text-white/60 hover:border-amber/35 hover:text-white hover:bg-amber/10'
            }`}
            onClick={() => setActiveTab('trade')}
          >
            <span className={`w-[7px] h-[7px] rounded-full ${activeTab === 'trade' ? 'bg-amber' : 'bg-white/20'}`}></span>
            Import &amp; Export
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'healthcare' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[56px] items-start animate-[fadeIn_0.3s_ease-in-out]">
            <div>
              <h3 className="font-syne text-[clamp(24px,3vw,36px)] font-extrabold leading-[1.15] tracking-[-0.015em] mb-[24px]">1.5 lakh solo clinics.<br/>Zero retention software.</h3>
              <ul className="flex flex-col gap-[14px] mb-[32px]">
                <li className="flex items-start gap-[14px] text-[14px] text-white/75 leading-[1.65] font-light">
                  <span className="font-syne text-[11px] font-bold text-amber bg-amber/10 w-[24px] h-[24px] rounded-md flex items-center justify-center shrink-0 mt-[1px]">1</span>
                  Clinics pay ₹8K–15K/month to Practo and JustDial with zero visibility into which patients actually convert — entirely untracked spend.
                </li>
                <li className="flex items-start gap-[14px] text-[14px] text-white/75 leading-[1.65] font-light">
                  <span className="font-syne text-[11px] font-bold text-amber bg-amber/10 w-[24px] h-[24px] rounded-md flex items-center justify-center shrink-0 mt-[1px]">2</span>
                  30–40% of patients never return after their first visit despite open treatment plans, representing direct, recoverable revenue leakage.
                </li>
                <li className="flex items-start gap-[14px] text-[14px] text-white/75 leading-[1.65] font-light">
                  <span className="font-syne text-[11px] font-bold text-amber bg-amber/10 w-[24px] h-[24px] rounded-md flex items-center justify-center shrink-0 mt-[1px]">3</span>
                  The same broken engagement model exists across general physicians, physiotherapists, ophthalmologists, and the pharma supply chain beneath them all.
                </li>
                <li className="flex items-start gap-[14px] text-[14px] text-white/75 leading-[1.65] font-light">
                  <span className="font-syne text-[11px] font-bold text-amber bg-amber/10 w-[24px] h-[24px] rounded-md flex items-center justify-center shrink-0 mt-[1px]">4</span>
                  DentFlow is the wedge into the full medical ecosystem — patient engagement, provider operations, and eventually pharma distribution intelligence.
                </li>
              </ul>
              <a href="#contact" className="inline-flex items-center gap-[9px] text-[13px] font-medium text-amber-light border-b border-transparent hover:border-amber-light transition-colors pb-[1px]">
                Explore DentFlow <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
            <div className="bg-teal-dark border border-white/10 rounded-[16px] p-[32px]">
              <div className="font-syne text-[11px] font-bold tracking-[0.1em] uppercase text-amber mb-[20px]">DentFlow impact</div>
              <div className="flex justify-between items-center py-[13px] border-b border-white/10"><span className="text-[13px] text-white/60">Patient reactivation rate</span><span className="font-syne text-[20px] font-bold text-white">34%<span className="text-[11px] text-[#5DCAA5] ml-[6px]">↑</span></span></div>
              <div className="flex justify-between items-center py-[13px] border-b border-white/10"><span className="text-[13px] text-white/60">Monthly untracked spend replaced</span><span className="font-syne text-[20px] font-bold text-white">₹12K</span></div>
              <div className="flex justify-between items-center py-[13px] border-b border-white/10"><span className="text-[13px] text-white/60">Avg revenue uplift / clinic</span><span className="font-syne text-[20px] font-bold text-white">₹45K<span className="text-[11px] text-[#5DCAA5] ml-[6px]">↑</span></span></div>
              <div className="flex justify-between items-center py-[13px] border-b border-white/10"><span className="text-[13px] text-white/60">WhatsApp message open rate</span><span className="font-syne text-[20px] font-bold text-white">78%<span className="text-[11px] text-[#5DCAA5] ml-[6px]">↑</span></span></div>
              <div className="flex justify-between items-center py-[13px]"><span className="text-[13px] text-white/60">Setup to first result</span><span className="font-syne text-[20px] font-bold text-white">48 hrs</span></div>
            </div>
          </div>
        )}

        {activeTab === 'trade' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[56px] items-start animate-[fadeIn_0.3s_ease-in-out]">
            <div>
              <h3 className="font-syne text-[clamp(24px,3vw,36px)] font-extrabold leading-[1.15] tracking-[-0.015em] mb-[24px]">India's trade ops run on<br/>WhatsApp and spreadsheets.</h3>
              <ul className="flex flex-col gap-[14px] mb-[32px]">
                <li className="flex items-start gap-[14px] text-[14px] text-white/75 leading-[1.65] font-light">
                  <span className="font-syne text-[11px] font-bold text-amber bg-amber/10 w-[24px] h-[24px] rounded-md flex items-center justify-center shrink-0 mt-[1px]">1</span>
                  India processed over $800B in trade in FY24 — yet the average MSME importer/exporter manages compliance via email threads and Excel files shared over WhatsApp.
                </li>
                <li className="flex items-start gap-[14px] text-[14px] text-white/75 leading-[1.65] font-light">
                  <span className="font-syne text-[11px] font-bold text-amber bg-amber/10 w-[24px] h-[24px] rounded-md flex items-center justify-center shrink-0 mt-[1px]">2</span>
                  Compliance failures (wrong HS codes, missed duty changes, delayed documentation) cost exporters 3–8% of shipment value in penalties and delays.
                </li>
                <li className="flex items-start gap-[14px] text-[14px] text-white/75 leading-[1.65] font-light">
                  <span className="font-syne text-[11px] font-bold text-amber bg-amber/10 w-[24px] h-[24px] rounded-md flex items-center justify-center shrink-0 mt-[1px]">3</span>
                  Inventory planning for import-heavy businesses is structurally broken — lead times, port delays, and duty cycles make standard forecasting tools useless.
                </li>
                <li className="flex items-start gap-[14px] text-[14px] text-white/75 leading-[1.65] font-light">
                  <span className="font-syne text-[11px] font-bold text-amber bg-amber/10 w-[24px] h-[24px] rounded-md flex items-center justify-center shrink-0 mt-[1px]">4</span>
                  SupplyIQ collapses compliance, logistics visibility, and inventory intelligence into a single layer built for Indian cross-border trade realities.
                </li>
              </ul>
              <a href="#contact" className="inline-flex items-center gap-[9px] text-[13px] font-medium text-amber-light border-b border-transparent hover:border-amber-light transition-colors pb-[1px]">
                Join SupplyIQ early access <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
            <div className="bg-teal-dark border border-white/10 rounded-[16px] p-[32px]">
              <div className="font-syne text-[11px] font-bold tracking-[0.1em] uppercase text-amber mb-[20px]">SupplyIQ targets</div>
              <div className="flex justify-between items-center py-[13px] border-b border-white/10"><span className="text-[13px] text-white/60">Compliance error reduction</span><span className="font-syne text-[20px] font-bold text-white">80%<span className="text-[11px] text-[#5DCAA5] ml-[6px]">↓</span></span></div>
              <div className="flex justify-between items-center py-[13px] border-b border-white/10"><span className="text-[13px] text-white/60">Docs auto-generated per shipment</span><span className="font-syne text-[20px] font-bold text-white">12+</span></div>
              <div className="flex justify-between items-center py-[13px] border-b border-white/10"><span className="text-[13px] text-white/60">Avg penalty cost avoided</span><span className="font-syne text-[20px] font-bold text-white">₹2L+</span></div>
              <div className="flex justify-between items-center py-[13px] border-b border-white/10"><span className="text-[13px] text-white/60">Inventory accuracy improvement</span><span className="font-syne text-[20px] font-bold text-white">+40%</span></div>
              <div className="flex justify-between items-center py-[13px]"><span className="text-[13px] text-white/60">Integrations on launch</span><span className="font-syne text-[20px] font-bold text-white">Tally + GST</span></div>
            </div>
          </div>
        )}
      </div>
    </section>
    
  );
}