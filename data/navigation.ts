import { NavLink } from '../types';

export const NAVIGATION_LINKS: NavLink[] = [
  {
    name: 'Our Business',
    href: '/company',
    submenu: [
      { name: 'ABOUT US', href: '/company' },
      { name: 'HOUSEASY', href: '/business/houseasy' },
    ]
  },
  {
    name: 'Our Communities',
    href: '/business#communities'
  },
  { name: 'News & Updates', href: '/news' },
  { name: 'Socials', href: '/socials' },
  {
    name: 'Contact Us',
    href: '/contact',
    submenu: [
      { name: 'Investors', href: '/investors' },
      { name: 'Careers', href: '/careers' },
      { name: 'Other Inquiry', href: '/contact#inquire' },
    ]
  },
  { name: 'Inquire Now', href: '/our-ambassadors' },
  { name: 'Homebuyer Portal', href: '/business/homebuyersportal' },
];

export const BUSINESS_GROUPS = [
  {
    title: 'ABOUT US',
    items: [
      { name: 'About Us', href: '/company' },
      { name: 'Vision and Mission', href: '/company#mission-vision' },
      { name: 'Core Values', href: '/company#values' },
      { name: 'Leadership', href: '/company#leadership' },
      { name: 'Awards and Recognition', href: '/company#awards' },
    ]
  },
  {
    title: 'HOUSEASY',
    items: [
      { name: 'HousEasy', href: '/business/houseasy' },
      { name: 'Homebuying Journey', href: '/business/houseasy#journey' },
    ]
  }
];

export const INVESTORS_SUBMENU = [
  { name: 'GOVERNANCE', href: '/investors#governance' },
  { name: 'DISCLOSURE', href: '/investors#disclosure' },
  { name: 'CONTACT US', href: '/contact' },
];

export const NEWS_SUBMENU = [
  { name: 'News & Updates', href: '/news' },
  { name: 'Corporate Social Responsibility', href: '/company/csr' },
];
