import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Upload, 
  ShieldCheck, 
  FileText, 
  CreditCard, 
  QrCode, 
  Download, 
  Copy, 
  CheckCircle2, 
  Building, 
  User, 
  MapPin, 
  Sparkles,
  ExternalLink,
  AlertCircle
} from 'lucide-react';

export default function ApplicationWizardModal({ service, onClose, onAddSubmittedApplication }) {
  if (!service) return null;

  const [step, setStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    fullName: 'Mohamed El-Sayed',
    nationalId: '29810150102938',
    email: 'm.elsayed@nilevalley.eg',
    phone: '+20 100 123 4567',
    companyName: 'Nile Star Commercial Import & Export',
    legalForm: 'Limited Liability Company (LLC)',
    capitalEgp: '500,000',
    governorate: 'Cairo (Downtown)',
    address: '26 Ramses Street, Cairo, Egypt',
    uploadedFiles: [
      { name: 'National_ID_Scan.pdf', size: '1.2 MB', status: 'Uploaded' },
      { name: 'Lease_Agreement_Notarized.pdf', size: '2.4 MB', status: 'Uploaded' }
    ],
    paymentMethod: 'fawry', // 'fawry' | 'meeza' | 'card' | 'wallet'
  });

  const [copiedCode, setCopiedCode] = useState(false);
  const [generatedReference, setGeneratedReference] = useState('');
  const [fawryCode, setFawryCode] = useState('');

  const governorates = [
    'Cairo', 'Giza', 'Alexandria', 'Sharqia', 'Dakahlia', 'Beheira', 
    'Gharbia', 'Monufia', 'Qalyubia', 'Suez', 'Port Said', 'Ismailia', 
    'Red Sea', 'Asyut', 'Luxor', 'Aswan'
  ];

  const handleNextStep = () => {
    if (step === 3) {
      // Transitioning to payment: generate reference IDs
      const ref = `EG-2025-${service.code.split('-')[1] || 'CR'}-${Math.floor(1000 + Math.random() * 9000)}`;
      const fawry = `${Math.floor(90000000 + Math.random() * 90000000)}`;
      setGeneratedReference(ref);
      setFawryCode(fawry);
    }

    if (step === 4) {
      // Complete payment & submit
      triggerConfetti();
      const newApp = {
        refCode: generatedReference,
        serviceName: service.title,
        applicantName: formData.fullName,
        entityName: formData.companyName,
        submissionDate: new Date().toISOString().split('T')[0],
        status: 'Submitted & Processing',
        currentStep: 2,
        governorate: formData.governorate,
        fee: service.feeFormatted,
      };
      if (onAddSubmittedApplication) {
        onAddSubmittedApplication(newApp);
      }
    }

    setStep((prev) => Math.min(prev + 1, 5));
  };

  const handlePrevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // fallback
    }
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-fadeIn">
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-3xl max-h-[92vh] overflow-y-auto custom-scrollbar flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Wizard Header */}
        <div className="bg-[#0A192F] text-white p-5 sticky top-0 z-10 border-b border-amber-500/30 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/40">
                Official E-Application Wizard
              </span>
              <span className="text-xs text-slate-300 font-mono">
                {service.code}
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              {service.title}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-lg transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper Progress Bar */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-3">
          <div className="flex items-center justify-between max-w-xl mx-auto text-xs font-semibold">
            {[
              { num: 1, label: 'Applicant' },
              { num: 2, label: 'Business Data' },
              { num: 3, label: 'Documents' },
              { num: 4, label: 'E-Payment' },
              { num: 5, label: 'Certificate' },
            ].map((s) => (
              <div key={s.num} className="flex items-center gap-1.5">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition ${
                  step > s.num
                    ? 'bg-emerald-600 text-white'
                    : step === s.num
                    ? 'bg-[#0F2C59] text-amber-300 ring-2 ring-amber-400'
                    : 'bg-slate-200 text-slate-500'
                }`}>
                  {step > s.num ? <Check className="w-3.5 h-3.5" /> : s.num}
                </span>
                <span className={`hidden sm:inline ${step === s.num ? 'text-slate-900 font-bold' : 'text-slate-500'}`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Wizard Form Body */}
        <div className="p-6 space-y-6 flex-1">
          
          {/* STEP 1: Applicant Info */}
          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-blue-50/60 p-3.5 rounded-xl border border-blue-100 flex items-center gap-3">
                <User className="w-5 h-5 text-blue-700 shrink-0" />
                <div className="text-xs text-slate-700">
                  <span className="font-bold text-slate-900 block">Egyptian Citizen / Resident Verification</span>
                  Provide valid Egyptian National ID (14 digits) or Passport for verification with Ministry database.
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Legal Name (as in NID)</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0F2C59]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">National ID Number (14 Digits)</label>
                  <input
                    type="text"
                    value={formData.nationalId}
                    onChange={(e) => setFormData({ ...formData, nationalId: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0F2C59] font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Official Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0F2C59]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Egyptian Phone (+20)</label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0F2C59]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Business & Commercial Entity Data */}
          {step === 2 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-amber-50/60 p-3.5 rounded-xl border border-amber-200/80 flex items-center gap-3">
                <Building className="w-5 h-5 text-amber-700 shrink-0" />
                <div className="text-xs text-slate-700">
                  <span className="font-bold text-slate-900 block">Commercial Entity Details</span>
                  Provide official trade title, legal structure, and registered office governorate in Egypt.
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">Proposed Trade / Entity Name (English or Arabic)</label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0F2C59]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Legal Structure Form</label>
                  <select
                    value={formData.legalForm}
                    onChange={(e) => setFormData({ ...formData, legalForm: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0F2C59]"
                  >
                    <option value="Sole Proprietorship">Sole Proprietorship (فردية)</option>
                    <option value="Limited Liability Company (LLC)">Limited Liability Company - LLC (ذ.م.م)</option>
                    <option value="Joint Stock Company (S.A.E)">Joint Stock Company - S.A.E (ش.م.م)</option>
                    <option value="Branch of Foreign Company">Branch of Foreign Corporation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Declared Capital (EGP)</label>
                  <input
                    type="text"
                    value={formData.capitalEgp}
                    onChange={(e) => setFormData({ ...formData, capitalEgp: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0F2C59] font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Headquarters Governorate</label>
                  <select
                    value={formData.governorate}
                    onChange={(e) => setFormData({ ...formData, governorate: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0F2C59]"
                  >
                    {governorates.map((gov) => (
                      <option key={gov} value={gov}>{gov} Governorate</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Street Address / Lease Location</label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0F2C59]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Document Uploads */}
          {step === 3 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="border-2 border-dashed border-slate-300 hover:border-[#0F2C59] rounded-2xl p-6 text-center bg-slate-50/50 hover:bg-slate-50 transition cursor-pointer">
                <Upload className="w-8 h-8 text-[#0F2C59] mx-auto mb-2" />
                <h4 className="text-xs font-bold text-slate-800">Drag & Drop Required Documents Here</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Supports PDF, JPG, PNG up to 10MB per file</p>
                <button className="mt-3 px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg text-xs font-semibold">
                  Browse Device
                </button>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-700 block mb-2">Attached Documents Checklist:</span>
                <div className="space-y-2">
                  {formData.uploadedFiles.map((file, idx) => (
                    <div key={idx} className="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-blue-600" />
                        <div>
                          <div className="font-semibold text-slate-800">{file.name}</div>
                          <div className="text-[10px] text-slate-400">{file.size} • {file.status}</div>
                        </div>
                      </div>
                      <span className="text-emerald-600 font-bold text-xs flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Fee Review & Egyptian E-Payment */}
          {step === 4 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-slate-900 text-white p-4 rounded-xl flex items-center justify-between border border-amber-500/40">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-amber-400 font-semibold block">Total Ministry Service Fee</span>
                  <span className="text-2xl font-extrabold text-white">{service.feeFormatted}</span>
                </div>
                <div className="text-right text-xs text-slate-300">
                  <span className="block font-mono text-amber-300">Ref: {generatedReference}</span>
                  <span className="text-[10px] text-slate-400">Includes Notary & Chamber dues</span>
                </div>
              </div>

              <span className="text-xs font-bold text-slate-700 block">Select Egyptian E-Payment Gateway:</span>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <button
                  onClick={() => setFormData({ ...formData, paymentMethod: 'fawry' })}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between transition ${
                    formData.paymentMethod === 'fawry'
                      ? 'border-amber-500 bg-amber-50/60 ring-2 ring-amber-400 font-bold text-slate-900'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded bg-amber-400 font-black text-[9px] text-[#0A192F] flex items-center justify-center">F</span>
                    <span>Fawry Pay Code</span>
                  </div>
                  {formData.paymentMethod === 'fawry' && <CheckCircle2 className="w-4 h-4 text-amber-600" />}
                </button>

                <button
                  onClick={() => setFormData({ ...formData, paymentMethod: 'meeza' })}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between transition ${
                    formData.paymentMethod === 'meeza'
                      ? 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-500 font-bold text-slate-900'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-blue-700" />
                    <span>Meeza Egyptian Card</span>
                  </div>
                  {formData.paymentMethod === 'meeza' && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                </button>

                <button
                  onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between transition ${
                    formData.paymentMethod === 'card'
                      ? 'border-indigo-600 bg-indigo-50/60 ring-2 ring-indigo-500 font-bold text-slate-900'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-indigo-700" />
                    <span>Visa / Mastercard</span>
                  </div>
                  {formData.paymentMethod === 'card' && <CheckCircle2 className="w-4 h-4 text-indigo-600" />}
                </button>

                <button
                  onClick={() => setFormData({ ...formData, paymentMethod: 'wallet' })}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between transition ${
                    formData.paymentMethod === 'wallet'
                      ? 'border-emerald-600 bg-emerald-50/60 ring-2 ring-emerald-500 font-bold text-slate-900'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-700" />
                    <span>Smart Mobile Wallet</span>
                  </div>
                  {formData.paymentMethod === 'wallet' && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                </button>
              </div>

              {formData.paymentMethod === 'fawry' && (
                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-amber-900">Fawry Pay Reference Code:</span>
                    <button 
                      onClick={() => handleCopy(fawryCode)} 
                      className="text-amber-800 hover:underline font-bold flex items-center gap-1"
                    >
                      <Copy className="w-3.5 h-3.5" /> {copiedCode ? 'Copied!' : 'Copy Code'}
                    </button>
                  </div>
                  <div className="text-2xl font-mono font-black text-slate-900 tracking-wider bg-white p-2.5 rounded-lg border border-amber-300 text-center">
                    {fawryCode}
                  </div>
                  <p className="text-[11px] text-amber-800">
                    Pay at any Fawry kiosk or bank app within 72 hours under code <strong className="font-bold">#788 Commercial Ministry</strong>.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* STEP 5: Success & Generated Digital Certificate */}
          {step === 5 && (
            <div className="space-y-5 text-center animate-fadeIn py-2">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">Application Submitted & Verified!</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Your application has been received by the Ministry of Trade & Industry database.
                </p>
              </div>

              {/* Digital Certificate Preview Card */}
              <div className="p-6 bg-gradient-to-br from-[#0A192F] to-[#0F2C59] text-white rounded-2xl border-2 border-amber-400/80 shadow-2xl text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-amber-400/10 rounded-full blur-xl pointer-events-none"></div>

                <div className="flex items-center justify-between border-b border-white/20 pb-3 mb-4">
                  <div>
                    <span className="text-[10px] text-amber-400 uppercase font-bold tracking-widest block">Arab Republic of Egypt</span>
                    <span className="text-xs font-bold text-white">Ministry Certificate of Registration</span>
                  </div>
                  <div className="bg-white p-1 rounded-lg">
                    <QrCode className="w-8 h-8 text-slate-900" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block">Tracking Reference</span>
                    <span className="font-mono font-bold text-amber-300">{generatedReference}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block">Entity Title</span>
                    <span className="font-bold text-white truncate block">{formData.companyName}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block">Applicant</span>
                    <span className="text-slate-200">{formData.fullName}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block">Governorate</span>
                    <span className="text-slate-200">{formData.governorate}</span>
                  </div>
                </div>

                <div className="bg-emerald-500/20 border border-emerald-400/40 p-2 rounded-lg text-center text-[11px] text-emerald-300 font-semibold">
                  ✓ Verified Digital Signature • Valid Across All Egyptian Government Entities
                </div>
              </div>

              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={() => alert(`Downloading Certified Receipt PDF (${generatedReference}.pdf)...`)}
                  className="px-4 py-2 bg-[#0F2C59] text-amber-300 text-xs font-bold rounded-xl hover:bg-[#0A192F] transition flex items-center gap-1.5 shadow"
                >
                  <Download className="w-4 h-4" /> Download Official PDF Receipt
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Wizard Footer Controls */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between sticky bottom-0 z-10">
          {step > 1 && step < 5 ? (
            <button
              onClick={handlePrevStep}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-xl transition flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back
            </button>
          ) : (
            <div></div>
          )}

          {step < 5 ? (
            <button
              onClick={handleNextStep}
              className="px-6 py-2.5 bg-[#0F2C59] hover:bg-[#0A192F] text-amber-300 font-bold text-xs sm:text-sm rounded-xl transition flex items-center gap-2 shadow-md"
            >
              <span>{step === 4 ? 'Confirm & Process Payment' : 'Continue Step'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-md"
            >
              Return to E-Services Portal
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
