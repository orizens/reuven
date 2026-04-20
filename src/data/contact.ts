export interface ContactItem {
  icon: string;
  title: string;
  detail: string;
  subDetail?: string;
  linkHref?: string;
  linkLabel?: string;
}

export const contactItems: ContactItem[] = [
  {
    icon: "ph:phone-call-bold",
    title: "Phone / Text",
    detail: "(954) 914-2217",
    subDetail: "Available 7 days a week, 8 AM – 8 PM",
    linkHref: "tel:+19549142217",
  },
  {
    icon: "ph:map-pin-bold",
    title: "Service Area",
    detail:
      "We serve all of Florida including Miami, Orlando, Tampa, Jacksonville, Fort Lauderdale, and surrounding areas.",
  },
  {
    icon: "ph:clock-bold",
    title: "Response Time",
    detail:
      "Same-day service available. We typically respond within 30 minutes and arrive within 2 hours.",
  },
  {
    icon: "ph:siren-bold",
    title: "Emergency Service",
    detail:
      "Have an emergency? Call us immediately — we offer urgent dispatch for stuck or broken garage doors.",
    linkHref: "tel:+19549142217",
    linkLabel: "Call Emergency Line →",
  },
];

export interface TrustItem {
  icon: string;
  label: string;
}

export const trustItems: TrustItem[] = [
  { icon: "ph:seal-check-bold", label: "Licensed & Insured" },
  { icon: "ph:lightning-bold", label: "Same-Day Service" },
  { icon: "ph:currency-dollar-bold", label: "Free Estimates" },
  { icon: "ph:shield-check-bold", label: "90-Day Guarantee" },
  { icon: "ph:star-bold", label: "5-Star Rated" },
];
