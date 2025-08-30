import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen md:px-8 px-4">{children}</main>
      <Footer />
    </>
  );
};
