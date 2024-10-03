"use server";

import type { ReactNode } from "react";
import {
  IconBrandGithubFilled,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";

import { signIn } from "@ubus/auth";
import { Button } from "@ubus/ui/button";

const SignInWithGithub = () => {
  return (
    <SignInWithButton provider="github" icon={<IconBrandGithubFilled />}>
      Continue with GitHub
    </SignInWithButton>
  );
};
const SignInWithGoogle = () => {
  return (
    <SignInWithButton provider="google" icon={<IconBrandGoogleFilled />}>
      Continue with Google
    </SignInWithButton>
  );
};

const SignInWithButton = ({
  icon,
  provider,
  children,
}: {
  icon: ReactNode;
  provider: string;
  children: ReactNode;
}) => {
  return (
    <form>
      <Button
        formAction={async () => {
          "use server";
          await signIn(provider);
        }}
        variant="ghost"
        className="focus:primary/50 group h-12 w-full border-2 border-outline-variant bg-surface-container px-6 transition duration-300 hover:bg-surface-container-high hover:shadow-lg active:bg-primary/20 dark:active:bg-primary/70"
      >
        <div className="flex items-center justify-center space-x-4">
          {icon}
          <span className="text-sm font-semibold transition duration-300">
            {children}
          </span>
        </div>
      </Button>
    </form>
  );
};

export { SignInWithGithub, SignInWithGoogle };
