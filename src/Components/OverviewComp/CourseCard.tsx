import React from "react";
import "./OverviewComp.css"


interface ICourseData{
    course?:string;
    progress?:string;
    image?:string
}

interface IProps{
    courseInfo:ICourseData
}


export const CourseCard:React.FC<IProps> = ({courseInfo}) => {

    const {course,progress,image}=courseInfo;
  return (
    <>
      <div className="card_crs">
        <div className="course-subwrapper">
          <img src={image} alt="" className="courses_image" />
          <div className="course_progress_container">
            <div
              className="course-progress-svg-div"
              style={{ margin: 0, padding: 0 }}
            >
              <p
                style={{
                  margin: 0,
                  padding: 0,
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#333333",
                }}
              >
              {course}
              </p>
              <svg
                className="course-progress-svg-element"
                width="100"
                height="100"
              >
                <circle
                  className={progress==="50%"?"course-progress-bg":"course-progress-bg_two"}
                  cx="50"
                  cy="50"
                  r="30"
                ></circle>
                <circle
                  className={progress==="50%"?"course-progress-bar":"course-progress-bar_2"}
                  cx="50"
                  cy="50"
                  r="30"
                ></circle>
              </svg>
              <div className="course-progress-text">{progress}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
