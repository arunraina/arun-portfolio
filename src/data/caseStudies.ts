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
  customerInsights: { finding: string; response: string }[];
  artifacts: DesignArtifact[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "expert-consultations",
    company: "Nojoto",
    title: "Expert Consultations",
    subtitle:
      "Turning a live-streaming behavior insight into a per-minute expert-consultation marketplace — from a 40-second frugal MVP to a 5x LTV/CAC business.",
    tags: ["media-entertainment", "live-streaming", "b2c-growth", "payments-fintech", "ai-ml"],
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
        "Expert Consultations is a SaaS-like layer on top of Nojoto that makes it easy for experts to consult and serve India's Tier-2 consumer base. Anyone who believes they can serve consumers can apply for access and get displayed to consumers, who can reach them on a video/audio call at a price-per-minute.",
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
      {
        label: "Quitsure — onboarding redesign (freelance)",
        description:
          "Freelance consulting engagement for a seed-stage startup: redesigned the login flow to reduce the number of steps to entry.",
        url: "https://www.figma.com/design/SKdfkppirsxtya7bJWNBIG/Quitsure---Onboarding?node-id=0-1&t=RdBHHLrcvOtcpyYM-0",
      },
    ],
  },
];

export const caseStudyMap: Record<string, CaseStudy> = Object.fromEntries(
  caseStudies.map((c) => [c.slug, c])
);
