// components/Layout.tsx
import React from 'react';
import NavbarComponent from './Navbar';
import FooterComponent from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100"> {/* Ensures full height */}
      <NavbarComponent />
      <main className="container mt-4 flex-grow-1"> {/* Allows content to expand */}
        {children}
      </main>
      <FooterComponent /> {/* Stays at bottom */}
    </div>
  );
};

export default Layout;
