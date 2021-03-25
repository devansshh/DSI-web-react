import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="header row">
        <div className="col-sm" data-aos="fade-right">
          <h1 className="py-2">
            Making the most of the <br />
            ever-growing <br />
            <span style={{ color: "#EE4248" }}> Information Technology</span>
          </h1>
          <p className="py-2">
            Managed by a team of professional experts with extensive experience
            and impressive track records
          </p>
          <button className="btn btn-group btn-lg read">Read More</button>
        </div>
        <div className="col-sm graphic">
          <img src="images/header.svg" className="group py-2"></img>
        </div>
      </div>
    </div>
  );
};
export default Header;
