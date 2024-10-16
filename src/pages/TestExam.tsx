import React from "react";
import { TestExamComp } from "../Components/TestExamComp/TestExamComp";
import withLayout  from "../Wrapper/withLayout";

const TestExam=()=>{


    return(
        <>
        <TestExamComp/>
        </>
    )
}

export default withLayout(TestExam)