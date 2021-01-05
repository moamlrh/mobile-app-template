import { ArrowDownward } from "@material-ui/icons";
import React from "react";
import "./About.scss";
import image from "../../images/img1.png";

const About = () => {
  return (
    <div className="about">
      <div className="left">
        <p>New app on the block</p>
        <h1>
          Jevelin app will never <br />
          again let you worry <br /> about your plants
        </h1>
        <button>
          <ArrowDownward className='icon'/>
          <span>Find out more</span>
          <strong></strong>
        </button>
      </div>
      <div className="right">
        <img src={image} alt="the img for mobile" />
      </div>
    </div>
  );
};

export default About;
