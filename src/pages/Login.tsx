import React from "react";
import { LoginLayout } from "../Components/LoginLayout/LoginLayout";
import LoginComp from "../Components/LoginComponent/LoginComp";
import withLogin from "../Wrapper/withLogin";


const Login=()=>{

    return(
        <>
        <LoginComp/>
        </>
    )
}

export default withLogin(Login);