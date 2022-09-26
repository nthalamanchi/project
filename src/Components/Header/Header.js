import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";
import logo from "../Images/logo.png";
import { data } from "./Headerdata";

const Header = () => {
  return (
    <>
      <header className="header-header">
        <div className="header-container header-container-nav">
          <div className="logo">
            <Link to="/">
              <img className="header-img" src={logo} alt="project" />
            </Link>
          </div>
          <nav className="header-nav">
            {data.map((item, index) => (
              <Link className="text-link" to={item.end} key={index}>
                <span className="header-icon">{<item.icon />}</span>
                <span className="header-logo-info">{item.info}</span>
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
