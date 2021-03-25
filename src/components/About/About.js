import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container-fluid">
      <div className="about row">
        <div className="graphic col-sm">
          <img
            src="images/about.png"
            className="animated bounce infinite group"
          ></img>
        </div>
        <div className="col-sm" data-aos="fade-in">
          <h2 className="py-2">
            Welcome to{" "}
            <span style={{ color: "#EE4248" }}>
              Dwidasa Samsara Indonesia (DSI)
            </span>
          </h2>
          <p>
            Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by
            the founders, who each of them has a common end objective to
            innovate new creations by making the most of the ever-growing
            information technology through{" "}
            <span style={{ color: "#EE4248" }}>DSI</span>’s distinct front-end
            based application concept.{" "}
          </p>
          <p>
            Managed by a team of professional experts with extensive experience
            and impressive track records,{" "}
            <span style={{ color: "#EE4248" }}>DSI</span> believes that
            continuous improvements and innovations assure your business to run
            effectively and efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
