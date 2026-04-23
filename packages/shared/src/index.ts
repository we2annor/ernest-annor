// Contact
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

// Projects
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  imageUrl?: string;
  createdAt: string;
}

// Experience
export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string[];
  techStack: string[];
  location: string;
}

// Blog
export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  featured: boolean;
}

// API responses
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}

// Analytics
export interface PageView {
  path: string;
  referrer?: string;
  userAgent?: string;
  createdAt: string;
}
