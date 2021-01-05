import { ChatBubbleOutline } from "@material-ui/icons";
import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="info">
        <span>Reach us</span>
        <h1>Do not hesitate to ask us any questions</h1>
        <button>
          <strong className="str"></strong>
          <ChatBubbleOutline className="icon" />
          <span>Contact us</span>
        </button>
      </div>
    </div>
  );
};

export default Contact;
