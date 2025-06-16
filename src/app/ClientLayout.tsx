'use client';

import { useEffect, useState } from 'react';

import './Preloader.css';
import Header from './Header';
import Footer from './Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load Bootstrap JS
    import('bootstrap/dist/js/bootstrap.bundle.min.js');

    // Preloader timer (fallback if video doesn't fire `onEnded`)
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="preloader">
          <video
            src="/BulbPreloader.mp4"
            autoPlay
            muted
            playsInline
            onEnded={() => setLoading(false)}
            className="preloaderVideo"
          />
        </div>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </>
  );
}
