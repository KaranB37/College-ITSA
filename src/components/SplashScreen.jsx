import React from 'react';
import './SplashScreen.css'; // Import the CSS file
import AnimatedText from './AnimatedText';
import itsa from '../img/itsa2.png';
const SplashScreen = () => {
  return (
    <div className="splash-screen">
  <img src={itsa} alt="..." />
    <AnimatedText />
    </div>
  );
};

export default SplashScreen;