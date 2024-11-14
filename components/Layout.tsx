// components/Layout.tsx
import React from 'react';
import Navbar from '@/components/Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="pt-32 flex-1 p-10">{children}</main>
    </div>
  );
};

export default Layout;