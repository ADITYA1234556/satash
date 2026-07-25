/**
 * Satash Community Care - Site Configuration
 * Central configuration for organization details, service information, and regulatory compliance
 */

export const ORGANIZATION = {
  name: 'Satash Community Care Projects Ltd',
  shortName: 'Satash',
  tagline: 'Person-centred residential and domiciliary support for children and young people',
  description: 'Satash Community Care Project Ltd provides specialist residential projects and domiciliary care in South Ockendon, with person-centred planning, safeguarding-led practice and close partnership with families and professionals.',
  registrationNumber: 'Ofsted Registration: SC462450',
  year_established: 1994,
  locations: {
    primary: {
      name: 'Mollands Lane',
      city: 'South Ockendon',
      postcode: 'RM15 6DH',
      coordinates: { lat: 51.5, lng: 0.3 },
    },
  },
};

export const SERVICES = [
  {
    id: 'residential-project-support',
    name: 'Residential Project Support',
    description: 'Specialist residential support across our project homes, designed for children and young people with learning disabilities and associated needs.',
    keyFeatures: [
      '24/7 staffed support',
      'Accessible, structured home environments',
      'Individual risk and care planning',
      'Family and professional collaboration',
    ],
  },
  {
    id: 'jasmine-bungalow-specialist-support',
    name: 'Jasmine Bungalow Specialist Support',
    description: 'Dedicated support at Jasmine (53 Mollands Lane) for up to three children and young people aged 5-18 with personalised, outcomes-focused plans.',
    keyFeatures: [
      'Ofsted-registered setting',
      'Age-appropriate routines and safeguarding',
      'Education and wellbeing coordination',
      'Structured transition planning',
    ],
  },
  {
    id: 'domiciliary-care',
    name: 'Domiciliary Care',
    description: 'Flexible home-based support to help children, young people and families maintain safe, stable routines in their own homes.',
    keyFeatures: [
      'Personal care and daily living support',
      'Family-centred scheduling',
      'Community access support',
      'Consistent keyworker continuity',
    ],
  },
  {
    id: 'person-centred-planning',
    name: 'Person-Centred Planning',
    description: 'Every child and young person has a tailored care plan shaped with their views, wishes, risks and long-term outcomes in mind.',
    keyFeatures: [
      'Multi-disciplinary input and reviews',
      'Clear safeguarding pathways',
      'Behaviour and wellbeing support',
      'Education and development goals',
    ],
  },
];

export const CARE_VALUES = [
  {
    id: 'person-centred',
    title: 'Person-Centred Support',
    description: 'We place the individual at the heart of care, tailoring support plans to each person\'s choices, preferences and aspirations.',
    icon: 'User',
  },
  {
    id: 'respect-dignity',
    title: 'Respect & Dignity',
    description: 'Every person is valued, their privacy respected and their personal dignity protected in all aspects of daily life.',
    icon: 'HeartHandshake',
  },
  {
    id: 'compassionate-care',
    title: 'Compassionate Care',
    description: 'Our team delivers support with empathy, kindness and a warm, reassuring approach.',
    icon: 'Heart',
  },
  {
    id: 'safety-quality',
    title: 'Safety & Quality',
    description: 'We maintain safe, well-maintained homes with clear procedures and strong oversight for peace of mind.',
    icon: 'ShieldCheck',
  },
  {
    id: 'social-inclusion',
    title: 'Social Inclusion',
    description: 'We encourage people to be active in their local community and participate in meaningful social activities.',
    icon: 'Users',
  },
  {
    id: 'growth-independence',
    title: 'Growth & Independence',
    description: 'We support service users to develop skills, make decisions and become as independent as possible.',
    icon: 'BookOpen',
  },
];

export const COMPLIANCE = {
  regulators: ['Ofsted', 'Local Authority Safeguarding Teams'],
  standards: ['Children’s Homes (England) Regulations 2015', 'Safeguarding and Child Protection Procedures', 'Equality and Anti-Discriminatory Practice'],
  certifications: ['Ofsted Registered (SC462450)', 'DBS-Checked Staff', 'Safeguarding Trained Workforce'],
};

export const TARGET_AUDIENCE = [
  {
    group: 'Children & Young People',
    ages: '5-18 years',
    conditions: 'Learning disabilities, emotional and behavioural difficulties, physical and complex support needs',
  },
  {
    group: 'Families & Carers',
    need: 'Seeking safe, structured and compassionate support with regular communication and involvement',
  },
  {
    group: 'Referral Partners',
    includes: 'Local Authorities, Health Services, Care Coordinators, Social Workers',
  },
  {
    group: 'Professionals',
    includes: 'Healthcare professionals, Support workers, Care planners',
  },
];

export const CONTACT_INFO = {
  email: 'contact@satashcommunitycare.co.uk',
  phone: '01708 851189',
  emergency: '01708 851189',
  address: '53 Mollands Lane, South Ockendon, RM15 6DH',
};

export const NAVIGATION = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Standards', href: '/standards' },
  { label: 'Inspection Reports', href: '/reports' },
  { label: 'Work With Us', href: '/work' },
  { label: 'Contact', href: '/contact' },
];

export const PROJECTS = [
  {
    id: 'orchid-project-51',
    name: '51 Orchid Project',
    location: 'South Ockendon, Essex',
    type: 'Residential Project',
    description: 'A structured residential setting focused on safety, routine and personalised support for children and young people.',
    link: '/projects/orchid',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'jasmine-bungalow-53',
    name: '53 Jasmine Bungalow',
    location: 'South Ockendon, Essex',
    type: 'Residential Project',
    description: 'An Ofsted-registered bungalow service providing specialist support for up to three children and young people aged 5-18.',
    link: '/projects/jasmine',
    image: 'https://images.unsplash.com/photo-1557672172-298e090d0f80?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'lotus-project-95',
    name: '95 Lotus Project',
    location: 'South Ockendon, Essex',
    type: 'Residential Project',
    description: 'A calm, supportive environment with person-centred planning and day-to-day developmental support.',
    link: '/projects/lotus',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'rose-project-107',
    name: '107 Rose Project',
    location: 'South Ockendon, Essex',
    type: 'Residential Project',
    description: 'A residential project that promotes emotional wellbeing, positive routines, social inclusion and safe progression.',
    link: '/projects/rose',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'project-109-111',
    name: '109-111 Project',
    location: 'South Ockendon, Essex',
    type: 'Residential Project',
    description: 'A combined project model offering coordinated support, accessible accommodation and continuity of care.',
    link: '/projects/orchid',
    image: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'domiciliary-care-project',
    name: 'Domiciliary Care',
    location: 'South Ockendon, Essex',
    type: 'Community Service',
    description: 'Outreach and home-based support designed to maintain safety, consistency and family confidence.',
    link: '/projects/homecare',
    image: 'https://images.unsplash.com/photo-1576091160508-112efdf7d12d?auto=format&fit=crop&w=600&q=80',
  },
];
