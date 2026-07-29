// Egyptian Ministry of Trade & Industry E-Services Data

export const SERVICE_CATEGORIES = [
  { id: 'all', name: 'All Services', icon: 'LayoutGrid', count: 24 },
  { id: 'commercial-registry', name: 'Commercial Registry', icon: 'Building2', count: 6 },
  { id: 'trademarks-ip', name: 'Trademarks & IP', icon: 'Award', count: 5 },
  { id: 'import-export', name: 'Import & Export', icon: 'Ship', count: 4 },
  { id: 'industrial-registry', name: 'Industrial Licensing', icon: 'Factory', count: 3 },
  { id: 'consumer-protection', name: 'Consumer Protection', icon: 'ShieldCheck', count: 3 },
  { id: 'standards-quality', name: 'Standards & Quality', icon: 'CheckCircle2', count: 3 },
];

export const BENEFICIARIES = [
  { id: 'all', label: 'All Applicants' },
  { id: 'business', label: 'Businesses & Corporations' },
  { id: 'individual', label: 'Individual Citizens' },
  { id: 'investor', label: 'Foreign Investors' },
];

export const SAMPLE_SERVICES = [
  {
    id: 'eg-cr-01',
    code: 'EG-CR-01',
    title: 'Issue New Commercial Registration Certificate',
    category: 'commercial-registry',
    categoryName: 'Commercial Registry',
    beneficiaries: ['business', 'individual', 'investor'],
    executionTime: 'Instant (24h)',
    fee: 380,
    feeFormatted: '380 EGP',
    rating: 4.9,
    reviewsCount: 3420,
    featured: true,
    popular: true,
    description: 'Official issuance of a new Commercial Registration Number (CRN) for Sole Proprietorships, LLCs, or S.A.E Joint Stock companies operating in Egypt.',
    requirements: [
      'Valid Egyptian National ID or Passport (for foreigners)',
      'Proof of Headquarters Address or Lease Agreement registered in Notary Office',
      'Tax Identification Card (TIN) from Egyptian Tax Authority',
      'Bank Certificate showing minimum capital deposit',
    ],
    documentsNeeded: [
      'Copy of ID/Passport',
      'Lease/Property deed copy',
      'Articles of Association (for LLCs)',
    ],
    steps: [
      'Enter entity details and select main business activity',
      'Provide owner/partners information',
      'Upload supporting documents',
      'Pay ministry fees via Fawry, Meeza, or Credit Card',
      'Download certified digital CR with QR code',
    ]
  },
  {
    id: 'eg-cr-02',
    code: 'EG-CR-02',
    title: 'Renew Commercial Registration',
    category: 'commercial-registry',
    categoryName: 'Commercial Registry',
    beneficiaries: ['business', 'individual'],
    executionTime: 'Instant',
    fee: 210,
    feeFormatted: '210 EGP',
    rating: 4.8,
    reviewsCount: 1890,
    featured: true,
    popular: true,
    description: 'Renew existing commercial register validity for 5 consecutive years with automatic sync to Egyptian Tax Authority records.',
    requirements: [
      'Active Commercial Register Number (CRN)',
      'Clearance of previous dues',
    ],
    documentsNeeded: [
      'Existing CR Number',
    ],
    steps: [
      'Lookup active CR number',
      'Confirm entity details and active tax status',
      'Process renewal payment',
      'Receive instant digital renewal certificate',
    ]
  },
  {
    id: 'eg-cr-03',
    code: 'EG-CR-03',
    title: 'Extract Certified Digital Copy of Commercial Register',
    category: 'commercial-registry',
    categoryName: 'Commercial Registry',
    beneficiaries: ['business', 'individual', 'investor'],
    executionTime: 'Instant',
    fee: 90,
    feeFormatted: '90 EGP',
    rating: 4.9,
    reviewsCount: 5120,
    featured: false,
    popular: true,
    description: 'Generate an officially signed digital extract of any registered company in Egypt with live QR verification code.',
    requirements: [
      'CR Number or Company Legal Name',
    ],
    documentsNeeded: [
      'Applicant ID',
    ],
    steps: [
      'Input CR Number',
      'Verify details',
      'Pay fee online',
      'Instant PDF download',
    ]
  },
  {
    id: 'eg-tm-01',
    code: 'EG-TM-01',
    title: 'Register New Trademark or Trade Name',
    category: 'trademarks-ip',
    categoryName: 'Trademarks & IP',
    beneficiaries: ['business', 'investor', 'individual'],
    executionTime: '3-5 Days (Examination)',
    fee: 1250,
    feeFormatted: '1,250 EGP',
    rating: 4.7,
    reviewsCount: 940,
    featured: true,
    popular: true,
    description: 'Protect brand names, logos, or slogans under the Egyptian Intellectual Property Rights Law No. 82/2002.',
    requirements: [
      'High-resolution digital copy of trademark logo',
      'Detailed list of Nice Classification goods/services',
      'Power of Attorney if submitted by legal representative',
    ],
    documentsNeeded: [
      'Logo image file (PNG/JPEG)',
      'CR copy or Individual ID',
    ],
    steps: [
      'Perform automated similarity search',
      'Submit trademark application & mark class',
      'Pay filing fee',
      'Track status through publication & official grant',
    ]
  },
  {
    id: 'eg-tm-02',
    code: 'EG-TM-02',
    title: 'Renew Trademark Protection (10 Years)',
    category: 'trademarks-ip',
    categoryName: 'Trademarks & IP',
    beneficiaries: ['business', 'investor'],
    executionTime: '1 Business Day',
    fee: 1800,
    feeFormatted: '1,800 EGP',
    rating: 4.8,
    reviewsCount: 420,
    featured: false,
    popular: false,
    description: 'Extend existing registered trademark legal protection for an additional 10-year term.',
    requirements: [
      'Existing Trademark Registration Number',
      'Applicant proof of ownership',
    ],
    documentsNeeded: [
      'Original Certificate copy',
    ],
    steps: [
      'Provide Trademark Registration No.',
      'Validate ownership data',
      'Pay renewal fee',
      'Download extended protection certificate',
    ]
  },
  {
    id: 'eg-exp-01',
    code: 'EG-EXP-01',
    title: 'Issue Exporters Registry Card',
    category: 'import-export',
    categoryName: 'Import & Export',
    beneficiaries: ['business', 'investor'],
    executionTime: '2 Business Days',
    fee: 950,
    feeFormatted: '950 EGP',
    rating: 4.8,
    reviewsCount: 1120,
    featured: true,
    popular: true,
    description: 'Obtain an official Exporters Registry Card required to export goods outside Egypt under Law No. 118/1975.',
    requirements: [
      'Commercial Registration showing export activities',
      'Export training completion certificate from Foreign Trade Training Center',
      'Clean criminal background record certificate',
    ],
    documentsNeeded: [
      'Commercial Register extract',
      'Criminal record certificate',
      'Export training certificate',
    ],
    steps: [
      'Enter Exporter details and export category',
      'Upload training certificate and documents',
      'Submit for GOEIC review',
      'Receive official Exporter Card',
    ]
  },
  {
    id: 'eg-imp-01',
    code: 'EG-IMP-01',
    title: 'Issue Importers Registry Card',
    category: 'import-export',
    categoryName: 'Import & Export',
    beneficiaries: ['business', 'investor'],
    executionTime: '3 Business Days',
    fee: 2500,
    feeFormatted: '2,500 EGP',
    rating: 4.6,
    reviewsCount: 880,
    featured: false,
    popular: true,
    description: 'Obtain mandatory license to import commercial products into Egypt according to Importers Registry Law No. 121/1982.',
    requirements: [
      'Company Capital minimum EGP 2,000,000 for LLCs / EGP 500k for Sole Proprietorships',
      'Bank letter guarantee',
      'Import practice training course certificate',
    ],
    documentsNeeded: [
      'Bank Guarantee Letter',
      'Tax Card copy',
      'Audited Financial Statement',
    ],
    steps: [
      'Fill Importer Registry form',
      'Upload capital proof & guarantees',
      'Pay ministry fees',
      'Get license clearance',
    ]
  },
  {
    id: 'eg-ind-01',
    code: 'EG-IND-01',
    title: 'Industrial Operating License & Registry',
    category: 'industrial-registry',
    categoryName: 'Industrial Licensing',
    beneficiaries: ['business', 'investor'],
    executionTime: '3 Business Days',
    fee: 1500,
    feeFormatted: '1,500 EGP',
    rating: 4.9,
    reviewsCount: 610,
    featured: true,
    popular: true,
    description: 'Issue operating license and industrial registry certificate from the Industrial Development Authority (IDA Egypt).',
    requirements: [
      'Industrial site allocation / land title deed',
      'Environmental Impact Assessment approval from EEAA',
      'Civil Defense safety clearance certificate',
    ],
    documentsNeeded: [
      'Factory layout map',
      'Environmental approval document',
      'Fire safety certificate',
    ],
    steps: [
      'Specify industrial sector and factory location',
      'Attach safety & environmental clearances',
      'Pay IDA inspection fees',
      'Issuance of Industrial Registry Card',
    ]
  },
  {
    id: 'eg-cp-01',
    code: 'EG-CP-01',
    title: 'File Consumer Protection Complaint',
    category: 'consumer-protection',
    categoryName: 'Consumer Protection',
    beneficiaries: ['individual', 'business'],
    executionTime: 'Instant Tracking',
    fee: 0,
    feeFormatted: 'Free of Charge',
    rating: 4.9,
    reviewsCount: 7800,
    featured: true,
    popular: true,
    description: 'Submit an official complaint to the Consumer Protection Agency (CPA Egypt) regarding defective products, price gouging, or breach of warranty.',
    requirements: [
      'Proof of purchase (Invoice / Receipt / Bill)',
      'Merchant / Store details and location',
      'Description of defect or unfair trade practice',
    ],
    documentsNeeded: [
      'Receipt or Invoice photo',
      'Product images (if defective)',
    ],
    steps: [
      'Select complaint category (Electronics, Vehicles, Appliances, E-commerce, Retail)',
      'Enter merchant location and invoice details',
      'Describe grievance',
      'Instant referral to CPA inspection team with live reference ID',
    ]
  },
  {
    id: 'eg-sq-01',
    code: 'EG-SQ-01',
    title: 'Apply for Egyptian Quality Mark (EOS)',
    category: 'standards-quality',
    categoryName: 'Standards & Quality',
    beneficiaries: ['business', 'investor'],
    executionTime: '5 Business Days',
    fee: 3200,
    feeFormatted: '3,200 EGP',
    rating: 4.8,
    reviewsCount: 390,
    featured: false,
    popular: false,
    description: 'Obtain Egyptian Organization for Standardization (EOS) certification seal for manufactured products in Egypt.',
    requirements: [
      'Active Industrial Registry',
      'Product lab test report from accredited laboratory',
      'Factory quality management certificate (ISO 9001 or equivalent)',
    ],
    documentsNeeded: [
      'Lab test certificate',
      'Product specifications sheet',
    ],
    steps: [
      'Submit product specifications',
      'Schedule factory sampling audit',
      'Receive official EOS Quality Seal',
    ]
  }
];

export const DEMO_TRACKING_DATA = {
  'EG-2025-CR-9041': {
    serviceName: 'Issue New Commercial Registration Certificate',
    applicantName: 'Tarek Al-Masry',
    entityName: 'Nile Valley Tech Solutions LLC',
    submissionDate: '2025-02-18',
    status: 'Ready for Download',
    currentStep: 4,
    steps: [
      { name: 'Application Received', date: 'Feb 18, 2025 09:30 AM', status: 'completed' },
      { name: 'Tax ID & Address Verification', date: 'Feb 18, 2025 10:15 AM', status: 'completed' },
      { name: 'Payment Processed (380 EGP)', date: 'Feb 18, 2025 10:20 AM', status: 'completed' },
      { name: 'Commercial Registry Approval', date: 'Feb 18, 2025 11:00 AM', status: 'completed' },
      { name: 'Digital Certificate Issued', date: 'Feb 18, 2025 11:05 AM', status: 'completed' },
    ],
    crNumber: 'CR-1010992384',
    taxNumber: '394-821-001',
    governorate: 'Cairo (Smart Village Office)',
  },
  'EG-2025-TM-1102': {
    serviceName: 'Register New Trademark or Trade Name',
    applicantName: 'Cleopatra Organics SAE',
    entityName: 'Cleopatra Organics',
    submissionDate: '2025-02-15',
    status: 'Under Legal Examination',
    currentStep: 2,
    steps: [
      { name: 'Application Received', date: 'Feb 15, 2025 02:10 PM', status: 'completed' },
      { name: 'Nice Classification Check', date: 'Feb 16, 2025 09:00 AM', status: 'completed' },
      { name: 'Substantive Legal Review', date: 'In Progress', status: 'current' },
      { name: 'Official Gazette Publication', date: 'Pending', status: 'pending' },
      { name: 'Final Certificate Grant', date: 'Pending', status: 'pending' },
    ],
    crNumber: 'TM-APP-88392',
    taxNumber: '102-391-778',
    governorate: 'Giza Central Office',
  }
};

export const DEMO_VERIFICATIONS = {
  '1010992384': {
    crNumber: '1010992384',
    companyName: 'Nile Valley Tech Solutions LLC',
    arabicName: 'شركة حلول وادي النيل للتكنولوجيا (ذ.م.م)',
    legalForm: 'Limited Liability Company (LLC)',
    taxNumber: '394-821-001',
    capital: '500,000 EGP',
    status: 'Active & Verified',
    issueDate: '2022-03-15',
    expiryDate: '2027-03-15',
    governorate: 'Cairo Governorate',
    activity: 'Software Development & IT Infrastructure Services',
    manager: 'Tarek Al-Masry',
    isAuthentic: true,
  },
  '2005439120': {
    crNumber: '2005439120',
    companyName: 'El-Sewedy Electrical Components Export',
    arabicName: 'مجموعة السويدي للمكونات الكهربائية والتصدير',
    legalForm: 'Joint Stock Company (S.A.E)',
    taxNumber: '445-102-993',
    capital: '25,000,000 EGP',
    status: 'Active & Verified',
    issueDate: '2015-08-10',
    expiryDate: '2028-08-10',
    governorate: 'Sharqia Governorate (10th of Ramadan)',
    activity: 'Electrical Equipment Manufacturing & Foreign Export',
    manager: 'Ahmed El-Sewedy',
    isAuthentic: true,
  }
};

export const GOVERNORATE_BRANCHES = [
  {
    id: 'cairo-hq',
    name: 'Cairo Main Commercial Registry Hub',
    governorate: 'Cairo',
    address: 'Ministry of Trade & Industry Building, Downtown / Ramses Square, Cairo',
    phone: '19033 / +20 2 25790012',
    hours: 'Sun - Thu: 8:00 AM - 3:30 PM',
    queueTime: '12 mins avg. wait',
    servicesAvailable: ['All Commercial Services', 'VIP Investor Express Desk', 'Notary Union'],
  },
  {
    id: 'smart-village',
    name: 'Smart Village Business Center',
    governorate: 'Giza',
    address: 'Km 28 Cairo-Alexandria Desert Road, Smart Village, Building B12',
    phone: '+20 2 35348000',
    hours: 'Sun - Thu: 8:30 AM - 4:00 PM',
    queueTime: '5 mins avg. wait',
    servicesAvailable: ['Tech Startup Fast-Track', 'Commercial Registry', 'Trademarks'],
  },
  {
    id: 'alex-maritime',
    name: 'Alexandria Maritime Commerce & GOEIC Office',
    governorate: 'Alexandria',
    address: 'Port Gate 14, El-Gomhouria Street, Manshiya, Alexandria',
    phone: '+20 3 4872201',
    hours: 'Sun - Thu: 8:00 AM - 3:00 PM',
    queueTime: '18 mins avg. wait',
    servicesAvailable: ['Import & Export Registry', 'Commercial Register', 'Customs Clearance Certs'],
  },
  {
    id: 'port-said',
    name: 'Port Said Free Zone Commercial Center',
    governorate: 'Port Said',
    address: '3 July Street, Public Free Zone Administrative Complex',
    phone: '+20 66 3221900',
    hours: 'Sun - Thu: 8:00 AM - 3:00 PM',
    queueTime: '8 mins avg. wait',
    servicesAvailable: ['Free Zone Company Registry', 'Exporters Register', 'Trademarks'],
  },
  {
    id: 'asyut-hub',
    name: 'Upper Egypt Business Service Hub - Asyut',
    governorate: 'Asyut',
    address: 'New Asyut Investment Complex, Building A',
    phone: '+20 88 2314500',
    hours: 'Sun - Thu: 8:00 AM - 3:00 PM',
    queueTime: '10 mins avg. wait',
    servicesAvailable: ['Commercial Register', 'Industrial Registry', 'Consumer Protection'],
  },
];

export const FAQS = [
  {
    question: 'How long does it take to issue a Commercial Registration in Egypt online?',
    answer: 'With our digitized portal, standard Sole Proprietorship and LLC Commercial Registrations are generated within 24 hours after identity verification and online payment.'
  },
  {
    question: 'Can foreign investors start a business without an Egyptian partner?',
    answer: 'Yes! Under Investment Law No. 72/2017, foreign investors can own 100% of companies in most commercial and industrial sectors in Egypt.'
  },
  {
    question: 'What payment methods are supported for Ministry fees?',
    answer: 'We support all major Egyptian e-payment channels: Fawry reference code, Meeza Debit Cards, Visa, Mastercard, and Egyptian Smart Wallets (Vodafone Cash, Orange Money, CIB Smart Wallet).'
  },
  {
    question: 'How do I verify if a commercial register or business license is genuine?',
    answer: 'Use our instant Verification Portal at the top menu. Enter the 10-digit Commercial Register Number (CRN) to view the live status and certified details.'
  }
];
