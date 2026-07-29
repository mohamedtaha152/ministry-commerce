import React, { useState } from 'react';
import { DEMO_TRACKING_DATA } from '../data/servicesData';
import { 
  Search, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Download, 
  Building2, 
  MapPin, 
  QrCode, 
  Sparkles,
  AlertCircle,
  ExternalLink
} from 'lucide-react';

export default function StatusTracker({ isOpen, onClose, userSubmittedApps = [] }) {
  const [searchCode, setSearchCode] = useState('EG-2025-CR-9041');
  const [result, setResult] = useState(DEMO_TRACKING_DATA['EG-2025-CR-9041']);
  const [searched, setSearched] = useState(true);

  const handleSearch = (e) => {
    e?.preventDefault();
    const query = searchCode.trim().toUpperCase();
    
    // Check demo data
    if (DEMO_TRACKING_DATA[query]) {
      setResult(DEMO_TRACKING_DATA[query]);
      setSearched(true);
      return;
    }

    // Check user submitted apps
    const userApp = userSubmittedApps.find(a => a.refCode?.toUpperCase() === query);
    if (userApp) {
      setResult({
        serviceName: userApp.serviceName,
        applicantName: userApp.applicantName,
        entityName: userApp.entityName,
        submissionDate: userApp.submissionDate,
        status: userApp.status,
        currentStep: userApp.currentStep,
        steps: [
          { name: 'Application Received', date: `${userApp.submissionDate} 09:30 AM`, status: 'completed' },
          { name: 'Tax ID & Address Verification', date: `${userApp.submissionDate} 10:15 AM`, status: 'completed' },
          { name: 'Payment Processed (' + userApp.fee + ')', date: `${userApp.submissionDate} 10:20 AM`, status: 'completed' },
          { name: 'Ministry Legal Approval', date: 'In Progress', status: 'current' },
          { name: 'Digital Certificate Issued', date: 'Pending', status: 'pending' },
        ],
        crNumber: 'CR-PENDING',
        taxNumber: 'TAX-PROCESSING',
        governorate: userApp.governorate,
      });
      setSearched(true);
      return;
    }

    setResult(null);
    setSearched(true);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 max-w-4xl mx-auto my-6">
      
      {/* Tracker Title Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
        <div>
          <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
            Live Gateway Tracking
          </span>
          <h2 className="text-xl font-bold text-slate-900 mt-1">
            Track Ministry Application Status
          </h2>
        </div>

        {/* Quick Demo Code Pills */}
        <div className="hidden sm:flex items-center gap-2 text-xs">
          <span className="text-slate-400 font-medium">Try Sample Codes:</span>
          <button
            onClick={() => { setSearchCode('EG-2025-CR-9041'); setResult(DEMO_TRACKING_DATA['EG-2025-CR-9041']); setSearched(true); }}
            className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-mono font-bold transition"
          >
            EG-2025-CR-9041
          </button>
          <button
            onClick={() => { setSearchCode('EG-2025-TM-1102'); setResult(DEMO_TRACKING_DATA['EG-2025-TM-1102']); setSearched(true); }}
            className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-mono font-bold transition"
          >
            EG-2025-TM-1102
          </button>
        </div>
      </div>

      {/* Search Bar Input */}
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Enter tracking reference number (e.g., EG-2025-CR-9041)..."
              value={searchCode}
              onChange={(e) => setSearchCode(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0F2C59] font-mono font-semibold"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 bg-[#0F2C59] hover:bg-[#0A192F] text-amber-300 font-bold text-xs sm:text-sm rounded-xl transition shadow"
          >
            Track Application
          </button>
        </div>
      </form>

      {/* Tracking Result View */}
      {searched && result && (
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-6 animate-fadeIn">
          
          {/* Result Summary Bar */}
          <div className="bg-white p-4 rounded-xl border border-slate-200/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-bold block">Service Requested</span>
              <h3 className="text-base font-bold text-slate-900">{result.serviceName}</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Entity: <strong className="text-slate-800">{result.entityName}</strong> • Applicant: {result.applicantName}
              </p>
            </div>

            <div className="sm:text-right shrink-0">
              <span className="text-[10px] text-slate-400 uppercase font-bold block">Status</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                {result.status}
              </span>
            </div>
          </div>

          {/* Timeline Step Progress */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              Real-Time Processing Timeline
            </h4>

            <div className="space-y-3">
              {result.steps.map((st, idx) => {
                const isDone = st.status === 'completed';
                const isCurrent = st.status === 'current';
                return (
                  <div 
                    key={idx} 
                    className={`p-3.5 rounded-xl border flex items-center justify-between text-xs transition ${
                      isDone 
                        ? 'bg-emerald-50/50 border-emerald-200' 
                        : isCurrent 
                        ? 'bg-amber-50 border-amber-300 ring-2 ring-amber-200' 
                        : 'bg-white border-slate-200 opacity-60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                        isDone
                          ? 'bg-emerald-600 text-white'
                          : isCurrent
                          ? 'bg-amber-500 text-[#0A192F] animate-pulse'
                          : 'bg-slate-200 text-slate-500'
                      }`}>
                        {isDone ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                      </span>
                      <div>
                        <div className={`font-bold ${isDone ? 'text-slate-900' : isCurrent ? 'text-amber-900' : 'text-slate-600'}`}>
                          {st.name}
                        </div>
                        <div className="text-[10px] text-slate-400">{st.date}</div>
                      </div>
                    </div>

                    <span className="text-[11px] font-semibold text-slate-500">
                      {isDone ? 'Completed' : isCurrent ? 'Under Review' : 'Pending'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certificate Download Action */}
          {result.currentStep >= 4 && (
            <div className="p-4 bg-[#0A192F] text-white rounded-xl flex items-center justify-between border border-amber-500/40">
              <div className="flex items-center gap-3">
                <QrCode className="w-8 h-8 text-amber-400 shrink-0" />
                <div>
                  <span className="text-xs font-bold text-white block">Official Digital Certificate Available</span>
                  <span className="text-[11px] text-slate-300">Signed with QR verification code for bank & official use.</span>
                </div>
              </div>
              <button
                onClick={() => alert(`Downloading Certified Registration Copy for ${result.entityName}...`)}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-[#0A192F] font-bold text-xs rounded-lg transition shrink-0 flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" /> Download PDF
              </button>
            </div>
          )}

        </div>
      )}

      {/* Not found state */}
      {searched && !result && (
        <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200 my-4">
          <AlertCircle className="w-8 h-8 text-amber-600 mx-auto mb-2" />
          <h4 className="text-sm font-bold text-slate-800">Application Reference Not Found</h4>
          <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
            Please double-check the tracking code or try sample demo code <strong className="font-mono">EG-2025-CR-9041</strong>.
          </p>
        </div>
      )}

    </div>
  );
}
