export type IndustryId =
  | "b2b-saas"
  | "marketplace"
  | "construction"
  | "live-streaming"
  | "payments-fintech"
  | "ecommerce"
  | "b2c-growth"
  | "ai-ml"
  | "consulting-strategy"
  | "agentic-ai"
  | "finance-tax"
  | "logistics"
  | "mobile-app";

export interface Industry {
  id: IndustryId;
  label: string;
  short: string;
  tagline: string;
  resumeFile?: string;
}

export interface Achievement {
  text: string;
  metric?: string;
  tags: IndustryId[];
  flagship?: boolean;
  caseStudySlug?: string;
}

export interface Role {
  title: string;
  period: string;
  achievements: Achievement[];
  keyInitiatives?: string[];
}

export interface Company {
  id: string;
  name: string;
  descriptor: string;
  period: string;
  initials: string;
  tags: IndustryId[];
  roles: Role[];
}
