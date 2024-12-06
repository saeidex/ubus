export interface INavLink {
  href: string;
  label: string;
}

export const landingNavLinks: readonly INavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Our team",
    href: "#our-team",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];
