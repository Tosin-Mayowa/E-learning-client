import React from "react";
import './ClassComp.css';



interface IStudentCourse {
    id?: number,
    image?: string,
    courses?: string,
    registration?: string,
}

export const StudentCourse: React.FC<IStudentCourse> = ({ image, courses, registration }): React.JSX.Element => {
    return (
        <>
       <div className="student-courses">
                            <div className="student-courses-image">
                                <img src={image} alt="" />
                            </div>
                            <div className="student-courses-registered">
                                <p className="courses">{courses}</p>
                                <p className="courses-registered">{registration}</p>
                            </div>
                        </div>
        </>
    )
}