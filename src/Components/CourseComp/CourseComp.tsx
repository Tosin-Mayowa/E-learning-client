import React from "react";
import './CourseComp.css';
import Frontend from '../../assets/Frontend.png';
import DigitalMarketing from '../../assets/DigitalMarketing.png';
import ProductDesign from '../../assets/ProductDesign.png';
import { CourseDetails } from "./CourseDetails";

const courseDetails = [
    {
        id: 1,
        image: Frontend, 
        title: 'Frontend Web Development',
        noOfModules: '7 modules', 
        noOfInstructors: '2 instructors'
    },
    {
        id: 2,
        image: DigitalMarketing, 
        title: 'Digital Marketing',
        noOfModules: '7 modules', 
        noOfInstructors: '2 instructors'
    },

    {
        id: 3,
        image: ProductDesign, 
        title: 'Product Design',
        noOfModules: '7 modules', 
        noOfInstructors: '2 instructors'
    },

    // {
    //     id: 4,
    //     image: Frontend, 
    //     title: 'Cyber Security',
    //     noOfModules: '7 modules', 
    //     noOfInstructors: '2 instructors'
    // }
]



export const CourseComp: React.FC = (): React.JSX.Element => {


    return (
        <>
            <div className="section">
                <div className="courses-top">
                    <div className="mycourses-heading">
                        <p>My Courses</p>
                    </div>
                    <div className="addcourse-button">
                        <button>+ Add Course</button>
                    </div>
                </div>
                <div className="course-cards-section">
                    <div className="course-cards">
                       {
                        courseDetails?.map(item=><CourseDetails key={item.id} {...item}/>)
                       }

                    </div>
                </div>

            </div>

        </>
    )
}

