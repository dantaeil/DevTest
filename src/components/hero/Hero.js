import React from "react";
import heroimg from "../../assets/hero.jpg";
import "./Hero.scss";

const Hero = () => {
  return <img src={heroimg} alt="HeroImg" className="heroimg" />;
};

export default Hero;
