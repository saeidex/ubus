"use client";

import type { ReactNode } from "react";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const HookProviders = (props: { children: ReactNode }) => {
  return React.createElement(
    QueryClientProvider,
    { client: queryClient },
    props.children,
  );
};
