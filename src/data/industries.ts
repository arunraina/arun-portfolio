import { Industry } from "./types";

export const industries: Industry[] = [
  {
    id: "b2b-saas",
    label: "B2B SaaS & Enterprise",
    short: "B2B SaaS",
    tagline:
      "Enterprise platforms sold to Tier-1 accounts — including retail media and personalization for global retailers like Tesco, John Lewis Partners, Coop and Metro.",
    resumeFile: "/resumes/b2b-saas.pdf",
  },
  {
    id: "marketplace",
    label: "Marketplace",
    short: "Marketplace",
    tagline:
      "Two-sided platforms connecting supply and demand — from founding Griffy's construction marketplace to scaling Nojoto's creator-consumer marketplace to ~150M ARR.",
    resumeFile: "/resumes/marketplace.pdf",
  },
  {
    id: "construction",
    label: "Construction & PropTech",
    short: "Construction",
    tagline:
      "Griffy: a founder-built marketplace connecting homeowners with architects, contractors, material suppliers and service professionals.",
    resumeFile: "/resumes/construction.pdf",
  },
  {
    id: "live-streaming",
    label: "Live Streaming & Video / OTT",
    short: "Live Streaming",
    tagline:
      "Real-time live-streaming infrastructure, video capability and AR content creation at platform scale.",
  },
  {
    id: "payments-fintech",
    label: "Payments & FinTech",
    short: "Payments",
    tagline:
      "The full Nojoto payments stack — wallet, UPI/card gateways, escrow, checkout, failure-retry, payouts and KYC — plus Griffy's escrow-based marketplace payments.",
    resumeFile: "/resumes/payments-fintech.pdf",
  },
  {
    id: "ecommerce",
    label: "E-commerce & Commerce Ops",
    short: "E-commerce",
    tagline:
      "Order lifecycle, fulfillment, returns and B2B commerce — from product discovery to post-purchase resolution.",
    resumeFile: "/resumes/ecommerce.pdf",
  },
  {
    id: "b2c-growth",
    label: "B2C Growth & Lifecycle",
    short: "B2C Growth",
    tagline:
      "Activation, engagement and retention loops driven by behavioral data, gamification and personalization.",
  },
  {
    id: "ai-ml",
    label: "AI/ML & Applied AI",
    short: "AI/ML",
    tagline:
      "Turning ML models into shipped product — recommendation engines, uplift measurement and AI-driven decisioning at enterprise scale.",
    resumeFile: "/resumes/ai-ml.pdf",
  },
  {
    id: "consulting-strategy",
    label: "Consulting & Strategy",
    short: "Strategy",
    tagline:
      "Cross-functional leadership, multi-quarter roadmaps and P&L ownership across product, data and business teams.",
    resumeFile: "/resumes/consulting-strategy.pdf",
  },
  {
    id: "agentic-ai",
    label: "Agentic AI",
    short: "Agentic AI",
    tagline:
      "Typed planners and tool registries that turn LLMs into safe, deterministic product surfaces — a decision layer, not a chatbot.",
    resumeFile: "/resumes/ai-ml.pdf",
  },
  {
    id: "finance-tax",
    label: "Finance & Tax Ops",
    short: "Finance/Tax",
    tagline:
      "Ledgers, invoicing, audit reporting, GST-compliant escrow and creator payouts — the accounting backbone behind consumer payments.",
    resumeFile: "/resumes/payments-fintech.pdf",
  },
  {
    id: "logistics",
    label: "Logistics & Fulfillment",
    short: "Logistics",
    tagline:
      "Order lifecycle, delivery and pickup workflows, and post-purchase operations from booking through fulfillment and returns.",
    resumeFile: "/resumes/ecommerce.pdf",
  },
  {
    id: "mobile-app",
    label: "Mobile App Product",
    short: "Mobile App",
    tagline:
      "Consumer mobile product surfaces — content creation, live streaming, discovery and monetization shipped inside the Nojoto app.",
  },
];

export const industryMap: Record<string, Industry> = Object.fromEntries(
  industries.map((i) => [i.id, i])
);
