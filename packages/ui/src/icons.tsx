import React from "react";

import { cn } from ".";

const MenuIcon = ({
  className,
  ...props
}: {
  className?: string;
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
const MouseIcon = ({
  className,
  ...props
}: {
  className?: string;
  props?: React.HtmlHTMLAttributes<"svg">;
}) => (
  <svg
    className={cn("h-[38px] w-[28px]", className)}
    width="28"
    height="39"
    viewBox="0 0 28 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 4.40437C8.20101 4.40437 3.5 9.04433 3.5 14.768V25.1316C3.5 30.8553 8.20101 35.4953 14 35.4953C19.799 35.4953 24.5 30.8553 24.5 25.1316V14.768C24.5 9.04433 19.799 4.40437 14 4.40437ZM0 14.768C0 7.13644 6.26801 0.949829 14 0.949829C21.732 0.949829 28 7.13644 28 14.768V25.1316C28 32.7632 21.732 38.9498 14 38.9498C6.26801 38.9498 0 32.7632 0 25.1316V14.768Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 7.85893C14.9665 7.85893 15.75 8.63226 15.75 9.58621V16.4953C15.75 17.4492 14.9665 18.2226 14 18.2226C13.0335 18.2226 12.25 17.4492 12.25 16.4953V9.58621C12.25 8.63226 13.0335 7.85893 14 7.85893Z"
    />
  </svg>
);
const RightArrowIcon = ({
  className,
  ...props
}: {
  className?: string;
  props?: React.HtmlHTMLAttributes<"svg">;
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    {...props}
  >
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
  </svg>
);

export { MenuIcon, MouseIcon, RightArrowIcon };
