import React from "react";
import withLayout from "../Wrapper/withLayout";
import { OverviewComp } from "../Components/OverviewComp/OverviewComp";




 function Overview(){
    return (
        <>
       <OverviewComp/>
        </>
    )
}


export default withLayout(Overview)