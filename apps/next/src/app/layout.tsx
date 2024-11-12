import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { GeistMono } from "geist/font/mono";

import { cn } from "@ubus/ui";
import { ThemeProvider, ThemeToggle } from "@ubus/ui/theme";
import { Toaster } from "@ubus/ui/toast";

import "~/app/globals.css";

import { ScrollArea, ScrollBar } from "@ubus/ui/scroll-area";

import { env } from "~/env";
import { TailwindIndicator } from "./_components/tailwind-indicator";

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production"
      ? "https://ubus.vercel.app"
      : "http://localhost:3000",
  ),
  title: "Ubus",
  description: "IUBAT Bus Tracking and Schedule",
  openGraph: {
    title: "Ubus",
    description: "IUBAT Bus Tracking and Schedule",
    url: "https://ubus.vercel.app",
    siteName: "Ubus",
  },
  twitter: {
    card: "summary_large_image",
    site: "@saeidex",
    creator: "@saeidex",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          poppins.variable,
          GeistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" enableSystem>
          <ScrollArea className="h-full w-full">
            {props.children}
            <ScrollBar />
          </ScrollArea>
          <ThemeToggle className="fixed bottom-4 right-4 z-50" />
          <Toaster />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
