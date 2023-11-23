import React from "react";
import HeroLogo from "./img/Group 77.png";

export default function Hero() {
  return (
    <div>
      <img src={HeroLogo} alt="hero" className="hero-1"></img>
      <h1 className="online-exp">Online Experiences</h1>
      <p className="online-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
