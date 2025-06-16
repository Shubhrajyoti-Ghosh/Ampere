'use client';

import { useLayoutEffect, useState } from 'react';
import Preloader from './Preloader';
import Header from './Header';
import Footer from './Footer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [showPreloader, setShowPreloader] = useState(true);
    const [isReady, setIsReady] = useState(false); // trigger after DOM & scroll reset

    const handlePreloaderFinish = () => {
        // Hide preloader
        setShowPreloader(false);

        // Reset scroll to top immediately after hiding
        window.scrollTo(0, 0);

        // Then defer DOM-related animation trigger
        requestAnimationFrame(() => {
            setIsReady(true);
        });
    };

    // This ensures ScrollTrigger is refreshed after layout + scroll reset
    useLayoutEffect(() => {
        if (isReady) {
            setTimeout(() => {
                ScrollTrigger.refresh(true); // ensure full re-evaluation
            }, 50); // Give layout time to repaint
        }
    }, [isReady]);

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