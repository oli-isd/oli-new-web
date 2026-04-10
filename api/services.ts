import { apiClient } from './client';
import { Development, Testimonial } from '../types';

export const apiServices = {
  // Real Estate Data Points
  getDevelopments: () => apiClient<Development[]>('/developments'),
  
  // Marketing / Pages
  getAwards: () => apiClient<any[]>('/awards'),
  getTestimonials: () => apiClient<Testimonial[]>('/testimonials'),
  
  // Forms
  submitContactForm: (data: any) => apiClient<any>('/contact', {
    method: 'POST',
    body: JSON.stringify(data)
  })
};
