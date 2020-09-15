import React from "react";
import header__logo from "../images/header__logo.svg";

const Header = (props) => {
  return (
    <header className="header">
      <img src={header__logo} alt="Место" className="header__logo" />
    </header>
  );
};
export default Header;
