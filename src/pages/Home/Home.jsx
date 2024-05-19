import React from "react";
import "./Home.css";
import rustTech from "../../assets/Videos/RustTech.mp4";
import ProductCard from "../../components/ProductCard/ProductCard";
import ship from "../../assets/Images/Ship.jpg";
import securedServer from "../../assets/Images/SecuredServer.png";
import ImgOrContent from "../../components/ImgOrContent/ImgOrContent";

const Home = () => {
    return (
        <div className="home">
            <section className="row">
                <div className="hero-container">
                    <div className="video-wrapper">
                        <video muted autoPlay loop>
                            <source src={rustTech}></source>
                        </video>
                    </div>
                    <div className="hero-content-wrapper">
                        <h1>
                            Innovative software solutions for the modern era
                        </h1>
                        <p>
                            Our products help customers acheive their business
                            goals, from building a strong brand identity to
                            streamlining internal operations
                        </p>

                        <div className="btn-container">
                            <button className="btn1">View all products</button>
                            <button className="btn2">View all solutions</button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="row-gap"></div>
            <section className="row">
                <div className="explore-product-wrapper">
                    <h1 className="product-heading">Explore our products</h1>
                </div>
                <div className="explore-product-wrapper">
                    <p className="product-para">
                        Each product is designed to simplify complex processes
                        and empower your team to create their best work
                    </p>
                </div>
                <div className="explore-product-wrapper product-card-display">
                    <ProductCard cardImg={ship} />
                    <ProductCard cardImg={ship} />
                    <ProductCard cardImg={ship} />
                    <ProductCard cardImg={ship} />
                    <ProductCard cardImg={ship} />
                    {/* <ProductCard cardImg={ship} />
                    <ProductCard cardImg={ship} />
                    <ProductCard cardImg={ship} />
                    <ProductCard cardImg={ship} />
                    <ProductCard cardImg={ship} /> */}
                </div>
            </section>
            <div className="row-gap"></div>

            <section className="row">
                <div className="img-or-desc-wrapper">
                    <hr />
                    <ImgOrContent isImg={true} imageSource={securedServer} />
                    <ImgOrContent isImg={false} imageSource={securedServer} />
                    <hr />
                    <ImgOrContent isImg={false} imageSource={securedServer} />
                    <ImgOrContent isImg={true} imageSource={securedServer} />
                    <hr />
                </div>
            </section>

            <div className="row-gap"></div>

            <section className="row">
                <div className="get-product-wrapper">
                    <h1 className="title">
                        Would you like to experience a customizable browser
                        environment?
                    </h1>
                    <button className="btn">Get MyJarvis</button>
                </div>
            </section>
        </div>
    );
};

export default Home;
