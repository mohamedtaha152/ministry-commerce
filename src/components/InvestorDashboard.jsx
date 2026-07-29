import React from 'react';
import { 
  Building2, 
  Award, 
  FileText, 
  Clock, 
  CheckCircle2, 
  Download, 
  Plus, 
  AlertCircle, 
  ShieldCheck, 
  QrCode, 
  Sparkles,
  RefreshCw,
  ChevronRight
} from 'lucide-react';

export default function InvestorDashboard({ 
  userPersona, 
  userSubmittedApps = [], 
  onStartService 
}) {
  const mockLicenses = [
    {
      id: 'lic-1',
      title: 'Nile Valley Tech Solutions LLC',
      code: 'CR-1010992384',
      taxId: '394-821-001',
      category: 'Commercial Registration',
      expiryDate: '2027-03-15',
      status: 'Active',
      governorate: 'Cairo (Smart Village)',
    },
    {
      id: 'lic-2',
      title: 'Nile Star Trademark (Class 35)',
      code: 'TM-APP-88392',
      taxId: '394-821-001',
      category: 'Trademark Protection',
      expiryDate: '2032-06-20',
      status: 'Protected',
      governorate: 'Central IP Bureau',
    }
  ];

  return (
    <section className="py-8 bg-slate-50 min-h-[600px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Welcome Banner */}
        <div className="bg-gradient-to-r from-[#0A192F] to-[#0F2C59] text-white p-6 rounded-2xl border border-amber-500/30 shadow-xl mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/40">
                  {userPersona === 'business' ? 'Verified Corporate Entity' : userPersona === 'investor' ? 'Foreign Direct Investor (GAFI)' : 'Individual Citizen'}
                </span>
                <span className="text-xs text-slate-300 font-mono">
                  EG-TAX-394821
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-white">
                Welcome back, Tarek Al-Masry
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                Manage active commercial certificates, track pending ministry filings, and perform instant renewals.
              </p>
            </div>

            <button
              onClick={() => onStartService({ id: 'eg-cr-01', title: 'Issue New Commercial Registration Certificate', code: 'EG-CR-01', feeFormatted: '380 EGP' })}
              className="px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-[#0A192F] font-bold text-xs rounded-xl transition flex items-center gap-1.5 shadow"
            >
              <Plus className="w-4 h-4" /> Issue New Commercial Register
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Active Registered Licenses */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-amber-600" /> Active Ministry Licenses & Registrations
              </h3>
              <span className="text-xs text-slate-500 font-medium">2 Active Records</span>
            </div>

            <div className="space-y-3">
              {mockLicenses.map((lic) => (
                <div key={lic.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-slate-400 block">{lic.code}</span>
                      <h4 className="text-base font-bold text-slate-900">{lic.title}</h4>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                      {lic.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 mb-4 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <div>
                      <span className="text-[10px] text-slate-400 block">Tax Number</span>
                      <span className="font-mono font-bold text-slate-800">{lic.taxId}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">Expiration Date</span>
                      <span className="font-bold text-blue-700">{lic.expiryDate}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2 text-xs pt-2 border-t border-slate-100">
                    <button
                      onClick={() => alert(`Downloading Certified Statement for ${lic.title}...`)}
                      className="text-xs font-semibold text-[#0F2C59] hover:underline flex items-center gap-1"
                    >
                      <Download className="w-3.5 h-3.5" /> Download QR Cert
                    </button>

                    <button
                      onClick={() => onStartService({ id: 'eg-cr-02', title: 'Renew Commercial Registration', code: 'EG-CR-02', feeFormatted: '210 EGP' })}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-lg transition flex items-center gap-1"
                    >
                      <RefreshCw className="w-3 h-3 text-amber-600" /> Renew
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submitted Applications Feed */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-600" /> Tracked Filings & Requests
              </h3>
              <span className="text-xs text-slate-500 font-medium">{userSubmittedApps.length + 1} Filings</span>
            </div>

            <div className="space-y-3">
              {/* Default demo item */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-xs">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono font-bold text-amber-700">EG-2025-CR-9041</span>
                  <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">Ready for Download</span>
                </div>
                <div className="font-bold text-slate-800 mb-1">Issue New Commercial Registration Certificate</div>
                <div className="text-[11px] text-slate-500">Submitted Feb 18, 2025 • Cairo Office</div>
              </div>

              {/* User submitted applications */}
              {userSubmittedApps.map((app, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-xs animate-fadeIn">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono font-bold text-blue-700">{app.refCode}</span>
                    <span className="text-[10px] text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded">{app.status}</span>
                  </div>
                  <div className="font-bold text-slate-800 mb-1">{app.serviceName}</div>
                  <div className="text-[11px] text-slate-500">Submitted {app.submissionDate} • {app.governorate}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
