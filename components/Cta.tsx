// components/Cta.tsx
'use client';

import { useState, useEffect } from 'react';
import { sendDemoEmail } from '@/actions/mailactions';

export default function Cta() {
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'rate_limited'>('idle');
  const [timeLeft, setTimeLeft] = useState<string>('');

  // 2 hours in milliseconds
  const COOLDOWN_PERIOD = 2 * 60 * 60 * 1000;

  // Format milliseconds into hours/minutes
  const formatTimeLeft = (ms: number) => {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    if (hours > 0) return `${hours} hr ${minutes} min`;
    return `${minutes} min`;
  };

  async function handleSubmit(formData: FormData) {
    setIsPending(true);
    setStatus('idle');

    // Check LocalStorage for rate limiting
    const lastSubmission = localStorage.getItem('zenthlab_last_submission');
    if (lastSubmission) {
      const timeSinceLast = Date.now() - parseInt(lastSubmission, 10);
      if (timeSinceLast < COOLDOWN_PERIOD) {
        setTimeLeft(formatTimeLeft(COOLDOWN_PERIOD - timeSinceLast));
        setStatus('rate_limited');
        setIsPending(false);
        return;
      }
    }
    
    const result = await sendDemoEmail(formData);
    
    if (result.success) {
      setStatus('success');
      localStorage.setItem('zenthlab_last_submission', Date.now().toString());
      (document.getElementById('demo-form') as HTMLFormElement).reset();
    } else {
      setStatus('error');
    }
    setIsPending(false);
  }

  return (
    <section className="py-[100px] px-[6%] bg-teal-dark border-t border-white/10 relative overflow-hidden" id="contact">
      {/* Background glow effect for cooler layout */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[760px] mx-auto relative z-10">
        <div className="text-center mb-[56px]">
          <span className="inline-flex items-center gap-[8px] bg-[#E8A020]/10 border border-[#E8A020]/30 text-amber text-[11px] font-medium tracking-[0.1em] uppercase px-[14px] py-[6px] rounded-full mb-[24px]">
            Let's talk
          </span>
          <h2 className="font-syne text-[clamp(36px,5vw,62px)] font-extrabold leading-[1.08] tracking-[-0.022em] mb-5">
            We start with<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber to-amber-light">your workflow.</span>
          </h2>
          <p className="text-[17px] text-white/60 font-light leading-[1.75] max-w-[500px] mx-auto">
            Tell us about your operations. We'll show you exactly how to eliminate wasted spend and optimize them.
          </p>
        </div>

        <form id="demo-form" action={handleSubmit} className="bg-teal-deeper/80 backdrop-blur-xl border border-white/10 rounded-[24px] p-[32px] md:p-[48px] flex flex-col gap-[24px] shadow-2xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            <div className="flex flex-col gap-2 relative group">
              <label htmlFor="name" className="text-[13px] text-white/85 font-medium ml-1">Your Name *</label>
              <input type="text" id="name" name="name" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-[15px] text-white outline-none focus:border-amber/50 focus:bg-amber/[0.02] focus:ring-4 focus:ring-amber/10 transition-all placeholder:text-white/20" placeholder="Jane Doe" />
            </div>
            <div className="flex flex-col gap-2 relative group">
              <label htmlFor="email" className="text-[13px] text-white/85 font-medium ml-1">Work Email *</label>
              <input type="email" id="email" name="email" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-[15px] text-white outline-none focus:border-amber/50 focus:bg-amber/[0.02] focus:ring-4 focus:ring-amber/10 transition-all placeholder:text-white/20" placeholder="jane@company.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            <div className="flex flex-col gap-2 relative group">
              <label htmlFor="business" className="text-[13px] text-white/85 font-medium ml-1">Business Name *</label>
              <input type="text" id="business" name="business" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-[15px] text-white outline-none focus:border-amber/50 focus:bg-amber/[0.02] focus:ring-4 focus:ring-amber/10 transition-all placeholder:text-white/20" placeholder="Acme Corp" />
            </div>
            <div className="flex flex-col gap-2 relative group">
              <label htmlFor="role" className="text-[13px] text-white/85 font-medium ml-1">Your Role *</label>
              <input type="text" id="role" name="role" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-[15px] text-white outline-none focus:border-amber/50 focus:bg-amber/[0.02] focus:ring-4 focus:ring-amber/10 transition-all placeholder:text-white/20" placeholder="Operations Manager" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            <div className="flex flex-col gap-2 relative group">
              <label htmlFor="topic" className="text-[13px] text-white/85 font-medium ml-1">Regarding *</label>
              <div className="relative">
                <select id="topic" name="topic" required defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-[15px] text-white outline-none focus:border-amber/50 focus:bg-amber/[0.02] focus:ring-4 focus:ring-amber/10 transition-all appearance-none cursor-pointer invalid:text-white/40">
                  <option value="" disabled className="text-black">Select an option...</option>
                  <option value="DentFlow Demo" className="text-black">DentFlow Demo (Healthcare)</option>
                  <option value="SupplyIQ Demo" className="text-black">SupplyIQ Demo (Import/Export)</option>
                  <option value="General Inquiry" className="text-black">General Inquiry</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M1 4l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 relative group">
              <label htmlFor="phone" className="text-[13px] text-white/85 font-medium ml-1">Phone Number <span className="text-white/40 font-normal">(Optional)</span></label>
              <input type="tel" id="phone" name="phone" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-[15px] text-white outline-none focus:border-amber/50 focus:bg-amber/[0.02] focus:ring-4 focus:ring-amber/10 transition-all placeholder:text-white/20" placeholder="+91 98765 43210" />
            </div>
          </div>

          <div className="flex flex-col gap-2 relative group">
            <label htmlFor="message" className="text-[13px] text-white/85 font-medium ml-1">Details: What is the main problem you are trying to solve? *</label>
            <textarea id="message" name="message" required rows={4} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-[15px] text-white outline-none focus:border-amber/50 focus:bg-amber/[0.02] focus:ring-4 focus:ring-amber/10 transition-all resize-none placeholder:text-white/20" placeholder="We are currently spending X amount on Y, but losing tracking when..."></textarea>
          </div>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="bg-[#1D9E75]/10 border border-[#1D9E75]/30 rounded-xl p-5 flex items-start gap-4 animate-[fadeIn_0.3s_ease-in-out]">
              <div className="w-8 h-8 rounded-full bg-[#1D9E75]/20 flex items-center justify-center shrink-0 mt-0.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5L12 3" stroke="#5DCAA5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-[#5DCAA5] mb-1">Message Sent Successfully</h4>
                <p className="text-[13px] text-[#5DCAA5]/80 leading-relaxed">Thank you for reaching out. We have received your request and our team will get back to you within 24 hours.</p>
              </div>
            </div>
          )}
          
          {status === 'rate_limited' && (
            <div className="bg-amber/10 border border-amber/30 rounded-xl p-5 flex items-start gap-4 animate-[fadeIn_0.3s_ease-in-out]">
               <div className="w-8 h-8 rounded-full bg-amber/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-amber font-bold text-[14px]">!</span>
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-amber mb-1">Rate Limit Reached</h4>
                <p className="text-[13px] text-amber/80 leading-relaxed">You have already submitted a request recently. Please wait {timeLeft} before submitting another one, or email us directly.</p>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5 flex items-start gap-4 animate-[fadeIn_0.3s_ease-in-out]">
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-red-400 font-bold text-[14px]">✕</span>
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-red-400 mb-1">Submission Failed</h4>
                <p className="text-[13px] text-red-400/80 leading-relaxed">Something went wrong while sending your request. Please try again or email us directly at hello@zenthlab.com.</p>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={isPending || status === 'success'}
            className="group mt-2 relative overflow-hidden inline-flex items-center justify-center gap-[10px] bg-amber text-teal-deeper px-[30px] py-[18px] rounded-xl font-bold text-[15px] transition-all duration-300 hover:bg-amber-light hover:shadow-[0_8px_24px_rgba(93,202,165,0.25)] hover:-translate-y-1 active:scale-[0.98] disabled:opacity-80 disabled:cursor-wait disabled:hover:translate-y-0 disabled:hover:shadow-none disabled:active:scale-100"
          >
            {isPending ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-teal-deeper" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing Request...
              </>
            ) : status === 'success' ? (
              <>
                 Sent Successfully
              </>
            ) : (
              <>
                Submit Demo Request
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}