
export interface Development {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  mapUrl?: string | null;
  status: 'Ongoing Project' | 'Completed Project' | 'Opening Soon';
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
