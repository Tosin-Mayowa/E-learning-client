import React from "react";
import "./LoginComp.css";
import Logo from "../../assets/Globaltech_logo.png";

const LoginComp=()=>{

    return(
        <>
        <div className="login-wrapper">
        <div className="login-nested-wrapper">
            <div className="login-logo">
                <img src={Logo} alt="GlobalTech Logo" className="login-logo-img"/>
                <p>Learning Management System</p>
            </div>
            <div className="login-title">
                <h2>Login Form</h2>
            </div>
            <div className="input-fields">
                <div className="login-input-one">
                <label htmlFor="">Username</label><br />
                <input type="text" name="" placeholder="Enter username" value="" className="login-input" required />
                </div>
                <div className="login-input-two">
                <label htmlFor="">Password</label><br />
                <input type="password" name="" placeholder="Enter password" value="" className="login-input" required/>
                </div>
            </div>
            <div className="more">
                <div className="checkbox">
                    <input type="checkbox" className="check"/>Remember Me
                </div>
                <div className="forgot-password">
                    <a href="#">Forgot Password?</a>
                </div>
            </div>
            <button className="login-btn" type="submit" >Login</button>
            <div className="register">
                <p>Don't have an account? <a href="#">Register here.</a></p>
            </div>
        </div>
        </div>
        </>
    )
}

export default LoginComp;