import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="min-h-dvw py-4 px-8">{children}</main>
      <Footer />
    </>
  );
};
