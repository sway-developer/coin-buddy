import "./globals.css";
import { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { ruRU as ruLocale } from "@clerk/localizations";

import QueryProvider from "@/components/providers/query-provider";
import { Toaster } from "sonner";

interface Properties {
  children: ReactNode;
}

export default function Layout({ children }: Readonly<Properties>) {
  return (
    <ClerkProvider
      localization={ruLocale}
      appearance={{
        variables: {
          colorPrimary: "hsl(47.9, 95.8%, 53.1%)",
        },
      }}
    >
      <html suppressHydrationWarning>
        <QueryProvider>
          <body>
            {children}
            <Toaster richColors />
          </body>
        </QueryProvider>
      </html>
    </ClerkProvider>
  );
}
