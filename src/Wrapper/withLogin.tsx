import React from 'react';
import { LoginLayout } from '../Components/LoginLayout/LoginLayout';




const withLogin = (WrappedComponent: React.ComponentType): React.FC => {
  const ComponentWithLayout: React.FC = (props) => {
    
    return (
        <>
        <LoginLayout>
        <WrappedComponent {...props} />
        </LoginLayout>
        </>
    )
    ;
  };

  return ComponentWithLayout;
};

export default withLogin;