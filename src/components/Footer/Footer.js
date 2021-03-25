import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="row px-5 pt-5 mx-auto" style={{ alignItems: "center" }}>
        <div className="col-sm py-2">
          <img src="images/logo.svg"></img>
          <h4>PT Dwidasa Samsara Indonesia</h4>
          <p>
            Ruko Jalur Sutera 29A No. 53 Alam Sutera Serpong, Tangerang 15323
          </p>
        </div>
        <div className="col-sm py-4">
          <h3>Contact</h3>
          Phone : +62.21.5314.1135
          <br />
          Fax : +62.21.5314.113
          <br />
          Email : community@dwidasa.com
          <br />
        </div>
        <div className="col-sm py-4">
          <img src="images/image1.png"></img>
          <img src="images/image2.png"></img>
          <img src="images/image3.png"></img>
          <img src="images/image4.png"></img>
          <img src="images/image6.png"></img>
          <img src="images/image5.png"></img>
        </div>
      </div>
      <div className="copyright py-4">
        Copyright © 2015 - Dwidasa Samsara Indonesia
      </div>
    </div>
  );
};
export default Footer;
