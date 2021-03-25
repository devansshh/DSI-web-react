import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="container-fluid">
      <h1 className="caption"> Products and Services</h1>
      <div className="services row">
        <div className="col-sm" data-aos="fade-in">
          <img src="images/product.svg" className="py-4"></img>
          <h2 style={{ color: "#EE4248" }}>Our Product</h2>
          <p className="py-2">
            Our product is made on the base of our team’s careful research and
            analyses, ranging from internet based application.
          </p>
          <button className="btn btn-group read">Read More</button>
        </div>
        <div className="col-sm" data-aos="fade-in">
          <img src="images/service.svg" className="py-4"></img>
          <h2 style={{ color: "#EE4248" }}>Our Service</h2>
          <p className="py-2">
            DSI’s shared service solutions focus on the front-end based software
            development, designed specifically for the banking and financial
            sectors.
          </p>
          <button className="btn btn-group read">Read More</button>
        </div>
        <div className="col-sm" data-aos="fade-in">
          <img src="images/technology.svg" className="py-4"></img>
          <h2 style={{ color: "#EE4248" }}>Our Technology</h2>
          <p className="py-2">
            First JAVA, runs on more than 850 million personal computers
            worldwide, and on billions of devices worldwide, including mobile
            and TV devices.
          </p>
          <button className="btn btn-group read">Read More</button>
        </div>
      </div>
    </div>
  );
};
export default Services;
