import React from 'react';
import NavbarComponent from './Navbar';
import FooterComponent from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarComponent />

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow-1 specialBackground">
        <div className="container mt-4">
          {children}
        </div>
      </main>
      <FooterComponent />

    </div>
  );
};

export default Layout;
