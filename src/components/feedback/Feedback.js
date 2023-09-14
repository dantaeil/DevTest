import React from "react";
import "./Feedback.scss";
import Carousel from "./carousel/Carousel";

const Feedback = () => {
  return (
    <div className="container feedback">
      <div className="row">
        <div className="col-lg-5 visible-xs">
          <div className="container">
            <div className="row">
              <div className="col caption">
                LOREM IPSUM
                <br />
                DOLOR SIT AMET
              </div>
            </div>
            <div className="row">
              <div className="col">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
