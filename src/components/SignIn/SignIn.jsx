import React, { useState } from "react";
import "./SignIn.css";
import cross_Icon from "../../assets/Images/cross_icon.png";

const SignIn = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState("Sign In");

    return (
        <div className="sign-in">
            <form className="sign-in-popup-container">
                <div className="sign-in-popup-title">
                    <h2>{currentState}</h2>
                    <img
                        onClick={() => setShowLogin(false)}
                        src={cross_Icon}
                        alt=""
                    />
                </div>
                <div className="sign-in-popup-inputs">
                    {currentState === "Sign In" ? (
                        <></>
                    ) : (
                        <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            required
                        />
                    )}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                </div>
                <button type="submit">
                    {currentState === "Sign Up" ? "Create account" : "Sign In"}
                </button>
                {currentState === "Sign In" ? (
                    <p>
                        Create a new account?{" "}
                        <span onClick={() => setCurrentState("Sign Up")}>
                            Click here
                        </span>
                    </p>
                ) : (
                    <p>
                        Already have an account ?{" "}
                        <span onClick={() => setCurrentState("Sign In")}>
                            Sign In here
                        </span>
                    </p>
                )}
            </form>
        </div>
    );
};

export default SignIn;
