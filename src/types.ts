export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  result: string;
  description: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; tag: string }[];
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: 'ml' | 'fullstack' | 'web' | 'research';
  categoryLabel: string;
  shortDesc: string;
  fullDescription: string;
  image: string;
  galleryImages?: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  problemStatement: string;
  solution: string;
  keyFeatures: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  isThesis?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  roleType: string;
  message: string;
}

export interface ShapFeature {
  feature: string;
  importance: number;
  impact: 'high' | 'medium' | 'low';
  category: string;
  description: string;
  intervention: string;
}
