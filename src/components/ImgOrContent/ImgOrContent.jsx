import React from "react";
import "./ImgOrContent.css";

const ImgOrContent = ({ isImg, imageSource }) => {
    return isImg ? (
        <div className="img-or-desc-img-wrapper">
            <img src={imageSource} alt="img not found" />
        </div>
    ) : (
        <div className="img-or-desc-content-wrapper">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                iure, libero enim aut in voluptatibus nemo, nihil velit autem
                possimus eaque beatae mollitia dolorem cupiditate omnis et culpa
                ratione nam.
            </p>
        </div>
    );
};

export default ImgOrContent;
