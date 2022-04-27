import React from "react";
import "./content.scss";

import img from "../../assets/13.3.png";

function Content() {
  return (
    <>
      <div className="ctn">
        <img className="img-content" src={img} />
      </div>
    </>
  );
}

export default Content;
