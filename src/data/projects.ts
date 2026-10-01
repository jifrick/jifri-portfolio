export interface StorySection {
  eyebrow?: string;
  title: string;
  description: string;
  imageSrc?: string;
  layout?: 'full' | 'text-image' | 'image-text' | 'two-images';
  caption?: string;
}

export interface TechDetailGridItem {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  status: 'Building' | 'Preparing for launch' | 'Live';
  year?: string;
  coreHeadline: string;
  shortDescription: string;
  longDescription: string;
  problem?: string;
  approachSteps?: string[];
  storySections?: StorySection[];
  role: string[];
  techStack: string[];
  techDetailsGrid?: TechDetailGridItem[];
  outcome?: string;
  liveUrl?: string;
  githubUrl?: string;
  isPrimary: boolean;
  imageSrc?: string;
  aiDisclosure?: string;
  confirmedSections?: string[];
  deepTechnicalDetails?: {
    realWorldProblem: string;
    coreWorkflow: string[];
    dbArchitecture: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: 'yawmatic',
    number: '01',
    name: 'YAWMATIC',
    category: 'Creative Technology · Brand · Digital Experience',
    status: 'Building',
    year: '2026',
    coreHeadline: 'Building a creative technology brand from the ground up.',
    shortDescription: 'YAWMATIC is my creative technology venture exploring the intersection of design, technology and digital experiences.',
    longDescription: 'YAWMATIC is my creative technology venture exploring the intersection of design, technology and digital experiences. It represents my long-term ambition to combine software development, refined visual identity, and product thinking into meaningful digital tools and experiences. Rather than functioning solely as a developer portfolio item, YAWMATIC is positioned as an independent venture.',
    problem: 'Creative ventures and technology initiatives often suffer from fragmented visual identity and disconnected technical implementation. YAWMATIC addresses this by combining software engineering, visual brand direction, and user experience into one unified venture.',
    approachSteps: ['Brand Identity', 'Digital Experience', 'Component System', 'Full-Stack Implementation'],
    storySections: [
      {
        eyebrow: '01 — BRAND & DIGITAL EXPERIENCE',
        title: 'Building an Independent Tech Identity',
        description: 'Establishing a refined visual identity and scalable web architecture designed to house digital tools, design experiments, and software products.',
        imageSrc: '/assets/projects/yawmatic.webp',
        layout: 'full'
      },
      {
        eyebrow: '02 — FRONTEND ARCHITECTURE',
        title: 'Modular UI & Design System',
        description: 'Building a modular component architecture in React and TypeScript with fluid responsive layouts and dark/light design system primitives.',
        layout: 'text-image'
      }
    ],
    role: ['Founder', 'Creative Direction', 'Brand Design', 'UI/UX', 'Full-Stack Development'],
    techStack: ['React', 'TypeScript', 'Vite', 'Supabase', 'Git', 'GitHub', 'Vercel'],
    techDetailsGrid: [
      { label: 'FRONTEND', value: 'React · TypeScript · Vite' },
      { label: 'BACKEND & DATA', value: 'Supabase' },
      { label: 'DEPLOYMENT', value: 'Vercel' },
      { label: 'VERSION CONTROL', value: 'Git · GitHub' }
    ],
    outcome: 'An evolving creative technology brand and web platform providing a solid foundation for independent digital products and creative software tools.',
    liveUrl: 'https://yawmatic.vercel.app',
    githubUrl: 'https://github.com/jifrick/YAWMATIC.git',
    isPrimary: true,
    imageSrc: '/assets/projects/yawmatic.webp',
    aiDisclosure: 'Built independently with AI-assisted development workflows. AI was used as a development and learning aid for research, implementation assistance, debugging and exploring solutions. Product direction, UX decisions, architecture and final implementation were guided and reviewed by Jifri C.K.'
  },
  {
    id: 'rental-book',
    number: '02',
    name: 'Rental Book',
    category: 'Rental Management · SaaS · Full-Stack Product',
    status: 'Building',
    year: '2026',
    coreHeadline: 'Turning a real rental business into a digital product.',
    shortDescription: 'Rental Book is a rental management product designed around the workflows of tool and equipment rental businesses.',
    longDescription: 'Rental Book is a rental management product designed around the workflows of tool and equipment rental businesses. The idea came from a real rental business in my family and is being developed as a product that could potentially support other rental businesses as well.',
    problem: 'Tool and machine rental businesses face operational friction tracking items across active rentals, managing deposits, recording equipment returns, and maintaining customer histories on paper.',
    approachSteps: ['Real Business Workflow', 'Product Direction', 'UX Design', 'RLS Database Architecture', 'Working SaaS Product'],
    storySections: [
      {
        eyebrow: '01 — MANAGEMENT WORKSPACE',
        title: 'Centralized Rental Operations',
        description: 'Centralized workspace providing real-time visibility over active rentals, tool and machine inventory, customer profiles, and pending customer balances.',
        imageSrc: '/assets/projects/rental-book.webp',
        layout: 'full'
      },
      {
        eyebrow: '02 — WORKFLOW AUTOMATION',
        title: 'Equipment Returns & Payment Auditing',
        description: 'Streamlined workflow for logging tool returns, inspecting equipment condition, recording deposits, and updating tenant balance ledgers accurately.',
        layout: 'image-text'
      }
    ],
    role: ['Product Design', 'UI/UX', 'Full-Stack Development', 'Backend Integration', 'Database Architecture'],
    techStack: ['React', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL', 'Supabase Auth', 'Row Level Security', 'Vercel', 'Git', 'GitHub'],
    techDetailsGrid: [
      { label: 'AUTHENTICATION', value: 'Supabase Auth' },
      { label: 'DATABASE', value: 'PostgreSQL' },
      { label: 'ACCESS CONTROL', value: 'Row Level Security (RLS)' },
      { label: 'DEPLOYMENT', value: 'Vercel' }
    ],
    outcome: 'A working rental management SaaS platform that digitizes paper-based rental operations into a secure, tenant-isolated digital workspace.',
    liveUrl: 'https://ck-rental-book.vercel.app',
    githubUrl: 'https://github.com/jifrick/rental-book',
    isPrimary: true,
    imageSrc: '/assets/projects/rental-book.webp',
    aiDisclosure: 'Built independently with AI-assisted development workflows. AI was used as a development and learning aid for research, implementation assistance, debugging and exploring solutions. Product direction, UX decisions, architecture and final implementation were guided and reviewed by Jifri C.K.',
    deepTechnicalDetails: {
      realWorldProblem: 'Tool and machine rental businesses face operational friction tracking items across active rentals, managing deposits, recording equipment returns, and maintaining customer histories on paper.',
      coreWorkflow: [
        'Shop workspace selection & setup',
        'Tool & machine inventory management',
        'Customer record verification',
        'Rental creation & agreement recording',
        'Equipment return & condition inspection',
        'Payment processing & balance tracking',
        'Rental history & tenant data auditing'
      ],
      dbArchitecture: 'Database-level tenant-aware access using RLS (Row Level Security) in PostgreSQL, ensuring private workspaces maintain full isolation at the query level.'
    }
  },
  {
    id: 'webinvite',
    number: '03',
    name: 'WEBINVITE.IN',
    category: 'Event Technology · Digital Product · Web Experiences',
    status: 'Preparing for launch',
    year: '2026',
    coreHeadline: 'Turning invitations into digital experiences.',
    shortDescription: 'WEBINVITE.IN is a digital invitation and event website product for occasions such as weddings, birthdays, engagements, anniversaries, and special occasions.',
    longDescription: 'WEBINVITE.IN converts traditional paper invitations into interactive web experiences. Built to give event hosts custom event landing pages with event schedules, location directions, RSVP management, and gallery showcases.',
    problem: 'Traditional paper invitations lack interactive capabilities such as instant location directions, schedule timelines, dynamic RSVP tracking, and multimedia event galleries.',
    approachSteps: ['Paper Invitation', 'Digital Event Landing Page', 'RSVP & Schedule Engine', 'Responsive Web Experience'],
    storySections: [
      {
        eyebrow: '01 — DIGITAL INVITATION EXPERIENCE',
        title: 'Interactive Event Web Pages',
        description: 'Custom event web experiences engineered to provide guests with interactive event timelines, venue location directions, and instant RSVP submission.',
        imageSrc: '/assets/projects/webinvite.webp',
        layout: 'full'
      }
    ],
    role: ['Founder', 'Product Direction', 'UI/UX', 'Development', 'Branding', 'Creative Direction'],
    techStack: ['React', 'TypeScript', 'Vite', 'Vercel', 'Git', 'GitHub'],
    techDetailsGrid: [
      { label: 'FRONTEND', value: 'React · TypeScript · Vite' },
      { label: 'INTERACTION DESIGN', value: 'CSS Modules & Smooth Motion' },
      { label: 'DEPLOYMENT', value: 'Vercel' }
    ],
    outcome: 'A digital event invitation product that replaces static paper invites with responsive, interactive web experiences.',
    liveUrl: 'https://webinvitein.vercel.app',
    githubUrl: 'https://github.com/jifrick/webinvite',
    isPrimary: true,
    imageSrc: '/assets/projects/webinvite.webp'
  },
  {
    id: 'badrulhuda',
    number: '04',
    name: 'Badrulhuda Academy',
    category: 'Institutional Website · Client Project',
    status: 'Live',
    year: '2025',
    coreHeadline: 'A website I built for an institution I once studied at.',
    shortDescription: 'Badrulhuda Academy is an institutional website project where I understood the organization\'s needs and developed a digital solution that the academy currently uses.',
    longDescription: 'Badrulhuda Academy is an institutional website built for an educational academy I once attended. I translated institutional requirements into a structured, accessible web presence covering admissions, academic programs, facilities, events, and charity initiatives.',
    problem: 'The academy required a clear, accessible digital presence to present academic programs, admission requirements, campus facilities, and charity projects to prospective students, parents, and donors.',
    approachSteps: ['Institutional Requirements', 'Information Architecture', 'Accessible Web Design', 'Production Deployment'],
    storySections: [
      {
        eyebrow: '01 — INSTITUTIONAL WEBSITE',
        title: 'Structured Educational Portal',
        description: 'Clear, accessible web presence organizing complex institutional information into intuitive sections for students, parents, and community members.',
        imageSrc: '/assets/projects/badrulhuda.webp',
        layout: 'full'
      }
    ],
    role: ['UI/UX', 'Web Design', 'Frontend Development', 'Information Architecture', 'Content Structure'],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'GitHub'],
    techDetailsGrid: [
      { label: 'CORE STACK', value: 'HTML5 · CSS3 · JavaScript' },
      { label: 'STRUCTURE', value: 'Semantic Information Architecture' },
      { label: 'STATUS', value: 'Live in Production (badrulhuda.com)' }
    ],
    outcome: 'A live institutional website currently utilized by Badrulhuda Academy to manage public admissions, program listings, and community communication.',
    liveUrl: 'https://www.badrulhuda.com',
    githubUrl: 'https://github.com/jifrick/badrulhuda',
    isPrimary: true,
    imageSrc: '/assets/projects/badrulhuda.webp',
    confirmedSections: ['Home', 'About', 'Programs', 'Facilities', 'Gallery', 'Admissions', 'Events', 'Charity', 'Contact']
  },
  {
    id: 'yawmatic-collective',
    number: '05',
    name: 'YAWMATIC Collective',
    category: 'Web Application · Digital Platform / Creative Collaboration Platform',
    status: 'Building',
    year: '2026',
    coreHeadline: 'A platform expanding on creative collaboration and application workflows.',
    shortDescription: 'YAWMATIC Collective is a digital web platform supporting user accounts, database storage, and responsive application dashboards.',
    longDescription: 'YAWMATIC Collective functions as a supporting platform within the YAWMATIC ecosystem. It features user authentication, private database storage, structured application UI, and responsive interaction workflows.',
    problem: 'Supporting creative ventures requires dedicated web application infrastructure, authentication flows, and private database storage tailored for collaborative tools.',
    approachSteps: ['Ecosystem Strategy', 'User Authentication', 'Database Schema', 'Application Dashboard'],
    storySections: [
      {
        eyebrow: '01 — PLATFORM DASHBOARD',
        title: 'Application Workspaces',
        description: 'Responsive web dashboard featuring authenticated user accounts, secure backend endpoints, and structured application storage.',
        imageSrc: '/assets/projects/yawmatic-collective.webp',
        layout: 'full'
      }
    ],
    role: ['Product Design', 'UI/UX', 'Full-Stack Development', 'Database Schema'],
    techStack: ['React', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL', 'Supabase Auth', 'Supabase Storage', 'Git', 'GitHub', 'Vercel'],
    techDetailsGrid: [
      { label: 'FRONTEND', value: 'React · TypeScript · Vite' },
      { label: 'BACKEND SERVICES', value: 'Supabase Auth · Supabase Storage' },
      { label: 'DATABASE', value: 'PostgreSQL' },
      { label: 'DEPLOYMENT', value: 'Vercel' }
    ],
    outcome: 'A scalable web application platform expanding the capabilities of the YAWMATIC digital ecosystem.',
    isPrimary: true,
    imageSrc: '/assets/projects/yawmatic-collective.webp'
  }
];

