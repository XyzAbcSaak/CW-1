import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SignIn/SignIn";
import Product from "./pages/Product/Product";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import Career from "./pages/Career/Career";

const App = () => {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div className="app">
            {showLogin ? <SignIn setShowLogin={setShowLogin} /> : <></>}
            <Navbar setShowLogin={setShowLogin} />
            <div className="app-container">
                <Routes>
                    <Route path="/CW-1/" element={<Home />} />
                    <Route path="/CW-1/product" element={<Product />} />
                    <Route path="/CW-1/about-us" element={<AboutUs />} />
                    <Route path="/CW-1/contact" element={<Contact />} />
                    <Route path="/CW-1/career" element={<Career />} />
                </Routes>
            </div>
            <hr />
            <Footer />
        </div>
    );
};

export default App;
