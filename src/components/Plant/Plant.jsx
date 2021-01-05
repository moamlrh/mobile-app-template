import React from "react";
import "./Plant.scss";
import img from '../../images/plant.png'

const Plant = () => {
  return (
    <div className="plant">
      <div className="left">
        <img src={img} alt=""/>
      </div>
      <div className="right">
        <span>More than 10k plants</span>
        <h1>Endless plant library to choose from</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          vulputate quam ut mi dictum, et euismod sapien condimentum.
        </p>
      </div>
    </div>
  );
};

export default Plant;
