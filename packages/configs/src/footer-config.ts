export interface IMenuItem {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

export const footerMenuItems: readonly IMenuItem[] = [
  {
    title: "Resources",
    links: [
      {
        label: "Newsletter",
        href: "/newsletter",
      },
      {
        label: "Blog",
        href: "/blog",
      },
      {
        label: "Support",
        href: "/support",
      },
    ],
  },
  {
    title: "Socials",
    links: [
      {
        label: "Facebook",
        href: "https://facebook.com/ubus",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/ubus",
      },
      {
        label: "GitHub",
        href: "httlps://gihtub.com/iubat-oss/ubus",
      },
    ],
  },
  {
    title: "Important",
    links: [
      {
        label: "Settings",
        href: "/app/settings",
      },
      {
        label: "Contact",
        href: "#contact",
      },
    ],
  },
  {
    title: "Legals",
    links: [
      {
        label: "License",
        href: "/license",
      },
      {
        label: "Privacy",
        href: "/privacy",
      },
    ],
  },
];
