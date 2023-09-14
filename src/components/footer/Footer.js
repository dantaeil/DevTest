import React from "react";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="container footer">
      <div className="row justify-content-center">
        <div className="col-auto align-self-center followus">Follow Us:</div>
      </div>
      <div className="row justify-content-center">
        <div className="col-auto align-self-center">
          <a href="https://www.instagram.com">
            <img src={instagram} alt="Instagram" className="img" />
          </a>
          <a href="https://www.facebook.com">
            <img src={facebook} alt="Facebook" className="img" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
