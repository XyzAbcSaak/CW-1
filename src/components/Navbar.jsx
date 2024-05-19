import React, { useState } from "react";
import brandLogo from "../assets/Images/Brand/cw-logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
    const [isHamEnabled, setHamEnable] = useState(false);

    const toggleMenu = () => {
        console.log("Tpggeled");
        setHamEnable(!isHamEnabled);
    };

    return (
        <div className="nav-bar">
            <div className="nav-bar-container">
                <div className="nav-left">
                    <img src={brandLogo} alt="" />
                    <h3>Code Wiz</h3>
                </div>

                <div className="nav-right">
                    <ul className="links">
                        <NavLink end activeclassname="active" to="/CW-1/">
                            <li>Home</li>
                        </NavLink>
                        <NavLink activeclassname="active" to="/CW-1/product">
                            <li>Products</li>
                        </NavLink>
                        <NavLink activeclassname="active" to="/CW-1/about-us">
                            <li>About us</li>
                        </NavLink>
                        <NavLink activeclassname="active" to="/CW-1/contact">
                            <li>Contact</li>
                        </NavLink>
                        <NavLink activeclassname="active" to="/CW-1/career">
                            <li>Career</li>
                        </NavLink>
                    </ul>
                    <button
                        onClick={() => setShowLogin(true)}
                        className="log-in"
                    >
                        Log in
                    </button>
                </div>
                {isHamEnabled ? (
                    <div className="side-navigation">
                        <div className="svg-container" onClick={toggleMenu}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 -960 960 960"
                                width="24px"
                                fill="#e8eaed"
                            >
                                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                            </svg>
                            Close
                        </div>

                        <ul className="links">
                            <NavLink end activeclassname="active" to="/CW-1/">
                                <li>Home</li>
                            </NavLink>
                            <NavLink
                                activeclassname="active"
                                to="/CW-1/product"
                            >
                                <li>Products</li>
                            </NavLink>
                            <NavLink
                                activeclassname="active"
                                to="/CW-1/about-us"
                            >
                                <li>About us</li>
                            </NavLink>
                            <NavLink
                                activeclassname="active"
                                to="/CW-1/contact"
                            >
                                <li>Contact</li>
                            </NavLink>
                            <NavLink activeclassname="active" to="/CW-1/career">
                                <li>Career</li>
                            </NavLink>
                        </ul>
                        <button
                            onClick={() => setShowLogin(true)}
                            className="log-in"
                        >
                            Log in
                        </button>
                    </div>
                ) : (
                    <div className="hamburger-menu">
                        <svg
                            onClick={toggleMenu}
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                        >
                            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                        </svg>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
