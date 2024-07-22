import React from "react";
import Icon from "../../assets/Icon.png";
import Icon1 from "../../assets/Icon1.png";
import Icon2 from "../../assets/Icon2.png";
import { OverviewChild } from "./OverviewChild";
import Image1 from "../../assets/Image (1).png";
import Image2 from "../../assets/Image.png";
import project1 from "../../assets/Image (1).png";
import project2 from "../../assets/Image (2).png";
import "./OverviewComp.css";
import { CourseCard } from "./CourseCard";
import { ProjectCard } from "./ProjectCard";

export const studentsReport = [
  {
    id: 1,
    image: Icon,
    completionCount: "7 / 12",
    action: "Assignments Submitted",
    remark: "Please submit pending assignments",
  },
  {
    id: 2,
    image: Icon1,
    completionCount: "10 / 10",
    action: "classes attended",
    remark: "Keep it up!!",
  },
  {
    id: 3,
    image: Icon2,
    completionCount: "7 / 12",
    action: "Assignments Submitted",
    remark: "Please submit pending assignments",
  },
];

export const courseDetails = [
  {
    id: 1,
    course: "Product Design",
    progress: "50%",
    image: Image1,
  },
  {
    id: 2,
    course: "Frontend Web Dev ",
    progress: "30%",
    image: Image2,
  },
];

export const projectDetails = [
  {
    id: 1,
    image: project1,
    name: "Food Delivery App",
    course: "Product Design",
    progressLevel: "50%",
  },
  {
    id: 2,
    image: project2,
    name: "Hotel Booking Website",
    course: "Frontend Web Development",
    progressLevel: "30%",
  },
];

export const OverviewComp: React.FC = (): React.JSX.Element => {
  return (
    <>
      <div className="dashboard_main_content">
        <div className="content_wrapper">
          <div className="overview_right">
            <div className="activity">
              <p className="student_report">Student Report</p>
              <div className="report_card">
                {studentsReport?.map((student) => (
                  <OverviewChild key={student.id} {...student} />
                ))}
              </div>
            </div>

            <div className="courses">
              <div className="course_arrow_wrapper">
                <p className="student_courses">My Courses</p>
                <div className="course_arrow">
                  <i
                    className="bi bi-caret-left"
                    style={{ cursor: "pointer", color: "#333" }}
                  ></i>
                  <i
                    className="bi bi-caret-right"
                    style={{ cursor: "pointer", color: "#333" }}
                  ></i>
                </div>
              </div>
              <div className="courses_card">
                {courseDetails?.map((courseInfo) => (
                  <CourseCard key={courseInfo.id} courseInfo={courseInfo} />
                ))}
              </div>
            </div>

            <div className="project">
              <div className="project_arrow_wrapper">
                <p className="student_project">Projects</p>
                <div className="project_arrow">
                  <i
                    className="bi bi-caret-left"
                    style={{ cursor: "pointer", color: "#333" }}
                  ></i>
                  <i
                    className="bi bi-caret-right"
                    style={{ cursor: "pointer", color: "#333" }}
                  ></i>
                </div>
              </div>
              <div className="project_card">
                {projectDetails?.map((projectInfo) => (
                  <ProjectCard key={projectInfo.id} {...projectInfo} />
                ))}
              </div>
            </div>
          </div>
          <div className="event_side"></div>
        </div>
      </div>
    </>
  );
};
