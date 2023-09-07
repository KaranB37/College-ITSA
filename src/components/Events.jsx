import "../Component.css";
import img_1 from "../img/img_1.jpg"
import img_2 from "../img/img_2.jpg"
import img_3 from "../img/img_3.jpg"
import img_4 from "../img/img_4.jpg"
import img_5 from "../img/img_5.jpg"


import React from "react";

export default function Events() {
  return (
    <div className="card_main">

    <div className="row_1">
    <div className="card" style={{width: "18rem"}}>
      <img src={img_2} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">TechVenture</h5>
        <p className="card-text">
        ✨🔍 Crack the Code, Claim the Crown: ITSA Committee welcome you to the Ultimate Tech Treasure Hunt! 🔍✨
        </p>
        <div class="button-container">
        <a href="#" class="btn btn-primary">
          View Details
        </a>
      </div>
      </div>
    </div>

    <div className="card" style={{width: "18rem"}}>
    <img src={img_4} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">TechHire</h5>
      <p className="card-text">
      This is going to an information-based puzzle hunt, in which teams use their collective brainpower to solve clues
      </p>
      <div class="button-container">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSc7pIXSkoHkqjGCxEVr6cxdWihNzIOQ4iJqaJEy-ZsZL_oTaA/viewform" target="_blank" class="btn btn-primary">
        Participate
      </a>
    </div>
    </div>
  </div>
       
  <div className="card" style={{width: "18rem"}}>
  <img src={img_5} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Industrail Visit</h5>
    <p className="card-text">
    ✨Take a break, book your seat, fall in love with the place, return with tons of memories of one lifetime trip in college.✨
    </p>
    <div class="button-container">
    <a href="https://forms.gle/QzZNuSEnzbmNSKup7" target="_blank" class="btn btn-primary">
      Participate
    </a>
    <a href="https://drive.google.com/file/d/1q5K_Xv7lZQ8kJ_Ckblnc-tk2Nc-RMjeV/view?usp=drive_link"  target="_blank" class="btn btn-primary">
      View Details
    </a>
  </div>
  </div>
</div>
     

        </div>
        <div className="row_2">
       
        <div className="card" style={{width: "18rem"}}>
        <img src={img_1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">TECHNICAL ARTICLE COMPETITION</h5>
          <p className="card-text">
          🔥A great opportunity to present your article based on your projects and research🔥
          </p>
          <div class="button-container">
  
          <a href="#" class="btn btn-primary">
            View Details
          </a>
        </div>
        </div>
      </div>
      <div className="card" style={{width: "18rem"}}>
      <img src={img_3} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Teacher's Day</h5>
        <p className="card-text">
        ✨📚 ITSA celebrated this Teacher's Day in the most unique way possible!✨📚
        </p>
        <div class="button-container">
     
        <a href="#" class="btn btn-primary">
          View Details
        </a>
      </div>
      </div>
    </div>

        </div>
    </div>
  );
}
