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

  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


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
