export interface Sneaker {
  id: string;
  name: string;
  brand: string;
  colorway: string;
  releaseYear: number;
  estimatedPrice: number;
  imageUrl: string;
  sightingContext: string;
  rating: number; // 1-5 rating on heat/hype level
  retailPrice?: number;
}

export type CelebrityCategory = 'Actor' | 'Musician' | 'Athlete' | 'Model' | 'Director';

export interface Celebrity {
  id: string;
  name: string;
  category: CelebrityCategory;
  avatarUrl: string;
  bio: string;
  birthYear: number;
  nationality: string;
  styleStyle: string; // e.g. "Streetwear & Luxury", "Classic Tailoring & Retro Runners"
  popularBrands: string[];
  sneakers: Sneaker[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readingTime: string;
  tags: string[];
  author: string;
  imageUrl: string;
  featured?: boolean;
}

export interface SightingReport {
  id: string;
  celebrityName: string;
  sneakerName: string;
  brand: string;
  location: string;
  dateReported: string;
  reporterName: string;
  description: string;
  approved: boolean;
}
