'use client';

import './page.css';
import MsgBox from './Form';

export default function ContactUs() {
    return (
        <section className="contactUsWrapper">

            <div id="CU-heading"><h1 className="heading">Get in <span>Touch</span></h1></div>

            <div className="CU-information">
                <div className="CU-details">
                    <div className="CU-subHeading">
                        <h3><i className="fa-duotone fa-solid fa-envelope" style={{color: "#d44638", fontSize: "x-large"}}/><span>Email Id:</span></h3>
                        <p>amperenitd@gmail.com</p>
                    </div>
                    <div className="CU-subHeading">
                        <h3><i className="fa-solid fa-phone" style={{color: "#156533", fontSize: "large"}}/><span>Contact Details:</span></h3>
                        <p>Sohom Mondal {"("}<i>President</i>{")"}: +91 7439133972</p>
                    </div>
                    <div className="CU-subHeading">
                        <h3><i className="fa-solid fa-location-dot" style={{color: "#ffc800", fontSize: "x-large"}}/><span>Location:</span></h3>
                        <p>National Institute of Technology Durgapur, Mahatma Gandhi Avenue, A-Zone, Durgapur, West Bengal Durgapur: 713209</p>
                    </div>
                    <div className="map">
                        <iframe src="https://www.google.com/maps?q=Department+of+Electrical+Engineering,+NIT+Durgapur&z=17&hl=en&output=embed" 
                            style={{border:0}} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
                <MsgBox/>
            </div>
        </section>
    )
}