import React from "react";
import { RiCloseLargeLine } from "react-icons/ri";

interface SidebarProps {
  closeSidebar: () => void;
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ closeSidebar, isOpen }) => {
  return (
    <>
      <div className={`side_bar ${isOpen ? "open" : ""}`}>
        <div className="side_bar_header">
          <button className="close_button" onClick={closeSidebar}>
            <RiCloseLargeLine />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
