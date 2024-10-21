import React from "react";
import { SidebarData } from "../../lib/utilities"; // Ensure this path is correct

const NavLinks: React.FC = () => {
  return (
    <nav className="nav-items">
      {SidebarData.map((item, index) => (
        <a key={index} href={`#${item.path}`} className={item.cName}>
          <span className="link_text">{item.name}</span>
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;
