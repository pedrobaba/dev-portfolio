export interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  tech_stack: string[];
  project_url: string | null;
  github_url: string | null;
  featured: boolean;
  sort_order: number;
  created_at: string;
}

export type PageId = 'home' | 'about' | 'skills' | 'portfolio' | 'resume' | 'contact';

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}
