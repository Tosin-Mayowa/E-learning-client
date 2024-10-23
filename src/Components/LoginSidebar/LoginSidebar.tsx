import React from 'react';
import "./LoginSidebar.css"
// import Logo from '../../assets/Globaltech_logo.png';
import sideimage from '../../assets/Left.jpg'
import Background from '../../src/assets/MainContent.png';

export const LoginSidebar=()=>{


    return (
        <>
         <div className="Login-sidebar">
         <div className="onboarding-logo">
            <img src={sideimage} alt="Globaltech logo" className="onboarding-logo-img"/>
          </div>
         </div>
        </>
    )
}