"use client";

import { useState, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface Properties {
  children: ReactNode;
}

export default function QueryProvider({ children }: Readonly<Properties>) {
  const [client] = useState<QueryClient>(() => new QueryClient());

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
