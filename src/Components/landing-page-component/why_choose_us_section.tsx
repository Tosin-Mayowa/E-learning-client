import React from "react";
import left_img from "../../assets/landing-page/Image.png";
import Right_Why_Us from "./right_why_choose_us_section";

const WhyUs: React.FC = () => {
  return (
    <>
      <section id="why_us" className="why_choose_us_section">
        <div className="why_choose_us_section_content">
          <div className="left_why_choose_us_container">
            <img src={left_img} alt="" />
          </div>
          <Right_Why_Us />
        </div>
      </section>
    </>
  );
};

export default WhyUs;
