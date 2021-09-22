import React from 'react'
import "../Footer/Footer.scss"
import pm1 from "../../Images/pm1.jpg"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

export default function Footer() {
    return (
        <div className="footer-div">
            <div className="footer-wrap">
                <div className="footer-left-wrap">
                    <h1>FASHO</h1>
                    <h6>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                        Amet mattis vulputate enim nulla
                        aliquet porttitor lacus. Elit at
                        imperdiet dui accumsan sit amet
                        nulla facilisi morbi.
                        Aliquam sem et tortor consequat id.</h6>
                    <div className="footer-socio-icons">
                        <FacebookIcon className="footer-icon" style={{ backgroundColor: "#3b5998" }} />
                        <InstagramIcon className="footer-icon" style={{ backgroundColor: "#c32aa3" }} />
                        <TwitterIcon className="footer-icon" style={{ backgroundColor: "#1da1f2" }} />
                        <WhatsAppIcon className="footer-icon" style={{ backgroundColor: " #25d366" }} />
                    </div>
                </div>


                <div className="footer-center-wrap">
                    <h2>Useful Links</h2>
                    <div className="footer-lists">
                        <ul>
                            <li>Home</li>
                            <li>Cart</li>
                            <li>Man Fashion</li>
                            <li>Woman Fashion</li>
                            <li>Accessories</li>
                        </ul>
                        <ul>

                            <li>My Account</li>
                            <li>Order Tracking</li>
                            <li>Wishlist</li>
                            <li>Terms</li>
                        </ul></div>
                </div>


                <div className="footer-right-wrap">
                    <h2>Contact</h2>
                    <div className="footer-contact-list">
                        <div
                            className="footer-contact">
                            <RoomIcon />
                            <h6>1598 jalikheda, ghnbrfg, frtguhgg 51@845</h6>
                        </div>
                        <div
                            className="footer-contact">
                            <PhoneIcon />
                            <h6>+91 845265$&45</h6>
                        </div>
                        <div
                            className="footer-contact">
                            <EmailIcon />
                            <h6>fasho.some@fasho.in</h6>
                        </div>
                        <img src={pm1} />
                    </div>
                </div>
            </div>
        </div>
    )
}
