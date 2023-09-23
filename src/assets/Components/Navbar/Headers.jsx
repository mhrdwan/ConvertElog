import React from "react";
import banner from "../../Img/banner.jpg";
import "./Headers.css";

function Headers() {
  return (
    <div className="header mt-5">
      {/* You can use an empty div for the background image */}
      <div
        className="background-image"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      {/* Other content goes here */}
    </div>
  );
}

export default Headers;
