import React from "react";
import "./Notified.scss";
import img from "../../images/notified.png";

const Notified = () => {
  return (
    <div className="notified">
      <div className="left">
        <img src={img} alt="" />
      </div>
      <div className="right">
        <span>Never forget</span>
        <h1>
          Get notified <br /> whenever you need
          <br /> to attend your plants
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          vulputate quam ut mi dictum, et euismod sapien condimentum.
        </p>
      </div>
    </div>
  );
};

export default Notified;
