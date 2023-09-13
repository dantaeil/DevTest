import { Carousel } from "bootstrap";
import React from "react";
import "./Feedback.scss";

const Feedback = () => {
  return (
    <div className="container feedback">
      <div className="row">
        <div className="col">
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
        <div className="col">CAROUSEl</div>
      </div>
    </div>
  );
};

export default Feedback;
