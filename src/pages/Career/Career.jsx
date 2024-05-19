import React from "react";
import "./Career.css";
import career from "../../assets/Images/career.jpg";
import careerTwo from "../../assets/Images/careerTwo.jpg";
import careerThree from "../../assets/Images/careerThree.jpg";
import careerFour from "../../assets/Images/careerFour.jpg";

const Career = () => {
    return (
        <div className="career">
            <section className="row career-wrapper">
                <div className="career-img-container">
                    <img src={careerFour} alt="" />
                </div>
                <div className="career-desc-container">
                    <h1>UI/UX Developer</h1>
                    <p>Anyone intersted in part-time UI/UX role can apply</p>
                    <form>
                        <input type="text" placeholder="Enter Name" />
                        <input type="email" placeholder="Enter Email" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Career;
