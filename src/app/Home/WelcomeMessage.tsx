"use client";

import './WelcomeMessage.css';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function WelcomeMessage() {
    useGSAP(() => {
        gsap.to(
            ".wlcMsgAmpereLogo", {
                top: 0,
                left: 0,
                maxHeight: "10.5vh",
                scrollTrigger: {
                    trigger: "#introductionSection",
                    scroller: "body",
                    start: "top 90%",
                    end: "top 25%",
                    scrub: 2,
                }
            }
        );

        gsap.utils.toArray<HTMLElement>(".welcomeText, .welcomeMessageWrapper p").forEach((el) => {
            gsap.fromTo(el, {
                opacity: 1 
            }, {
                opacity: 0,
                duration: 0.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#introductionSection",
                    start: "top 90%",
                    end: "top 35%",
                    scrub: 2,
                },
            });
        });
    }, []);

    return (            
        <div className="welcomeMessageWrapper">
            <div>
                <h1 className="welcomeText">Welcome to</h1> 
                <img src="AmpereLogo.webp" alt="Ampere" className="wlcMsgAmpereLogo"/>
            </div>
            <p>Powering Ideas with Innovation</p>
        </div>
    );
}