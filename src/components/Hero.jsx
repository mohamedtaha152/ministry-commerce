import React from 'react';
import { 
  Building2, 
  Award, 
  Ship, 
  ShieldCheck, 
  Zap, 
  Clock, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  TrendingUp,
  FileCheck
} from 'lucide-react';

export default function Hero({ onSelectCategory, onQuickAction }) {
  return (
    <section className="relative navy-gradient text-white overflow-hidden py-12 lg:py-16 border-b border-amber-500/30">
      {/* Background Decorative Graphic Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Subtle Pattern Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Ticker / Announcement bar */}
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-amber-500/40 text-xs backdrop-blur-md">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="text-amber-300 font-semibold uppercase tracking-wider text-[11px]">National Update:</span>
          <span className="text-slate-200 truncate">
            New 24-Hour Instant Commercial Register & Automated Tax Sync active across all 27 Egyptian Governorates.
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Empowering Egyptian Commerce & Industry <br />
              <span className="gold-gradient-text">Through Seamless Digital Services</span>
            </h1>
            
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-light leading-relaxed">
              A portal for commercial registration, trademark protection, import & export licensing, 
              industrial approvals, and consumer protection in the Arab Republic of Egypt.
            </p>

            {/* Quick Service Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => onQuickAction('eg-cr-01')}
                className="px-5 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-[#0A192F] font-bold rounded-xl shadow-lg hover:shadow-amber-500/20 transition flex items-center gap-2 text-sm"
              >
                <Zap className="w-4 h-4" /> Issue Commercial Register
              </button>
              
              <button
                onClick={() => onQuickAction('eg-tm-01')}
                className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition flex items-center gap-2 text-sm backdrop-blur-sm"
              >
                <Award className="w-4 h-4 text-amber-400" /> Register Trademark
              </button>

              <button
                onClick={() => onQuickAction('eg-cp-01')}
                className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition flex items-center gap-2 text-sm backdrop-blur-sm"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> File Consumer Complaint
              </button>
            </div>

            {/* Trust highlights */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700/60 max-w-lg">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">100% Paperless</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Instant Verification</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Gov QR Signed</span>
              </div>
            </div>
          </div>

          {/* Right Statistics & Quick Category Grid */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-2xl">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Portal Key Metrics
              </span>
              <span className="text-[10px] text-slate-400">Updated Daily</span>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-700/50">
                <div className="text-2xl font-extrabold text-white">1.84 M+</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Active Commercial Registrations</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-700/50">
                <div className="text-2xl font-extrabold text-amber-400">24 Hrs</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Average Turnaround Time</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-700/50">
                <div className="text-2xl font-extrabold text-emerald-400">98.4%</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Satisfaction Rating</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-700/50">
                <div className="text-2xl font-extrabold text-blue-400">27 / 27</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Egyptian Governorates Connected</div>
              </div>
            </div>

            {/* Quick Sector Directives */}
            <div className="space-y-2">
              <div className="text-xs font-medium text-slate-300 mb-2">Browse Services By Ministry Department:</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button 
                  onClick={() => onSelectCategory('commercial-registry')}
                  className="p-2 bg-white/5 hover:bg-white/15 rounded-lg border border-white/10 text-slate-200 hover:text-white transition flex items-center justify-between text-left"
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    Commercial Registry
                  </span>
                  <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                </button>

                <button 
                  onClick={() => onSelectCategory('trademarks-ip')}
                  className="p-2 bg-white/5 hover:bg-white/15 rounded-lg border border-white/10 text-slate-200 hover:text-white transition flex items-center justify-between text-left"
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <Award className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    Trademarks & IP
                  </span>
                  <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                </button>

                <button 
                  onClick={() => onSelectCategory('import-export')}
                  className="p-2 bg-white/5 hover:bg-white/15 rounded-lg border border-white/10 text-slate-200 hover:text-white transition flex items-center justify-between text-left"
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <Ship className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    Import & Export
                  </span>
                  <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                </button>

                <button 
                  onClick={() => onSelectCategory('consumer-protection')}
                  className="p-2 bg-white/5 hover:bg-white/15 rounded-lg border border-white/10 text-slate-200 hover:text-white transition flex items-center justify-between text-left"
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    Consumer Agency
                  </span>
                  <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
