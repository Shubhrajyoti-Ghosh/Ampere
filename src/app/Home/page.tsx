'use client';

import './page.css';
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import WelcomeMessage from "./WelcomeMessage";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    useGSAP(() => {
        const sections = gsap.utils.toArray<HTMLElement>('.mainWrapper .section');

        // Set initial position for all sections except the first
        sections.forEach((section, i) => {
            if (i !== 0) {
                gsap.set(section, {
                    y: '100%',
                });
            }
        });

        // Timeline with scroll-triggered animation
        const tl = gsap.timeline({
            defaults: { 
                ease: 'power2.out' 
            },
            scrollTrigger: {
                trigger: '.mainWrapper',
                pin: true,
                start: 'top top',
                end: `+=${(sections.length - 1) * 100}%`,
                scrub: 2,
            },
        });

        // Animate each section into view
        sections.forEach((section, i) => {
            if (i === 0) 
                return;
            tl.to(section, {
                y: '0%',
                duration: 1.5,
            });
        });
    }, []);

    return(
        <>
            <WelcomeMessage/>
            <div className="mainWrapper">
                <SectionOne/>
                <SectionTwo/>
                <SectionThree/>
            </div>
        </>
    )
}