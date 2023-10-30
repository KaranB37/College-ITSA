import React from "react";
import "../Styles/SplashScreen.css"; // Import the CSS file
import AnimatedText from "./AnimatedText";
// import itsa from '../img/itsa2.png';

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <AnimatedText />
    </div>
  );
};

export default SplashScreen;
