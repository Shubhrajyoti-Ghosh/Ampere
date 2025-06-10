'use client';

import './page.css';

import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Roboto } from 'next/font/google';

gsap.registerPlugin(ScrollTrigger);

const roboto = Roboto ({
    subsets: ['latin'],
    weight: ['100', '900'],
    display: 'swap',
});

export default function Domains() {
    useGSAP(() => {
        const cardsContainer = gsap.utils.toArray<HTMLElement>('.cardContainer');
        const cards = gsap.utils.toArray<HTMLElement>('.card');

        const tl = gsap.timeline({
            defaults: { ease: 'power2.out' },
            scrollTrigger: {
                trigger: '.allCardsContainer',
                pin: true,
                start: 'top 81vh',
                end: `+=${cardsContainer.length * 50}%`,
                scrub: 1,
            },
        });

        tl.to(cards[0], { opacity: 1, scale: 1, rotate: -3 });

        cardsContainer.forEach((_, i) => {
            if (i === 0) return;
            tl.to(cards[i], {
                duration: 1.5,
                y: '0%',
                opacity: 1,
                scale: 1,
                rotate: i * 3 * (i % 2 === 0 ? 1 : -1),
                ease: 'power2.out',
            });
        });
    }, []);

    useEffect(() => {
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            const cardInner = card.querySelector('.card');
            const rotation = gsap.utils.random(-7, 7, true);

            if (!cardInner) return;

            gsap.set(cardInner, {
                scale: 1,
                rotation: rotation,
            });

            ScrollTrigger.create({
                trigger: card,
                start: 'top 100%',
                end: 'top 25%',
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;

                    gsap.to(cardInner, {
                        scale: gsap.utils.interpolate(1.1, 0.9, progress),
                        rotation: rotation,
                        overwrite: false,
                    });
                },
            });

            gsap.to(cardInner, {
                y: '+=5',
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
                duration: gsap.utils.random(1, 2),
                overwrite: false,
            });
        });
    }, []);

    return (
        <div className={`allCardsContainer ${roboto.className}`}>

            <div className="cardContainer">
                <div className="card" id="card1">
                    <h2 className="heading" id="heading1">WEB DEVELOPMENT CELL</h2>
                    <h3 className="subHeading">Significance</h3>
                    <p className="text">The web development team forms the digital backbone of Ampere. From building intuitive websites to creating dynamic platforms, this domain ensures that our online presence reflects our vision and values.</p>
                    <h3 className="subHeading">Vision</h3>
                    <p className="text"> To create seamless, accessible, and user-friendly digital interfaces that showcase the innovations, events, and community spirit of Ampere.</p>
                </div>
            </div>

            <div className="cardContainer">
                <div className="card" id="card2">
                    <h2 className="heading" id="heading2">DIGITAL OUTREACH CELL</h2>
                    <h3 className="subHeading">Significance</h3>
                    <p className="text">This team is the voice of Ampere in the digital world. Through engaging posts, updates, and campaigns, they keep the NIT Durgapur community informed and inspired.</p>
                    <h3 className="subHeading">Vision</h3>
                    <p className="text"> To cultivate a vibrant online presence that connects students, professionals, and enthusiasts while celebrating the achievements and activities of the society.</p>
                </div>
            </div>

            <div className="cardContainer">
                <div className="card" id="card3">
                    <h2 className="heading" id="heading3">WORKSHOPS AND TECHNICAL TALKS CELL</h2>
                    <h3 className="subHeading">Significance</h3>
                    <p className="text"> This domain bridges the gap between classroom learning and real-world application. By organizing workshops and talks by experts, it helps members stay updated with the latest technologies and industry trends.</p>
                    <h3 className="subHeading">Vision</h3>
                    <p className="text">To empower students with practical skills and knowledge that foster innovation, curiosity, and continuous learning.</p>
                </div>
            </div>

            <div className="cardContainer">
                <div className="card" id="card4">
                    <h2 className="heading" id="heading4">CODE AND QUIZ CELL</h2>
                    <h3 className="subHeading">Significance</h3>
                    <p className="text">This domain fuels the competitive spirit and sharpens problem-solving abilities. With events focused on AI/ML, Embedded Systems, VLSI, and more, it challenges students to think critically and creatively.</p>
                    <h3 className="subHeading">Vision</h3>
                    <p className="text">To cultivate a culture of excellence and innovation through intellectually stimulating competitions that drive technical mastery.</p>
                </div>
            </div>

            <div className="cardContainer">
                <div className="card" id="card5">
                    <h2 className="heading" id="heading5">CONTENT AND DESIGN CELL</h2>
                    <h3 className="subHeading">Significance</h3>
                    <p className="text">Creativity meets communication in this multifaceted domain. Whether it's crafting compelling cardContainer, designing eye-catching graphics, or producing impactful videos, this team shapes how Ampere tells its story.</p>
                    <h3 className="subHeading">Vision</h3>
                    <p className="text">To communicate ideas and events with creativity and clarity, capturing the essence of the society’s mission through powerful visual and written narratives.</p>
                </div>
            </div>

            <div className="cardContainer">
                <div className="card" id="card6">
                    <h2 className="heading" id="heading6">ALUMNI INTERACTION CELL</h2>
                    <h3 className="subHeading">Significance</h3>
                    <p className="text">The alumni domain strengthens the bridge between the past and present. By connecting with graduates, it creates opportunities for mentorship, guidance, and inspiration.</p>
                    <h3 className="subHeading">Vision</h3>
                    <p className="text">To build a thriving network of support and knowledge-sharing that connects current students with accomplished alumni, fostering a legacy of growth and collaboration.</p>
                </div>
            </div>

        </div>
    );
}