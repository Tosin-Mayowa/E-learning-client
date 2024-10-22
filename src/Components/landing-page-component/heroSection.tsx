import React from "react";
// import NavBar from "./header";
import right_img from "../../assets/landing-page/Right.png";
import Left_heroSection_container from "./left_heroSection_container";

const HeroSection: React.FC = () => {
  return (
    <>
      <section id="hero-section" className="hero-section">
        
        <div className="hero_section_content">
          <Left_heroSection_container />

          <div className="right_heroSection_container">
            <img src={right_img} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
