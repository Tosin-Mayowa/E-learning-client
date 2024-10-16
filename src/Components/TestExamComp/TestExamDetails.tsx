import React from "react";
import './TestExamComp.css';

interface ITestExamDetails {
    id?: number,
    assessment?: string,
    course?: string,
    duration?: string,
    time?: string,
}


export const TestExamDetails: React.FC<ITestExamDetails> = ({ assessment, course, duration, time}): React.JSX.Element => {
    return (
        <>
           <div className="frontend">
                        <div className="title">
                            <div className="assessment">
                                <div className="assessment-title">
                                    <p>{assessment}</p>
                                </div>
                                <div className="course-title">
                                    <p>{course}</p>
                                </div>
                            </div>
                            <div className="duration">
                                <div className="duration-text">
                                    <p>{duration}</p>
                                </div>
                                <div className="time-duration">
                                    <p>{time}</p>
                                </div>
                            </div>
                        </div>
                    </div> 
        </>
    )
}