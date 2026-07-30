import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Lock, 
  CheckCircle2,
  FileText
} from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#0A192F] text-slate-300 border-t-2 border-amber-500/40 font-sans">
      
      {/* Top Hotline & Emergency Banner */}
      <div className="bg-[#0F2C59] border-b border-slate-800 py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-amber-500 text-[#0A192F] font-black rounded-lg text-sm">
             +201155556644
            </span>
            <div>
              <span className="font-bold text-white block">+201155556644</span>
              <span className="text-slate-400 text-[11px]">Toll-Free Consumer Protection & Commercial Guidance • 24/7 Support</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-300 font-medium">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-amber-400" /> Data Protection Certified
            </span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> GMI Gateway v1.0
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Emblem & Ministry Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500 text-[#0A192F] font-black text-xs">
                EG
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Governance and Management Institute - GMI</h3>
                <p className="text-[11px] text-amber-400 font-medium">Arab Republic of Egypt</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The Governance and Management Institute is a leading institution in the MENA region, specializing in corporate governance, risk management, and compliance. It offers accredited certifications and advisory services to develop leaders and enhance governance practices in accordance with global standards.
            </p>

            <div className="pt-2 text-xs space-y-1 text-slate-400 font-mono">
              <div>HQ Address: 5 ش الفضل، طلعت حرب - سيتي سنتر- مبني القنصلية الاداري, Cairo, EG</div>
              <div>Email: support@gmi.eg</div>
            </div>
          </div>

          {/* Col 2: E-Services Shortcuts */}
          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
              Core E-Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-amber-300 transition">
                  Commercial Registry (CR)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-amber-300 transition">
                  Trademark Registration
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-amber-300 transition">
                  Exporters Registry Card
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-amber-300 transition">
                  Importers Registry Clearance
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-amber-300 transition">
                  Consumer Protection Filing
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Portal Tools */}
          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
              Public Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('verifier')} className="hover:text-amber-300 transition">
                  CR & License Verifier
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('calculator')} className="hover:text-amber-300 transition">
                  Incorporation Fee Estimator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('branches')} className="hover:text-amber-300 transition">
                  Governorate Branch Queue Tracker
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('dashboard')} className="hover:text-amber-300 transition">
                  Investor Workspace
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Related Egyptian Authorities */}
          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
              Integrated Entities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1 hover:text-white transition cursor-pointer">
                <span>GAFI Egypt</span> <ExternalLink className="w-3 h-3 text-slate-500" />
              </li>
              <li className="flex items-center gap-1 hover:text-white transition cursor-pointer">
                <span>GOEIC Import Control</span> <ExternalLink className="w-3 h-3 text-slate-500" />
              </li>
              <li className="flex items-center gap-1 hover:text-white transition cursor-pointer">
                <span>IDA Industrial Auth</span> <ExternalLink className="w-3 h-3 text-slate-500" />
              </li>
              <li className="flex items-center gap-1 hover:text-white transition cursor-pointer">
                <span>EOS Quality Standards</span> <ExternalLink className="w-3 h-3 text-slate-500" />
              </li>
              <li className="flex items-center gap-1 hover:text-white transition cursor-pointer">
                <span>Egyptian Tax Authority</span> <ExternalLink className="w-3 h-3 text-slate-500" />
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Governance and Management Institute - GMI. All rights reserved.
          </div>
          <div className="flex gap-4">
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">Terms of Service</span>
            <span className="hover:underline cursor-pointer">Accessibility</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
