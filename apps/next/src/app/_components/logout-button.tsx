"use server";

import { IconLogout } from "@tabler/icons-react";

import type { ButtonProps } from "@ubus/ui/button";
// import { signOut } from "@ubus/auth";
import { Button } from "@ubus/ui/button";

interface LogoutButtonProps extends ButtonProps {
  withIcon?: boolean;
}

export const LogoutButton = ({
  withIcon = true,
  ...props
}: LogoutButtonProps) => {
  return (
    <form className="contents">
      <Button
        {...props}
        formAction={() => {
          "use server";
          // await signOut();
        }}
      >
        {withIcon && <IconLogout className="mr-2" />}
        Log out
      </Button>
    </form>
  );
};
