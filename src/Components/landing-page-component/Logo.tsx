import React from "react";
import global_tech_logo from "../../assets/Globaltech_logo.png";

const Logo: React.FC = () => {
  return (
    <>
      <div className="logo">
        <img src={global_tech_logo} alt="" />
      </div>
    </>
  );
};

export default Logo;
