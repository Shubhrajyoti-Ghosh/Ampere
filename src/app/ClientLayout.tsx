'use client';

import { useState } from 'react';
import Preloader from './Preloader';
import Header from './Header';
import Footer from './Footer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [showPreloader, setShowPreloader] = useState(true);

    const handlePreloaderFinish = () => {
        setShowPreloader(false);

        // Wait for layout to render, then refresh GSAP ScrollTrigger
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 50); // slight delay to ensure layout is painted
    };

    return (
        <>
            {showPreloader ? (
                <Preloader onFinish={handlePreloaderFinish} />
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