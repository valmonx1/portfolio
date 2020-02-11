import React from "react";
import "./nav.css";

const NavBar = props => {
  return (
    <nav>
      <h3 className="logo">{props.title}</h3>
      <img src="" alt="burger" />
    </nav>
  );
};

export default NavBar;
