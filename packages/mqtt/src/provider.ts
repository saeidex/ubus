import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface MqttProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export const MqttProvider = (props: MqttProviderProps) => {
  return React.createElement(
    QueryClientProvider,
    { client: queryClient },
    props.children,
  );
};
