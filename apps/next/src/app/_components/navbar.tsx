import { landingNavLinks } from "@ubus/configs";

import { LogoutButton } from "./logout-button";
import { NavLink } from "./navlink";
import { UserAvatar } from "./user-avatar";

export const DashboardNavbar = () => {
  return (
    <div className="container flex h-20 w-full justify-between">
      UBus
      <UserAvatar />
      <LogoutButton />
    </div>
  );
};

export const LandingNavbar = () => {
  return (
    <div className="hidden w-full items-center justify-between md:order-1 md:w-auto lg:flex">
      <ul className="mt-4 flex flex-col rounded-lg p-4 font-medium md:mt-0 md:flex-row md:gap-4 md:p-0 lg:gap-8">
        {landingNavLinks.map((link) => (
          <li key={link.href}>
            <NavLink className="px-0" link={link} />
          </li>
        ))}
      </ul>
    </div>
  );
};
