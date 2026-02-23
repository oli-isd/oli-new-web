
export interface Development {
  id: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  priceRange: string;
  status: 'Pre-Selling' | 'Ready for Occupancy' | 'Sold Out';
  features: string[];
}

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
