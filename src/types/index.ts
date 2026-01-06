export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
}
