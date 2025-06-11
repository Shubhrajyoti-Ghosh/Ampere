import './Footer.css';
import Link from 'next/link';

export default function Footer() {
    return (
<footer>
    <div className="mainFooterWrapper">
        <div className="infoWrapper">
            <div className="societyInfo">
                <img src="AmpereLogo.webp" alt="Ampere"/>
                <p>Empowering Electrical Engineers at NIT Durgapur through innovation and collaboration.</p>
            </div>
            
            <div className="socialMediaHandles">
                <h4>For Updates Follow us on:</h4>
                <div>
                    <a href="#" className="fbIcon"><i className="fa-brands fa-facebook fa-beat" style={{color: "#4267b2"}}/></a>
                    <a href="#" className="igIcon"><i className="fa-brands fa-instagram fa-beat" style={{ color: "#E4405F" }}/></a>
                    <a href="https://www.linkedin.com/company/ampere-%E2%80%93-electrical-engineering-society-nit-durgapur/" className="liIcon"><i className="fa-brands fa-linkedin fa-beat" style={{color: "#0a66c2"}}/></a>
                    <a href="#" className="xIcon"><i className="fa-brands fa-x-twitter fa-beat" style={{color: "#000000"}}/></a>
                </div>
            </div>
        </div>
        <div className="contacts">
            <h2 className="contactTitle">Reach Out to us</h2>
            <p><b>Email:</b> amperenitd@gmail.com</p>
            <p><b>Phone:</b> +91 7439133972</p>
            <p><b>Location:</b> EE Dept, NIT Durgapur</p>
        </div>
    
        <div className="quickLinks">
            <h2>Quick Links</h2>
            <div className="links">
                <div>
                    <Link href="/Home" className="footerLink">Home</Link>
                    <Link href="#" className="footerLink">Events</Link>
                    <Link href="#" className="footerLink">EE Dept</Link>
                </div>
                <div>
                    <Link href="/Domains" className="footerLink">Domains</Link>
                    <Link href="#" className="footerLink">Members</Link>
                    <Link href="/ContactUs" className="footerLink">Contact Us</Link>
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

