
import { Development, Testimonial } from './types';

export const DEVELOPMENTS: Development[] = [
  {
    id: '1',
    name: 'Santevi',
    location: 'San Pablo City, Laguna',
    description: 'Template only.',
    imageUrl: '/Santevi-1.png',
    priceRange: 'PHP 2.5M - 4.5M',
    status: 'Pre-Selling',
    features: ['Swimming Pool', 'Clubhouse', '24/7 Security']
  },
  {
    id: '2',
    name: 'Savana',
    location: 'Sto. Tomas, Batangas',
    description: 'Template only.',
    imageUrl: '/Savana-1.png',
    priceRange: 'PHP 2.5M - 6.5M',
    status: 'Pre-Selling',
    features: ['Gated Community', 'Playground', 'Jogging Path']
  },
  {
    id: '3',
    name: 'Caliya',
    location: 'Candelaria, Quezon',
    description: 'Template only.',
    imageUrl: '/Caliya-2.png',
    priceRange: 'PHP 2.5M - 4.2M',
    status: 'Pre-Selling',
    features: ['Mountain Views', 'Basketball Court', 'Central Park']
  },
  {
    id: '4',
    name: 'Sannera',
    location: 'San Pablo City, Laguna',
    description: 'Template only.',
    imageUrl: '/Sannera-1.png',
    priceRange: 'PHP 2.5M - 5.8M',
    status: 'Pre-Selling',
    features: ['Accessible Location', 'Multi-purpose Hall', 'Landscaped Gardens']
  },
  {
    id: '5',
    name: 'Terraza',
    location: 'Sto. Tomas, Batangas',
    description: 'Template only.',
    imageUrl: '/Terraza-1.png',
    priceRange: 'PHP 2.5M - 5.8M',
    status: 'Pre-Selling',
    features: ['Accessible Location', 'Multi-purpose Hall', 'Landscaped Gardens']
  },
  {
    id: '6',
    name: 'Seriya',
    location: 'Baliwag, Bulacan',
    description: 'Template only.',
    imageUrl: '/Seriya-1.png',
    priceRange: 'PHP 2.5M - 5.8M',
    status: 'Pre-Selling',
    features: ['Accessible Location', 'Multi-purpose Hall', 'Landscaped Gardens']
  }
];

export const AWARDS = [
  { year: '2024', title: 'Best Affordable Housing Developer', body: 'Philippine Property Awards' },
  { year: '2023', title: 'Top Real Estate Brand of the Year', body: 'PropertyGuru Philippines' },
  { year: '2022', title: 'Excellence in Community Development', body: 'HLURB / DHSUD' },
  { year: '2021', title: 'Best Developer – South Luzon', body: 'Philippines Property Awards' },
];

export interface NavSubmenuItem {
  name: string;
  href: string;
}

export interface NavLink {
  name: string;
  href: string;
  submenu?: NavSubmenuItem[];
}

export const NAVIGATION_LINKS: NavLink[] = [
  { name: 'Home', href: '/' },
  {
    name: 'Company', href: '/company',
    submenu: [
      { name: 'About Us',   href: '/company' },
      { name: 'Mission',    href: '/company#mission' },
      { name: 'Vision',     href: '/company#vision' },
      { name: 'Leadership', href: '/company#leadership' },
      { name: 'Awards',     href: '/company#awards' },
    ]
  },
  {
    name: 'Business', href: '/business',
    submenu: [
      { name: 'Premier Family Living', href: '/business' },
      { name: 'HousEasy',              href: '/business/houseasy' },
      { name: 'Our Communities',       href: '/business/communities' },
    ]
  },
  {
    name: 'Investor Relations', href: '/investors/governance',
    submenu: [
      { name: 'Governance',  href: '/investors/governance' },
      { name: 'Financials',  href: '/investors/financials' },
      { name: 'Disclosure',  href: '/investors/disclosure' },
    ]
  },
  { name: 'News & Updates', href: '/news' },
  { name: 'Careers',        href: '/careers' },
  { name: 'Contact Us',     href: '/contact' },
];
