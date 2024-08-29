import React from 'react';
import "./LoginSidebar.css"
import Logo from '../../assets/Globaltech_logo.png';

export const LoginSidebar=()=>{


    return (
        <>
         <div className="Login-sidebar">
         <div className="onboarding-logo">
            <img src={Logo} alt="Globaltech logo" className="onboarding-logo-img"/>
          </div>
            
         </div>
        </>
    )
}