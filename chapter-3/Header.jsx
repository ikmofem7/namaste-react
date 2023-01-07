import React from "react";
import logo from "./logo.png";
import user from "./user.jpg";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" height={30} />
      <input type="search" placeholder="Search ..." className="input" />
      <img src={user} alt="user" height={30} />
    </div>
  );
};

export default Header;
