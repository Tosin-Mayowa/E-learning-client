import React from 'react';
import withLogin from '../Wrapper/withLogin';
import { SignUpComp } from '../Components/SignUpComp/SignUpComp';



 function SignUp(){




    return (
        <>
         <SignUpComp/>
        </>
    )
}
export default withLogin(SignUp);