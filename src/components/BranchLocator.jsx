import React, { useState } from 'react';
import { GOVERNORATE_BRANCHES } from '../data/servicesData';
import { 
  MapPin, 
  Clock, 
  Phone, 
  CheckCircle2, 
  Users, 
  Calendar, 
  Navigation,
  Sparkles,
  Search
} from 'lucide-react';

export default function BranchLocator() {
  const [selectedGov, setSelectedGov] = useState('All');
  const [bookingBranch, setBookingBranch] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const filteredBranches = selectedGov === 'All' 
    ? GOVERNORATE_BRANCHES 
    : GOVERNORATE_BRANCHES.filter(b => b.governorate === selectedGov);

  const handleBookAppointment = (branch) => {
    setBookingBranch(branch);
    setBookingSuccess(false);
  };

  const confirmBooking = () => {
    setBookingSuccess(true);
  };

  return (
    <section className="py-8 bg-slate-50 min-h-[500px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 border-b border-slate-200 pb-4">
          <div>
            <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
              National Branch Network
            </span>
            <h2 className="text-xl font-bold text-slate-900 mt-1">
              Ministry Offices & Queue Status Across Egypt
            </h2>
          </div>

          {/* Filter by Governorate */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">Governorate:</span>
            <select
              value={selectedGov}
              onChange={(e) => setSelectedGov(e.target.value)}
              className="bg-white border border-slate-200 text-xs font-semibold rounded-xl px-3 py-2 focus:ring-2 focus:ring-[#0F2C59]"
            >
              <option value="All">All Governorates (27)</option>
              <option value="Cairo">Cairo Governorate</option>
              <option value="Giza">Giza Governorate</option>
              <option value="Alexandria">Alexandria Governorate</option>
              <option value="Port Said">Port Said Free Zone</option>
              <option value="Asyut">Asyut Governorate</option>
            </select>
          </div>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBranches.map((branch) => (
            <div key={branch.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200">
                    {branch.governorate} Governorate
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                    <Users className="w-3 h-3 text-emerald-600" /> {branch.queueTime}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {branch.name}
                </h3>

                <p className="text-xs text-slate-600 mb-4 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{branch.address}</span>
                </p>

                <div className="space-y-1.5 text-xs text-slate-500 mb-4 pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{branch.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span className="font-mono">{branch.phone}</span>
                  </div>
                </div>

                {/* Available Services Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {branch.servicesAvailable.map((srv, i) => (
                    <span key={i} className="text-[10px] bg-blue-50 text-blue-800 font-medium px-2 py-0.5 rounded">
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleBookAppointment(branch)}
                className="w-full py-2 bg-[#0F2C59] hover:bg-[#0A192F] text-amber-300 font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" /> Book Fast-Track Desk Visit
              </button>
            </div>
          ))}
        </div>

        {/* Appointment Booking Modal */}
        {bookingBranch && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 w-full max-w-md shadow-2xl relative">
              <button 
                onClick={() => setBookingBranch(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>

              {!bookingSuccess ? (
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Book Priority Appointment
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    {bookingBranch.name} ({bookingBranch.governorate})
                  </p>

                  <div className="space-y-3 text-xs mb-6">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Select Preferred Date</label>
                      <input type="date" defaultValue="2025-02-24" className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg" />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Select Time Slot</label>
                      <select className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg">
                        <option>09:00 AM - 10:00 AM (VIP Fast-Track)</option>
                        <option>10:30 AM - 11:30 AM</option>
                        <option>01:00 PM - 02:00 PM</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Purpose of Visit</label>
                      <select className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg">
                        <option>Commercial Register Stamping</option>
                        <option>Trademark Official Inspection</option>
                        <option>Import Card Clearance</option>
                      </select>
                    </div>
                  </div>

                  <button
                    onClick={confirmBooking}
                    className="w-full py-2.5 bg-[#0F2C59] text-amber-300 font-bold text-xs rounded-xl hover:bg-[#0A192F] transition"
                  >
                    Confirm Booking & Issue QR Pass
                  </button>
                </div>
              ) : (
                <div className="text-center space-y-3 py-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Appointment Confirmed!</h4>
                  <p className="text-xs text-slate-600">
                    Your QR Fast-Pass has been generated for <strong className="text-slate-900">{bookingBranch.name}</strong>.
                  </p>
                  <div className="p-3 bg-slate-100 rounded-xl font-mono text-xs font-bold text-slate-800">
                    Pass Code: EG-PASS-99381
                  </div>
                  <button
                    onClick={() => setBookingBranch(null)}
                    className="w-full py-2 bg-slate-800 text-white font-bold text-xs rounded-xl"
                  >
                    Done
                  </button>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
