import React from "react";
import "./Feedback.scss";
import Carousel from "./carousel/Carousel";

const Feedback = () => {
  return (
    <div className="container feedback">
      <div className="row">
        <div className="col-5">
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
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-7">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
