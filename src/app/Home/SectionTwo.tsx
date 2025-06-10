'use client';

import './SectionTwo.css';
import TransformerWithWire from './TransformerWithWire';
import './TransformerWithWire.css';
import AnimationEffect from './AnimationEffect';

export default function SectionTwo() {
    return (
        <section className="section" id="introductionSection">
            <TransformerWithWire/>
            <AnimationEffect/>
            <div className="landingText1">
                We are <span className="title">Ampere</span>
                <p>
                    Innovate<span className="landingSeparator">|</span>Illuminate
                    <span className="landingSeparator">|</span>Empower
                </p>
            </div>
            <div className="landingText2">
                At Ampere, the Electrical Engineering Society, we spark curiosity and fuel innovation. Our mission is to create an environment 
                where aspiring engineers explore ideas, share knowledge, and grow into future leaders. Through workshops, technical events, and 
                collaboration with alumni, we power a vibrant EE community built on learning, creativity, and connection.
            </div>
        </section>
    )
}