"use client";

import React from "react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  CheckCircle2, 
  MessageCircle, 
  Calendar, 
  ChevronRight 
} from "lucide-react";

export default function DentistPage() {
  const phoneNumber = "15551701015";
  const message = encodeURIComponent("Hi SmileCare team, I would like to book an appointment.");

  const handleWhatsAppRedirect = () => {
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl shadow-md">
              SC
            </div>
            <span className="text-2xl font-bold text-slate-900 tracking-tight">SmileCare</span>
          </div>
          <div className="hidden md:flex items-center gap-6 font-medium text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#about" className="hover:text-blue-600 transition">Our Team</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
          <button 
            onClick={handleWhatsAppRedirect}
            className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-white overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Premium Dental Care</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Experience the joy of a <span className="text-blue-600">brighter, healthier smile.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              State-of-the-art technology meets compassionate care. Join thousands of happy patients who trust SmileCare for their general, cosmetic, and emergency dental needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleWhatsAppRedirect}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                <Calendar size={20} />
                Book Appointment
              </button>
              <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Patient" />
                  ))}
                </div>
                <span>4.9/5 from 500+ reviews</span>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10 transform translate-x-10 translate-y-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Happy patient with dentist" 
              className="rounded-3xl shadow-2xl object-cover w-full h-[400px] lg:h-[500px]"
            />
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Dental Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">We offer a full range of treatments to ensure your oral health is always in top condition.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "General Dentistry", desc: "Routine checkups, cleanings, and cavity fillings to maintain optimal oral health." },
              { title: "Cosmetic Whitening", desc: "Professional teeth whitening treatments to brighten your smile up to 8 shades." },
              { title: "Dental Implants", desc: "Permanent, natural-looking solutions for missing teeth using titanium posts." },
              { title: "Invisalign & Braces", desc: "Clear aligners and traditional braces for perfectly straight teeth." },
              { title: "Root Canals", desc: "Painless endodontic therapy to save infected or severely decayed teeth." },
              { title: "Emergency Care", desc: "Immediate attention for severe toothaches, broken teeth, or dental trauma." },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{service.desc}</p>
                <a href="#" className="text-blue-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ChevronRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Doctor Section */}
      <section id="about" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Dr. Emily Carter" 
              className="rounded-3xl shadow-lg w-full object-cover aspect-square"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Meet Dr. Emily Carter</h2>
            <p className="text-blue-600 font-semibold text-lg mb-6">Lead Dental Surgeon (BDS, MDS)</p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              With over 12 years of clinical experience, Dr. Carter specializes in advanced restorative and cosmetic dentistry. She graduated top of her class from Harvard School of Dental Medicine and is dedicated to providing pain-free, comfortable treatments for patients of all ages.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {['Member of American Dental Association', 'Certified Invisalign Provider', 'Advanced Implantology Certified', 'Awarded "Top Dentist 2023"'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <Star className="text-yellow-400 fill-yellow-400" size={18} />
                  {item}
                </li>
              ))}
            </ul>
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_John_Hancock.svg" alt="Signature" className="h-12 opacity-40" />
          </div>
        </div>
      </section>

      {/* Contact & Footer Section */}
      <footer id="contact" className="bg-slate-900 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-500 text-white rounded flex items-center justify-center font-bold text-lg">
                SC
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">SmileCare</span>
            </div>
            <p className="text-slate-400 mb-6">Delivering world-class dental care with a gentle touch. Your smile is our top priority.</p>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-400 mt-1" size={20} />
                <span>123 Wellness Avenue,<br/>Medical District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-400" size={20} />
                <span>+1 (555) 170-1015</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold text-lg mb-6">Clinic Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between border-b border-slate-700 pb-2">
                <span>Mon - Fri</span>
                <span className="text-white">8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-slate-700 pb-2">
                <span>Saturday</span>
                <span className="text-white">9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Sunday</span>
                <span className="text-red-400">Closed (Emergencies Only)</span>
              </li>
            </ul>
          </div>

          {/* CTA Box */}
          <div className="lg:col-span-1 bg-slate-800 p-6 rounded-2xl">
            <h4 className="text-white font-bold text-lg mb-4">Ready for a checkup?</h4>
            <p className="text-sm text-slate-400 mb-6">Skip the waiting room and book instantly via WhatsApp.</p>
            <button 
              onClick={handleWhatsAppRedirect}
              className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-bold transition-all"
            >
              <MessageCircle size={20} />
              Message Clinic
            </button>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} SmileCare Dental Clinic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}