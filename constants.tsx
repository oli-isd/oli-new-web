
import { Development, Testimonial } from './types';

export const DEVELOPMENTS: Development[] = [
  {
    id: '1',
    name: 'Santevi',
    location: 'Bgry. San Vicente, San Pablo City, Laguna',
    imageUrl: '/Santevi-1.png',
    mapUrl: 'https://maps.app.goo.gl/FfzsG4GASGqaTiDL9',
    status: 'Ongoing Project',
  },
  {
    id: '2',
    name: 'Savana South',
    location: 'Brgy. Soledad, San Pablo City, Laguna',
    imageUrl: '/Savana-1.png',
    mapUrl: 'https://share.google/oZi2rUKSovxMfui6l',
    status: 'Ongoing Project',
  },
  {
    id: '3',
    name: 'Sentro',
    location: 'Brgy. San Crispin, San Pablo City, Laguna',
    imageUrl: '/Sentro-1.jpg',
    mapUrl: 'https://maps.app.goo.gl/b1zAoyVMq9JQa2R96',
    status: 'Ongoing Project',
  },
  {
    id: '4',
    name: 'Caliya',
    location: 'Brgy. Masin Sur, Candelaria, Quezon',
    imageUrl: '/Caliya-2.png',
    mapUrl: 'https://maps.app.goo.gl/PccgX1be5H8kWCd2A',
    status: 'Ongoing Project',
  },
  {
    id: '5',
    name: 'Sannera',
    location: 'Brgy. San Antonio 2, San Pablo City, Laguna',
    imageUrl: '/Sannera-1.png',
    mapUrl: 'https://maps.app.goo.gl/SXzTX6WyiQnWe5MG6',
    status: 'Completed Project',
  },
  {
    id: '6',
    name: 'Terazza De Sto. Tomas',
    location: 'Brgy. San Roque, Sto. Tomas, Batangas',
    imageUrl: '/Terraza-1.png',
    mapUrl: 'https://maps.app.goo.gl/D8TJW2p81BThZ3x97',
    status: 'Completed Project',
  },
  {
    id: '7',
    name: 'Seriya',
    location: 'Brgy. Hinukay, Baliwag City, Bulacan',
    imageUrl: '/Seriya-1.png',
    mapUrl: 'https://maps.app.goo.gl/DMJBUTYYMHfbQEgy8',
    status: 'Ongoing Project',
  },
  {
    id: '8',
    name: 'Anara',
    location: 'Brgy. San Roque, Baliwag City, Bulacan',
    imageUrl: '/Anara-1.jpg',
    mapUrl: 'https://maps.app.goo.gl/TJtXWQvv8zzwPync8',
    status: 'Opening Soon',
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
    name: 'Our Company', href: '/company',
    submenu: [
      { name: 'About Us',   href: '/company' },
      { name: 'Mission',    href: '/company#mission' },
      { name: 'Vision',     href: '/company#vision' },
      { name: 'Leadership', href: '/company#leadership' },
      { name: 'Awards',     href: '/company#awards' },
    ]
  },
  {
    name: 'Our Business', href: '/business',
    submenu: [
      { name: 'Premier Family Living', href: '/business' },
      { name: 'HousEasy',              href: '/business/houseasy' },
      { name: 'Our Communities',       href: '/business/communities' },
    ]
  },
  {
    name: 'Investors', href: '/investors#governance',
    submenu: [
      { name: 'Governance',  href: '/investors#governance' },
      { name: 'Financials',  href: '/investors#financials' },
      { name: 'Disclosure',  href: '/investors#disclosure' },
    ]
  },
  { name: 'News & Updates', href: '/news' },
  { name: 'Careers',        href: '/careers' },
  { name: 'Contact Us',     href: '/contact' },
];
