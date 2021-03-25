import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="stick">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
          <img src="images/logo.svg"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse mr-auto"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Technology
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Placeholder
                </a>
                <a className="dropdown-item" href="#">
                  Placeholder
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Placeholder
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Client
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Placeholder
                </a>
                <a className="dropdown-item" href="#">
                  Placeholder
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Placeholder
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Partner
              </a>
            </li>
            <li className="nav-item icon pl-5">
              <a className="nav-link" href="#">
                <img src="images/Union.png"></img>
              </a>
            </li>
            <li className="nav-item icon">
              <a className="nav-link" href="#">
                <img src="images/mail.png"></img>
              </a>
            </li>
            <li className="nav-item icon">
              <a className="nav-link" href="#">
                <img src="images/shuffle.png"></img>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
