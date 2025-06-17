'use client';

import './Header.css';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from "react";
import { Sling as Hamburger } from 'hamburger-react'
import { motion, useMotionValue, useAnimation } from "framer-motion";

export default function Header() {
    const pathname = usePathname();

    const [isOpen, setOpen] = useState(false)

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const controls = useAnimation();
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        if (!isDragging) {
            controls.start({
                x: 0,
                y: 0,
                transition: {
                    duration: 0.4,
                    ease: "easeOut"
                }
            });
        }
    }, [isDragging, controls]);

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".nav-item", {
            y: -30,
            opacity: 0,
            duration: 1,
            stagger: -0.3,
            ease: "power3.out"
        });

        return () => tl.kill(); // Cleanup GSAP timeline on unmount
    }, [pathname]); // Rerun on route change

    return (
        <header key={pathname}>
            <div id="background"></div>
            <motion.div 
              id="societyLogo"
              style = {{
                x,
                y,
                position: "absolute",
                top: "0.25rem",
                left: "1rem",
                zIndex: 10,
              }}
              whileHover = {{ scale: 1.1, }}
              drag
              dragElastic={0.2}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 15, }}
              dragMomentum={false}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => setIsDragging(false)}
              dragConstraints={{left: 0, top: 0}}
              animate={controls}
            >
                <img src="AmpereLogo.webp" alt="Ampere Logo" id="ampereLogo" />
            </motion.div>

            <nav className="navbar navbar-expand-lg container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <Hamburger toggled={isOpen} toggle={setOpen} size={25} rounded={true} duration={0.6}/>
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

            <i className="fa-solid fa-bell"></i>

            <a href="https://nitdgp.ac.in/" target="_blank" rel="noopener noreferrer">
                <img src="/NIT_Durgapur_Logo.svg.png" alt="NIT Durgapur Logo" className="nitLogo"/>
            </a>
        </header>
    );
}