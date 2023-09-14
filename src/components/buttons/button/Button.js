import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <div className="container sbutton">
      <div className="row justify-content-center">
        <div className="col-md-auto">
          <div className="iconcontainer">
            <img src={props.icon} alt="Button" className="icon" />
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-auto">
          <div className="buttontext">{props.text}</div>
        </div>
      </div>
    </div>
  );
};

export default Button;
