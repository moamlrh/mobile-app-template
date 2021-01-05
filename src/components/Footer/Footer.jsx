import { Facebook, LinkedIn, Twitter } from "@material-ui/icons";
import React from "react";
import "./Footer.scss";
import logo from "../../images/logo2.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="logo" />
        <p> © 2020 Jevelin All Rights Reserved.</p>
        <div className="icons">
          <Facebook />
          <Twitter />
          <LinkedIn />
        </div>
      </div>
      <div className="footer-service">
        <h1>Service</h1>
        <h3>Financing</h3>
        <h3>Accounting</h3>
        <h3>Something</h3>
      </div>
      <div className="footer-about">
        <h1>About</h1>
        <h3>Vision</h3>
        <h3>Team</h3>
        <h3>Reviews</h3>
      </div>
      <div className="footer-contact">
        <h1>Contact</h1>
        <span>app@email.com</span>
        <span>+123 3456 789</span>
        <span>Mon.-Fr. 9AM-5PM</span>
      </div>
    </div>
  );
};

export default Footer;
