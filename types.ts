export interface Testimonial {
  quote: string;
  author: string;
  image?: string;
  videoUrl?: string;
}

export interface Ambassador {
  id: number;
  name: string;
  contact: string;
  image: string;
  bio: string;
  salesRank?: number;
  totalSales: string | number;
  prcLicenseNo: string;
  phoneNumber?: string;
  email: string;
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  viberWhatsapp?: string;
  affiliations: string;
  testimonials: Testimonial[];
  since: string;
}

export interface CSRSection {
  id: string;
  title: string;
  description: string;
  items: string[];
  images: string[];
}

export interface CSRStat {
  label: string;
  target: number;
  suffix: string;
  description: string;
  iconType: string;
}

export interface Development {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  estateImageUrl?: string;
  mansionImageUrl?: string;
  manorLuxeImageUrl?: string;
  manorClassicImageUrl?: string;
  mapUrl: string;
  status: string;
  description: string;
  houseModels: string[];
  houseModelImages: string[];
  nearbyEstablishments: string[];
}

export interface ModelSpecs {
  lotArea: string;
  floorArea: string;
  bedroom: string;
  toiletBath: string;
  carport: string;
}

export interface ModelData {
  label: string;
  description: string;
  specs: ModelSpecs;
}

export interface NavLink {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
}

export interface Award {
  year: string;
  title: string;
  body: string;
  url: string;
  imageUrl: string;
}
