import React from 'react';
import { DashboardLayout } from '../Components/DashboardLayout/DashbordLayout';




const withLayout = (WrappedComponent: React.ComponentType): React.FC => {
  const ComponentWithLayout: React.FC = (props) => {
    
    return (
        <>
        <DashboardLayout>
        <WrappedComponent {...props} />
        </DashboardLayout>
        </>
    )
    ;
  };

  return ComponentWithLayout;
};

export default withLayout;