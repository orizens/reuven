export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: "ph:lightning-bold",
    title: "Fast same-day service",
    description:
      "We show up when you need us — often within 2 hours of your call.",
  },
  {
    icon: "ph:currency-dollar-bold",
    title: "Affordable prices",
    description:
      "No surprise fees. We provide a clear estimate before any work begins.",
  },
  {
    icon: "ph:shield-check-bold",
    title: "Professional and reliable",
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
    title: "Local Technician",
    description:
      "Hundreds of satisfied customers across Florida. Read our reviews!",
  },
];
