import React from "react";
import tick_icon from "../../assets/landing-page/Tick Icon.png";
import Get_started_button from "./Get_started_button";

const Left_heroSection_container: React.FC = () => {
  return (
    <div className="left_heroSection_container">
      <div className="left_text">
        <h1 className="header_text">
          Revamp your learning <br /> with us,
          <span
            style={{
              color: "#1F215E",
            }}
          >
            {" "}
            anytime,
            <br /> anywhere
          </span>
        </h1>
        <p className="span_text">
          Streamline your learning experience with Globaltech Learning
          Management System
        </p>
      </div>
      <div className="benefit_container">
        <p className="benefit_text">
          <img src={tick_icon} alt="" />
          <span>100% online</span>
        </p>
        <p className="benefit_text">
          <img src={tick_icon} alt="" />
          <span>Live weekend classes</span>
        </p>
        <p className="benefit_text">
          <img src={tick_icon} alt="" />
          <span>Trending courses</span>
        </p>
      </div>
      <Get_started_button />
    </div>
  );
};

export default Left_heroSection_container;
