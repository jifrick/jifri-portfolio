export interface Capability {
  number: string;
  name: string;
  description: string;
  items: string[];
}

export const CAPABILITIES: Capability[] = [
  {
    number: '01',
    name: 'BUILD',
    description: 'Full-Stack Development · React · TypeScript · APIs · Databases · Authentication · Deployment',
    items: ['Full-Stack Development', 'React', 'TypeScript', 'APIs', 'Databases', 'Authentication', 'Deployment']
  },
  {
    number: '02',
    name: 'DESIGN',
    description: 'UI/UX · Product Design · Web Design · Interaction',
    items: ['UI/UX', 'Product Design', 'Web Design', 'Interaction']
  },
  {
    number: '03',
    name: 'CREATE & EDIT',
    description: 'Video Editing · Short-Form Content · Visual Storytelling · Branding',
    items: ['Video Editing', 'Short-Form Content', 'Visual Storytelling', 'Branding']
  },
  {
    number: '04',
    name: 'EXPLORE',
    description: 'AI Workflows · Creative Technology · Emerging Web',
    items: ['AI Workflows', 'Creative Technology', 'Emerging Web']
  }
];
