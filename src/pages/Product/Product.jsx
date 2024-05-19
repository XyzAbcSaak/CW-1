import React from "react";
import "./Product.css";
import heroProduct from "../../assets/Images/HeroProduct.jpg";
import ImgOrContent from "../../components/ImgOrContent/ImgOrContent";
import sd from "../../assets/Images/sd.jpg";

const Product = () => {
    return (
        <div className="product">
            <section className="row prod-hero">
                <div className="prod-hero-text-conatiner">
                    <h1>Helpful Products. For everyone.</h1>
                </div>
                <div className="prod-hero-img-container">
                    <img src={heroProduct} alt="" />
                </div>
            </section>
            <div className="row-gap"></div>
            <section className="row">
                <div className="img-or-desc-wrapper">
                    <hr />
                    <ImgOrContent isImg={true} imageSource={sd} />
                    <ImgOrContent isImg={false} imageSource={sd} />
                    <hr />
                    <ImgOrContent isImg={false} imageSource={sd} />
                    <ImgOrContent isImg={true} imageSource={sd} />
                    <hr />
                    <ImgOrContent isImg={true} imageSource={sd} />
                    <ImgOrContent isImg={false} imageSource={sd} />
                    <hr />
                    <ImgOrContent isImg={false} imageSource={sd} />
                    <ImgOrContent isImg={true} imageSource={sd} />
                </div>
            </section>
        </div>
    );
};

export default Product;
