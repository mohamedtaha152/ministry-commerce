import React from 'react';
import { 
  Building2, 
  Award, 
  Ship, 
  Factory, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  FileText, 
  ArrowRight,
  Star,
  Zap,
  Info
} from 'lucide-react';

export default function ServiceCard({ service, onSelectService, onStartService }) {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'commercial-registry':
        return <Building2 className="w-4 h-4 text-amber-600" />;
      case 'trademarks-ip':
        return <Award className="w-4 h-4 text-purple-600" />;
      case 'import-export':
        return <Ship className="w-4 h-4 text-blue-600" />;
      case 'industrial-registry':
        return <Factory className="w-4 h-4 text-indigo-600" />;
      case 'consumer-protection':
        return <ShieldCheck className="w-4 h-4 text-emerald-600" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-slate-600" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between overflow-hidden group">
      {/* Top Card Header */}
      <div className="p-5">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
            {getCategoryIcon(service.category)}
            {service.categoryName}
          </span>

          <span className="text-[11px] font-mono font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60">
            {service.code}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0F2C59] transition line-clamp-2 mb-2 leading-snug">
          {service.title}
        </h3>

        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Badges: Time & Fee */}
        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100 text-xs">
          <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
            <span className="block text-[10px] text-slate-400 uppercase font-semibold">Turnaround</span>
            <span className="font-semibold text-slate-800 flex items-center gap-1 mt-0.5">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              {service.executionTime}
            </span>
          </div>

          <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
            <span className="block text-[10px] text-slate-400 uppercase font-semibold">Government Fee</span>
            <span className="font-bold text-[#0F2C59] mt-0.5 block">
              {service.feeFormatted}
            </span>
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="bg-slate-50/80 px-5 py-3 border-t border-slate-100 flex items-center justify-between gap-2">
        <button
          onClick={() => onSelectService(service)}
          className="text-xs font-semibold text-slate-600 hover:text-[#0F2C59] flex items-center gap-1 hover:underline transition"
        >
          <Info className="w-3.5 h-3.5" /> Requirements
        </button>

        <button
          onClick={() => onStartService(service)}
          className="px-4 py-2 bg-[#0F2C59] hover:bg-[#0A192F] text-amber-300 font-bold text-xs rounded-xl transition flex items-center gap-1.5 shadow-sm group-hover:shadow hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>Start Service</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
