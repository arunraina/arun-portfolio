export interface TimelineEntry {
  year: string;
  title: string;
  company: string;
  description: string;
}

export const timeline: TimelineEntry[] = [
  {
    year: "2015",
    title: "Founder & Head of Product",
    company: "Griffy",
    description:
      "Started as an entrepreneur — built a two-sided construction marketplace from 0→1, owning product, vendor onboarding, CRM and the full booking-to-payment flow.",
  },
  {
    year: "2017",
    title: "Associate Product Manager, Engagement & Growth",
    company: "Nojoto",
    description:
      "Joined Nojoto as one of its earliest employees. Built the recommendation engine and network-effects features that lifted DAU 23% and time spent 78%.",
  },
  {
    year: "2019",
    title: "Product Manager, Engagement & Payments",
    company: "Nojoto",
    description:
      "Owned payment experiences, wallet infrastructure and monetization products — live video streaming, corporate B2B events, and payment reconciliation.",
  },
  {
    year: "2021",
    title: "Senior Product Manager, Growth, Commerce & Payments",
    company: "Nojoto",
    description:
      "Led a 20-member cross-functional pod to PMF in 6 months. Shipped Expert Consultations, gamification and checkout improvements that lifted payment success 34%.",
  },
  {
    year: "2023",
    title: "Head of Product, Overall Platform",
    company: "Nojoto",
    description:
      "Part of the leadership team steering the company toward EBITDA+. Owned subscriptions, live streaming and the end-to-end payments platform at ~150M ARR scale.",
  },
  {
    year: "2024",
    title: "Senior Product Manager, Personalization & Omnichannel",
    company: "Dunnhumby",
    description:
      "Now building enterprise B2B SaaS personalization for Tier-1 global retailers — Test & Learn experimentation, AI-driven Launch Science and omnichannel orchestration.",
  },
];
