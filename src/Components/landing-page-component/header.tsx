import React from "react";
import LoginButton from "./LoginButton";
import Logo from "./Logo";
import Mobile_Menu from "./MobileMenu";
import NavLinks from "./NavLinks";

const NavBar: React.FC = () => {
  return (
    <>
      <header className="nav-bar">
        <Logo />
        <NavLinks />
        <LoginButton />
        <Mobile_Menu />
      </header>
    </>
  );
};

export default NavBar;
