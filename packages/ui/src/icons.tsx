import React from "react";

import { cn } from ".";

const MenuIcon = ({
  className,
  ...props
}: {
  className?: React.HtmlHTMLAttributes<"svg">;
  props?: React.HtmlHTMLAttributes<"svg">;
}) => (
  <svg
    className={cn("h-5 w-5", className)}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 14"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 1h15M1 7h15M1 13h15"
    />
  </svg>
);

export { MenuIcon };
