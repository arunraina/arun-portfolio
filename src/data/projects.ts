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
    | "flask"
    | "brain"
    | "truck"
    | "zap"
    | "scale"
    | "chat"
    | "package";
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
    tags: ["marketplace", "mobile-app", "live-streaming", "b2c-growth", "payments-fintech", "ai-ml", "consulting-strategy"],
  },
  {
    slug: "atlas-ai-decision-layer",
    company: "Griffy",
    title: "Atlas — AI Decision Layer",
    category: "Agentic AI · Decision Intelligence · Platform",
    description:
      "Designed the product architecture for Atlas, Griffy's AI decision layer: one planner plus a typed tool registry — not a chatbot — that turns natural language into typed booking intents while a home-memory record predicts what a house needs next in its construction lifecycle.",
    impact: [
      "One planner, typed tool registry",
      "LLM never writes to a business table",
      "No agent can book, order or pay",
    ],
    icon: "brain",
    tags: ["agentic-ai", "ai-ml", "construction", "marketplace", "consulting-strategy"],
  },
  {
    slug: "griffy-supply-materials",
    company: "Griffy",
    title: "Griffy Supply — B2B Materials & Distributor ERP Integration",
    category: "B2B SaaS · Supply Chain · Construction",
    description:
      "Designed the B2B materials ordering module — canonical catalogue, honest stock-visibility tiers, credit limit checks and an ERP adapter contract — for contractors ordering from distributors who still run Tally on a desktop.",
    impact: ["3-tier stock honesty model", "7-entity canonical ERP contract", "<2% target oversell rate"],
    icon: "package",
    tags: ["construction", "b2b-saas", "marketplace", "logistics"],
  },
  {
    slug: "test-learn-experimentation",
    company: "Dunnhumby",
    title: "Test & Learn: A/B Testing in the Offer Nomination Flow",
    category: "B2B SaaS · Experimentation · AI/ML",
    description:
      "Shipped A/B testing embedded inside the offer nomination flow, so retail offer managers can test copy, mechanics, dates and audience without building duplicate offers or hand-splitting audiences.",
    impact: ["-33% campaign setup time", "2.2x experiments run", "4 testable variables at V1"],
    icon: "flask",
    tags: ["b2b-saas", "ai-ml"],
  },
  {
    slug: "payments-checkout",
    company: "Nojoto",
    title: "Payments & Checkout Platform",
    category: "Payments · FinTech · Checkout",
    description:
      "Owned the end-to-end payments stack — wallet, UPI/card gateways, KYC, escrow and checkout — rebuilding the funnel for reliability and conversion.",
    impact: ["+34% payment success ratio", "−16% payment failures", "+8% gross revenue"],
    icon: "wallet",
    tags: ["payments-fintech", "ecommerce", "marketplace", "finance-tax"],
  },
  {
    slug: "omnichannel-orchestration",
    company: "Dunnhumby",
    title: "Omnichannel Campaign Orchestration",
    category: "B2B SaaS · Retail Media · Martech",
    description:
      "Unified Email, SMS and Direct Mail execution with audience targeting and offer decisioning — one orchestration layer for lifecycle-driven retailer campaigns.",
    impact: ["Cross-channel orchestration", "Built-in offer decisioning", "Lifecycle-driven engagement"],
    icon: "layers",
    tags: ["b2b-saas", "ecommerce"],
  },
  {
    slug: "emom-personalization",
    company: "Dunnhumby",
    title: "EMOM Personalization Platform",
    category: "B2B SaaS · Retail Media · AI/ML",
    description:
      "Enterprise personalization platform deployed across 5+ Tier-1 retailers (Tesco, John Lewis Partners, Coop, Metro), unifying offers, experimentation and AI-driven decisioning.",
    impact: ["50M+ customer interactions", "30–40% faster campaign setup", "5+ Tier-1 retailers live"],
    icon: "chart",
    tags: ["b2b-saas", "ai-ml"],
  },
  {
    slug: "construction-marketplace",
    company: "Griffy",
    title: "Construction Marketplace",
    category: "Marketplace · Construction · 0→1",
    description:
      "Founded and built a two-sided marketplace from scratch, connecting homeowners with architects, contractors, material suppliers and service professionals.",
    impact: ["0→1 marketplace, full stack", "Vendor KYC & trust workflows", "Escrow-based payments"],
    icon: "building",
    tags: ["construction", "marketplace", "consulting-strategy", "payments-fintech", "logistics", "finance-tax"],
  },
  {
    slug: "vendor-crm-lead-management",
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
    company: "Dunnhumby",
    title: "Measurement & Behavior Analytics Chatbot",
    category: "Agentic AI · Measurement · Analytics",
    description:
      "Exploring a conversational AI layer over the Measurement & Analytics Platform, so retailer stakeholders can ask natural-language questions about campaign uplift and customer behavior instead of navigating dashboards.",
    impact: [
      "Natural-language query layer",
      "Built on existing ANCOVA uplift data",
      "Extends the Launch Science AI/ML foundation",
    ],
    icon: "chat",
    tags: ["agentic-ai", "ai-ml", "b2b-saas", "consulting-strategy"],
  },
  {
    slug: "quick-fix-dispatch",
    company: "Griffy",
    title: "Quick Fix — Provider Dispatch & Assignment",
    category: "Agentic AI · Marketplace Ops · Construction",
    description:
      "Griffy assigns a provider on the homeowner's behalf for urgent jobs — an assignment scorer combining response rate, completion rate and real distance, with paid placement permanently barred from influencing it.",
    impact: ["Duty-of-care assignment, never for sale", "Real distance replaced a hardcoded score", "Closed a 45/100-point silent scoring gap"],
    icon: "zap",
    tags: ["construction", "marketplace", "ai-ml", "logistics"],
  },
  {
    slug: "unified-pricing-engine",
    company: "Griffy",
    title: "Unified Pricing & Fee Engine",
    category: "Finance/Tax · Payments · Platform",
    description:
      "Collapsed three independently-drifted fee calculations into one shared pricing package every quote and every charge reads from, with a test enforcing that platform revenue always equals customer payment minus provider payout minus tax.",
    impact: ["3 duplicated fee tables found & merged", "Revenue-conservation invariant, tested", "Booking price frozen as a snapshot"],
    icon: "scale",
    tags: ["construction", "marketplace", "finance-tax", "payments-fintech", "consulting-strategy"],
  },
  {
    slug: "live-streaming-ar",
    company: "Nojoto",
    title: "Live Streaming & AR Platform",
    category: "Live Streaming · AR/AI · Video",
    description:
      "Shipped enterprise-grade real-time live streaming (Agora) and AI camera filters/AR content creation (Snap partnership) at platform scale.",
    impact: ["Enterprise-grade real-time infra", "Snap AI camera filters", "+18% D1 time spent"],
    icon: "video",
    tags: ["live-streaming", "marketplace", "mobile-app", "ai-ml"],
  },
  {
    slug: "creator-growth-gamification",
    company: "Nojoto",
    title: "Creator Growth & Gamification",
    category: "Growth · Gamification · Retention",
    description:
      "Built the Creator Earning Academy and a gamified progression system that turned casual creators into habitual, monetizing power users.",
    impact: ["+180% activation", "+116% supply-side conversion", "+320% usage"],
    icon: "trophy",
    tags: ["b2c-growth", "marketplace", "mobile-app", "consulting-strategy"],
  },
  {
    slug: "corporate-events-b2b",
    company: "Nojoto",
    title: "Corporate Events (B2B)",
    category: "B2B SaaS · Events · Ticketing",
    description:
      "Built an end-to-end corporate event booking platform with QR-based ticket validation — a new offline B2B revenue stream for the platform.",
    impact: ["New B2B revenue stream", "QR ticket validation", "End-to-end booking ops"],
    icon: "ticket",
    tags: ["b2b-saas", "consulting-strategy", "ecommerce", "marketplace", "logistics"],
  },
  {
    slug: "creator-commerce-goonj",
    company: "Nojoto",
    title: "Creator Commerce (Goonj)",
    category: "E-commerce · Marketplace · D2C",
    description:
      "Took physical products — Goonj speakers and other creator-branded electronics — from product selection through fulfillment, Nojoto's first commerce line.",
    impact: ["Product discovery to fulfillment", "Creator-branded electronics", "New commerce revenue line"],
    icon: "cart",
    tags: ["ecommerce", "marketplace", "logistics"],
  },
  {
    slug: "order-lifecycle-fulfillment",
    company: "Griffy · Nojoto",
    title: "Order Lifecycle & Fulfillment Ops",
    category: "Logistics · Fulfillment · Post-Purchase",
    description:
      "Designed order/service lifecycle management end-to-end — booking through completion at Griffy, and post-purchase cancellations, refunds, returns and reconciliation at Nojoto — covering delivery, pickup and customer/vendor handoffs.",
    impact: ["Delivery, pickup & return workflows", "Refund & reconciliation across gateways", "Real-time status tracking"],
    icon: "truck",
    tags: ["logistics", "ecommerce", "construction", "payments-fintech", "marketplace"],
  },
  {
    slug: "content-creation-live-social",
    company: "Nojoto",
    title: "Content Creation & Live Social Suite",
    category: "Content Tools · Live Streaming · Social",
    description:
      "Shipped the core creation toolkit — Write-on-Photo, in-app video recording/editing, Stories, and audio chat rooms — turning passive consumers into daily creators.",
    impact: ["Write-on-Photo content tool", "Stories format shipped", "Audio chat rooms (Clubhouse-style)"],
    icon: "camera",
    tags: ["marketplace", "mobile-app", "live-streaming", "b2c-growth"],
  },
  {
    slug: "creator-boost-advertising",
    company: "Nojoto",
    title: "Creator Boost & Platform Advertising",
    category: "Monetization · Ads · Subscriptions",
    description:
      "Built a paid-promotion layer — platform ads and creator 'boost' — alongside platform and creator subscriptions, adding a third monetization pillar beyond gifting and calls.",
    impact: ["Paid creator boost/promotion", "Platform subscription tier", "New ads revenue pillar"],
    icon: "megaphone",
    tags: ["marketplace", "payments-fintech", "b2c-growth", "consulting-strategy"],
  },
  {
    slug: "search-discovery-onboarding",
    company: "Nojoto",
    title: "Search, Discovery & Onboarding",
    category: "Search · Onboarding · Activation",
    description:
      "Rebuilt search and discovery on Elasticsearch and redesigned onboarding funnels and the profile-completion journey to get new users to their first Aha moment faster.",
    impact: ["Elasticsearch-powered search", "Redesigned onboarding funnel", "Profile-completion journey"],
    icon: "route",
    tags: ["ai-ml", "b2c-growth", "consulting-strategy", "marketplace", "mobile-app"],
  },
  {
    slug: "creator-payouts-ledger",
    company: "Nojoto",
    title: "Creator Payouts, Ledger & Compliance",
    category: "Payments · Compliance · Finance Ops",
    description:
      "Built the financial backbone behind every payment feature — ledgers, invoicing, audit reporting and creator payout runs — so KYC'd creators get paid correctly and on time.",
    impact: ["Payment ledger & audit reports", "Invoicing & creator payouts", "KYC-gated compliance"],
    icon: "receipt",
    tags: ["payments-fintech", "finance-tax", "consulting-strategy", "marketplace"],
  },
];
