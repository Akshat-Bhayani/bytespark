export interface Service {
  id: string;
  title: string;
  description: string;
  price: {
    start: number;
    end?: number;
  };
  features: string[];
  reviews?: Review[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  tags: string[];
  date: string;
  author: string;
}

export interface Testimonial {
  id: string;
  author: string;
  company: string;
  content: string;
  image: string;
} 