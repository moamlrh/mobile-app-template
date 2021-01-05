import React, { useEffect } from "react";
import "./Pricing.scss";

const pricing = [
  {
    class: "free",
    subtitle: "Basic plan",
    title: "Free",
    type: "/monthly",
    featuers: [
      "Unlimited plant library",
      "Calendar",
      "Schedule alerts",
      "Up to 10 plants",
      "-",
    ],
  },
  {
    class: "premium",
    subtitle: "Premium plan",
    title: "$10",
    type: "/monthly",
    featuers: [
      "Unlimited plant library",
      "Calendar",
      "Schedule alerts",
      "Up to 10 plants",
      "20GB gallery",
    ],
  },
];

const Pricing = () => {
  useEffect(() => {
    const pricing = document.querySelector(".pricing");
    var x = 0;
    var lastScrollTop = 0;
    window.addEventListener("scroll", (e) => {
      var st = window.scrollY;
      if (lastScrollTop < st) {
        x -= 2;
        pricing.style.backgroundPosition = `0 ${x}px`;
      } else {
        x += 2;
        pricing.style.backgroundPosition = `0 ${x}px`;
      }
      lastScrollTop = st;
    });
  });
  return (
    <div className="pricing">
      <div className="info">
        <span>Pricing</span>
        <h1>Choose what suits your needs the best</h1>
      </div>
      <div className="pricing-card">
        {pricing.map((item) => (
          <div className={`card ${item.class}`}>
            <strong>{item.subtitle}</strong>
            <h1>{item.title}</h1>
            <span>{item.type}</span>
            <button>
              <strong className='str'></strong>
              <span className='spn'>Get Started</span>
            </button>
            <div className="featuers">
              {item.featuers.map((featuer) => (
                <h4>{featuer}</h4>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
