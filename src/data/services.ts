export interface ServiceBullet {
  text: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  bullets: string[];
  ctaLabel: string;
}

export const services: Service[] = [
  {
    icon: "ph:wrench-bold",
    title: "Garage Door Repair",
    description:
      "Whether your garage door is making strange noises, moving unevenly, or won't open at all — our technicians can diagnose and fix the problem fast. We repair broken panels, damaged tracks, frayed cables, worn rollers, and more.",
    bullets: [
      "Broken panels & sections",
      "Off-track doors",
      "Damaged cables & pulleys",
      "Worn rollers & hinges",
      "Weather seal replacement",
      "Noisy door lubrication & tune-up",
    ],
    ctaLabel: "Call for Repair",
  },
  {
    icon: "ph:spiral-bold",
    title: "Spring Replacement",
    description:
      "A broken garage door spring is the most common reason a door stops working. Springs are under extreme tension — attempting a DIY fix is dangerous. Our certified technicians safely replace both torsion and extension springs, restoring your door to full operation.",
    bullets: [
      "Torsion spring replacement",
      "Extension spring replacement",
      "High-cycle spring upgrades",
      "Spring tension adjustment",
      "Same-day service available",
      "Safety cable installation",
    ],
    ctaLabel: "Call for Spring Replacement",
  },
  {
    icon: "ph:gear-six-bold",
    title: "Opener Repair & Replacement",
    description:
      "Is your garage door opener unresponsive, slow, or acting erratically? We service and replace all major brands of garage door openers, including smart openers with Wi-Fi connectivity. Get your opener working like new or upgrade to a modern model.",
    bullets: [
      "LiftMaster service & repair",
      "Chamberlain & Genie service",
      "Remote & keypad programming",
      "Smart Wi-Fi opener installation",
      "Safety sensor alignment",
      "Drive belt/chain/screw repair",
    ],
    ctaLabel: "Call for Opener Service",
  },
  {
    icon: "ph:door-bold",
    title: "New Door Installations",
    description:
      "Ready for a new garage door? We carry a wide selection of residential and commercial doors in various styles, materials, and finishes. Our team handles complete installation — from removing the old door to full hardware setup and testing.",
    bullets: [
      "Residential door installation",
      "Commercial door installation",
      "Steel, wood & aluminum doors",
      "Insulated door options",
      "Custom size doors",
      "Old door removal included",
    ],
    ctaLabel: "Call for Installation Quote",
  },
  {
    icon: "ph:siren-bold",
    title: "Emergency Garage Door Service",
    description:
      "Stuck inside your garage? Door won't close at night? Security is compromised? We offer emergency garage door service 7 days a week. Our technicians are dispatched quickly to get your door functional and your home secure.",
    bullets: [
      "Available 7 days a week",
      "Fast dispatch — 1–2 hour arrival",
      "Stuck or jammed doors",
      "Door won't close (security fix)",
      "Broken springs (urgent)",
      "Vehicle trapped inside",
    ],
    ctaLabel: "Emergency Line",
  },
];
