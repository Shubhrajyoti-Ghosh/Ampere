'use client';

import './SectionOne.css';

export default function SectionOne() {
    return (
        <section className="section" id="welcomeSection">
            <video autoPlay muted loop playsInline className="video-bg">
                <source src="SectionOneBackgroundVideo.mp4" type="video/mp4" />
            </video>
            <div className="welcomeMessageWrapper">
                <h1 className="welcomeText">Welcome to</h1>
                <img src="AmpereLogo.webp" alt="Ampere"/>
                <p>Powering Ideas with Innovation</p>
            </div>
        </section>
    )
}