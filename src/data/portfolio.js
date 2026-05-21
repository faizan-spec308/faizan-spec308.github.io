export const projects = [
  {
    id: 'hillingone',
    title: 'HillingOne',
    tagline: 'Agentic AI platform that unified 17 Hillingdon Council booking systems',
    description:
      'Built at the Hillingdon x Brunel Hackathon, HillingOne is an agentic AI booking platform powered by four autonomous AI agents — handling search, booking, demand sensing, and inventory optimisation. Presented to Microsoft and senior Hillingdon Council officers.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Google Gemini API'],
    github: 'https://github.com/faizan-spec308',
    demo: null,
    badge: '🏆 Hackathon Project — Presented to Microsoft',
    role: null,
    featured: true,
    stats: null,
    agents: [
      { name: 'Search Agent', desc: 'Queries all 17 council systems simultaneously' },
      { name: 'Booking Agent', desc: 'Handles reservations and confirmations end-to-end' },
      { name: 'Demand Sensing Agent', desc: 'Predicts peak usage and resource allocation' },
      { name: 'Inventory Optimisation Agent', desc: 'Balances load across facilities in real time' },
    ],
  },
  {
    id: 'knownly',
    title: 'KnownLy',
    tagline: 'Full-stack youth mental health platform built for UN SDG 3',
    description:
      'Production-ready mental health support web app featuring real-time chat, user management, and a collaborative agile development workflow. Built as Product Owner in a team environment.',
    tech: ['React', 'Java Spring Boot', 'PostgreSQL', 'WebSocket', 'Git'],
    github: 'https://github.com/faizan-spec308',
    demo: null,
    badge: '🥇 Elanco Company Award — Best Project, Brunel 2026',
    role: 'Product Owner',
    featured: false,
    stats: null,
    agents: null,
  },
  {
    id: 'fraud-detection',
    title: 'Fraud Detection System',
    tagline: 'ML pipeline detecting fraud across 6M+ financial transactions',
    description:
      'End-to-end machine learning pipeline trained on a severely imbalanced dataset (0.1% fraud rate) using advanced resampling techniques. Deployed live as a Streamlit web application.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit'],
    github: 'https://github.com/faizan-spec308/FRAUD-DETECTION',
    demo: null,
    badge: null,
    role: null,
    featured: false,
    stats: '6,000,000+ transactions analysed',
    agents: null,
  },
  {
    id: 'tick-tracker',
    title: 'Tick Sighting Tracker',
    tagline: 'Interactive UK map visualising 500+ tick sightings for public health',
    description:
      'Full-stack React application with an interactive Leaflet.js map, real-time filtering by species, date, and region, and data visualisation charts. Built for public health awareness.',
    tech: ['React 18', 'Vite', 'Leaflet.js', 'Recharts', 'React Router'],
    github: 'https://github.com/faizan-spec308',
    demo: null,
    badge: null,
    role: null,
    featured: false,
    stats: null,
    agents: null,
  },
  {
    id: 'university-management',
    title: 'University Management System',
    tagline: 'Java GUI system for student records, attendance, and course admin',
    description:
      'Desktop application with MySQL database integration, validated data entry, accurate reporting, and a clean Figma-designed interface. Received First Class grade with positive assessor feedback.',
    tech: ['Java', 'MySQL', 'Figma'],
    github: 'https://github.com/faizan-spec308',
    demo: null,
    badge: 'First Class Grade',
    role: null,
    featured: false,
    stats: null,
    agents: null,
  },
]

export const skills = {
  Languages: [
    { name: 'Python' },
    { name: 'Java' },
    { name: 'JavaScript' },
    { name: 'SQL' },
    { name: 'TypeScript' },
  ],
  Frontend: [
    { name: 'React', level: null },
    { name: 'HTML/CSS', level: null },
    { name: 'Tailwind CSS', level: null },
    { name: 'Leaflet.js', level: null },
    { name: 'Recharts', level: null },
    { name: 'Figma', level: null },
  ],
  'Backend & Data': [
    { name: 'FastAPI', level: null },
    { name: 'Spring Boot', level: null },
    { name: 'PostgreSQL', level: null },
    { name: 'MySQL', level: null },
    { name: 'MongoDB', level: null },
    { name: 'REST APIs', level: null },
    { name: 'WebSocket', level: null },
  ],
  'ML & Data Science': [
    { name: 'PyTorch', level: null },
    { name: 'Scikit-learn', level: null },
    { name: 'Pandas', level: null },
    { name: 'NumPy', level: null },
    { name: 'Streamlit', level: null },
    { name: 'MLFlow', level: null },
    { name: 'Matplotlib', level: null },
    { name: 'Seaborn', level: null },
  ],
  'Tools & Platforms': [
    { name: 'Git', level: null },
    { name: 'GitHub', level: null },
    { name: 'Docker', level: null },
    { name: 'AWS', level: null },
    { name: 'Power BI', level: null },
    { name: 'Tableau', level: null },
    { name: 'Jira', level: null },
    { name: 'Wireshark', level: null },
    { name: 'Ubuntu Linux', level: null },
    { name: 'Google Gemini API', level: null },
    { name: 'MATLAB', level: null },
    { name: 'Microsoft 365', level: null },
  ],
}

export const experience = [
  {
    id: 1,
    title: 'Marketing Manager',
    company: 'Robothink STEM Education',
    location: 'London',
    period: 'April 2025 — August 2025',
    bullets: [
      'Managed Facebook Ads and Google Ads campaigns end-to-end, optimising for conversion and ROI',
      'Analysed KPI dashboards to surface actionable insights and reported commercial performance to senior management',
      'Maintained and cleaned CRM systems to ensure data integrity across campaigns',
    ],
  },
  {
    id: 2,
    title: 'Software Developer',
    company: 'Pakizm International',
    location: 'Pakistan',
    period: 'February 2024 — June 2024',
    bullets: [
      'Designed UI/UX in Figma and developed a fully responsive portfolio website using HTML, CSS, and JavaScript',
      'Analysed user behaviour data and implemented design changes that contributed to a 35% increase in client enquiries',
    ],
  },
]

export const achievements = [
  {
    id: 1,
    icon: '🏆',
    title: 'Elanco Company Award',
    desc: 'Best Project, Brunel CS2701 Group Project Exhibition, April 2026',
  },
  {
    id: 2,
    icon: '🤖',
    title: 'Hillingdon x Brunel Hackathon',
    desc: 'Built HillingOne, agentic AI platform presented to Microsoft and senior Hillingdon Council officers, April 2026',
  },
  {
    id: 3,
    icon: '🎓',
    title: 'Predicted First-Class Honours',
    desc: 'Across all Year 1 modules including Logic & Computation (A+)',
  },
  {
    id: 4,
    icon: '📊',
    title: '6M+ Transactions Analysed',
    desc: 'Independent ML fraud detection project on real-world financial data',
  },
  {
    id: 5,
    icon: '🌍',
    title: 'UN SDG 3 Project',
    desc: "KnownLy mental health platform built as Product Owner for Good Health & Wellbeing goal",
  },
]

export const stats = [
  { value: 5, suffix: '+', label: 'Projects Built' },
  { value: 6, suffix: 'M+', label: 'Transactions Analysed' },
  { value: '1st', suffix: '', label: 'Class Predicted' },
  { value: 2026, suffix: '', label: 'Placement Ready' },
]

export const contact = {
  email: 'faizangpt4@gmail.com',
  phone: '+44 7933 398273',
  location: 'London, UK',
  github: 'https://github.com/faizan-spec308',
  linkedin: 'https://linkedin.com/in/faizan-naveed-3150aa388',
}

export const education = {
  university: 'Brunel University London',
  degree: 'BSc Computer Science',
  period: '2023–2027',
  predicted: 'First-Class Honours',
  modules: [
    'Algorithms',
    'Software Development',
    'Networks & Computing',
    'Logic & Computation',
    'Information Systems',
    'Group Project',
  ],
  award: 'Elanco Company Award — Best Project (CS2701 Exhibition, April 2026)',
  alevels: 'Mathematics A* · Chemistry A · Physics A',
}
