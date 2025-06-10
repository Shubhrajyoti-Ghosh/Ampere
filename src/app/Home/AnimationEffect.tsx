"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const AnimationEffect: React.FC = () => {
    // SCROLL TRIGGER ANIMATIONS
    useGSAP(() => {
        // Landing Text fade-in
        gsap.fromTo(".landingText1", {
            opacity: 0,
            y: "-40px",
        }, {
            opacity: 1,
            y: "0px",
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                start: "top 45%",
                end: "top 10%",
                trigger: ".landingText1",
                toggleActions: "play reverse play reverse",
            },
        });
        gsap.fromTo(".landingText2", {
            opacity: 0,
            y: "20px",
        }, {
            opacity: 1,
            y: "0px",
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                start: "top 80%",
                end: "top 53%",
                trigger: ".landingText2",
                toggleActions: "play reverse play reverse",
            },
        });

        // Wire stroke draw effect
        const wires = gsap.utils.toArray<SVGPathElement>(
            "#Front-yellow-wire, #Middle-yellow-wire, #Back-yellow-wire, #Front-blue-wire, #Middle-blue-wire, #Back-blue-wire"
        );
        wires.forEach((wire) => {
            gsap.fromTo(wire, { 
                strokeDashoffset: 1000, strokeDasharray: 1000
            }, {
                strokeDashoffset: 0,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: wire,
                    start: "top 50%",
                    end: "top top",
                    toggleActions: "play reverse play reverse",
                },
            });
        });

        // Transformer fade-in effect
        const transformer = document.querySelector('#Transformer-in-Light') as SVGRectElement | null;
        if (transformer) {
            gsap.fromTo(transformer, { 
                opacity: 0 
            }, {
                opacity: 1,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: transformer,
                    start: "top 50%",
                    end: "top top",
                    toggleActions: "play reverse play reverse",
                },
            });
        }
    }, []);


    // Wire morphing interaction
    const wireConfigs = [
        {
            id: "Front-yellow-wire",
            hitbox: "Front-yellow-wire-hitbox",
            originalPath: "M832 255C1035.5 250 1350 169.5 1498.5 111",
            points: [832, 255, 1350, 169.5],
        },
        {
            id: "Middle-yellow-wire",
            hitbox: "Front-yellow-wire-hitbox",
            originalPath: "M853 265C1088 250 1234.97 214.083 1504.5 130.5",
            points: [853, 265, 1234.97, 214.083],
        },
        {
            id: "Back-yellow-wire",
            hitbox: "Front-yellow-wire-hitbox",
            originalPath: "M878.5 270C1063.5 265 1238.88 226.511 1504.5 147",
            points: [878.5, 270, 1238.88, 226.511],
        },
        {
            id: "Front-blue-wire",
            hitbox: "Front-blue-wire-hitbox",
            originalPath: "M736.5 164C484 222 116.736 160.774 0.5 17.5",
            points: [736.5, 164, 116.736, 160.774],
        },
        {
            id: "Middle-blue-wire",
            hitbox: "Front-blue-wire-hitbox",
            originalPath: "M776 185C437.747 228.564 196.582 166.578 12 13",
            points: [776, 185, 196.582, 166.578],
        },
        {
            id: "Back-blue-wire",
            hitbox: "Front-blue-wire-hitbox",
            originalPath: "M811.5 199.5C493 239.5 240 184 31 2",
            points: [811.5, 199.5, 240, 184],
        },
    ];

    useEffect(() => {
        const handlers: { container: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }[] = [];

        wireConfigs.forEach(({ id, hitbox, originalPath, points }) => {
            const wire = document.getElementById(id) as SVGPathElement | null;
            const container = document.getElementById(hitbox);

            if (!wire || !container) return;

            const [x1, y1, x2, y2] = points;
            const end = originalPath.split(" ").slice(-2).join(" ");

            const move = (e: MouseEvent) => {
                const offsetX = e.clientX - window.innerWidth / 2;
                const offsetY = e.clientY - window.innerHeight / 2;

                const newPath = `M${x1} ${y1} C${x1 + offsetX} ${y1 + offsetY}, ${x2 + offsetX} ${y2 + offsetY}, ${end}`;
                gsap.to(wire, {
                    attr: { d: newPath },
                    duration: 0.2,
                    ease: "power3.out",
                });
            };

            const leave = () => {
                gsap.to(wire, {
                    attr: { d: originalPath },
                    duration: 0.3,
                    ease: "elastic.out(1, 0.2)",
                });
            };

            container.addEventListener("mousemove", move);
            container.addEventListener("mouseleave", leave);
            handlers.push({ container, move, leave });
        });

        return () => {
            handlers.forEach(({ container, move, leave }) => {
                container.removeEventListener("mousemove", move);
                container.removeEventListener("mouseleave", leave);
            });
        };
    }, []);

    return null;
};


export default AnimationEffect;