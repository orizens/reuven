export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: "ph:seal-check-bold",
    title: "Licensed & Insured",
    description:
      "Fully licensed Florida contractors. Your property is always protected.",
  },
  {
    icon: "ph:lightning-bold",
    title: "Same-Day Service",
    description:
      "We show up when you need us — often within 2 hours of your call.",
  },
  {
    icon: "ph:currency-dollar-bold",
    title: "Upfront Pricing",
    description:
      "No surprise fees. We provide a clear estimate before any work begins.",
  },
  {
    icon: "ph:shield-check-bold",
    title: "Satisfaction Guarantee",
    description: "All repairs come with a 90-day workmanship guarantee.",
  },
  {
    icon: "ph:key-bold",
    title: "Emergency Service",
    description:
      "Stuck door? Can't leave? We offer emergency repair 7 days a week.",
  },
  {
    icon: "ph:star-bold",
    title: "5-Star Rated",
    description:
      "Hundreds of satisfied customers across Florida. Read our reviews!",
  },
];
