import React from "react";
import './CourseComp.css';

interface ICourseDetails {
    id?: number,
    image?: string,
    title?: string,
    noOfInstructors?: string,
    noOfModules?: string,
}


export const CourseDetails: React.FC<ICourseDetails> = ({ image, title, noOfInstructors, noOfModules }): React.JSX.Element => {
    return (
        <>
            <div className="frontend-development-card">
                <div className="frontend-development-card-image">
                    <img src={image} alt="" />
                </div>
                <p className="frontend-development-title">{title}</p>
                <div className="frontend-development-info">
                    <p className="frontend-development-modules">{noOfModules}</p>
                    <p className="frontend-development-instructors">{noOfInstructors}</p>
                </div>
                <button>View Syllabus</button>
            </div>



        </>
)
}