'use client';

import './SectionOne.css';

export default function SectionOne() {
    return (
        <section className="section" id="welcomeSection">
            <video autoPlay muted loop playsInline className="video-bg">
                <source src="BackgroundVideo.mp4" type="video/mp4" />
            </video>
        </section>
    )
}