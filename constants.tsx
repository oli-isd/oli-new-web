
import { Development, Testimonial } from './types';

export const DEVELOPMENTS: Development[] = [
  {
    id: '1',
    name: 'Santevi',
    location: 'Bgry. San Vicente, San Pablo City, Laguna',
    imageUrl: '/Santevi-1.png',
    estateImageUrl: '/Estate.jpg',
    mansionImageUrl: '/Mansion.jpg',
    mapUrl: 'https://maps.app.goo.gl/FfzsG4GASGqaTiDL9',
    status: 'Ongoing Project',
    description: 'Santevi is the latest premier development of Ovialand in San Pablo, Laguna. Inspired by the modern Filipino family, Santevi is conveniently located along the highway, providing our clients easy access to all their needs while keeping the feeling of exclusivity and privacy. Inspired by modern French architecture, Santevi aspires to deliver to its homeowners the best lifestyle community in San Pablo. Santevi is located at Brgy. San Vicente, San Pablo City, Laguna.',
    houseModels: ['Estate', 'Mansion', 'Manor Luxe', 'Manor Classic'],
    nearbyEstablishments: ['San Pablo City Public Market', 'SM City San Pablo', 'San Pablo General Hospital']
  },
  {
    id: '2',
    name: 'Savana South',
    location: 'Brgy. Soledad, San Pablo City, Laguna',
    imageUrl: '/Savana-1.png',
    mapUrl: 'https://share.google/oZi2rUKSovxMfui6l',
    status: 'Ongoing Project',
    description: 'The City of San Pablo is modern and developed, but it has not forgotten its deep roots of culture and tradition. The city has blended new buildings and updated infrastructure, but has not forgotten its old world charm. Savana San Pablo pays tribute to the old world beauty, blended seamlessly with style and class. Savana is Located at Brgy. Soledad, San Pablo City, Laguna.',
    houseModels: ['Cypress (2BR)', 'Dahlia (3BR)'],
    nearbyEstablishments: ['Soledad Elementary School', 'Local Wet Market', 'Fuel Station']
  },
  {
    id: '3',
    name: 'Sentro',
    location: 'Brgy. San Crispin, San Pablo City, Laguna',
    imageUrl: '/Sentro.png',
    mapUrl: 'https://maps.app.goo.gl/b1zAoyVMq9JQa2R96',
    status: 'Ongoing Project',
    description: 'Sentro is designed as a wheelchair-friendly neighborhood with landscaped walkways and communal spaces.',
    houseModels: ['Elm (2BR)', 'Fiora (3BR)'],
    nearbyEstablishments: ['San Crispin Park', 'Community Health Center', 'Neighborhood Grocery']
  },
  {
    id: '4',
    name: 'Caliya',
    location: 'Brgy. Masin Sur, Candelaria, Quezon',
    imageUrl: '/Caliya-2.png',
    mapUrl: 'https://maps.app.goo.gl/PccgX1be5H8kWCd2A',
    status: 'Ongoing Project',
    description: 'Caliya, nestled at the heart of Candelaria, is a sprawling 9.7 hectares of gently rolling landscape. Caliya is carefully planned and meticulously designed to provide the comforts and convenience of a modern-day neighborhood you will be proud to belong to and glad to call your home.',
    houseModels: ['Coral (2BR)', 'Dune (3BR)'],
    nearbyEstablishments: ['Candelaria Municipal Hall', 'Town Market', 'Candelaria Bay']
  },
  {
    id: '5',
    name: 'Sannera',
    location: 'Brgy. San Antonio 2, San Pablo City, Laguna',
    imageUrl: '/Sannera-1.png',
    mapUrl: 'https://maps.app.goo.gl/SXzTX6WyiQnWe5MG6',
    status: 'Completed Project',
    description: 'Sannera is a completed township offering move-in ready homes and a tight-knit community feel.',
    houseModels: ['Glen (2BR)', 'Haven (3BR)'],
    nearbyEstablishments: ['Sannera Community Center', 'St. Anthony Church', 'Local Retail Strip']
  },
  {
    id: '6',
    name: 'Terazza De Sto. Tomas',
    location: 'Brgy. San Roque, Sto. Tomas, Batangas',
    imageUrl: '/Terraza-1.png',
    mapUrl: 'https://maps.app.goo.gl/D8TJW2p81BThZ3x97',
    status: 'Completed Project',
    description: 'Terazza De Sto. Tomas features townhomes and communal gardens within easy reach of Sto. Tomas town proper.',
    houseModels: ['Iris (2BR Townhome)', 'Juniper (3BR Townhome)'],
    nearbyEstablishments: ['Sto. Tomas Market', 'Primary School', 'Bus Terminal']
  },
  {
    id: '7',
    name: 'Seriya',
    location: 'Brgy. Hinukay, Baliwag City, Bulacan',
    imageUrl: '/Seriya-1.png',
    mapUrl: 'https://maps.app.goo.gl/DMJBUTYYMHfbQEgy8',
    status: 'Ongoing Project',
    description: 'Seriya is a milestone for Ovialand. This will be the first development of the company in Central Luzon. Its name is from “cabecerria” which was what the Spaniards referred to Baliwag when it had no name yet. Seriya is located along Baliwag-Candaba Road, Baliwag, Bulacan. Soon to Open',
    houseModels: ['Kestrel (2BR)', 'Luma (3BR)'],
    nearbyEstablishments: ['Baliwag Town Center', 'Public Hospital', 'Shopping Arcade']
  },
  {
    id: '8',
    name: 'Anara',
    location: 'Brgy. San Roque, Baliwag City, Bulacan',
    imageUrl: '/Anara.png',
    mapUrl: 'https://maps.app.goo.gl/TJtXWQvv8zzwPync8',
    status: 'Opening Soon',
    description: 'Anara offers upcoming residential lots with modern utilities and secured entrance.',
    houseModels: ['Meadow (2BR)', 'Noble (3BR)'],
    nearbyEstablishments: ['Plaza de Baliwag', 'High School', 'Community Church']
  }
];

export const AWARDS = [
  { year: '2024', title: 'Best Affordable Housing Developer', body: '', url: 'https://business.inquirer.net/560002/ovialand-aims-to-build-nationwide-footprint-by-2033',imageUrl: '/builders.jpg' },
  { year: '2024', title: 'Top 4 — Philippine Growth Champions', body: '', url: 'https://business.inquirer.net/445239/growth-champions-shine-post-covid', imageUrl: '/champion.jpg' },
  { year: '2025', title: 'Top 8 — Best Places to Work in the Philippines', body: '', url: 'https://www.bworldonline.com/bptw-result-2025-awardees/', imageUrl: '/work.png' },
  { year: '2021', title: 'Asia Corporate Excellence and Sustainability Awards', body: '', url: 'https://www.acesawards.com/companies/ovialand', imageUrl: '/aces.png' },];

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
    {
    name: 'Our Business', href: '/company',
    submenu: [
      { name: 'ABOUT US',                 href: '/company' },
      { name: 'OUR COMMUNITIES',          href: '/business#communities' },
      { name: 'HOUSEASY',                 href: '/business/houseasy' },
    ]
  },
      { name: 'News & Updates', href: '/news', },
      { name: 'Socials',        href: '/socials' },
      { name: 'Contact Us', href: '/contact',
        submenu: [
      { name: 'Investors', href: '/investors' },
      { name: 'Careers', href: '/careers' },
      { name: 'Inquire Now', href: '/contact#inquire' },
    ]
  },
  { name: 'Homebuyers Portal', href: '/business/homebuyersportal'},
];
