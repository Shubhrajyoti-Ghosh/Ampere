'use client';

import './SectionThree.css';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SectionThree() {
    const isPortrait = useIsPortrait();

    function useIsPortrait() {
        const [isPortrait, setIsPortrait] = useState(false);
    
        useEffect(() => {
            const check = () => setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
            check();
            window.addEventListener("resize", check);
            return () => window.removeEventListener("resize", check);
        }, []);
    
        return isPortrait;
    }

    return(
        <section className="section" id="aboutUsSection">
            <motion.h2
            className="aboutUsHeading"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.8 }}
            >
                About <span>Us</span>
                <motion.span
                className="aboutUsHeadingUnderline"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ amount: 0.8 }}
                style={{ transformOrigin: '50% 50%' }}
                />
            </motion.h2>

            <div className="details">
                {[
                    {
                        id: 'card1',
                        title: 'Who Are We',
                        text: `We are the charge behind every curious mind in EE. From power systems to embedded electronics, we are united by our curiosity, creativity, and drive to innovate. Ampere is a collaborative force of undergraduates, postgraduates, and faculty of NIT Durgapur all connected by the common goal of making Electrical Engineering exciting, practical, and impactful.`,
                    },
                    {
                        id: 'card2',
                        title: 'Our Purpose',
                        text: `We dream of an ecosystem where theory meets wire, where experiments tell stories, and where knowledge is hands-on and high-voltage. Ampere aspires to break the silo of textbooks and build bridges to the real world — through hands-on challenges, student-led research, and interactive sessions with pioneers from academia and industry. We aim to complement academic learning with practical exposure and skill development. By organizing technical workshops, seminars, industrial sessions, and student-led initiatives, we strive to bridge the gap between theoretical concepts and their real-world applications.`,
                    },
                    {
                        id: 'card3',
                        title: 'How Far Have We Come',
                        text: `From humble beginnings, Ampere has grown into a vibrant, student-led society. We have organized technical workshops, hardware hackathons, alumni interactions, and more — each event adding value to our members’ academic and professional journey.`,
                    },
                ].map((card, index) => {
                    let initialAnim;
                    if (index === 0) { initialAnim = isPortrait ? { opacity: 0, y: -80 } : { opacity: 0, x: -80, y: 80 }; } 
                    else if (index === 1) { initialAnim = isPortrait ? { opacity: 0, y: -80 } : { opacity: 0, y: 80 }; }
                    else { initialAnim = isPortrait ? { opacity: 0, y: -80 } : { opacity: 0, x: 80, y: -80 }; }

                    return (
                        <motion.div
                        key={card.id}
                        className="card"
                        initial={initialAnim}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ amount: 0.7 }}
                        >
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}