import React from "react";
import "./app.scss";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Features from "./components/Features/Features";
import Plant from "./components/Plant/Plant";
import Schedule from "./components/Schedule/Schedule";
import Notified from "./components/Notified/Notified";
import Pricing from "./components/Pricing/Pricing";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Features />
      <Plant />
      <Schedule />
      <Notified />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
