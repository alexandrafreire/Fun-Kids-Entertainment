import React from "react";
import Banner from "../../images/Banner.mp4"

const HomePageBanner = () => {
    
    
    return(
        <div className="Banner-container">
            <video src={Banner} playsInline autoPlay loop muted/>

        </div>
    )




}

export default HomePageBanner;