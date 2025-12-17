import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import BackgroundWaves from "./BackgroundWaves";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <BackgroundWaves />
      <Navbar />
      <main className="flex-1 pt-24 relative z-10">{children}</main>
      <Footer />
    </div>
  );
};
