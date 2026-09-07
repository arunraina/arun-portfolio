import { Industry } from "./types";

export const industries: Industry[] = [
  {
    id: "b2b-saas",
    label: "B2B SaaS & Enterprise",
    short: "B2B SaaS",
    tagline:
      "Enterprise platforms sold to Tier-1 accounts — roadmaps, workflow tools and adoption across complex organizations.",
    resumeFile: "/resumes/b2b-saas.pdf",
  },
  {
    id: "retail-media",
    label: "Retail Media & Retail Tech",
    short: "Retail Media",
    tagline:
      "Personalization, offers and measurement products built for retailers like Tesco, John Lewis Partners, Coop and Metro.",
    resumeFile: "/resumes/retail-media.pdf",
  },
  {
    id: "marketplace",
    label: "Marketplace",
    short: "Marketplace",
    tagline:
      "Two-sided supply/demand platforms — discovery, trust, liquidity and transaction flow between buyers and sellers.",
    resumeFile: "/resumes/marketplace.pdf",
  },
  {
    id: "construction",
    label: "Construction & PropTech",
    short: "Construction",
    tagline:
      "Founder-built marketplace connecting homeowners with contractors — vendor trust, field-service and lead operations.",
    resumeFile: "/resumes/construction.pdf",
  },
  {
    id: "media-entertainment",
    label: "Media & Entertainment",
    short: "Media & Ent.",
    tagline:
      "Scaling a 30M+ MAU storytelling platform — creator monetization, subscriptions and content-led growth.",
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
      "Wallets, UPI/card gateways, KYC, escrow, payouts and checkout — the full stack of a consumer payments platform.",
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
      "Turning ML models and LLM agents into shipped product — decisioning, recommendations and agentic workflows.",
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
];

export const industryMap: Record<string, Industry> = Object.fromEntries(
  industries.map((i) => [i.id, i])
);
