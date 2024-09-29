import { Card, CardContent, CardFooter, CardHeader } from "@ubus/ui/card";

import { Logo } from "./_components/logo";
import {
  SignInWithGithub,
  SignInWithGoogle,
} from "./_components/signin-with-buttons";

const SignInPage = () => {
  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center px-4 md:px-8">
      <Card className="relative max-w-lg rounded-xl border-outline-variant bg-surface-container-low px-6 text-on-surface shadow-md *:fill-on-surface">
        <CardHeader className="space-y-4 text-center">
          <Logo />
          <h2 className="mb-6 text-headline-small font-bold">
            Sign in to access <br /> all the content.
          </h2>
        </CardHeader>
        <CardContent className="mt-8 space-y-4">
          <SignInWithGoogle />
          <SignInWithGithub />
        </CardContent>
        <CardFooter className="mt-12 text-center">
          <p className="text-xs">
            By proceeding, you agree to our
            <a href="/terms-of-service/" className="underline">
              Terms of Service
            </a>
            and confirm you have read our
            <a href="/privacy-policy/" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignInPage;
