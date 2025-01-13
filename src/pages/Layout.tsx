import React from 'react';
import Navbar from '../components/navbar/Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-poppins">
      <header>
        <Navbar />
      </header>

      <main className="flex-grow py-6">
        {children}
      </main>

      {/* <footer className="bg-gray-800 text-white text-center py-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Milky Express Shop. All rights reserved.
        </p>
      </footer> */}
    </div>
  );
};

export default Layout;
