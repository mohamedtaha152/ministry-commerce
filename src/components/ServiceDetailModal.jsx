import React from 'react';
import { 
  X, 
  CheckCircle2, 
  FileText, 
  Clock, 
  CreditCard, 
  ShieldCheck, 
  Building2, 
  Download,
  ExternalLink,
  ArrowRight,
  Info,
  HelpCircle
} from 'lucide-react';

export default function ServiceDetailModal({ service, onClose, onStartService }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-3xl max-h-[90vh] overflow-y-auto custom-scrollbar flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="bg-[#0A192F] text-white p-6 sticky top-0 z-10 flex items-start justify-between border-b border-amber-500/30">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-mono font-bold bg-amber-500 text-[#0A192F] px-2 py-0.5 rounded">
                {service.code}
              </span>
              <span className="text-xs text-slate-300 font-medium bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-700">
                {service.categoryName}
              </span>
            </div>
            <h2 className="text-xl font-bold text-white leading-snug">
              {service.title}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 flex-1">
          
          {/* Quick Stat Pill Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
            <div>
              <span className="text-slate-400 text-[10px] uppercase font-bold block">Processing Speed</span>
              <span className="font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-blue-600" /> {service.executionTime}
              </span>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] uppercase font-bold block">Ministry Fee</span>
              <span className="font-bold text-[#0F2C59] mt-0.5 block">
                {service.feeFormatted}
              </span>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] uppercase font-bold block">Output Document</span>
              <span className="font-bold text-emerald-700 flex items-center gap-1 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Digital Cert + QR
              </span>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-blue-600" /> Service Overview
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-blue-50/40 p-3.5 rounded-xl border border-blue-100">
              {service.description}
            </p>
          </div>

          {/* Eligibility & Requirements */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Mandatory Eligibility & Conditions
            </h3>
            <ul className="space-y-2 text-xs text-slate-700">
              {service.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Required Documents */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-purple-600" /> Required Documents for Upload
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {service.documentsNeeded.map((doc, idx) => (
                <div key={idx} className="p-3 bg-purple-50/50 rounded-xl border border-purple-100 flex items-center gap-2 text-slate-800">
                  <FileText className="w-4 h-4 text-purple-600 shrink-0" />
                  <span className="font-medium">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step by Step Roadmap */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Application Journey
            </h3>
            <div className="space-y-2 text-xs">
              {service.steps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="w-6 h-6 rounded-full bg-[#0F2C59] text-amber-300 font-bold flex items-center justify-center shrink-0 text-xs">
                    {idx + 1}
                  </span>
                  <span className="text-slate-800 font-medium">{step}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 sticky bottom-0 z-10">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-xl hover:bg-slate-100 transition"
          >
            Close Guide
          </button>

          <button
            onClick={() => {
              onClose();
              onStartService(service);
            }}
            className="px-6 py-2.5 bg-[#0F2C59] hover:bg-[#0A192F] text-amber-300 font-bold text-xs sm:text-sm rounded-xl transition flex items-center gap-2 shadow-md"
          >
            <span>Proceed to Application Wizard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
