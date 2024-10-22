import React from "react";
import { useState } from "react";
import hamburger from "../../assets/landing-page/Menu Button.png";
import Sidebar from "./Sidebar";

const Mobile_Menu: React.FC = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggleSideBar = () => {
    setisOpen((isOpen) => !isOpen);
  };
  return (
    <>
      <div className="hamburger_menu" onClick={toggleSideBar}>
        <img src={hamburger} alt="mobile menu" />
      </div>
      {/* {isOpen && <Sidebar closeSidebar={toggleSideBar} isOpen={isOpen} />} */}
      <Sidebar closeSidebar={toggleSideBar} isOpen={isOpen} />
    </>
  );
};

export default Mobile_Menu;
