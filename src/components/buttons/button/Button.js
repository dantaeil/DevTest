import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <div className="container sbutton">
      <div className="row">
        <div className="col">
          <img src={props.icon} alt="Button" className="icon" />
        </div>
      </div>
      <div className="row">
        <div className="col buttontext">{props.text}</div>
      </div>
    </div>
  );
};

export default Button;
