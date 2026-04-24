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
    subDetail: "Available Sunday to Friday, 8 AM – 6 PM",
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
      "Same-day service available. We typically respond within 45 minutes and arrive within 2 hours.",
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
  { icon: "ph:lightning-bold", label: "Same-Day Service" },
  { icon: "ph:star-bold", label: "5-Star Rated" },
];
