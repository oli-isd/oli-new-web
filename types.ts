
export interface Development {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  mapUrl?: string | null;
  estateImageUrl?: string;
  mansionImageUrl?: string;
  manorLuxeImageUrl?: string;
  manorClassicImageUrl?: string;
  houseModelImages?: string[];
  status: 'Ongoing Project' | 'Completed Project' | 'Opening Soon';
  description?: string;
  houseModels?: string[];
  nearbyEstablishments?: string[];
}

export type ModelData = {
  label: string;
  description: string;
  specs: { lotArea: string; floorArea: string; bedroom: string; toiletBath: string; carport: string };
};

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
