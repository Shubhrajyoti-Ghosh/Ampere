'use client';

import React from "react";
import './Header.css';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

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
        <header key={pathname}>
            <nav className="utilityBar">
                <div id="societyLogo">
                    <img src="AmpereLogo.webp" alt="Ampere Logo" className="ampere-logo" />
                </div>
                <i className="fa-solid fa-bell"></i>
                <a href="https://nitdgp.ac.in/" target="_blank" rel="noopener noreferrer">
                    <img src="/NIT_Durgapur_Logo.svg.png" alt="NIT Durgapur Logo" />
                </a>
            </nav>

            <nav className="navbar navbar-expand-lg container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <i className="fa-solid fa-bars" style={{ color: "rgb(244, 230, 153)", fontSize: "1.5rem" }}></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item"><a className="nav-link" href="/Home">Home</a>              </li>
                        <li className="nav-item"><a className="nav-link" href="#">Events</a>                </li>
                        <li className="nav-item"><a className="nav-link" href="#">EE Dept</a>               </li>
                        <li className="nav-item"><a className="nav-link" href="/Domains">Domains</a>        </li>
                        <li className="nav-item"><a className="nav-link" href="#">Members</a>               </li>
                        <li className="nav-item"><a className="nav-link" href="/ContactUs">Contact Us</a>   </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}