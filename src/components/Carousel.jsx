import React from "react";
import "../Component.css";
import file from '../img/file2.mp4';
import About from "./About";
import Contact from "./Contact";
import { Link
 } from "react-router-dom";
export default function Carousel() {
  return (
    <>
      <div className="div_vid">
        <video  className="videoTag" autoPlay loop muted>
          <source src={file} type="video/mp4" />
        </video>
        <div className="carousel-content">
        <h4>Vasantdada Patil Prathisthan's</h4>
        <h4>College Of Engineering</h4>
        <h4>IT Department Presents</h4>
        <h1 className="car_head">ITSA</h1>
        <button type="button" className="btn btn-outline-info">
          <Link className="nav-link" style={{color: "white",fontWeight:"bold"}} to="/card">
                Know More
          </Link></button>
      </div>
      </div>
      <About/>
      <Contact/>
    </>
  );
}
