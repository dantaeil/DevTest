import React from "react";
import img1 from "../../assets/img-1.jpg";
import "./Post.scss";

const Post = () => {
  return (
    <div className="container-fluid">
      <div className="row no-gutters">
        <div className="col-6">
          <div className="container post">
            <div className="row">
              <div className="col title">LOREM IPSUM</div>
            </div>
            <div className="row">
              <div className="col text">
                Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl
                magna est sociis, neque in odio vel, sit lobortis erat. Fugit
                quam, ut pede ut ante, in viverra eros dictum nisl ligula, lacus
                est vehicula donec. Quam in ac quam. Duis et, non arcu imperdiet
                sem tellus suspendisse. Condimentum non aliquet sed, quisque
                risus vitae semper duis feugiat .
              </div>
            </div>
            <div className="row link">
              <div className="col">&gt;LoremIpsum</div>
            </div>
          </div>
        </div>
        <div className="col-6 img"></div>
      </div>
    </div>
  );
};

export default Post;
