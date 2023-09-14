import React, { useEffect } from "react";
import "./Hero.scss";
import logowhite from "../../assets/logo-white.svg";
import $ from "jquery";

const Hero = () => {
  useEffect(() => {
    $(".welcometo").addClass("show");
    $(".rooster").addClass("show");
  });
  return (
    <div className="container-fluid hero">
      <div className="row">
        <div className="col offset-md-1">
          <img src={logowhite} alt="White Logo" className="logowhite" />
        </div>
      </div>
      <div className="content">
        <div className="row justify-content-center">
          <div className="col-md-auto align-self-center">
            <div className="welcometo">WELCOME TO</div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-auto">
            <div className="rooster">Rooster Grin</div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-auto">
            <button class="button">BUTTON BUTTON</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
