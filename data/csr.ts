import { CSRSection, CSRStat } from '../types';

export const CSR_STATS: CSRStat[] = [
  {
    label: 'Trees Planted',
    target: 2150,
    suffix: '+',
    iconType: 'trees'
  },
  {
    label: 'Scholars',
    target: 25,
    suffix: '',
    iconType: 'scholars'
  },
  {
    label: 'Classrooms Built',
    target: 14,
    suffix: '',
    iconType: 'classrooms'
  }
];

export const CSR_SECTIONS: CSRSection[] = [
  {
    id: 'education',
    title: 'Education & Scholarship',
    description: 'We believe that education is the foundation for a better future. Our scholarship program provides deserving students with the financial support they need to complete their studies and reach their full potential. To date, we have supported 25 scholars, many of whom are now successful professionals in their respective fields.',
    items: [
      'Full tuition support',
      'Monthly allowance',
      'Mentorship program',
      'Job placement assistance'
    ],
    images: [
      '/Outreach/Education1.jpg',
      '/Outreach/Education2.jpg',
      '/Outreach/Education3.png',
      '/Outreach/Education4.jpg',
      '/Outreach/Education5.jpg',
    ]
  },
  {
    id: 'environment',
    title: 'Environmental Stewardship',
    description: 'Ovialand is committed to preserving the environment for future generations. Our tree-planting initiatives across our project sites help restore local ecosystems and promote sustainable living. We have planted over 2,150 native trees, creating green spaces that provide shade, clean air, and a sense of tranquility for our homeowners.',
    items: [
      'Native tree planting',
      'Sustainable site development',
      'Waste management programs',
      'Community clean-up drives'
    ],
    images: [
      '/Outreach/Envi1.jpg',
      '/Outreach/Envi2.jpg',
      '/Outreach/Envi3.jpg',
      '/Outreach/Envi4.jpg',
    ]
  },
  {
    id: 'outreach',
    title: 'Community Outreach',
    description: 'Our commitment to care extends beyond our developments. We support Manila Boys Town and Manila Girls Town by providing monthly essentials and organizing donation drives, especially during times of calamity, to help communities recover and rebuild.',
    items: [
      'Monthly essentials support',
      'Disaster relief efforts',
      'Community development programs',
      'Volunteer initiatives'
    ],
    images: [
      '/Outreach/Outreach1.png',
      '/Outreach/Outreach2.png',
      '/Outreach/Outreach3.png',
      '/Outreach/Outreach4.png',
      '/Outreach/Outreach5.png',
      '/Outreach/Outreach9.jpeg',
      '/Outreach/Outreach10.jpeg',
      '/Outreach/Outreach11.jpeg',
      '/Outreach/Outreach12.jpg',
      '/Outreach/Outreach13.jpg',
      '/Outreach/Outreach14.jpeg',
    ]
  }
];
