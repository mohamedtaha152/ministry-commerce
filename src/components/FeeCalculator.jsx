import React, { useState } from 'react';
import { 
  Calculator, 
  Building2, 
  Coins, 
  CheckCircle2, 
  ArrowRight, 
  Info, 
  Sparkles,
  PieChart
} from 'lucide-react';

export default function FeeCalculator({ onStartServiceWithCapital }) {
  const [capital, setCapital] = useState(500000); // 500,000 EGP default
  const [companyType, setCompanyType] = useState('llc'); // 'sole' | 'llc' | 'sae' | 'foreign'
  const [governorate, setGovernorate] = useState('Cairo');

  // Calculation Logic according to Egyptian Commercial Law
  const calculateFees = () => {
    let baseRegistryFee = 150;
    let chamberFee = Math.min(Math.max(capital * 0.002, 200), 5000); // 0.2% capped
    let notaryFee = 120;
    let barAssociationFee = 0;
    let gafiCertFee = 0;

    if (companyType === 'sole') {
      baseRegistryFee = 180;
      notaryFee = 100;
    } else if (companyType === 'llc') {
      baseRegistryFee = 380;
      barAssociationFee = Math.min(capital * 0.005, 2500); // 0.5%
      gafiCertFee = 250;
    } else if (companyType === 'sae') {
      baseRegistryFee = 750;
      barAssociationFee = Math.min(capital * 0.005, 5000);
      gafiCertFee = 500;
    } else if (companyType === 'foreign') {
      baseRegistryFee = 1200;
      notaryFee = 450;
      gafiCertFee = 800;
    }

    const total = baseRegistryFee + chamberFee + notaryFee + barAssociationFee + gafiCertFee;

    return {
      baseRegistryFee: Math.round(baseRegistryFee),
      chamberFee: Math.round(chamberFee),
      notaryFee: Math.round(notaryFee),
      barAssociationFee: Math.round(barAssociationFee),
      gafiCertFee: Math.round(gafiCertFee),
      total: Math.round(total)
    };
  };

  const fees = calculateFees();

  return (
    <section className="py-8 bg-slate-50 min-h-[500px]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 mb-2">
            <Calculator className="w-3.5 h-3.5" /> Official Fee Estimator
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Egyptian Business Incorporation Fee Calculator
          </h2>
          <p className="text-xs text-slate-500 max-w-xl mx-auto mt-1">
            Calculate exact statutory registration fees, Chamber of Commerce dues, and Notary fees according to Egyptian Commercial Code No. 34/1976.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Input Panel */}
          <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            
            {/* Entity Type Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                1. Select Legal Form of Company
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { id: 'sole', label: 'Sole Proprietorship (فردية)' },
                  { id: 'llc', label: 'Limited Liability Co - LLC (ذ.م.م)' },
                  { id: 'sae', label: 'Joint Stock Co - S.A.E (ش.م.م)' },
                  { id: 'foreign', label: 'Branch of Foreign Corporation' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCompanyType(item.id)}
                    className={`p-3 rounded-xl border text-left font-medium transition ${
                      companyType === item.id
                        ? 'bg-[#0F2C59] text-amber-300 border-[#0F2C59] font-bold shadow-sm'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Capital Slider & Input */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  2. Entity Capital Amount (EGP)
                </label>
                <span className="text-base font-mono font-extrabold text-[#0F2C59]">
                  {capital.toLocaleString()} EGP
                </span>
              </div>

              <input
                type="range"
                min="50000"
                max="10000000"
                step="50000"
                value={capital}
                onChange={(e) => setCapital(Number(e.target.value))}
                className="w-full accent-[#0F2C59] cursor-pointer"
              />

              <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                <span>50,000 EGP</span>
                <span>1,000,000 EGP</span>
                <span>10,000,000 EGP</span>
              </div>
            </div>

            {/* Governorate */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                3. Registration Governorate Jurisdiction
              </label>
              <select
                value={governorate}
                onChange={(e) => setGovernorate(e.target.value)}
                className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0F2C59]"
              >
                <option value="Cairo">Cairo (Central Hub)</option>
                <option value="Giza">Giza (Smart Village / 6th October)</option>
                <option value="Alexandria">Alexandria (Port Zone)</option>
                <option value="Sharqia">Sharqia (10th of Ramadan Industrial)</option>
                <option value="Port Said">Port Said (Free Zone)</option>
                <option value="Asyut">Asyut (Upper Egypt Hub)</option>
              </select>
            </div>

          </div>

          {/* Fee Calculation Summary Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0A192F] to-[#0F2C59] text-white p-6 rounded-2xl border border-amber-500/30 shadow-xl space-y-6">
            
            <div className="border-b border-white/20 pb-4">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                Itemized Ministry Cost Summary
              </span>
              <div className="text-3xl font-extrabold text-white mt-1">
                {fees.total.toLocaleString()} <span className="text-sm font-normal text-amber-300 font-mono">EGP</span>
              </div>
              <p className="text-[11px] text-slate-300 mt-1">
                Total statutory fees payable for initial commercial registration in {governorate}.
              </p>
            </div>

            {/* Breakdown List */}
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between text-slate-300">
                <span>Ministry Registry Fee:</span>
                <span className="font-mono font-bold text-white">{fees.baseRegistryFee} EGP</span>
              </div>

              <div className="flex items-center justify-between text-slate-300">
                <span>Chamber of Commerce Tax:</span>
                <span className="font-mono font-bold text-white">{fees.chamberFee} EGP</span>
              </div>

              <div className="flex items-center justify-between text-slate-300">
                <span>Notary Public Stamping:</span>
                <span className="font-mono font-bold text-white">{fees.notaryFee} EGP</span>
              </div>

              {fees.barAssociationFee > 0 && (
                <div className="flex items-center justify-between text-slate-300">
                  <span>Bar Association Review Fee:</span>
                  <span className="font-mono font-bold text-white">{fees.barAssociationFee} EGP</span>
                </div>
              )}

              {fees.gafiCertFee > 0 && (
                <div className="flex items-center justify-between text-slate-300">
                  <span>GAFI Investment Certificate:</span>
                  <span className="font-mono font-bold text-white">{fees.gafiCertFee} EGP</span>
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-white/20">
              <button
                onClick={() => onStartServiceWithCapital(capital)}
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-[#0A192F] font-bold text-xs sm:text-sm rounded-xl transition shadow-lg flex items-center justify-center gap-2"
              >
                <span>Start Commercial Registration Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
