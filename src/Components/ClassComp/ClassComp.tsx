import React from "react";
import './ClassComp.css';
import Wireframes from '../../assets/Wireframes.png';
import Effects from '../../assets/Effects.png';
import Animations from '../../assets/Animations.png';
import Marketing from '../../assets/Marketing.png';
import { ClassDetails } from "./ClassDetails";
import Courses from '../../assets/Courses.png';
import Tests from '../../assets/Tests.png';
import Projects from '../../assets/Projects.png';
import { StudentCourse } from "./StudentCourse";
import Tutor from '../../assets/Tutor.png';
import Web from '../../assets/Web.png';
import Digital from '../../assets/Digital.png';
import { ClassTableBody } from "./ClassTableBody";



const classDetails = [
    {
        id: 1,
        image: Wireframes,
        title: 'Introduction to Wireframes',
        topic: 'Product Design'
    },

    {
        id: 2,
        image: Effects,
        title: 'Introduction to CSS Effects',
        topic: 'Frontend Web Development'
    },

    {
        id: 3,
        image: Animations,
        title: 'CSS Animations',
        topic: 'Frontend Web Development'
    },

    {
        id: 4,
        image: Marketing,
        title: 'Why Market Research is important',
        topic: 'Digital Marketing'
    },


]

const studentCourse = [
    {
        id: 1,
        image: Courses,
        courses: '3 Courses',
        registration: 'Registered',
    },

    {
        id: 2,
        image: Tests,
        courses: '2 Tests',
        registration: 'Taken',
    },

    {
        id: 3,
        image: Projects,
        courses: '2 Projects',
        registration: 'Ongoing',
    }

]

const studentClassTable =  [

    {
        id: 1,
        course: 'Product Design',
        topic: 'User Research',
        image: Tutor,
        instructor: 'Mr Johnson',
        // instructor: [Tutor, 'Mr Johnson'],
        nextclass: 'May 17,2024 10:00am',

    },

    {
        id: 2,
        course: 'Frontend Web Development',
        topic: 'CSS Flexbox & Grid',
        image: Web,
        instructor: 'Mr Micheal',
        nextclass: 'May 17,2024 1:00pm',

    },

    {
        id: 3,
        course: 'Digital Marketing',
        topic: 'Facebook Ads Creation',
        image: Digital,
        instructor: 'Ms Jadesola',
        // instructor: [Tutor, 'Mr Johnson'],
        nextclass: 'May 17,2024 4:00pm',

    },

    {
        id: 4,
        course: 'Product Design',
        topic: 'User Personas',
        image: Tutor,
        instructor: 'Mr Johnson',
        // instructor: [Tutor, 'Mr Johnson'],
        nextclass: 'May 20,2024 10:00am',

    },

    {
        id: 5,
        course: 'Frontend Web Development',
        topic: 'CSS Advanced',
        image: Web,
        instructor: 'Mr Micheal',
        // instructor: [Tutor, 'Mr Johnson'],
        nextclass: 'May 20,2024 1:00pm',

    },

]



export const ClassComp: React.FC = (): React.JSX.Element => {




    return (
        <>
            <section>
                <div className="table-header-container">
                    <table>
                        <thead>
                        <tr>
                            <th>Course </th>
                            <th>Topic</th>
                            <th>Instructor</th>
                            <th>Next Class</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                studentClassTable?.map(item => <ClassTableBody key={item.id} {...item}  />)
                            }
                        </tbody>
                    </table>
                </div>

                <div className="student-courses-info">
                    {
                        studentCourse?.map(item => <StudentCourse key={item.id} {...item}  />)
                    }
                </div>

                <p className="today-class">Today's Classes</p>
                <div className="today-classes">
                    <div className="today-classes-option">
                        <div className="recorded-classes">
                            <p>Recorded</p>
                        </div>
                        <div className="live-classes">
                            <p>Live Class</p>
                        </div>
                    </div>
                    <div className="live-class-available">
                        {
                            classDetails?.map(item => <ClassDetails key={item.id} {...item} />)
                        }
                    </div>
                </div>
            </section>
        </>
    )
}