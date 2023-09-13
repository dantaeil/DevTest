import React from "react";
import "./Banner2.scss";

const Banner2 = () => {
  return (
    <div className="container-fluid banner2">
      <div className="row">
        <div className="col bannertitle">LOREM IPSUM</div>
      </div>
      <div className="row">
        <div className="col bannertext">
          Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna
          est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede
          ut ante, in viverra eros dictum nisl ligula.
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="bannerbutton">BUTTON BUTTON</button>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
