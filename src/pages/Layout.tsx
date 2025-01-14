import React from "react";
import Navbar from "../components/navbar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto flex flex-col min-h-screen font-poppins">
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
        <Navbar />
      </header>

      <main className="flex-grow py-6 mt-[4rem] pt-[3rem] sm:pt-[4rem]">
        {children}
      </main>
    </div>
  );
};

export default Layout;
