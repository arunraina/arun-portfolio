import { IndustryId } from "./types";

export interface DesignArtifact {
  label: string;
  description: string;
  url: string;
}

export interface CaseStudy {
  slug: string;
  company: string;
  title: string;
  subtitle: string;
  tags: IndustryId[];
  metrics: { label: string; value: string }[];
  context: { heading: string; body: string[] };
  product: { heading: string; body: string[] };
  decisions: { heading: string; body: string; insight?: string }[];
  customerInsights?: { finding: string; response: string }[];
  artifacts?: DesignArtifact[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "expert-consultations",
    company: "Nojoto",
    title: "Expert Consultations",
    subtitle:
      "Turning a live-streaming behavior insight into a per-minute expert-consultation marketplace — from a 40-second frugal MVP to a 5x LTV/CAC business.",
    tags: ["marketplace", "mobile-app", "live-streaming", "b2c-growth", "payments-fintech", "ai-ml"],
    metrics: [
      { label: "LTV/CAC", value: "5x → 8x projected" },
      { label: "ARPU", value: "₹142 → ₹286" },
      { label: "Avg. call duration", value: "2.1 → 5 min/user" },
      { label: "Calls per user / month", value: "2.7 → 6" },
    ],
    context: {
      heading: "What is Nojoto",
      body: [
        "Nojoto is a creator-economy live-streaming and audio/video creation platform, where people create content in any format and monetize it. Before this initiative, the platform had two monetization streams: microtransactions (virtual gifting with real money) on content, and live-stream tickets to enter and consume ticketed live shows.",
      ],
    },
    product: {
      heading: "What is Expert Consultations",
      body: [
        "Expert Consultations is a SaaS-like layer on top of Nojoto that makes it easy for experts to consult and serve India's Tier-2 consumer base. Anyone who believes they can serve consumers can apply for access and get displayed to consumers, who can reach them on a video/audio call at a price-per-minute — astrology was one of the earliest and strongest verticals, alongside relationship, career and wellness advice.",
        "Experts have full control over their availability, pricing and discounts, and get a dashboard to see how much they've earned, how they're performing, and how to improve and serve more consumers.",
      ],
    },
    decisions: [
      {
        heading: "1. Ideation and finding the pain point",
        body: "While running the live-streaming platform, I observed users posting their phone numbers in livestream comments, and a tendency to join as co-hosts just to talk to the host. That signaled clear intent to connect and talk one-on-one — the question was whether that intent could be monetized.",
      },
      {
        heading: "2. A frugal experiment to test the thesis",
        body: "On a new app version, I changed the 'Co-host' button to 'Call me @ ₹X/min'. The viewer-to-click ratio was 62%, and 13% of those actually paid — intent was established with minimal engineering investment.",
        insight: "62% click-through, 13% paid conversion, from a one-button change.",
      },
      {
        heading: "3. Was the MVP actually scalable?",
        body: "Average call duration in the MVP was only 40 seconds to a minute. User interviews surfaced the real constraint: experts said skilled callers wanted to talk, but callers cut calls abruptly; callers said they wanted to discuss personal problems but felt exposed — other livestream viewers could see and hear them. That reframed the solution: list experts on-screen so anyone can request a call privately, and — the real unlock — experts don't need to be online at all times. A caller's request should arrive as an incoming call, like a native phone call, the moment an expert is free. It took two months of iteration to make this real-time connectivity stable, since the team was building something genuinely novel.",
        insight: "In the first 6 months post-launch: LTV/CAC of 5, projected to reach 8 at the 12-month mark.",
      },
      {
        heading: "4. A SaaS dashboard to protect platform quality",
        body: "Once the mechanism worked, platform quality became the constraint. I built an in-app performance dashboard for experts — missed calls, average call duration, loyalty and repeat-caller rate — so experts could see and improve their own numbers. Average call duration rose from 2.1 to 5 minutes per user, and ARPU roughly doubled, from ₹142 to ₹286.",
      },
      {
        heading: "5. Quality control with Ops",
        body: "I partnered with the Product Operations team to set up a weekly performance-monitoring and alerting process, so non-performing or non-serious experts could be identified and removed from the platform.",
      },
      {
        heading: "6. Pricing, nudges and recharge strategy to grow ARPU",
        body: "Two insights drove this: callers who paid once had a 54% chance of paying again, and 70% of those became consecutive repeat payers; and callers whose first recharge was ₹30 had a 23% repeat-recharge rate versus 37% for a ₹50 first recharge. That meant the first recharge amount itself was a lever. I built an admin control panel to set recharge amounts, cashback and the highlighted amount dynamically, segmented by user tenure (new vs. power user), and layered in push notifications, in-app nudges, inaction-based and event-based triggers. Calls per user per month grew from 2.7 to 6.",
      },
    ],
    customerInsights: [
      {
        finding:
          "Some experts were picking up calls and dropping them almost instantly, gaming the per-minute payout.",
        response:
          "Established an operational check requiring at least 15 seconds of connected call time before a call counted toward expert payout.",
      },
      {
        finding:
          "Top-decile paying users who stopped calling had, in every case, had their preferred expert leave the platform.",
        response:
          "Built a hand-off flow: when an expert leaves, their top paying users are proactively notified and reassigned to another expert with full context.",
      },
      {
        finding:
          "Many experts reported getting zero calls in a day, while a small set of experts absorbed most of the volume.",
        response:
          "Found the ranking algorithm favored tenure and historical score with no path for new experts. Introduced a randomization-based recommendation engine that inserts new experts into the feed so their score has room to develop.",
      },
    ],
    artifacts: [
      {
        label: "Call on Live Show — full spec",
        description:
          "Complete high-fidelity wireframe, bottom to top, showing every iteration from the MVP button-swap to the current product.",
        url: "https://www.figma.com/design/A2kt15fgaou8GLr2jF8oJI/Call-on-Live-Show-%3A-Nitin?node-id=0-1&t=sQofk01RfOVsUaP0-0",
      },
      {
        label: "Profile page revamp",
        description:
          "A self-initiated redesign of the app's profile page — not part of a sprint, but flagged and designed ahead of prioritization to save time once it's scheduled.",
        url: "https://www.figma.com/design/4wzXLNrAxbgjxLO7kvTNRr/Profile-Revamp?node-id=0-1&t=gMYO1CgqrELaSFqO-0",
      },
    ],
  },
  {
    slug: "emom-personalization",
    company: "Dunnhumby",
    title: "EMOM Personalization Platform",
    subtitle:
      "Building one B2B SaaS personalization engine that 5+ Tier-1 retailers can each run their own offers, experiments and measurement on — without dunnhumby rebuilding it per retailer.",
    tags: ["b2b-saas", "ai-ml", "consulting-strategy"],
    metrics: [
      { label: "Customer interactions", value: "50M+" },
      { label: "Campaign setup time", value: "30–40% faster" },
      { label: "Tier-1 retailers live", value: "5+" },
      { label: "Engineering squads", value: "6" },
    ],
    context: {
      heading: "What is dunnhumby, and what problem EMOM solves",
      body: [
        "dunnhumby is the global leader in retail media and data science, building enterprise-grade personalization and decisioning products for grocery retailers including Tesco, John Lewis Partners, Coop and Metro. Each of these retailers wants to run personalized offers and promotions across millions of customers, across digital and offline channels — but building that capability separately for every retailer doesn't scale for dunnhumby, and rebuilding it from scratch doesn't work for the retailer either.",
        "EMOM is the personalization offers tool that resolves this: one platform, configurable per retailer, that uses audience segmentation and tailored promotions to boost sales — live across 5+ Tier-1 retailers today, powering 50M+ customer interactions across digital and offline channels.",
      ],
    },
    product: {
      heading: "Owning the platform, not just a retailer integration",
      body: [
        "I own product vision, strategy and the multi-quarter roadmap for enterprise personalization and experimentation, managing six engineering squads to ship a single SaaS omnichannel engagement platform — spanning client communications across SMS, email and push notification — rather than one-off retailer builds.",
      ],
    },
    decisions: [
      {
        heading: "1. One platform, many retailers — not bespoke builds",
        body: "The core product bet was that EMOM had to be configurable enough for Tesco, John Lewis Partners, Coop and Metro to each run their own audience segmentation and promotions, without dunnhumby maintaining five different codebases. That meant investing in configuration and audience-targeting primitives up front, even though a bespoke build per retailer would have looked faster in the short term.",
      },
      {
        heading: "2. Test & Learn as a first-class capability, not an afterthought",
        body: "Retailers didn't just want dunnhumby's recommendations — they wanted to run their own controlled experiments and prove out offers before wider rollout. I built and scaled a Test & Learn experimentation platform so enterprise customers could design and execute controlled experiments across channels themselves.",
        insight: "Campaign setup time dropped 30–40%, unlocking new commercial opportunities per retailer.",
      },
      {
        heading: "3. Fixing measurement before scaling it",
        body: "Early control-group logic wasn't accurate enough to trust at scale. I refined the control-group logic to improve measurement accuracy, and added validations in customer data files to guarantee data integrity — the unglamorous work that had to happen before retailers could trust the platform's numbers enough to act on them.",
      },
      {
        heading: "4. Productizing AI/ML, not just shipping a model",
        body: "Partnered with Research and Data Science to translate Launch Science's machine-learning models into a scalable enterprise product capability and data-driven decisioning workflow — the next step for the platform is Launch Science for new products across grocery and other categories for Tesco specifically.",
      },
      {
        heading: "5. Working the account, not just the roadmap",
        body: "Partnered directly with US-based business and product stakeholders across time zones to understand operational pain points, validate product hypotheses, and prioritize roadmap investments using customer feedback, analytics and experimentation — global Tier-1 retail accounts don't get prioritized correctly from a roadmap alone.",
      },
    ],
  },
  {
    slug: "payments-checkout",
    company: "Nojoto",
    title: "Payments & Checkout Platform",
    subtitle:
      "Rebuilding Nojoto's payment funnel — wallet, gateways, checkout and retry — to stop losing revenue to preventable failures.",
    tags: ["payments-fintech", "ecommerce", "marketplace", "finance-tax"],
    metrics: [
      { label: "Payment success ratio", value: "+34%" },
      { label: "Payment failures", value: "−16%" },
      { label: "Gross revenue", value: "+8%" },
    ],
    context: {
      heading: "Why payments needed to be rebuilt, not patched",
      body: [
        "By the time Nojoto had multiple monetization products live — virtual gifting, subscriptions, 1:1 paid calls, creator commerce — the payments layer underneath all of them was still the original, unoptimized checkout: a single path through card and UPI gateways with no retry logic, no express checkout, and failures that just ended the transaction rather than recovering it.",
      ],
    },
    product: {
      heading: "The payments stack",
      body: [
        "I owned the end-to-end payments platform — wallet, UPI/card gateway integrations (Razorpay, Paytm), Aadhaar-based KYC, GST-integrated escrow and payouts — as the shared infrastructure every monetization product on the platform transacts through.",
      ],
    },
    decisions: [
      {
        heading: "1. Designing the checkout flow as one funnel, not a payment button",
        body: "I designed the end-to-end payment intent and checkout flow across web and mobile — initiation, gateway handoff, success/failure states and order confirmation — as a single funnel to instrument and optimize, rather than treating 'payment' as a single opaque step.",
      },
      {
        heading: "2. Express Checkout to remove friction for repeat payers",
        body: "Optimized card checkout and shipped Express Checkout for returning payers, cutting the number of steps between intent and a completed transaction.",
        insight: "+34% payment success ratio.",
      },
      {
        heading: "3. Failure Retry instead of a dead end",
        body: "Failed, pending and interrupted transactions used to just end the flow — the customer had already shown intent to pay, and that intent was being thrown away. I implemented a single-link Failure Retry payment method so a failed transaction became a one-tap recovery instead of a lost sale.",
        insight: "−16% payment failures, +8% gross revenue.",
      },
      {
        heading: "4. Reconciliation as a first-class workflow",
        body: "Defined refund, cancellation and transaction-reversal flows, plus reconciliation workflows across gateway transactions — necessary once volume across UPI, cards and wallet made manual reconciliation unworkable.",
      },
    ],
  },
  {
    slug: "construction-marketplace",
    company: "Griffy",
    title: "Construction Marketplace",
    subtitle:
      "Founding a two-sided marketplace to fix an opaque, trust-starved home-construction process in India — from 0 to a working product, end to end.",
    tags: ["construction", "marketplace", "consulting-strategy", "payments-fintech"],
    metrics: [
      { label: "Founded", value: "Jun 2015" },
      { label: "Marketplace sides", value: "Homeowners ↔ Pros" },
      { label: "Core systems shipped", value: "Booking, CRM, KYC" },
    ],
    context: {
      heading: "The problem: building a home in India is opaque by default",
      body: [
        "Homeowners planning construction, renovation or repair had no reliable way to find and vet architects, contractors, material suppliers and service professionals — the market ran on word-of-mouth, with no shared trust layer, no price transparency and no accountability once money changed hands. On the supply side, contractors and material suppliers had no structured way to reach demand beyond their existing local network.",
      ],
    },
    product: {
      heading: "Griffy: a two-sided marketplace for the whole build",
      body: [
        "I founded Griffy to connect homeowners with architects, contractors, material suppliers and service professionals across the full journey — planning and procurement through project execution — owning product vision, strategy and end-to-end development from 0→1.",
      ],
    },
    decisions: [
      {
        heading: "1. Escrow-based payments to bootstrap trust from zero",
        body: "With no existing trust layer between homeowners and professionals, I designed and shipped the complete booking flow with auth and escrow-based Razorpay payments — funds held until service milestones were met, so neither side had to trust the other blindly on day one.",
      },
      {
        heading: "2. Vendor KYC and verification as the supply-side gate",
        body: "Designed contractor onboarding, KYC and verification workflows before opening the marketplace to broader supply, improving marketplace trust, liquidity and service quality from the start rather than retrofitting trust and safety after fraud showed up.",
      },
      {
        heading: "3. A CRM because pure marketplace liquidity wasn't enough, early",
        body: "A new two-sided marketplace doesn't have enough organic supply-demand matching in its first cohort. I built a CRM and lead-management platform for sales teams — lead capture, qualification, scoring, structured follow-ups and conversion tracking — to run a sales-assisted matching motion until the marketplace could sustain itself organically.",
      },
      {
        heading: "4. Order/service lifecycle management for transparency end-to-end",
        body: "Developed order and service lifecycle management from booking through completion — delivery, pickup and return workflows, customer/vendor handoffs and real-time status tracking — directly answering the opacity that made homeowners distrust the market in the first place.",
      },
    ],
  },
  {
    slug: "atlas-ai-decision-layer",
    company: "Griffy",
    title: "Atlas — AI Decision Layer",
    subtitle:
      "Designing Griffy's AI architecture as a decision layer over a house's whole lifecycle — a typed planner and tool registry, deliberately not a chatbot.",
    tags: ["agentic-ai", "ai-ml", "construction", "marketplace", "consulting-strategy"],
    metrics: [
      { label: "Live since", value: "Aug 2026" },
      { label: "Architecture", value: "1 planner, typed tools" },
      { label: "Mutating tools granted", value: "0" },
    ],
    context: {
      heading: "The wrong turn everyone else makes",
      body: [
        "Griffy is present at every stage of a home's life — land, build, renovate, maintain, re-buy — and no other player in these markets is present at more than one. The most common mistake when adding AI to a marketplace like this is to build a chatbot. Atlas is deliberately not that: it's a decision layer over the whole life of a home, where the customer expresses intent and the system already knows the house.",
        "The core insight is that a 'Home Twin' — the durable record of a specific house: rooms, appliances, fittings, materials used, brands, warranty dates, project stage — turns a marketplace into something closer to a demand forecast. Construction runs in a fixed order (slab → plumbing rough-in → wiring → plaster → tiles → sanitaryware → paint), so knowing a house just finished plaster predicts its next purchase with high confidence, for every house, every time. In Indian construction the brand is chosen by the contractor standing in the house, not the homeowner in a shop — and Griffy is present in exactly that moment, which is what makes this signal valuable to brand partners that can't buy it anywhere else.",
      ],
    },
    product: {
      heading: "One planner, a typed tool registry — not ten cooperating agents",
      body: [
        "I set the architecture rules Atlas is built against: the LLM never writes to a business table — it emits a typed intent or a proposed plan, and deterministic service code validates and executes it, which keeps the reasoning layer replaceable without touching the schema. Atlas never initiates payment; the customer authorizes and settlement is a wallet debit or a payment they make themselves, with consent that is per-transaction, amount-capped, expiring and revocable. Paid brand placement never enters organic ranking and never influences duty-of-care assignment — it's labeled and rendered separately. In a new city, an honest 'nobody available' beats a confident wrong answer, so cold start inherits the existing CityComingSoon behavior rather than routing around it.",
        "Live in production since August 2026: POST /atlas/intent turns natural language into a typed, read-only booking intent, behind a provider layer (Anthropic and Gemini, chosen by config) and a typed tool registry wrapping four existing read-only endpoints — search_professionals, search_materials, check_availability, estimate_project_cost.",
      ],
    },
    decisions: [
      {
        heading: "1. A planner plus a typed tool registry, not an agent swarm",
        body: "The catalogue of specialized agents is configuration over one orchestrator loop, not separate implementations — an agent is a slug, an instruction and a list of tool names it's allowed to call, enforced in the orchestrator rather than trusted. Adding a new agent to the catalogue is not a breach of the single-planner rule; an agent calling another agent, or growing its own loop, would be.",
      },
      {
        heading: "2. No agent can move money or write to the schema",
        body: "No agent in the catalogue is granted a mutating tool, so none can book, order or pay — changing that is treated as a product decision with a confirmation gate attached, not a configuration tweak. This is what keeps 'which agents can spend money' answerable by reading one file.",
      },
      {
        heading: "3. Reusing existing endpoints instead of rewriting the platform",
        body: "The typed tools wrap REST endpoints that already existed rather than rewriting them — search, materials, availability and cost estimation were already deterministic services; Atlas's job was to expose them safely to a planner, not replace them.",
      },
    ],
  },
  {
    slug: "creator-growth-gamification",
    company: "Nojoto",
    title: "Creator Growth & Gamification",
    subtitle:
      "Turning first-time posters into habitual, monetizing creators with a structured onboarding journey and a gamified progression system.",
    tags: ["b2c-growth", "marketplace", "mobile-app"],
    metrics: [
      { label: "Creator activation", value: "+180%" },
      { label: "Supply-side conversion", value: "+116%" },
      { label: "Usage", value: "+320%" },
    ],
    context: {
      heading: "The supply-side drop-off problem",
      body: [
        "Nojoto's growth depended on creators, but most new creators posted once or twice, didn't understand how the platform's monetization worked, and dropped off before ever earning anything — a classic creator-economy cold-start problem where supply has to be taught, not just acquired.",
      ],
    },
    product: {
      heading: "Two systems working together: learning and progression",
      body: [
        "I led a 20-member, 4-pod cross-functional team (Product, Engineering, Design, Marketing) to reach Product-Market Fit on this initiative within 6 months, building the Creator Earning Academy and a gamified creator progression system as the two mechanisms to fix supply-side drop-off.",
      ],
    },
    decisions: [
      {
        heading: "1. Creator Earning Academy — teaching monetization, not assuming it",
        body: "Built a personalized onboarding and learning journey using creator behavior signals, so new creators were taught how to earn on the platform rather than left to discover it themselves.",
        insight: "+180% activation.",
      },
      {
        heading: "2. Gamified progression to manufacture early wins",
        body: "Designed a gamified creator progression system — levels, leaderboards, incentives — engineered to produce early wins and habit formation quickly, rather than waiting for organic traction to build motivation.",
        insight: "+116% supply-side conversion, +320% usage.",
      },
    ],
  },
  {
    slug: "test-learn-experimentation",
    company: "Dunnhumby",
    title: "Test & Learn Experimentation Platform",
    subtitle:
      "Giving Tier-1 retailers the ability to design and run their own controlled experiments, instead of consuming dunnhumby's recommendations on faith.",
    tags: ["b2b-saas", "ai-ml"],
    metrics: [
      { label: "Campaign setup time", value: "30–40% faster" },
      { label: "Measurement method", value: "ANCOVA-based uplift" },
    ],
    context: {
      heading: "Retailers didn't want to just trust the model",
      body: [
        "dunnhumby's personalization recommendations are only as credible as a retailer's ability to verify them. Enterprise retail customers wanted to design and run their own controlled experiments across channels before committing to a wider rollout of any offer or promotion — proof, not just a recommendation.",
      ],
    },
    product: {
      heading: "Experimentation as a retailer-facing capability",
      body: [
        "Built and scaled the Test & Learn platform enabling enterprise customers to execute controlled experiments across multiple channels themselves, reducing campaign setup time by 30–40% and unlocking new commercial opportunities that depended on retailers being able to prove impact quickly.",
      ],
    },
    decisions: [
      {
        heading: "1. Self-serve experimentation instead of a bespoke ask each time",
        body: "Every prior request to test a new offer meant a bespoke, manually configured experiment. Productizing controlled experiments as a platform capability meant retailers could design and launch their own tests without dunnhumby engineering time per test.",
      },
      {
        heading: "2. ANCOVA-based uplift, not naive before/after comparison",
        body: "Enhanced the Measurement & Analytics Platform by introducing ANCOVA-based uplift methodologies, so campaign impact was measured with statistical rigor that accounted for pre-existing differences between test and control groups, rather than a naive before/after read.",
      },
    ],
  },
];

export const caseStudyMap: Record<string, CaseStudy> = Object.fromEntries(
  caseStudies.map((c) => [c.slug, c])
);
