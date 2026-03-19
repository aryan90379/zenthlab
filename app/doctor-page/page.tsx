"use client";

import React from "react";

export default function DentistPage() {
  const phoneNumber = "15551701015"; // remove symbols for wa.me
  const message = encodeURIComponent("Hi, I want to book an appointment");

  const handleWhatsAppRedirect = () => {
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-8">
        
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          SmileCare Dental Clinic
        </h1>
        <p className="text-gray-600 mb-6">
          Your trusted partner for healthy and beautiful smiles. We offer
          general dentistry, cosmetic treatments, and emergency care.
        </p>

        {/* Dentist Info */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Dr. Emily Carter
          </h2>
          <p className="text-gray-600">
            BDS, MDS – 10+ years of experience in cosmetic and restorative
            dentistry.
          </p>
        </div>

        {/* Services */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Our Services
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Teeth Cleaning & Whitening</li>
            <li>Root Canal Treatment</li>
            <li>Dental Implants</li>
            <li>Braces & Aligners</li>
          </ul>
        </div>

        {/* CTA */}
        <button
          onClick={handleWhatsAppRedirect}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition duration-200"
        >
          Book Appointment on WhatsApp
        </button>

        {/* Footer */}
        <p className="text-sm text-gray-400 mt-4 text-center">
          Clicking the button will open WhatsApp chat with our clinic.
        </p>
      </div>
    </div>
  );
}