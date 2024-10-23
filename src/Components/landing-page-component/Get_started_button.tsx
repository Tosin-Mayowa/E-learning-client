import React from "react";
import arrow from "../../assets/landing-page/Arrow - Right 2.png";

const Get_started_button: React.FC = () => {
  return (

    <a href='/signup'><button className="get_started_button">
    <span>Get Stared</span> <img src={arrow} alt="" />
  </button></a>
    
  );
};

export default Get_started_button;
