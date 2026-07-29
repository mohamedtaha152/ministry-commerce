import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCatalog from './components/ServiceCatalog';
import ServiceDetailModal from './components/ServiceDetailModal';
import ApplicationWizardModal from './components/ApplicationWizardModal';
import StatusTracker from './components/StatusTracker';
import VerificationPortal from './components/VerificationPortal';
import FeeCalculator from './components/FeeCalculator';
import BranchLocator from './components/BranchLocator';
import InvestorDashboard from './components/InvestorDashboard';
import CommerceBot from './components/CommerceBot';
import Footer from './components/Footer';
import { SAMPLE_SERVICES } from './data/servicesData';
import { FileText, X } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('services');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [userPersona, setUserPersona] = useState('business');

  // Modal States
  const [detailService, setDetailService] = useState(null);
  const [wizardService, setWizardService] = useState(null);
  const [isTrackerModalOpen, setIsTrackerModalOpen] = useState(false);

  // Submitted applications state
  const [userSubmittedApps, setUserSubmittedApps] = useState([]);

  // Handlers
  const handleStartService = (service) => {
    setWizardService(service);
  };

  const handleSelectServiceDetail = (service) => {
    setDetailService(service);
  };

  const handleSelectHeroCategory = (catId) => {
    setSelectedCategory(catId);
    setActiveTab('services');
  };

  const handleQuickAction = (serviceId) => {
    const srv = SAMPLE_SERVICES.find(s => s.id === serviceId) || SAMPLE_SERVICES[0];
    setWizardService(srv);
  };

  const handleStartServiceWithCapital = (cap) => {
    const crService = SAMPLE_SERVICES.find(s => s.id === 'eg-cr-01') || SAMPLE_SERVICES[0];
    setWizardService(crService);
  };

  const handleAddSubmittedApplication = (newApp) => {
    setUserSubmittedApps(prev => [newApp, ...prev]);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 font-sans selection:bg-amber-200 selection:text-amber-900">

      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        userPersona={userPersona}
        setUserPersona={setUserPersona}
        onOpenTracker={() => setIsTrackerModalOpen(true)}
        onOpenVerifier={() => setActiveTab('verifier')}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1">

        {/* TAB 1: E-SERVICES DIRECTORY */}
        {activeTab === 'services' && (
          <div>
            <Hero
              onSelectCategory={handleSelectHeroCategory}
              onQuickAction={handleQuickAction}
            />
            <ServiceCatalog
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              onSelectService={handleSelectServiceDetail}
              onStartService={handleStartService}
            />
          </div>
        )}

        {/* TAB 2: LICENSE & CR VERIFIER */}
        {activeTab === 'verifier' && (
          <VerificationPortal />
        )}

        {/* TAB 3: FEE ESTIMATOR */}
        {activeTab === 'calculator' && (
          <FeeCalculator
            onStartServiceWithCapital={handleStartServiceWithCapital}
          />
        )}

        {/* TAB 4: BRANCH LOCATOR & QUEUE MAP */}
        {activeTab === 'branches' && (
          <BranchLocator />
        )}

        {/* TAB 5: INVESTOR & CITIZEN DASHBOARD */}
        {activeTab === 'dashboard' && (
          <InvestorDashboard
            userPersona={userPersona}
            userSubmittedApps={userSubmittedApps}
            onStartService={handleStartService}
          />
        )}

      </main>

      {/* Service Requirement Guide Modal */}
      {detailService && (
        <ServiceDetailModal
          service={detailService}
          onClose={() => setDetailService(null)}
          onStartService={handleStartService}
        />
      )}

      {/* Service Application Wizard Modal */}
      {wizardService && (
        <ApplicationWizardModal
          service={wizardService}
          onClose={() => setWizardService(null)}
          onAddSubmittedApplication={handleAddSubmittedApplication}
        />
      )}

      {/* Quick Application Tracker Modal */}
      {isTrackerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 w-full max-w-3xl max-h-[90vh] overflow-y-auto custom-scrollbar relative shadow-2xl">
            <button
              onClick={() => setIsTrackerModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-lg bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
            <StatusTracker
              isOpen={isTrackerModalOpen}
              onClose={() => setIsTrackerModalOpen(false)}
              userSubmittedApps={userSubmittedApps}
            />
          </div>
        </div>
      )}

      {/* AI Floating Commerce Assistant */}
      <CommerceBot />

      {/* Official Government Footer */}
      <Footer onNavigate={(tab) => setActiveTab(tab)} />

    </div>
  );
}
