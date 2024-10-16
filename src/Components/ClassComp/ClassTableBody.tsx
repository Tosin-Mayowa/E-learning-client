import React from "react";
import './ClassComp.css';

interface IClassTableBody {
    id?: number,
    course?: string,
    topic?: string,
    image?: string,
    instructor?: string,
    nextclass?: string,
}

export const ClassTableBody: React.FC<IClassTableBody> = ({ course, topic, image, instructor, nextclass}): React.JSX.Element => {
    return (
        <>
             <tr>
                            <td>{course}</td>
                            <td>{topic}</td>
                            <td>
                                <img src={image} alt="" />{instructor}</td>
                            <td>{nextclass}</td>
                        </tr>
        </>
    )
}