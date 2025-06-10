'use client';

import React from "react";
import './Header.css';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import NeonButton from './NeonButton.jsx';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
    const isHome = pathname === '/home' || pathname === '/Home' || pathname === '/';

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".nav-item", {
            y: -30,
            opacity: 0,
            duration: 1,
            stagger: -0.3,
            ease: "power3.out"
        });

        return () => tl.kill(); // ✅ Cleanup GSAP timeline on unmount
    }, [pathname]); // ✅ Rerun on route change

    return (
        <header key={pathname}> {/* ✅ Force remount on route change */}
            <nav className="utilityBar">
                {/* Show Ampere logo only if not on Home Page */}
                <div id="societyLogo">
                    {!isHome && (
                        <img src="AmpereLogo.webp" alt="Ampere Logo" className="ampere-logo" />
                    )}
                </div>
                <i className="fa-solid fa-bell"></i>

                {/* External link is OK to use <a> */}
                <a href="https://nitdgp.ac.in/" target="_blank" rel="noopener noreferrer">
                    <img src="/NIT_Durgapur_Logo.svg.png" alt="NIT Durgapur Logo" />
                </a>
            </nav>

            <div id="pseudoNavBar"></div>

            <nav className="navbar navbar-expand-lg container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <i className="fa-solid fa-bars" style={{ color: "rgb(244, 230, 153)", fontSize: "1.5rem" }}></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item"><NeonButton href="/Home">Home</NeonButton></li>
                        <li className="nav-item"><NeonButton href="#">Events</NeonButton></li>
                        <li className="nav-item"><NeonButton href="#">EE Dept</NeonButton></li>
                        <li className="nav-item"><NeonButton href="/Domains">Domains</NeonButton></li>
                        <li className="nav-item"><NeonButton href="#">Members</NeonButton></li>
                        <li className="nav-item"><NeonButton href="/ContactUs">Contact Us</NeonButton></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}