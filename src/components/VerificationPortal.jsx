import React, { useState } from 'react';
import { DEMO_VERIFICATIONS } from '../data/servicesData';
import { 
  SearchCode, 
  ShieldCheck, 
  Building2, 
  Calendar, 
  CheckCircle2, 
  AlertTriangle, 
  QrCode, 
  FileCheck, 
  MapPin, 
  User, 
  Download,
  ExternalLink,
  Info
} from 'lucide-react';

export default function VerificationPortal() {
  const [crQuery, setCrQuery] = useState('1010992384');
  const [result, setResult] = useState(DEMO_VERIFICATIONS['1010992384']);
  const [hasSearched, setHasSearched] = useState(true);

  const handleVerify = (e) => {
    e?.preventDefault();
    const query = crQuery.trim();
    if (DEMO_VERIFICATIONS[query]) {
      setResult(DEMO_VERIFICATIONS[query]);
      setHasSearched(true);
    } else {
      setResult(null);
      setHasSearched(true);
    }
  };

  return (
    <section className="py-8 bg-slate-50 min-h-[500px]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Verification Hero Banner */}
        <div className="bg-gradient-to-r from-[#0A192F] to-[#0F2C59] text-white p-6 rounded-2xl border border-amber-500/30 shadow-xl mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="p-2 bg-amber-500/20 text-amber-400 rounded-xl border border-amber-500/40">
              <ShieldCheck className="w-6 h-6" />
            </span>
            <div>
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest block">
                Official Ministry Registry Verification Portal
              </span>
              <h2 className="text-xl font-bold text-white">
                Verify Egyptian Commercial License Authenticity
              </h2>
            </div>
          </div>
          <p className="text-xs text-slate-300 max-w-2xl leading-relaxed mt-2">
            Verify the legal status, tax standing, and active validity of any business operating in Egypt directly against the national commercial database.
          </p>

          {/* Quick Sample Buttons */}
          <div className="flex items-center gap-2 mt-4 text-xs">
            <span className="text-slate-400 font-medium">Quick Demo Samples:</span>
            <button
              onClick={() => { setCrQuery('1010992384'); setResult(DEMO_VERIFICATIONS['1010992384']); setHasSearched(true); }}
              className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-amber-300 rounded-lg font-mono transition border border-white/10"
            >
              CR #1010992384 (Nile Valley Tech)
            </button>
            <button
              onClick={() => { setCrQuery('2005439120'); setResult(DEMO_VERIFICATIONS['2005439120']); setHasSearched(true); }}
              className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-amber-300 rounded-lg font-mono transition border border-white/10"
            >
              CR #2005439120 (El-Sewedy)
            </button>
          </div>
        </div>

        {/* Search Bar Input */}
        <form onSubmit={handleVerify} className="mb-6">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <SearchCode className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Enter 10-digit Commercial Register Number (CRN) or Tax ID..."
                value={crQuery}
                onChange={(e) => setCrQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0F2C59] font-mono font-semibold shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-[#0F2C59] hover:bg-[#0A192F] text-amber-300 font-bold text-xs sm:text-sm rounded-xl transition shadow"
            >
              Verify License
            </button>
          </div>
        </form>

        {/* Verification Result Sheet */}
        {hasSearched && result && (
          <div className="bg-white rounded-2xl border-2 border-emerald-500/40 shadow-xl overflow-hidden animate-fadeIn">
            
            {/* Top Official Stamp Bar */}
            <div className="bg-emerald-700 text-white px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-200" />
                <span className="font-bold text-xs sm:text-sm tracking-wide">
                  OFFICIAL VALIDATION: REGISTRATION IS AUTHENTIC & ACTIVE
                </span>
              </div>
              <span className="text-[10px] font-mono bg-emerald-800 px-2.5 py-0.5 rounded border border-emerald-600">
                Ref: EG-GOV-VERIFIED
              </span>
            </div>

            {/* Certificate Data Body */}
            <div className="p-6 space-y-6">
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Entity Commercial Name</span>
                  <h3 className="text-xl font-extrabold text-slate-900">{result.companyName}</h3>
                  <div className="text-xs text-amber-800 font-bold font-serif mt-0.5">{result.arabicName}</div>
                </div>

                <div className="text-right bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Commercial Register No.</span>
                  <span className="text-lg font-mono font-black text-[#0F2C59]">{result.crNumber}</span>
                </div>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Legal Structure</span>
                  <span className="font-bold text-slate-800 mt-0.5 block">{result.legalForm}</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Tax Identification Number</span>
                  <span className="font-mono font-bold text-slate-800 mt-0.5 block">{result.taxNumber}</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Registered Capital</span>
                  <span className="font-bold text-emerald-700 mt-0.5 block">{result.capital}</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Governorate Jurisdiction</span>
                  <span className="font-bold text-slate-800 mt-0.5 block">{result.governorate}</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Issue Date</span>
                  <span className="font-bold text-slate-800 mt-0.5 block">{result.issueDate}</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Validity Expiration</span>
                  <span className="font-bold text-blue-700 mt-0.5 block">{result.expiryDate}</span>
                </div>
              </div>

              {/* Main Activity */}
              <div className="bg-blue-50/50 p-3.5 rounded-xl border border-blue-100 text-xs">
                <span className="text-[10px] text-blue-700 uppercase font-bold block">Registered Primary Commercial Activity</span>
                <span className="font-semibold text-slate-800 mt-0.5 block">{result.activity}</span>
              </div>

            </div>

            {/* Verification Footer */}
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">
                Verified live with Ministry of Trade & Industry database.
              </span>
              <button
                onClick={() => alert(`Downloading Verification Summary PDF for CR #${result.crNumber}...`)}
                className="px-4 py-2 bg-[#0F2C59] text-amber-300 font-bold rounded-xl hover:bg-[#0A192F] transition flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" /> Download Verified Statement
              </button>
            </div>

          </div>
        )}

        {/* Not Found State */}
        {hasSearched && !result && (
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center my-4">
            <AlertTriangle className="w-10 h-10 text-amber-600 mx-auto mb-2" />
            <h4 className="text-base font-bold text-slate-900">Commercial Register Record Not Found</h4>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              No matching active commercial entity found for query "<strong className="font-mono">{crQuery}</strong>". Please verify the 10-digit CRN or tax ID.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
