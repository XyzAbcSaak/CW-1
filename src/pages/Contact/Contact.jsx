import React from "react";
import "./Contact.css";
import contactImg from "../../assets/Images/contact-us.jpg";

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-us-container">
                <div className="contact-us-c1">
                    <img src={contactImg} alt="" />
                </div>
                <div className="contact-us-c2">
                    <form>
                        <input type="text" placeholder="Enter Name" />
                        <input type="email" placeholder="Enter Email" />
                        <textarea
                            name="txt-area"
                            id="txt-area"
                            placeholder="Enter Message"
                        ></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <div className="row-gap"></div>
        </div>
    );
};

export default Contact;
