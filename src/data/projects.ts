import { IndustryId } from "./types";

export interface Project {
  slug?: string;
  company: string;
  title: string;
  category: string;
  description: string;
  impact: string[];
  icon: "call" | "chart" | "wallet" | "building" | "video" | "trophy";
  tags: IndustryId[];
}

export const projects: Project[] = [
  {
    slug: "expert-consultations",
    company: "Nojoto",
    title: "Expert Consultations",
    category: "Live Streaming · Payments · Growth",
    description:
      "Turned a live-streaming behavioral signal into a per-minute expert marketplace — from a 62%-click MVP to a stable, real-time consultation platform.",
    impact: ["5x → 8x LTV/CAC", "ARPU ₹142 → ₹286", "Calls/user 2.7 → 6"],
    icon: "call",
    tags: ["media-entertainment", "live-streaming", "b2c-growth", "payments-fintech", "ai-ml"],
  },
  {
    company: "Dunnhumby",
    title: "EMOM Personalization Platform",
    category: "B2B SaaS · Retail Media · AI/ML",
    description:
      "Enterprise personalization platform deployed across 5+ Tier-1 retailers (Tesco, John Lewis Partners, Coop, Metro), unifying offers, experimentation and AI-driven decisioning.",
    impact: ["50M+ customer interactions", "30–40% faster campaign setup", "5+ Tier-1 retailers live"],
    icon: "chart",
    tags: ["b2b-saas", "retail-media", "ai-ml"],
  },
  {
    company: "Nojoto",
    title: "Payments & Checkout Platform",
    category: "Payments · FinTech · Checkout",
    description:
      "Owned the end-to-end payments stack — wallet, UPI/card gateways, KYC, escrow and checkout — rebuilding the funnel for reliability and conversion.",
    impact: ["+34% payment success ratio", "−16% payment failures", "+8% gross revenue"],
    icon: "wallet",
    tags: ["payments-fintech", "ecommerce"],
  },
  {
    company: "Griffy",
    title: "Construction Marketplace",
    category: "Marketplace · Construction · 0→1",
    description:
      "Founded and built a two-sided marketplace from scratch, connecting homeowners with architects, contractors, material suppliers and service professionals.",
    impact: ["0→1 marketplace, full stack", "Vendor KYC & trust workflows", "CRM & lead-scoring system"],
    icon: "building",
    tags: ["construction", "marketplace", "consulting-strategy"],
  },
  {
    company: "Nojoto",
    title: "Live Streaming & AR Platform",
    category: "Live Streaming · AR/AI · Video",
    description:
      "Shipped enterprise-grade real-time live streaming (Agora) and AI camera filters/AR content creation (Snap partnership) at platform scale.",
    impact: ["Enterprise-grade real-time infra", "Snap AI camera filters", "+18% D1 time spent"],
    icon: "video",
    tags: ["live-streaming", "media-entertainment", "ai-ml"],
  },
  {
    company: "Nojoto",
    title: "Creator Growth & Gamification",
    category: "Growth · Gamification · Retention",
    description:
      "Built the Creator Earning Academy and a gamified progression system that turned casual creators into habitual, monetizing power users.",
    impact: ["+180% activation", "+116% supply-side conversion", "+320% usage"],
    icon: "trophy",
    tags: ["b2c-growth", "media-entertainment"],
  },
];
