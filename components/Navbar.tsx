// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
 return (
  <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-[6%] h-[70px] bg-teal-deeper/90 backdrop-blur-md border-b border-white/10">
    <Link href="/" className="flex items-center gap-[11px] no-underline">
      {/* SVG stays the same */}
      <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="4.5" fill="white"/>
        <circle cx="18" cy="6" r="3" fill="white" opacity="0.75"/>
        <circle cx="30" cy="18" r="3" fill="white" opacity="0.75"/>
        <circle cx="18" cy="30" r="3" fill="white" opacity="0.75"/>
        <circle cx="6" cy="18" r="3" fill="white" opacity="0.75"/>
        <circle cx="27" cy="9" r="2.2" fill="white" opacity="0.45"/>
        <circle cx="27" cy="27" r="2.2" fill="white" opacity="0.45"/>
        <circle cx="9" cy="27" r="2.2" fill="white" opacity="0.45"/>
        <circle cx="9" cy="9" r="2.2" fill="white" opacity="0.45"/>
        <path d="M18 10.5L18 13.5M22.5 18L25 18M18 22.5L18 25M13.5 18L11 18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M21 13.5L24 10.5M21 22.5L24 25.5M15 22.5L12 25.5M15 13.5L12 10.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.45"/>
      </svg>
      <span className="font-syne text-[19px] font-extrabold text-white tracking-[0.06em]">ZENTHLAB</span>
    </Link>
    <ul className="hidden md:flex items-center gap-[36px] list-none">
      <li><Link href="#products" className="text-white/60 text-[14px] hover:text-white transition-colors">Products</Link></li>
      <li><Link href="#about" className="text-white/60 text-[14px] hover:text-white transition-colors">About</Link></li>
      <li><Link href="#industries" className="text-white/60 text-[14px] hover:text-white transition-colors">Industries</Link></li>
      <li><Link href="#contact" className="bg-amber text-teal-deeper px-[22px] py-[9px] rounded-md font-medium transition-all hover:bg-amber-light hover:-translate-y-[1px]">Book a Demo</Link></li>
    </ul>
  </nav>
);
}