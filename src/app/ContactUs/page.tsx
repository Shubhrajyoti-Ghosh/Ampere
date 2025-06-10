'use client';

import { useEffect, useState } from 'react';

import './page.css';
import MsgBox from './Form';

export default function ContactUs() {

    const [bgImg, setBgImg] = useState('');
    useEffect(() => {
        const isPortrait = window.matchMedia("(orientation: portrait)").matches;
        const selectedImg = isPortrait? '/ContactPageBackgroundImgPortrait.webp' : '/ContactPageBackgroundImgLandscape.webp';
        setBgImg(selectedImg);
    }, []);

    return (
        <section className="contactUsWrapper">
            {bgImg && <img src={bgImg} className="BgImg" alt="Background"/>}

            <h1 className="heading">Get in Touch</h1>

            <div className="information">
                <div className="details">
                    <div id="location" className="subHeading">
                        <h3><i className="fa-solid fa-location-dot" style={{color: "#ffc800", fontSize: "x-large"}}/><span>Location:</span></h3>
                        <p>National Institute of Technology Durgapur , West Bengal , India</p>
                    </div>
                    <div id="mobNo" className="subHeading">
                        <h3><i className="fa-solid fa-phone" style={{color: "#156533", fontSize: "large"}}/><span>Contact Details:</span></h3>
                        <p>Sohom Mondal {"("}<i>President</i>{")"}: +91 7439133972</p>
                    </div>
                    <div id="Email" className="subHeading">
                        <h3><i className="fa-duotone fa-solid fa-envelope" style={{color: "#d44638", fontSize: "x-large"}}/><span>Email Id:</span></h3>
                        <p>amperenitd@gmail.com</p>
                    </div>
                </div>
                <div className="map">
                    <iframe src="https://www.google.com/maps?q=Department+of+Electrical+Engineering,+NIT+Durgapur&z=17&hl=en&output=embed" 
                        width="600" 
                        height="450" 
                        style={{border:0}} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
            <MsgBox/>
        </section>
    )
}