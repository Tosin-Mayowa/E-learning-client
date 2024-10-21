import React from "react";
import login_icon from "../../assets/landing-page/Login.png";

const LoginButton: React.FC = () => {
  return (
    <>
      <button className="login_button">
        <img src={login_icon} alt="" /> <span>Login</span>
      </button>
    </>
  );
};

export default LoginButton;
