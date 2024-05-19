import React from "react";
import "./ProductCard.css";

const ProductCard = ({ cardImg }) => {
    return (
        <div className="product-card">
            <div className="img-wrapper">
                <img src={cardImg} alt="img not found" />
            </div>
            <div className="card-title">Brand Studio</div>
            <div className="card-description">
                Create beautiful 3d renderings
            </div>
        </div>
    );
};

export default ProductCard;
