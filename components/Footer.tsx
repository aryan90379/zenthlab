// components/Footer.tsx
export default function Footer() {
 return (
  <footer className="bg-teal-deeper border-t border-white/10 pt-[60px] px-[6%] pb-[36px]">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-[40px] lg:gap-[60px] max-w-[1160px] mx-auto mb-[44px]">
      <div>
        <div className="flex items-center gap-[10px]">
          {/* SVG Logo */}
          <span className="font-syne text-[15px] font-extrabold tracking-[0.06em]">ZENTHLAB</span>
        </div>
        <p className="text-[13px] text-white/60 leading-[1.75] font-light mt-4 max-w-[260px]">AI-native vertical software for India's operational economy. Built by operators, for operators. MSME Registered.</p>
      </div>
      <div>
        <h5 className="font-syne text-[11px] font-bold tracking-[0.12em] uppercase text-white/30 mb-[18px]">Products</h5>
        <ul className="flex flex-col gap-[10px]">
          <li><a href="#" className="text-[13px] text-white/60 hover:text-white transition-colors">DentFlow</a></li>
          <li><a href="#" className="text-[13px] text-white/60 hover:text-white transition-colors">SupplyIQ</a></li>
        </ul>
      </div>
      {/* Replicate column layout for Company and Contact */}
    </div>
    <div className="border-t border-white/10 pt-[26px] flex flex-col md:flex-row justify-between items-center max-w-[1160px] mx-auto">
      <p className="text-[11px] text-white/30">© 2026 Zenthlab. All rights reserved.</p>
      <p className="text-[11px] text-amber-dark">zenthlab.com</p>
    </div>
  </footer>
);
}