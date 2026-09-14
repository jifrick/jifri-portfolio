export interface NavItem {
  label: string;
  path: string;
}

export interface SocialItem {
  label: string;
  url: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Work', path: '/work' },
  { label: 'About', path: '/about' },
  { label: 'Creative', path: '/creative' },
  { label: 'Contact', path: '/contact' }
];

export const SOCIAL_LINKS: SocialItem[] = [
  { label: 'GitHub', url: 'https://github.com/jifrick' },
  { label: 'Instagram', url: 'https://www.instagram.com/jifriflix/' }
];
