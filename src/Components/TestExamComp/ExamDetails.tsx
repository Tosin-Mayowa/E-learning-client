import React from "react";
import './TestExamComp.css';

interface IExamDetails {
    id?: number,
    assessment?: string,
    course?: string,
    duration?: string,
    time?: string,
}


export const ExamDetails: React.FC<IExamDetails> = ({assessment, course, duration, time}): React.JSX.Element => {
    return (
        <>
        <div className="frontend-exam">
                        <div className="exam-title">
                            <div className="exam-assessment">
                                <div className="exam-assessment-title">
                                    <p>{assessment}</p>
                                </div>
                                <div className="exam-course-title">
                                    <p>{course}</p>
                                </div>
                            </div>
                            <div className="exam-duration">
                                <div className="exam-duration-text">
                                    <p>{duration}</p>
                                </div>
                                <div className="exam-time-duration">
                                    <p>{time}</p>
                                </div>
                            </div>
                        </div>
                    </div>
        
        
        </>
    )
}