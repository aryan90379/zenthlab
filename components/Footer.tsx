"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-teal-deeper border-t border-white/10 pt-[70px] px-[6%] pb-[36px]">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-[40px] lg:gap-[60px] max-w-[1160px] mx-auto mb-[50px]">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-[10px]">
            <span className="font-syne text-[16px] font-extrabold tracking-[0.08em]">
              ZENTHLAB
            </span>
          </div>

          <p className="text-[13px] text-white/60 leading-[1.75] font-light mt-4 max-w-[280px]">
            AI-native vertical software for India's operational economy. Built by operators, for operators.
          </p>

          {/* CONTACT */}
          <div className="mt-5 space-y-2">
            <p className="text-[12px] text-white/40">Contact</p>
            <a
              href="mailto:support.zenthlab@gmail.com"
              className="text-[13px] text-white/70 hover:text-white transition"
            >
              support.zenthlab@gmail.com
            </a>
          </div>

          {/* WHATSAPP CTA */}
          <a
            href="https://wa.me/917095146029?text=Hi%2C%20I%20would%20like%20to%20know%20more"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 text-[13px] font-medium text-amber hover:text-white transition"
          >
            Chat on WhatsApp →
          </a>
        </div>

        {/* PRODUCTS */}
        <div>
          <h5 className="font-syne text-[11px] font-bold tracking-[0.12em] uppercase text-white/30 mb-[18px]">
            Products
          </h5>
          <ul className="flex flex-col gap-[10px]">
            <li>
              <Link href="#" className="text-[13px] text-white/60 hover:text-white transition">
                DentFlow
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[13px] text-white/60 hover:text-white transition">
                SupplyIQ
              </Link>
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h5 className="font-syne text-[11px] font-bold tracking-[0.12em] uppercase text-white/30 mb-[18px]">
            Company
          </h5>
          <ul className="flex flex-col gap-[10px]">
            <li>
              <Link href="/#products" className="text-[13px] text-white/60 hover:text-white transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="/#about" className="text-[13px] text-white/60 hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/#industries" className="text-[13px] text-white/60 hover:text-white transition">
                Industries
              </Link>
            </li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h5 className="font-syne text-[11px] font-bold tracking-[0.12em] uppercase text-white/30 mb-[18px]">
            Legal
          </h5>
          <ul className="flex flex-col gap-[10px]">
            <li>
              <Link href="/privacy-policy" className="text-[13px] text-white/60 hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="text-[13px] text-white/60 hover:text-white transition">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/data-deletion" className="text-[13px] text-white/60 hover:text-white transition">
                Data Deletion
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 pt-[26px] flex flex-col md:flex-row justify-between items-center max-w-[1160px] mx-auto gap-3">

        <p className="text-[11px] text-white/30">
          © 2026 Zenthlab. All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-[11px] text-white/30">
          <Link href="/" className="hover:text-white transition">
            zenthlab.com
          </Link>
          <span className="text-white/10">•</span>
          <span className="hover:text-white transition cursor-default">
            Built in India 🇮🇳
          </span>
        </div>

      </div>
    </footer>
  );
}