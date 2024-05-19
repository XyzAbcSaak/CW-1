import React from "react";
import "./Footer.css";
import brandLogo from "../../assets/Images/Brand/cw-logo.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-content brand-container">
                    <div className="footer-logo-wrapper">
                        <img src={brandLogo} alt="" />
                    </div>
                    <div className="brand-content-wrapper">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Omnis accusantium doloremque neque, provident
                            nostrum eum molestiae fuga rem quae molestias ab
                            praesentium voluptate quidem vel maiores iste dolor
                            delectus voluptatibus?
                        </p>
                    </div>
                </div>
                <div className="footer-content company-pages-container">
                    <h2>C O M P A N Y</h2>
                    <ul className="links">
                        <NavLink end activeclassname="active" to="/CW-1/">
                            <li>H O M E</li>
                        </NavLink>
                        <NavLink activeclassname="active" to="/CW-1/product">
                            <li>P R O D U C T S</li>
                        </NavLink>
                        <NavLink activeclassname="active" to="/CW-1/about-us">
                            <li>A B O U T &nbsp; U S</li>
                        </NavLink>
                        <NavLink activeclassname="active" to="/CW-1/contact">
                            <li>C O N T A C T</li>
                        </NavLink>
                        <NavLink activeclassname="active" to="/CW-1/career">
                            <li>C A R E E R</li>
                        </NavLink>
                    </ul>
                </div>
                <div className="footer-content get-in-touch-wrapper">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-212-456-7890</li>
                        <li>contact@codewiz.com</li>
                    </ul>
                </div>
            </div>
            <div className="copy-rights">
                <hr />
                <p>Copyright 2024 © codewiz.com - All Right Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
