import React from "react";
import "../Component.css";
import "./Carousel.css";
import About from "./About";
import Contact from "./Contact";
import file from '../img/file2.mp4';
import { Link } from "react-router-dom";

import imageAbove from '../img/itsa.png';
import imageBelow from '../img/vppcoe.png';

export default function Carousel() {
  return (
    <>
      <div className="div_vid">
        <video className="videoTag" autoPlay loop muted>
          <source src={file} type="video/mp4" />
        </video>
        <div className="carousel-content">
        
        
        
          
          <div className="vasantdada-container">
            <div className="circle-image-left">
              <img src={imageBelow} alt="..." />
            </div>
            
            <div className="vasantdada-text">
              <h4>Vasantdada Patil Prathisthan's</h4>
              <h4>College Of Engineering</h4>
              <h4>IT Department Presents</h4>
              <h1 className="car_head" >ITSA</h1>
              
              <button type="button" className="btn btn-outline-info">
                <Link className="nav-link" style={{color: "white",fontWeight:"bold"}} to="/card">
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
