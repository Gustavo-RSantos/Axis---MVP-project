"use client";

import { usePathname } from 'next/navigation';
import { NavBar } from './NavBar';
import { Footer } from './Footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {

  const pathname = usePathname();
  const hideNavBarRoutes = ['/Login', '/Cadastro'];
  const shouldShowNavBar = !hideNavBarRoutes.includes(pathname);

  return (
    <>
      {shouldShowNavBar && <NavBar />}
        {children}
      {shouldShowNavBar && <Footer />}
    </>
  );
}