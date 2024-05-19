import React from "react";
import "./AboutUs.css";
import aboutUsOne from "../../assets/Images/abt-us-1.jpg";
import aboutUsTwo from "../../assets/Images/abt-us-2.jpg";

const AboutUs = () => {
    return (
        <div className="about-us">
            <section className="row about-us-container">
                <div className="flex-box f1">
                    {/* <h1>
                        We are new gang in this business, but skilled and highly
                        ambitious one
                    </h1> */}
                    <h1>
                        Welcome to Code Wiz, we are a fresh and dynamic tech
                        company committed to revolutionizing the way technology
                        enhances our lives.
                    </h1>
                    {/* <p></p> */}
                </div>
                <div className="flex-box f2">
                    <img src={aboutUsOne} alt="" />
                </div>
                <div className="flex-box f3"></div>
                <div className="flex-box f4">
                    <h3>
                        We are a team of passionate professionals, driven by a
                        shared goal to push the boundaries of what's possible in
                        the tech industry. Our diverse backgrounds and expertise
                        come together to form a powerhouse of creativity and
                        technical excellence.
                    </h3>
                </div>
                <div className="flex-box f5"></div>
                <div className="flex-box f6">
                    <img src={aboutUsTwo} alt="" />
                </div>
                <div className="flex-box f7">
                    <h3>
                        Quality is at the heart of everything we do. We believe
                        that true innovation is achieved through meticulous
                        attention to detail and a relentless pursuit of
                        excellence.
                    </h3>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
