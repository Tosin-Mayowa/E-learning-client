import React from "react";
import './TestExamComp.css';
import { TestExamDetails } from "./TestExamDetails";
import { ExamDetails } from "./ExamDetails";

const testExamDetails = [
    {
        id: 1,
        assessment: 'First Continuous Assessment Test',
        course: 'Frontend Web Development',
        duration: 'Duration',
        time: '1hr 45min'
    },

    {
        id: 2,
        assessment: 'First Continuous Assessment Test',
        course: 'Product Design',
        duration: 'Duration',
        time: '1hr 30min'
    }


]

const examDetails = [
    {
        id: 1,
        assessment: 'Final Exam',
        course: 'Frontend Web Development',
        duration: 'Duration',
        time: '1hr 30min'
    },

    {
        id: 2,
        assessment: 'Final Exam',
        course: 'Product Design Development',
        duration: 'Duration',
        time: '1hr 30min',
    },
]

export const TestExamComp: React.FC = (): React.JSX.Element => {


    return (
        <>
            <section>
                <div className="heading">
                    <p>Test & Exams</p>
                </div>
                <div className="tests">
                    <div className="tests-heading">
                        <div>
                            <p>Tests</p>
                        </div> 
                        <div className="arrow-up">
                            <i></i>
                        </div>
                    </div>
                    {
                        testExamDetails?.map(item=> <TestExamDetails key={item.id} {...item}/>)
                    }
                </div>
                <div className="exams">
                    <div className="exam-heading">
                        <div>
                            <p>Exams</p>
                        </div>
                        <div className="arrow-up">
                            <i></i>
                        </div>
                    </div>
                    {
                        examDetails?.map(item=> <ExamDetails key={item.id} {...item}/>)
                    }
                    </div>
            </section>
        </>
    )
}
