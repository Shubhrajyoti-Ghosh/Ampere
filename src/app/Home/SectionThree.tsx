'use client';

import './SectionThree.css';

import { motion } from 'framer-motion';
import { useEffect, useState, useMemo, useRef, useCallback } from 'react';

export default function SectionThree() {
    const isPortrait = useIsPortrait();
    const [maxCardHeight, setMaxCardHeight] = useState<number>(0);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    function useIsPortrait() {
        const [isPortrait, setIsPortrait] = useState(false);
    
        useEffect(() => {
            let timeoutId: NodeJS.Timeout;
            const check = () => {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    setIsPortrait(window.matchMedia("(max-width: 992.99px)").matches);
                }, 100);
            };
            check();
            window.addEventListener("resize", check);
            return () => {
                window.removeEventListener("resize", check);
                clearTimeout(timeoutId);
            };
        }, []);
    
        return isPortrait;
    }

    // Calculate max height of all cards (only for landscape mode)
    const calculateMaxHeight = useCallback(() => {
        if (cardRefs.current.length === 0 || isPortrait) return; // Skip calculation in portrait mode
        
        // Reset heights to auto to get natural height
        cardRefs.current.forEach(card => {
            if (card) {
                card.style.height = 'auto';
            }
        });

        // Wait for next frame to ensure heights are calculated
        requestAnimationFrame(() => {
            let maxHeight = 0;
            cardRefs.current.forEach(card => {
                if (card) {
                    const height = card.scrollHeight;
                    maxHeight = Math.max(maxHeight, height);
                }
            });
            
            if (maxHeight > 0) {
                setMaxCardHeight(maxHeight);
            }
        });
    }, [isPortrait]); // Add isPortrait as dependency

    // Recalculate heights on orientation change or resize
    useEffect(() => {
        const handleResize = () => {
            // Add a small delay to ensure CSS media queries have applied
            setTimeout(calculateMaxHeight, 150);
        };

        // Reset maxCardHeight to 0 when switching to portrait mode
        if (isPortrait) {
            setMaxCardHeight(0);
        } else {
            calculateMaxHeight();
        }
        
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [calculateMaxHeight, isPortrait]);

    // Set card ref
    const setCardRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
        cardRefs.current[index] = el;
        // Recalculate when all refs are set (only in landscape mode)
        if (index === cardAnimations.length - 1 && !isPortrait) {
            setTimeout(calculateMaxHeight, 50);
        }
    }, [isPortrait]); // Add isPortrait as dependency

    // Memoize card animations to prevent recalculation
    const cardAnimations = useMemo(() => [
        {
            id: 'card1',
            title: 'Who Are We',
            text: `We are the charge behind every curious mind in EE. From power systems to embedded electronics, we are united by our curiosity, creativity, and drive to innovate. Ampere is a collaborative force of undergraduates, postgraduates, and faculty of NIT Durgapur all connected by the common goal of making Electrical Engineering exciting, practical, and impactful.`,
            initial: isPortrait ? { opacity: 0, y: -80 } : { opacity: 0, x: -80, y: 80 }
        },
        {
            id: 'card2',
            title: 'Our Purpose',
            text: `We dream of an ecosystem where theory meets wire, where experiments tell stories, and where knowledge is hands-on and high-voltage. Ampere aspires to break the silo of textbooks and build bridges to the real world — through hands-on challenges, student-led research, and interactive sessions with pioneers from academia and industry. We aim to complement academic learning with practical exposure and skill development. By organizing technical workshops, seminars, industrial sessions, and student-led initiatives, we strive to bridge the gap between theoretical concepts and their real-world applications.`,
            initial: isPortrait ? { opacity: 0, y: -80 } : { opacity: 0, y: 80 }
        },
        {
            id: 'card3',
            title: 'How Far Have We Come',
            text: `From humble beginnings, Ampere has grown into a vibrant, student-led society. We have organized technical workshops, hardware hackathons, alumni interactions, and more — each event adding value to our members' academic and professional journey.`,
            initial: isPortrait ? { opacity: 0, y: -80 } : { opacity: 0, x: 80, y: -80 }
        }
    ], [isPortrait]);

    return(
        <section className="section" id="aboutUsSection">
            <motion.h2
                className="aboutUsHeading"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                }}
                viewport={{ 
                    amount: 0.4,
                    margin: "50px 0px -100px 0px"
                }}
            >
                About <span>Us</span>
                <motion.span
                    className="aboutUsHeadingUnderline"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ 
                        duration: 0.6, 
                        delay: 0.15,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    viewport={{ 
                        amount: 0.4,
                        margin: "50px 0px -100px 0px"
                    }}
                    style={{ 
                        transformOrigin: '50% 50%',
                        willChange: 'transform'
                    }}
                />
            </motion.h2>

            <div className="details">
                {cardAnimations.map((card, index) => (
                    <motion.div
                      key={card.id}
                      ref={setCardRef(index)}
                      className="card"
                      initial={card.initial}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ 
                        duration: 0.5,
                        delay: index * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                        type: "tween"
                      }}
                      viewport={{ 
                        amount: 0.5,
                        margin: "0px 0px -100px 0px"
                      }}
                      style={{ 
                        willChange: 'transform, opacity',
                        backfaceVisibility: 'hidden',
                        perspective: 1000,
                        transformStyle: 'preserve-3d',
                        // Only apply minHeight in landscape mode
                        minHeight: (!isPortrait && maxCardHeight) ? `${maxCardHeight}px` : 'auto',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                    >
                        <h3>{card.title}</h3>
                        <p style={{ flex: 1 }}>{card.text}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}