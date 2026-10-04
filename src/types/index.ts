export type Language = "en" | "fr";
export type Theme = "light" | "dark";

export type ProjectMaturity = "Functional MVP" | "Working Prototype" | "Early Prototype";

export type AIMaturity =
  | "AI/ML Prototype"
  | "Research Prototype"
  | "Applied ML Project"
  | "Capstone Project"
  | "Working Prototype";

export interface AIProject {
  id: string;
  title: string;
  shortTitle: string;
  domain: string;
  domainTags: string[];
  capabilities: string[];
  status: AIMaturity;
  description: string;
  evidence?: string[];
  isCapstone?: boolean;
}

export type CredentialCategory =
  | "Cybersecurity"
  | "Backend Development"
  | "Data Analytics"
  | "AI & Machine Learning";

export interface Credential {
  id: string;
  category: CredentialCategory;
  title: string;
  issuer?: string;
  year?: string;
  verificationUrl?: string;
  imageFile?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  industry: string;
  maturity: ProjectMaturity;
  shortDescription: string;
  problem: string;
  solution: string;
  verifiedCapabilities: string[];
  technologies: string[];
  architectureSummary: string;
  keyEvidence: string;
  image: string;
  isFlagship: boolean;
  githubUrl?: string;
  liveDemoUrl?: string;
  caveat?: string;
}

export interface EngineeringCapabi