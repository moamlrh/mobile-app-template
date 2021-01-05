import { AppsSharp, Menu } from "@material-ui/icons";
import React, { useState } from "react";
import logo from "../../images/logo2.png";
import "./Navbar.scss";

const menuItems = [
  { id: "about", text: "About" },
  { id: "features", text: "Features" },
  { id: "pricing", text: "Pricing" },
  { id: "contact", text: "Contact" },
];

const Navbar = () => {
  const [menuItemsState, setMenuItemsState] = useState(false);
  const handleShowMenuItems = () => {
    setMenuItemsState(!menuItemsState);
  };
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className={`menu ${menuItemsState ? "showMenu" : "hideMenu"}`}>
        {menuItems.map((item) => (
          <div className="item" id={item.id}>
            <h3>{item.text}</h3>
          </div>
        ))}
        <button>
          <AppsSharp className="app-icon" />
          <span>Get App</span>
          <strong className="black-hover"></strong>
        </button>
      </div>
      <Menu className="icon-menu" onClick={handleShowMenuItems} />
    </div>
  );
};

export default Navbar;
