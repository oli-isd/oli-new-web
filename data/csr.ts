import { CSRSection, CSRStat } from '../types';

export const CSR_STATS: CSRStat[] = [
  {
    label: 'Trees Planted',
    target: 18000,
    suffix: '+',
    description: 'Native trees planted to promote environmental balance.',
    iconType: 'trees'
  },
  {
    label: 'Scholars',
    target: 100,
    suffix: '',
    description: 'Empowering students through our scholarship programs.',
    iconType: 'scholars'
  },
  {
    label: 'Classrooms Built',
    target: 14,
    suffix: '',
    description: 'Building safe and modern learning spaces for students.',
    iconType: 'classrooms'
  }
];

export const CSR_SECTIONS: CSRSection[] = [
  {
    id: 'tree-planting',
    title: 'Tree Planting',
    description: 'We build responsibly. In every project we develop, we plant trees to promote environmental balance, enhance green spaces, and nurture healthier communities for generations to come.',
    items: [], // Items weren't in the original text but added to the type, leaving empty to preserve exact content
    images: [
      '/optimized/TreePlanting/TreePlanting1.jpg',
      '/optimized/TreePlanting/TreePlanting2.jpg',
      '/optimized/TreePlanting/TreePlanting3.jpg',
      '/optimized/TreePlanting/TreePlanting4.jpg',
      '/optimized/TreePlanting/TreePlanting5.jpg',
      '/optimized/TreePlanting/TreePlanting6.jpg',
      '/optimized/TreePlanting/Treeplanting7.jpg',
    ]
  },
  {
    id: 'scholarships',
    title: 'Scholarship Grant',
    description: 'At Ovialand, we believe education transforms lives. Through our scholarship program, we support the children of our construction workers, helping them continue their studies and move closer to achieving their dreams.',
    items: [],
    images: [
      '/optimized/Scholars/new-photos/Scholars1.jpg',
      '/optimized/Scholars/new-photos/Scholars2.jpg',
      '/optimized/Scholars/new-photos/Scholars3.jpg',
    ]
  },
  {
    id: 'classroom',
    title: 'Community Building',
    description: ' Education is at the heart of strong communities. Ovialand donates classrooms in every barangay where we operate, creating better learning environments and supporting the growth of young minds.',
    items: [],
    images: [
      '/optimized/CommunityBuilding/CB1.jpg',
      '/optimized/CommunityBuilding/CB2.jpg',
      '/optimized/CommunityBuilding/CB3.jpg',
      '/optimized/CommunityBuilding/CB4.jpg',
      '/optimized/CommunityBuilding/CB5.jpg',
      '/optimized/CommunityBuilding/CB6.jpg',
      '/optimized/CommunityBuilding/CB7.jpg',
      '/optimized/CommunityBuilding/CB8.jpg',
      '/optimized/CommunityBuilding/CB9.jpg',
    ]
  },
  {
    id: 'outreach',
    title: 'Outreach Program',
    description: 'Our commitment to care extends beyond our developments. We support Manila Boys Town and Manila Girls Town by providing monthly essentials and organizing donation drives, especially during times of calamity, to help communities recover and rebuild.',
    items: [],
    images: [
      '/optimized/Outreach/Outreach1.jpg',
      '/optimized/Outreach/Outreach2.jpg',
      '/optimized/Outreach/Outreach3.jpg',
      '/optimized/Outreach/Outreach4.jpg',
      '/optimized/Outreach/Outreach5.jpg',
      '/optimized/Outreach/Outreach9.jpg',
      '/optimized/Outreach/Outreach10.jpg',
      '/optimized/Outreach/Outreach11.jpg',
      '/optimized/Outreach/Outreach12.jpg',
      '/optimized/Outreach/Outreach13.jpg',
      '/optimized/Outreach/Outreach14.jpg',
    ]
  }
];
