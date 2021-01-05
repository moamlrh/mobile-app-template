import React from "react";
import "./Schedule.scss";
import { CalendarToday, NotificationsNone } from "@material-ui/icons";
import img from "../../images/Schedule.png";

const Schedule = () => {
  return (
    <div className="schedule">
      <div className="right">
        <span>Advanced planner</span>
        <h1>Schedule your plants needs</h1>
        <div className="icons">
          <div className="notification-icon">
            <NotificationsNone className="icon-noti" />
            <h3>
              Get notified when your
              <br /> plants cycles are starting
            </h3>
          </div>
          <div className="schedule-icon">
            <CalendarToday className="icon-sch" />
            <h3>
              Set separate reminders
              <br /> for different seasons
            </h3>
          </div>
        </div>
      </div>
      <div className="left">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Schedule;
