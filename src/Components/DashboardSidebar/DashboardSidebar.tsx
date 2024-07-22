import React from "react";
import "./DashboardSidebar.css"
import Logo from "../../assets/Globaltech_logo.png"



export const DashboardSidebar: React.FC = () => {
  return (
  <>
    <div className="dashboard_side_bar">
      <div className="logo_nav_link">
        <img src={Logo}className="Dashboard_logo" />
        <div className="dashboard_nav">
          <ul className="dashboard_nav_list">
            <li className="dashboard_nav_item">
              <i className="bi bi-house-dash-fill icon"></i>

              <a
                className="dashboard_link"
                asp-area=""
                asp-controller="Overview"
                asp-action="Index"
              >
                Overview
              </a>
            </li>
            <li className="dashboard_nav_item">
              <i className="bi bi-easel2 icon"></i>

              <a
                className="dashboard_link"
                asp-area=""
                asp-controller="classNamees"
                asp-action="Index"
              >
                classNamees
              </a>
            </li>
            <li className="dashboard_nav_item">
              <i className="bi bi-backpack4 icon"></i>
              <a
                className="dashboard_link"
                asp-area=""
                asp-controller="Course"
                asp-action="Index"
              >
                Courses
              </a>
            </li>
            <li className="dashboard_nav_item">
              <i className="bi bi-clipboard2-data icon"></i>
              <a
                className="dashboard_link"
                asp-area=""
                asp-controller="Dashboard"
                asp-action="Index"
              >
                Tests & Exams
              </a>
            </li>
            <li className="dashboard_nav_item">
              <i className="bi bi-kanban-fill icon"></i>
              <a
                className="dashboard_link"
                asp-area=""
                asp-controller="Dashboard"
                asp-action="Index"
              >
                Projects
              </a>
            </li>
            <li className="dashboard_nav_item">
              <i className="bi bi-megaphone icon"></i>
              <a
                className="dashboard_link"
                asp-area=""
                asp-controller="Dashboard"
                asp-action="Index"
              >
                Announcements
              </a>
            </li>
            <li className="dashboard_nav_item">
              <i className="bi bi-backpack4 icon"></i>
              <a
                className="dashboard_link"
                asp-area=""
                asp-controller="Dashboard"
                asp-action="Index"
              >
                Results
              </a>
            </li>
            <li className="dashboard_nav_item">
              <i className="bi bi-box-arrow-right icon"></i>
              <a
                className="dashboard_link"
                asp-area=""
                asp-controller="Dashboard"
                asp-action="Index"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
  );
};
