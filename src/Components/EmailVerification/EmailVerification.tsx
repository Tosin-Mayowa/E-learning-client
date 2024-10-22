import React from "react";
import "./EmailVerification.css";
import Logo from "../../assets/Globaltech_logo.png";
import withLogin from "../../Wrapper/withLogin";
import Mail from "../../assets/undraw_mail_sent_re_0ofv 1.png";

const EmailVerification=()=>{

    return(
        <>
        <div>
            <div className="logo">
                <img src={Logo} alt="GlobalTech Logo" className="logo"/>
            </div>
            <div className="required-info">
                <ul>
                    <li><a href="#">Personal Information</a></li>
                    <li><a href="#">Additional Information</a></li>
                    <li><a href="#">Select Course(s)</a></li>
                    <li><a href="#">Upload Photo</a></li>
                    <li><a href="#">Verification</a></li>
                </ul>
            </div>
            <img src={Mail} alt="Mail Logo" className="mail" />
            <h3 className="verify">Verify email address</h3>
            <p className="verification-message">A verification link has been sent to your email address. Please click on the link to <br />
            activate your account</p>
            <button className="verification-button">Verify</button>
        </div>
        </>
    )
}

export default withLogin(EmailVerification);