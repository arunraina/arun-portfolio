import { Company } from "./types";

export const companies: Company[] = [
  {
    id: "dunnhumby",
    name: "Dunnhumby",
    descriptor: "Retail data science & personalization for Tesco, John Lewis Partners, Coop, Metro",
    period: "May 2024 – Present",
    initials: "DH",
    tags: ["b2b-saas", "retail-media", "ai-ml", "consulting-strategy"],
    roles: [
      {
        title: "Senior Product Manager, Personalization & Omnichannel",
        period: "May 2024 – Present",
        keyInitiatives: [
          "Test & Learn (A/B Experimentation)",
          "AI-driven Launch Science",
          "Measurement & Analytics",
          "Omnichannel Campaign Orchestration",
        ],
        achievements: [
          {
            text: "Built and deployed the EMOM Personalization Platform, an enterprise B2B SaaS product across 5+ Tier-1 retailers (Tesco, John Lewis Partners, Coop, Metro), managing six squads to power 50M+ customer interactions across digital and offline channels.",
            metric: "50M+ interactions",
            tags: ["b2b-saas", "retail-media"],
            flagship: true,
          },
          {
            text: "Built and scaled a Test & Learn experimentation platform, enabling enterprise customers to design and execute controlled experiments across channels.",
            metric: "30–40% faster campaign setup",
            tags: ["b2b-saas", "retail-media", "ai-ml"],
            flagship: true,
          },
          {
            text: "Productized AI/ML-powered Launch Science capabilities, partnering with Research and Data Science to translate machine-learning models into scalable enterprise decisioning workflows.",
            tags: ["ai-ml", "retail-media", "b2b-saas"],
          },
          {
            text: "Architected an Omnichannel Campaign Orchestration Platform, unifying Email, SMS and Direct Mail execution with audience targeting, offer decisioning and lifecycle-driven engagement.",
            tags: ["retail-media", "b2b-saas", "ecommerce"],
          },
          {
            text: "Enhanced the Measurement & Analytics Platform, introducing ANCOVA-based uplift methodologies to strengthen measurement of campaign impact.",
            tags: ["ai-ml", "retail-media"],
          },
          {
            text: "Partnered with US-based business and product stakeholders across time zones to define requirements and prioritize roadmap investments for global Tier-1 retail accounts.",
            tags: ["consulting-strategy", "b2b-saas"],
          },
        ],
      },
    ],
  },
  {
    id: "nojoto",
    name: "Nojoto",
    descriptor: "India's largest storytelling platform — scaled to 30M+ MAU and ~150M ARR",
    period: "Oct 2017 – May 2024 · 6 yr 8 mo",
    initials: "NJ",
    tags: [
      "media-entertainment",
      "live-streaming",
      "payments-fintech",
      "ecommerce",
      "b2c-growth",
      "consulting-strategy",
    ],
    roles: [
      {
        title: "Head of Product, Overall Platform",
        period: "Apr 2023 – May 2024",
        keyInitiatives: [
          "Creator Subscriptions & Memberships",
          "AI Camera Filters (Snap)",
          "Live Streaming Platform (Agora)",
          "Wallet & Payments",
        ],
        achievements: [
          {
            text: "Part of the Leadership Team, partnering with founders and Finance to drive the company toward EBITDA+ while scaling the platform toward ~150M ARR.",
            metric: "~150M ARR",
            tags: ["consulting-strategy", "media-entertainment"],
            flagship: true,
          },
          {
            text: "Launched creator subscriptions and fan memberships, establishing recurring monthly revenue and a sustainable income stream for creators.",
            tags: ["media-entertainment", "payments-fintech", "b2c-growth"],
          },
          {
            text: "Owned the end-to-end payments platform — Wallet, UPI/card gateway integrations (Razorpay, Paytm), Aadhaar-based KYC, GST-integrated escrow, and payouts.",
            tags: ["payments-fintech"],
            flagship: true,
          },
          {
            text: "Led the strategic partnership with Snap Inc. to integrate AI-powered camera filters and AR content-creation experiences, enhancing creator engagement.",
            tags: ["media-entertainment", "ai-ml", "live-streaming"],
          },
          {
            text: "Spearheaded the integration with Agora to launch enterprise-grade real-time live-streaming infrastructure, improving streaming quality and scalability.",
            metric: "Enterprise-grade live streaming",
            tags: ["live-streaming", "media-entertainment"],
            flagship: true,
          },
          {
            text: "Designed post-purchase workflows — cancellations, refunds, returns and customer-service resolution — balancing customer experience with operational and financial impact.",
            tags: ["ecommerce", "consulting-strategy"],
          },
          {
            text: "Built self-service, customer-support and internal admin capabilities, plus real-time chat between creators and consumers, reducing manual intervention.",
            tags: ["media-entertainment", "b2c-growth"],
          },
          {
            text: "Shipped the core content-creation toolkit — Write-on-Photo, in-app video recording/editing, Stories and audio chat rooms — and a creator boost/platform-ads layer as a third monetization pillar alongside gifting and paid calls.",
            tags: ["media-entertainment", "live-streaming", "b2c-growth", "payments-fintech"],
          },
          {
            text: "Rebuilt search and discovery on Elasticsearch and redesigned onboarding funnels and the profile-completion journey to accelerate new users to their first Aha moment.",
            tags: ["ai-ml", "b2c-growth", "consulting-strategy"],
          },
          {
            text: "Built the financial backbone behind every payment feature — ledgers, invoicing, audit reporting and creator payout runs — keeping KYC'd creators paid correctly and on time.",
            tags: ["payments-fintech", "consulting-strategy"],
          },
        ],
      },
      {
        title: "Senior Product Manager, Growth, Commerce & Payments",
        period: "Apr 2021 – Mar 2023",
        keyInitiatives: [
          "Creator Earning Academy",
          "Creator Gamification Platform",
          "Home Feed Personalization",
          "1:1 Paid Calls",
          "Payments Checkout & Wallet",
        ],
        achievements: [
          {
            text: "Led a 20-member, 4-pod cross-functional team (Product, Engineering, Design, Marketing) to achieve Product-Market Fit within 6 months.",
            tags: ["consulting-strategy"],
          },
          {
            text: "Built the Creator Earning Academy, a personalized onboarding and learning journey using creator behavior signals.",
            metric: "+180% activation",
            tags: ["b2c-growth", "media-entertainment"],
            flagship: true,
          },
          {
            text: "Designed a gamified creator progression system — levels, leaderboards, incentives — to drive early wins and habit formation.",
            metric: "+116% supply-side conversion, +320% usage",
            tags: ["b2c-growth", "media-entertainment"],
            flagship: true,
          },
          {
            text: "Launched 1:1 Paid Calls (Expert Consultations) as a new monetization stream — from a frugal MVP validating call-to-pay intent, to a stable real-time expert marketplace with pricing intelligence built from user affinity and historical engagement.",
            metric: "5x → 8x LTV/CAC",
            tags: ["media-entertainment", "payments-fintech", "b2c-growth"],
            flagship: true,
            caseStudySlug: "expert-consultations",
          },
          {
            text: "Built a creator-focused commerce business — physical products including Goonj speakers — from product selection through fulfillment.",
            tags: ["ecommerce"],
          },
          {
            text: "Designed the end-to-end payment intent and checkout flow across web/mobile: initiation, gateway handoff, success/failure states and order confirmation. Optimized card checkout and shipped Express Checkout.",
            metric: "+34% payment success ratio",
            tags: ["payments-fintech", "ecommerce"],
            flagship: true,
          },
          {
            text: "Implemented a single-link Failure Retry payment method for failed, pending and interrupted transactions.",
            metric: "-16% payment failures, +8% gross revenue",
            tags: ["payments-fintech"],
          },
          {
            text: "Pioneered B2B commerce on the platform, letting business users purchase items and track order progress end-to-end.",
            tags: ["b2b-saas", "ecommerce"],
          },
        ],
      },
      {
        title: "Product Manager, Engagement & Payments",
        period: "Apr 2019 – Mar 2021",
        keyInitiatives: [
          "Live Video Streaming",
          "Corporate Event Booking (B2B)",
          "Virtual Gifting",
        ],
        achievements: [
          {
            text: "Built an end-to-end B2B corporate event booking platform with QR-based ticket validation, creating a new offline B2B revenue stream.",
            tags: ["b2b-saas"],
            flagship: true,
          },
          {
            text: "Increased Monthly Virtual Gifting users through personalized recommendations and behavioral segmentation.",
            metric: "+15% Virtual Gifting users",
            tags: ["b2c-growth", "media-entertainment"],
          },
          {
            text: "Launched Live Video Streaming on the platform, increasing new-user time spent and activated-user conversion.",
            metric: "+18% D1 time spent, +13% activated conversion",
            tags: ["live-streaming", "media-entertainment"],
            flagship: true,
          },
          {
            text: "Defined refund, cancellation and transaction-reversal flows, plus reconciliation workflows across gateway transactions.",
            tags: ["payments-fintech", "ecommerce"],
          },
          {
            text: "Improved the app's login funnel through Truecaller integration and historical device-ID sync for user re-attribution.",
            metric: "+27% login funnel",
            tags: ["b2c-growth", "ai-ml"],
          },
        ],
      },
      {
        title: "Associate Product Manager, Engagement & Growth",
        period: "Oct 2017 – Mar 2019",
        keyInitiatives: ["Recommendation Engine", "Network Effects", "Referral System"],
        achievements: [
          {
            text: "Built the platform's personalized recommendation engine using ranking algorithms and user-behavior signals.",
            metric: "+23% DAU, +78% time spent",
            tags: ["ai-ml", "b2c-growth", "media-entertainment"],
            flagship: true,
          },
          {
            text: "Drove network effects by optimizing creator–consumer discovery, and built a referral system to compound organic growth.",
            tags: ["b2c-growth", "media-entertainment"],
          },
          {
            text: "Ran funnel, flow, trend and pivot analysis across supply and demand sides using Mixpanel, Clevertap and Amplitude to reduce new-user drop-off.",
            metric: "+12% core conversion, +15% order success rate",
            tags: ["ai-ml", "marketplace"],
          },
        ],
      },
    ],
  },
  {
    id: "griffy",
    name: "Griffy",
    descriptor:
      "Founder — two-sided marketplace connecting homeowners with architects, contractors, material suppliers and service professionals",
    period: "Jun 2015 – Oct 2017",
    initials: "GF",
    tags: ["construction", "marketplace", "payments-fintech", "consulting-strategy"],
    roles: [
      {
        title: "Founder & Head of Product",
        period: "Jun 2015 – Oct 2017",
        keyInitiatives: [
          "Marketplace Booking Flow",
          "Vendor KYC & Verification",
          "CRM & Lead Management",
        ],
        achievements: [
          {
            text: "Built a two-sided construction marketplace from 0→1, owning product vision, strategy and end-to-end development — connecting homeowners with contractors and service professionals.",
            tags: ["construction", "marketplace", "consulting-strategy"],
            flagship: true,
          },
          {
            text: "Designed and shipped the complete booking flow, including auth and escrow-based Razorpay payments.",
            tags: ["construction", "marketplace", "payments-fintech"],
            flagship: true,
          },
          {
            text: "Designed contractor onboarding, KYC and verification workflows, improving marketplace trust, liquidity and service quality.",
            tags: ["construction", "marketplace"],
          },
          {
            text: "Built a CRM and lead-management platform for sales teams — lead capture, qualification, scoring, structured follow-ups and conversion tracking.",
            tags: ["construction", "b2b-saas", "consulting-strategy"],
            flagship: true,
          },
          {
            text: "Developed order/service lifecycle management from booking through completion — delivery, pickup and return workflows, customer/vendor handoffs and real-time status tracking.",
            tags: ["construction", "ecommerce", "marketplace"],
          },
        ],
      },
    ],
  },
];
