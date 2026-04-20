export interface NavLink {
  label: string;
  href: string;
  page: "home" | "services" | "contact";
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", page: "home" },
  { label: "Services", href: "/services", page: "services" },
  { label: "Contact", href: "/contact", page: "contact" },
];
