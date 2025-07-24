export interface Project {
  title: string;
  description: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  grade?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
