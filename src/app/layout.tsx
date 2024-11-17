import { ReactNode } from "react";

import QueryProvider from "@/components/providers/query-provider";

interface Properties {
  children: ReactNode;
}

export default function Layout({ children }: Readonly<Properties>) {
  return (
    <html suppressHydrationWarning>
      <QueryProvider>
        <body>{children}</body>
      </QueryProvider>
    </html>
  );
}
