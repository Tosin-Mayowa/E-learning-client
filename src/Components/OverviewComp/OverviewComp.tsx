import React from "react";
import { OverviewChild } from "./OverviewChild";
import "./OverviewComp.css";
import { CourseCard } from "./CourseCard";
import { ProjectCard } from "./ProjectCard";
import {studentsReport,courseDetails,projectDetails} from "../../lib/utilities"


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
