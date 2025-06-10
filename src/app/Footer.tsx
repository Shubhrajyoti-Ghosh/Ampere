import './Footer.css';
import Link from 'next/link';

export default function Footer() {
    return (
<footer>
    <div className="infoWrapper">
        <div className="Wrapper1">
            <div className="societyInfo">
                <img src="AmpereLogo.webp" alt="Ampere"/>
                <p>Empowering Electrical Engineers at NIT Durgapur through innovation and collaboration.</p>
            </div>
            
            <div className="follows">
                For Updates Follow us on:
                <div>
                <a href="#" className="fbIcon"><i className="fa-brands fa-facebook fa-beat" style={{color: "#4267b2"}}></i></a>
                <a href="#" className="igIcon"><i className="fa-brands fa-instagram fa-beat" style={{ color: "#E4405F" }}></i></a>
                <a href="#" className="liIcon"><i className="fa-brands fa-linkedin fa-beat" style={{color: "#0a66c2"}}></i></a>
                <a href="#" className="xIcon"><i className="fa-brands fa-x-twitter fa-beat" style={{color: "#000000"}}></i></a>
                </div>
            </div>
        </div>
        <div className="Wrapper2">
            <div className="contacts">
<p>Reach Out to us</p>
    <p>Email: amperenitd@gmail.com</p>
    <p>Phone: +91 7439133972</p>
    <p>Location: EE Dept, NIT Durgapur</p>
            </div>
    
            <div className="quickLinks">
                <h2>Quick Links</h2>
                <div className="Links">
                <div>

                    <Link href="#" className="footerLink">Home</Link>
                    <Link href="#" className="footerLink">Events</Link>
                    <Link href="#" className="footerLink">EE Dept</Link>
                    </div>
                <div>
                    <Link href="#" className="footerLink">Domains</Link>
                    <Link href="#" className="footerLink">Members</Link>
                    <Link href="#" className="footerLink">Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
</div>
            <div className="copyright">
                <hr />
                &copy; 2025 Ampere | Developed and managed by the Web Development Cell, Ampere, NIT Durgapur.
                <br />
                All rights reserved.
            </div>
        </footer>
    );
}

