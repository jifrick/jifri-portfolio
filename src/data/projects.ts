export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  status: 'Building' | 'Preparing for launch' | 'Live';
  coreHeadline: string;
  shortDescription: string;
  longDescription: string;
  role: string[];
  techStack: string[];
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
    coreHeadline: 'Building a creative technology brand from the ground up.',
    shortDescription: 'YAWMATIC is my creative technology venture exploring the intersection of design, technology and digital experiences.',
    longDescription: 'YAWMATIC is my creative technology venture exploring the intersection of design, technology and digital experiences. It represents my long-term ambition to combine software development, refined visual identity, and product thinking into meaningful digital tools and experiences. Rather than functioning solely as a developer portfolio item, YAWMATIC is positioned as an independent venture.',
    role: ['Founder', 'Creative Direction', 'Brand Design', 'UI/UX', 'Full-Stack Development'],
    techStack: ['React', 'TypeScript', 'Vite', 'Supabase', 'Git', 'GitHub', 'Vercel'],
    liveUrl: 'https://yawmatic.vercel.app',
    githubUrl: 'https://github.com/jifrick/YAWMATIC.git',
    isPrimary: true,
    imageSrc: '/assets/projects/yawmatic.webp',
    aiDisclosure: 'Built independently with AI-assisted development workflows. AI was used as a development and learning aid for research, implementation assistance, debugging and exploring solutions. Product direction, UX decisions, architecture and final implementation were guided and reviewed by Jifri.'
  },
  {
    id: 'rental-book',
    number: '02',
    name: 'Rental Book',
    category: 'Rental Management · SaaS · Full-Stack Product',
    status: 'Building',
    coreHeadline: 'Turning a real rental business into a digital product.',
    shortDescription: 'Rental Book is a rental management product designed around the workflows of tool and equipment rental businesses.',
    longDescription: 'Rental Book is a rental management product designed around the workflows of tool and equipment rental businesses. The idea came from a real rental business in my family and is being developed as a product that could potentially support other rental businesses as well.',
    role: ['Product Design', 'UI/UX', 'Full-Stack Development', 'Backend Integration', 'Database Architecture'],
    techStack: ['React', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL', 'Supabase Auth', 'Row Level Security', 'Vercel', 'Git', 'GitHub'],
    liveUrl: 'https://ck-rental-book.vercel.app',
    githubUrl: 'https://github.com/jifrick/rental-book',
    isPrimary: true,
    imageSrc: '/assets/projects/rental-book.webp',
    aiDisclosure: 'Built independently with AI-assisted development workflows. AI was used as a development and learning aid for research, implementation assistance, debugging and exploring solutions. Product direction, UX decisions, architecture and final implementation were guided and reviewed by Jifri.',
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
    coreHeadline: 'Turning invitations into digital experiences.',
    shortDescription: 'WEBINVITE.IN is a digital invitation and event website product for occasions such as weddings, birthdays, engagements, anniversaries, and special occasions.',
    longDescription: 'WEBINVITE.IN converts traditional paper invitations into interactive web experiences. Built to give event hosts custom event landing pages with event schedules, location directions, RSVP management, and gallery showcases.',
    role: ['Founder', 'Product Direction', 'UI/UX', 'Development', 'Branding', 'Creative Direction'],
    techStack: ['React', 'TypeScript', 'Vite', 'Vercel', 'Git', 'GitHub'],
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
    coreHeadline: 'A website I built for an institution I once studied at.',
    shortDescription: 'Badrulhuda Academy is an institutional website project where I understood the organization\'s needs and developed a digital solution that the academy currently uses.',
    longDescription: 'Badrulhuda Academy is an institutional website built for an educational academy I once attended. I translated institutional requirements into a structured, accessible web presence covering admissions, academic programs, facilities, events, and charity initiatives.',
    role: ['UI/UX', 'Web Design', 'Frontend Development', 'Information Architecture', 'Content Structure'],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'GitHub'],
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
    coreHeadline: 'A platform expanding on creative collaboration and application workflows.',
    shortDescription: 'YAWMATIC Collective is a digital web platform supporting user accounts, database storage, and responsive application dashboards.',
    longDescription: 'YAWMATIC Collective functions as a supporting platform within the YAWMATIC ecosystem. It features user authentication, private database storage, structured application UI, and responsive interaction workflows.',
    role: ['Product Design', 'UI/UX', 'Full-Stack Development', 'Database Schema'],
    techStack: ['React', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL', 'Supabase Auth', 'Supabase Storage', 'Git', 'GitHub', 'Vercel'],
    isPrimary: true,
    imageSrc: '/assets/projects/yawmatic-collective.webp'
  }
];
