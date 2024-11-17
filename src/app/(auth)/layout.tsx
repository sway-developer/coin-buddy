import { ReactNode } from "react";

interface Properties {
  children: ReactNode;
}

export default function Layout({ children }: Readonly<Properties>) {
  return (
    <main className="flex flex-col w-full h-screen items-center justify-center">
      {children}
    </main>
  );
}
