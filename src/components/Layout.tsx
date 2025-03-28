// components/Layout.tsx
import React from 'react';
import NavbarComponent from './Navbar';
import FooterComponent from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      <main className="container mt-4">{children}</main>
      <FooterComponent />
    </>
  );
};

export default Layout;
