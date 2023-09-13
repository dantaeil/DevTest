import React from "react";
import "./Buttons.scss";
import Button from "./button/Button";
import expertise from "../../assets/home-expertise.svg";
import hygiene from "../../assets/home-hygiene.svg";
import lab from "../../assets/home-lab.svg";
import retention from "../../assets/home-retention.svg";

const Buttons = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col offset-md-1 buttonspost">
          <div className="container">
            <div className="row">
              <div className="col buttonstitle">
                LOREM IPSUM
                <br />
                DOLOR SIT AMET
              </div>
            </div>
            <div className="row">
              <div className="col buttonstext">
                Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl
                magna est sociis, neque in odio vel, sit lobortis erat. Fugit
                quam, ut pede ut ante, in viverra eros dictum nisl ligula.
              </div>
            </div>
            <div className="row">
              <div className="col buttonslink">&gt; Lorem Ipsum</div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="container buttonscontainer">
            <div className="row">
              <div className="col">
                <Button icon={expertise} text="LOREM" />
              </div>
              <div className="col">
                <Button icon={hygiene} text="LOREM IPSUM" />
              </div>
            </div>
            <div className="row buttonssecond">
              <div className="col">
                <Button icon={lab} text="LOREM IPSUM" />
              </div>
              <div className="col">
                <Button icon={retention} text="LOREM" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
