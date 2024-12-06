"use server";

import type { ReactNode } from "react";
import {
  IconBrandGithubFilled,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";

// import { signIn } from "@ubus/auth";
import { cn } from "@ubus/ui";
import { Button } from "@ubus/ui/button-custom";

import { LogoIcon } from "./logo";

interface IAuthShowcaseProps {
  className?: string;
  children?: ReactNode;
}

const AuthShowcase = ({ className, children }: IAuthShowcaseProps) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex h-full w-full items-center justify-center",
        className,
      )}
    >
      <div className="relative mx-auto max-w-lg px-6">
        <div className="relative rounded-xl border border-outline-variant bg-surface-container-low text-on-surface">
          <div className="p-8">
            <div className="space-y-4 text-center">
              <LogoIcon className="w-12" />
              <h2 className="mb-6 text-headline-small font-bold">
                Sign in to access <br /> all the content.
              </h2>
            </div>
            <div className="mt-8 space-y-4">
              <ContinueWithGoogle />
              <ContinueWithGitHub />
              {children}
            </div>
            <div className="mt-12 text-center text-on-surface-variant">
              <p className="text-xs">
                By proceeding, you agree to our{" "}
                <a href="/terms-of-service/" className="underline">
                  Terms of Service
                </a>{" "}
                and confirm you have read our{" "}
                <a href="/privacy-policy/" className="underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContinueWithGitHub = () => {
  return (
    <ContinueWithButton provider="github" icon={<IconBrandGithubFilled />}>
      Continue with GitHub
    </ContinueWithButton>
  );
};
const ContinueWithGoogle = () => {
  return (
    <ContinueWithButton provider="google" icon={<IconBrandGoogleFilled />}>
      Continue with Google
    </ContinueWithButton>
  );
};

const ContinueWithButton = ({
  icon,
  // provider,
  children,
}: {
  icon: ReactNode;
  provider: string;
  children: ReactNode;
}) => {
  return (
    <form>
      <Button
        formAction={() => {
          "use server";
          // await signIn(provider);
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

export default AuthShowcase;
