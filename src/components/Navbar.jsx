import React, { useState } from 'react';
import { 
  Building2, 
  Search, 
  CheckCircle2, 
  SearchCode, 
  Calculator, 
  MapPin, 
  User, 
  Bell, 
  Menu, 
  X, 
  Shield, 
  Sparkles,
  FileText,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  searchQuery, 
  setSearchQuery, 
  userPersona, 
  setUserPersona,
  onOpenTracker,
  onOpenVerifier
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  const notifications = [
    { id: 1, title: 'CR Renewal Reminder', desc: 'CR #1010992384 is due for annual tax sync in 14 days.', time: '2 hours ago', unread: true },
    { id: 2, title: 'Trademark Approved', desc: 'Trademark application TM-88392 passed legal inspection.', time: '1 day ago', unread: true },
    { id: 3, title: 'New Regulation Notice', desc: 'Updated export tariffs guidelines released for 2025.', time: '3 days ago', unread: false },
  ];

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
      {/* Top Government Official Bar */}
      <div className="bg-[#0A192F] text-slate-200 text-xs py-1.5 px-4 sm:px-8 flex justify-between items-center border-b border-amber-500/30">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-medium text-amber-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Arab Republic of Egypt
          </span>
          <span className="hidden md:inline text-slate-400">|</span>
          <span className="hidden md:inline text-slate-300">Governance and Management Institute - GMI</span>
        </div>
        <div className="flex items-center gap-4 text-slate-300">
          <span className="hidden sm:inline flex items-center gap-1 text-[11px] bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
            <Shield className="w-3 h-3 text-emerald-400" /> Official Secure Gov Portal (256-bit SSL)
          </span>
          <button 
            onClick={() => onOpenVerifier()}
            className="hover:text-amber-300 flex items-center gap-1 transition text-[11px] underline underline-offset-2"
          >
            <SearchCode className="w-3 h-3 text-amber-400" /> Verify License
          </button>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Official Egyptian Logo & Branding */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('services')}>
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#0F2C59] to-[#0A192F] text-amber-400 shadow-md border border-amber-500/40">
              {/* Eagle emblem representation */}
              <div className="text-center font-bold">
                <span className="block text-xs uppercase tracking-widest text-amber-400 font-serif">EG</span>
                <span className="block text-[10px] text-slate-200 font-mono -mt-1">GOV</span>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-amber-500 text-[#0A192F] rounded-full p-0.5 text-[8px] font-extrabold">
                ★
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-slate-900 tracking-tight leading-tight">
                  Governance and Management Institute - GMI
                </h1>
                <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 bg-amber-100 text-amber-900 rounded-md border border-amber-300">
                  EGYPT
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                National E-Services & Business Portal
              </p>
            </div>
          </div>

          {/* Center Search Bar (Desktop) */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search services (e.g., Commercial Register, Trademark, Export)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 hover:bg-slate-100 focus:bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F2C59] focus:border-transparent transition"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs bg-slate-200 rounded-full w-4 h-4 flex items-center justify-center"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Right Action Icons & Persona Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Status Check Button */}
            <button
              onClick={onOpenTracker}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition border border-slate-200"
            >
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              Track Status
            </button>

            {/* Notifications Menu */}
            <div className="relative">
              <button
                onClick={() => setNotifOpen(!notifOpen)}
                className="relative p-2 text-slate-600 hover:text-[#0F2C59] hover:bg-slate-100 rounded-lg transition"
                title="Notifications"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white"></span>
              </button>

              {notifOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-200 z-50 p-3">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                    <span className="font-semibold text-xs text-slate-800">Ministry Alerts</span>
                    <span className="text-[10px] text-blue-600 hover:underline cursor-pointer">Mark all read</span>
                  </div>
                  <div className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
                    {notifications.map((n) => (
                      <div key={n.id} className={`p-2 rounded-lg text-xs ${n.unread ? 'bg-blue-50/70 border border-blue-100' : 'bg-slate-50'}`}>
                        <div className="font-semibold text-slate-800">{n.title}</div>
                        <div className="text-slate-600 text-[11px] mt-0.5">{n.desc}</div>
                        <div className="text-[10px] text-slate-400 mt-1">{n.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Persona Selector */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 pl-3 pr-2 py-1.5 bg-[#0F2C59] hover:bg-[#0A192F] text-white rounded-xl text-xs font-medium shadow-sm transition border border-amber-500/30"
              >
                <User className="w-3.5 h-3.5 text-amber-400" />
                <span>{userPersona === 'business' ? 'Business Portal' : userPersona === 'investor' ? 'Foreign Investor' : 'Citizen Access'}</span>
                <ChevronDown className="w-3 h-3 text-slate-300" />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 z-50 py-1">
                  <div className="px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    Switch Persona View
                  </div>
                  <button
                    onClick={() => { setUserPersona('business'); setUserMenuOpen(false); }}
                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-50 ${userPersona === 'business' ? 'font-bold text-[#0F2C59] bg-blue-50/50' : 'text-slate-700'}`}
                  >
                    <span>Business / Corporation</span>
                    {userPersona === 'business' && <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />}
                  </button>
                  <button
                    onClick={() => { setUserPersona('individual'); setUserMenuOpen(false); }}
                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-50 ${userPersona === 'individual' ? 'font-bold text-[#0F2C59] bg-blue-50/50' : 'text-slate-700'}`}
                  >
                    <span>Individual Citizen</span>
                    {userPersona === 'individual' && <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />}
                  </button>
                  <button
                    onClick={() => { setUserPersona('investor'); setUserMenuOpen(false); }}
                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-50 ${userPersona === 'investor' ? 'font-bold text-[#0F2C59] bg-blue-50/50' : 'text-slate-700'}`}
                  >
                    <span>Foreign Investor (GAFI integrated)</span>
                    {userPersona === 'investor' && <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />}
                  </button>
                  <div className="border-t border-slate-100 mt-1 pt-1">
                    <button 
                      onClick={() => { setActiveTab('dashboard'); setUserMenuOpen(false); }}
                      className="w-full text-left px-3 py-2 text-xs text-amber-700 font-semibold hover:bg-amber-50 flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" /> Go to My E-Services Workspace
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Tabs */}
      <nav className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 sm:space-x-8 overflow-x-auto custom-scrollbar py-2 text-xs sm:text-sm font-medium">
            <button
              onClick={() => handleNavClick('services')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition flex items-center gap-1.5 ${
                activeTab === 'services'
                  ? 'bg-[#0F2C59] text-white shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Building2 className="w-4 h-4" /> E-Services Directory
            </button>

            <button
              onClick={() => handleNavClick('verifier')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition flex items-center gap-1.5 ${
                activeTab === 'verifier'
                  ? 'bg-[#0F2C59] text-white shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <SearchCode className="w-4 h-4 text-amber-500" /> License & CR Verifier
            </button>

            <button
              onClick={() => handleNavClick('calculator')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition flex items-center gap-1.5 ${
                activeTab === 'calculator'
                  ? 'bg-[#0F2C59] text-white shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Calculator className="w-4 h-4 text-emerald-600" /> Fee Estimator
            </button>

            <button
              onClick={() => handleNavClick('branches')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition flex items-center gap-1.5 ${
                activeTab === 'branches'
                  ? 'bg-[#0F2C59] text-white shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <MapPin className="w-4 h-4 text-rose-500" /> Branch Locator & Queues
            </button>

            <button
              onClick={() => handleNavClick('dashboard')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition flex items-center gap-1.5 ${
                activeTab === 'dashboard'
                  ? 'bg-[#0F2C59] text-white shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <User className="w-4 h-4 text-amber-500" /> My Investor Workspace
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 p-4 space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-100 rounded-lg border border-slate-200"
            />
          </div>
          <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
            <button
              onClick={() => onOpenTracker()}
              className="w-full py-2 bg-blue-50 text-blue-800 text-xs font-semibold rounded-lg text-center"
            >
              Track Application Status
            </button>
            <button
              onClick={() => onOpenVerifier()}
              className="w-full py-2 bg-amber-50 text-amber-900 text-xs font-semibold rounded-lg text-center"
            >
              Verify Egyptian Business License
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
