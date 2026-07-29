import React, { useState, useMemo } from 'react';
import { 
  SERVICE_CATEGORIES, 
  BENEFICIARIES, 
  SAMPLE_SERVICES 
} from '../data/servicesData';
import ServiceCard from './ServiceCard';
import { 
  Search, 
  Filter, 
  SlidersHorizontal, 
  LayoutGrid, 
  List, 
  RotateCcw,
  Sparkles,
  Building2,
  Award,
  Ship,
  Factory,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';

export default function ServiceCatalog({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory,
  onSelectService,
  onStartService 
}) {
  const [selectedBeneficiary, setSelectedBeneficiary] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'

  // Dynamic Icon Helper
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'commercial-registry': return <Building2 className="w-4 h-4" />;
      case 'trademarks-ip': return <Award className="w-4 h-4" />;
      case 'import-export': return <Ship className="w-4 h-4" />;
      case 'industrial-registry': return <Factory className="w-4 h-4" />;
      case 'consumer-protection': return <ShieldCheck className="w-4 h-4" />;
      case 'standards-quality': return <CheckCircle2 className="w-4 h-4" />;
      default: return <LayoutGrid className="w-4 h-4" />;
    }
  };

  // Filtered & Sorted Services
  const filteredServices = useMemo(() => {
    return SAMPLE_SERVICES.filter((service) => {
      // Category Match
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      
      // Beneficiary Match
      const matchesBeneficiary = selectedBeneficiary === 'all' || service.beneficiaries.includes(selectedBeneficiary);
      
      // Search Query Match
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery = !query || 
        service.title.toLowerCase().includes(query) ||
        service.code.toLowerCase().includes(query) ||
        service.categoryName.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query);

      return matchesCategory && matchesBeneficiary && matchesQuery;
    }).sort((a, b) => {
      if (sortBy === 'popular') return b.reviewsCount - a.reviewsCount;
      if (sortBy === 'fee-low') return a.fee - b.fee;
      if (sortBy === 'fee-high') return b.fee - a.fee;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
  }, [selectedCategory, selectedBeneficiary, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedBeneficiary('all');
    setSearchQuery('');
    setSortBy('popular');
  };

  return (
    <section className="py-8 bg-slate-50 min-h-[600px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Tab Bar */}
        <div className="mb-6 overflow-x-auto custom-scrollbar pb-2">
          <div className="flex gap-2">
            {SERVICE_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center gap-2 whitespace-nowrap border ${
                    isActive
                      ? 'bg-[#0F2C59] text-white border-[#0F2C59] shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
                  }`}
                >
                  <span className={isActive ? 'text-amber-400' : 'text-slate-500'}>
                    {getCategoryIcon(cat.id)}
                  </span>
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Controls & View Toggle Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Beneficiary Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5" /> For:
            </span>
            <div className="flex gap-1.5">
              {BENEFICIARIES.map((ben) => (
                <button
                  key={ben.id}
                  onClick={() => setSelectedBeneficiary(ben.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition whitespace-nowrap ${
                    selectedBeneficiary === ben.id
                      ? 'bg-amber-100 text-amber-900 font-bold border border-amber-300'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {ben.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Sort & View Controls */}
          <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto shrink-0">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <label className="text-xs text-slate-500 font-medium">Sort:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-50 border border-slate-200 text-xs font-medium rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#0F2C59]"
              >
                <option value="popular">Most Popular</option>
                <option value="fee-low">Fee: Low to High</option>
                <option value="fee-high">Fee: High to Low</option>
                <option value="title">Alphabetical (A-Z)</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md text-xs transition ${viewMode === 'grid' ? 'bg-white text-[#0F2C59] shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-md text-xs transition ${viewMode === 'table' ? 'bg-white text-[#0F2C59] shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
                title="Table View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Search Results Summary */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs text-slate-500 font-medium">
            Showing <strong className="text-slate-900 font-bold">{filteredServices.length}</strong> available ministry services
            {searchQuery && (
              <span> matching "<strong className="text-blue-700">{searchQuery}</strong>"</span>
            )}
          </div>

          {(selectedCategory !== 'all' || selectedBeneficiary !== 'all' || searchQuery) && (
            <button
              onClick={handleResetFilters}
              className="text-xs text-rose-600 hover:text-rose-800 font-medium flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Clear Filters
            </button>
          )}
        </div>

        {/* Empty Search State */}
        {filteredServices.length === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm max-w-lg mx-auto my-8">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400 mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-800 mb-1">No Matching E-Services Found</h3>
            <p className="text-xs text-slate-500 mb-6">
              We couldn't find any services matching your filters or search keywords.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 bg-[#0F2C59] text-white text-xs font-semibold rounded-xl hover:bg-[#0A192F] transition"
            >
              Reset Search & View All Services
            </button>
          </div>
        )}

        {/* Grid View Mode */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelectService={onSelectService}
                onStartService={onStartService}
              />
            ))}
          </div>
        )}

        {/* Table / List View Mode */}
        {viewMode === 'table' && filteredServices.length > 0 && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="py-3.5 px-4">Service Code</th>
                    <th className="py-3.5 px-4">Service Title</th>
                    <th className="py-3.5 px-4">Category</th>
                    <th className="py-3.5 px-4">Execution Time</th>
                    <th className="py-3.5 px-4">Fee (EGP)</th>
                    <th className="py-3.5 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredServices.map((service) => (
                    <tr key={service.id} className="hover:bg-slate-50/80 transition">
                      <td className="py-3.5 px-4 font-mono font-bold text-slate-500">
                        {service.code}
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-slate-900 hover:text-[#0F2C59] cursor-pointer" onClick={() => onSelectService(service)}>
                          {service.title}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1 max-w-md">
                          {service.description}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-slate-600">
                        {service.categoryName}
                      </td>
                      <td className="py-3.5 px-4 font-medium text-blue-700">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {service.executionTime}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        {service.feeFormatted}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => onStartService(service)}
                          className="px-3 py-1.5 bg-[#0F2C59] text-amber-300 font-bold text-xs rounded-lg hover:bg-[#0A192F] transition inline-flex items-center gap-1"
                        >
                          Start <ArrowRight className="w-3 h-3" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
