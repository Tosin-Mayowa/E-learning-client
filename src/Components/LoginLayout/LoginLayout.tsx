import React from 'react';
import { LoginSidebar } from '../LoginSidebar/LoginSidebar';
import "./Login.css"
type IProps={
    children:React.ReactNode
}


export const LoginLayout:React.FC<IProps>=({children})=>{

return (
    <>
         <section className='Login-wrapper'>
            <LoginSidebar/>
             <div className="Login-content-right">
                {children}
             </div>
         </section>
    </>
)
}