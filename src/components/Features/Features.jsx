import React, { useEffect } from "react";
import "./Features.scss";
import girl from "../../images/girl-img.jpg";
import bg from "./img1.jpg";
import { Rating } from "@material-ui/lab";
import { PlayArrowOutlined, StarBorder } from "@material-ui/icons";

const Features = () => {
  useEffect(() => {
    const container = document.querySelector(".container-fixed");
    var x = 0;
    var lastScrollTop = 0;
    window.addEventListener("scroll", (e) => {
      var st = window.scrollY;
      if (lastScrollTop < st) {
        x -= 2;
        container.style.backgroundPosition = `0 ${x}px`;
      } else {
          x += 2;
        container.style.backgroundPosition = `0 ${x}px`;
      }
      lastScrollTop = st;
    });
  });
  return (
    <>
      <div className="features">
        <h1 className="title">Features</h1>
        <h1 className="subtitle">
          Watch our quick <br />
          introduction video
        </h1>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          tenetur, placeat, consequuntur, ullam repudiandae assumenda alias
          natus officiis mollitia nulla nemo excepturi atque culpa amet
          molestias provident fuga soluta non?
        </p>
      </div>
      <div className="container-fixed">
        <div className="fiexd-backgorund">
          <div className="left">
            <img src={girl} alt="girl-img.jpg" />
            <h3>Jane Doe</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              unde dolores voluptas eveniet laborum cumque ut nemo autem esse
              dignissimos?
            </p>
            <Rating value={5} emptyIcon={<StarBorder />} />
          </div>
          <div className="right">
            <div className="container">
              <PlayArrowOutlined className="icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
