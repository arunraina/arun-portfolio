import { IndustryId } from "./types";

export interface Project {
  slug?: string;
  company: string;
  title: string;
  category: string;
  description: string;
  impact: string[];
  icon:
    | "call"
    | "chart"
    | "wallet"
    | "building"
    | "video"
    | "trophy"
    | "users"
    | "ticket"
    | "cart"
    | "layers"
    | "camera"
    | "megaphone"
    | "route"
    | "receipt"
    | "flask";
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
    company: "Dunnhumby",
    title: "Omnichannel Campaign Orchestration",
    category: "B2B SaaS · Retail Media · Martech",
    description:
      "Unified Email, SMS and Direct Mail execution with audience targeting and offer decisioning — one orchestration layer for lifecycle-driven retailer campaigns.",
    impact: ["Cross-channel orchestration", "Built-in offer decisioning", "Lifecycle-driven engagement"],
    icon: "layers",
    tags: ["b2b-saas", "retail-media", "ecommerce"],
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
    impact: ["0→1 marketplace, full stack", "Vendor KYC & trust workflows", "Escrow-based payments"],
    icon: "building",
    tags: ["construction", "marketplace", "consulting-strategy", "payments-fintech"],
  },
  {
    company: "Griffy",
    title: "Vendor CRM & Lead Management",
    category: "B2B SaaS · Sales Ops · Construction",
    description:
      "Built a CRM and lead-management platform for sales teams — capture, qualify, score and convert marketplace leads with structured follow-ups.",
    impact: ["Lead scoring & tracking", "Structured follow-up workflows", "Built for sales conversion"],
    icon: "users",
    tags: ["construction", "marketplace", "consulting-strategy", "b2b-saas"],
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
  {
    company: "Nojoto",
    title: "Corporate Events (B2B)",
    category: "B2B SaaS · Events · Ticketing",
    description:
      "Built an end-to-end corporate event booking platform with QR-based ticket validation — a new offline B2B revenue stream for the platform.",
    impact: ["New B2B revenue stream", "QR ticket validation", "End-to-end booking ops"],
    icon: "ticket",
    tags: ["b2b-saas", "consulting-strategy", "ecommerce"],
  },
  {
    company: "Nojoto",
    title: "Creator Commerce (Goonj)",
    category: "E-commerce · Marketplace · D2C",
    description:
      "Took physical products — Goonj speakers and other creator-branded electronics — from product selection through fulfillment, Nojoto's first commerce line.",
    impact: ["Product discovery to fulfillment", "Creator-branded electronics", "New commerce revenue line"],
    icon: "cart",
    tags: ["ecommerce", "marketplace"],
  },
  {
    company: "Nojoto",
    title: "Content Creation & Live Social Suite",
    category: "Content Tools · Live Streaming · Social",
    description:
      "Shipped the core creation toolkit — Write-on-Photo, in-app video recording/editing, Stories, and audio chat rooms — turning passive consumers into daily creators.",
    impact: ["Write-on-Photo content tool", "Stories format shipped", "Audio chat rooms (Clubhouse-style)"],
    icon: "camera",
    tags: ["media-entertainment", "live-streaming", "b2c-growth"],
  },
  {
    company: "Nojoto",
    title: "Creator Boost & Platform Advertising",
    category: "Monetization · Ads · Subscriptions",
    description:
      "Built a paid-promotion layer — platform ads and creator 'boost' — alongside platform and creator subscriptions, adding a third monetization pillar beyond gifting and calls.",
    impact: ["Paid creator boost/promotion", "Platform subscription tier", "New ads revenue pillar"],
    icon: "megaphone",
    tags: ["media-entertainment", "payments-fintech", "b2c-growth"],
  },
  {
    company: "Nojoto",
    title: "Search, Discovery & Onboarding",
    category: "Search · Onboarding · Activation",
    description:
      "Rebuilt search and discovery on Elasticsearch and redesigned onboarding funnels and the profile-completion journey to get new users to their first Aha moment faster.",
    impact: ["Elasticsearch-powered search", "Redesigned onboarding funnel", "Profile-completion journey"],
    icon: "route",
    tags: ["ai-ml", "b2c-growth", "consulting-strategy"],
  },
  {
    company: "Nojoto",
    title: "Creator Payouts, Ledger & Compliance",
    category: "Payments · Compliance · Finance Ops",
    description:
      "Built the financial backbone behind every payment feature — ledgers, invoicing, audit reporting and creator payout runs — so KYC'd creators get paid correctly and on time.",
    impact: ["Payment ledger & audit reports", "Invoicing & creator payouts", "KYC-gated compliance"],
    icon: "receipt",
    tags: ["payments-fintech", "consulting-strategy"],
  },
  {
    company: "Dunnhumby",
    title: "Test & Learn Experimentation Platform",
    category: "B2B SaaS · Experimentation · AI/ML",
    description:
      "Built and scaled the controlled-experimentation platform enterprise retailers use to design, run and measure tests across channels before wider rollout.",
    impact: ["30–40% faster campaign setup", "Controlled experiments at scale", "Unlocked new commercial offers"],
    icon: "flask",
    tags: ["b2b-saas", "retail-media", "ai-ml"],
  },
];
