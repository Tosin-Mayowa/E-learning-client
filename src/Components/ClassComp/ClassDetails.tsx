import React from "react";
import './ClassComp.css';

interface IClassDetails {
    id?: number,
    image?: string,
    title?: string,
    topic?: string,
}



export const ClassDetails: React.FC<IClassDetails> = ({ image, title, topic }): React.JSX.Element => {
    return (
        <>
        <div className="introduction-to-wireframes">
                        <div className="introduction-to-wireframes-image">
                            <img src={image} alt="" />
                        </div>
                        <div className="gap">
                            <div className="introduction-to-wireframes-topic">
                                <p className="wireframes-topic">{title}</p>
                                <p className="wireframes-sub-topic">{topic}</p>
                            </div>
                            <div className="wireframes-check-double-line">
                                <i></i>
                            </div>
                        </div>
                    </div>
        
        </>
    )
} 