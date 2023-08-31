import React, { useState } from "react";
import "../Component.css";
import "./Carousel.css";
import About from "./About";
import Contact from "./Contact";
import file from '../img/file2.mp4';
import { Link } from "react-router-dom";

import imageAbove from '../img/itsa.png';
import imageBelow from '../img/vppcoe.png';
import { useEffect } from 'react';

export default function Carousel() {

  const [splashScreenDone, setSplashScreenDone] = useState(false);

  useEffect(() => {
    // Simulate some asynchronous operation
    setTimeout(() => {
      setSplashScreenDone(true);
    }, 500); // Replace with your actual loading logic
  }, []);

  return (
    <>
    <div className={`div_vid ${splashScreenDone ? "splash-screen-done" : ""}`}>
    <video className="videoTag" autoPlay loop muted>
      <source src={file} type="video/mp4" />
    </video>
    <div className={`carousel-content ${splashScreenDone ? "splash-screen-done" : ""}`}>
      <div className="vasantdada-container">
        <div className="circle-image-left">
          <img src={imageBelow} alt="..." />
        </div>
        
        <div className="vasantdada-text">
          <h4>Vasantdada Patil Prathisthan's</h4>
          <h4>College Of Engineering</h4>
          <h4>IT Department Presents</h4>
          <h1 className="car_head">ITSA</h1>
         
          <button type="button" className="btn btn-outline-info">
            <Link className="nav-link" style={{ color: "white", fontWeight: "bold" }} to="/card">
              Know More
            </Link>
          </button>
        </div>
        
        <div className="circle-image-right">
          <img src={imageAbove} alt=".." />
        </div>
      </div>
    </div>
  </div>
  
  <About />
  <Contact />
    </>
  );
}
