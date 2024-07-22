import React, { ReactNode } from "react";
import { DashboardSidebar } from "../DashboardSidebar/DashboardSidebar";
import user from "../../assets/User Image.png"
import "./DashboardLayout.css"

interface MyComponentProps {
  children?: ReactNode;
}

export const DashboardLayout: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <>
      <section className="dashboard_container">
        <DashboardSidebar/>
        <div className="dashboard_content">
          <div className="Dashboard_header">
            <div className="profile_notification_wrapper">
              <i className="bi bi-bell main_content_img"></i>

              <div className="user_wrapper">
                <img
                  src={user}
                  alt="Alternate Text"
                  className="user_image"
                />
                <div className="user_info">
                  <p className="user_name">Jide Brown</p>
                  <p className="user_id">STU1234</p>
                </div>
              </div>
            </div>
          </div>

          {children}
        </div>
      </section>
    </>
  );
};
