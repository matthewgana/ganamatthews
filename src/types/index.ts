export type Language = "en" | "fr" | "pt" | "ar" | "ja" | "de" | "es" | "zh-CN" | "he";
export type Direction = "ltr" | "rtl";

export interface LocaleMeta {
  code: Language;
  name: string;
  nativeName: string;
  dir: Direction;
}

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

export type CredentialStatus = "verified" | "accredited" | "ongoing";

export interface Credential {
  id: string;
  category: CredentialCategory;
  title: string;
  issuer?: string;
  year?: string;
  status?: CredentialStatus;
  statusBadge?: string;
  credentialCode?: string;
  skills?: string[];
  verificationUrl?: string;
  imageFile?: string;
  targetDate?: string;
  progressPercent?: number;
  description?: string;
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

export interface EngineeringCapability {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  keySkills: string[];
  /** Detail bullets shown on the back face of the flip card */
  backDetails: string[];
  /** Accent colour key for this card (maps to a CSS token) */
  accentKey?: string;
  /** Architecture pipeline flow stages (e.g. ['Gateway', 'IoC Services', 'Database']) */
  workflowSteps?: string[];
}

export interface MetricItem {
  id: string;
  value: string;
  numericTarget?: number;
  label: string;
  detail: string;
  category: "architecture" | "industry" | "technology";
}

export interface EngineeringStep {
  step: string;
  title: string;
  subtitle: string;
  summary: string;
  coreActivities: string[];
  deliverable: string;
  architecturalGuarantee: string;
}

export interface TechItem {
  id: string;
  name: string;
  category: "backend" | "frontend" | "database" | "ai" | "infrastructure" | "security";
  domain: string;
  color: string;
  description: string;
}
