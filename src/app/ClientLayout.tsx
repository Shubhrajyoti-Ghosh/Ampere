'use client';

import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js'); // ✅ use relative module path
  }, []);

  return (
    <>
    <Header />
      {children}
    <Footer/>
    </>
  );
}
