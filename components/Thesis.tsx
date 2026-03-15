// components/Thesis.tsx
export default function Thesis() {
 return (
  <div className="bg-teal-dark border-y border-white/10 py-[80px] px-[6%]" id="about">
    <div className="max-w-[1160px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[48px] lg:gap-[80px] items-center">
      <div>
        <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-amber mb-4 block">The Zenthlab thesis</span>
        <h2 className="font-syne text-[clamp(32px,3.5vw,48px)] font-extrabold leading-[1.1] tracking-[-0.02em] mb-6">We don't sell software. We displace broken spend.</h2>
        <p className="text-[16px] font-light text-white/60 leading-[1.8] mb-[14px]">Every business we work with is already <strong className="text-white/85 font-normal">spending money on something that doesn't work</strong> — untracked ad platforms, disconnected logistics tools, manual follow-up processes, compliance paperwork that's always a step behind.</p>
        <p className="text-[16px] font-light text-white/60 leading-[1.8] mb-[14px]">We identify that spend, replace it with an AI-native product that does the same job measurably better, and <strong className="text-white/85 font-normal">reallocate the budget</strong> toward something that compounds. That's the model.</p>
        <p className="text-[16px] font-light text-white/60 leading-[1.8]">The deeper mission: change the fundamental interface between companies and the people they serve — patients, distributors, importers, end customers. <strong className="text-white/85 font-normal">Make every interaction intelligent.</strong></p>
      </div>
      <div className="flex flex-col gap-[14px]">
        {/* Thesis Cards */}
        {[
          { title: "Vertical by design", desc: "We go completely deep in one industry before the next. No horizontal sprawl. Domain knowledge is the moat." },
          { title: "AI as the core, not a feature", desc: "Intelligence is baked into the workflow — not bolted on as a chatbot widget or a dashboard add-on." },
          { title: "ROI first, always", desc: "We tie every product to revenue generated or cost eliminated. If we can't prove the number, we don't ship." },
          { title: "Cluster-led growth", desc: "Win one clinic, one distributor, one port cluster — and let the network do the rest. Referral flywheel by design." }
        ].map((item, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-[14px] p-[22px_24px] flex items-start gap-4 transition-all hover:border-amber/25 hover:bg-amber/5">
            <div className="w-[38px] h-[38px] rounded-[10px] bg-amber/10 flex items-center justify-center shrink-0">
               <div className="w-5 h-5 bg-amber rounded-full opacity-50"></div> {/* Replace with your specific SVGs */}
            </div>
            <div>
              <h4 className="font-syne text-[15px] font-bold mb-[5px]">{item.title}</h4>
              <p className="text-[13px] text-white/60 leading-[1.6] font-light">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}