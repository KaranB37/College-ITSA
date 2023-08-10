import "../Component.css";
import img_1 from "../img/img_1.jpg"
import img_2 from "../img/img_2.jpg"
import img_3 from "../img/img_3.jpg"
import img_4 from "../img/img_4.jpg"

import React from "react";

export default function Card() {
  return (
    <div className="card_main">
    <div className="card-none">
      <span>
        No Events To Participate
      </span>
      <span>
       Wait For Events To Display Here
      </span>
    </div> 
    <div className="row_1">
    <div className="card" style={{width: "18rem"}}>
    <img src={img_1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Project Competition</h5>
          <p className="card-text">
          This event is planned to provide a platform for the students to exhibit their innovative project skill set.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc7pIXSkoHkqjGCxEVr6cxdWihNzIOQ4iJqaJEy-ZsZL_oTaA/viewform" target="_blank" rel="noreferrer" className="btn btn-primary">
            Participate
          </a>
        </div>
      </div>
        <div className="card" style={{width: "18rem"}}>
        <img src={img_1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Project Competition</h5>
          <p className="card-text">
          This event is planned to provide a platform for the students to exhibit their innovative project skill set.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc7pIXSkoHkqjGCxEVr6cxdWihNzIOQ4iJqaJEy-ZsZL_oTaA/viewform" target="_blank" rel="noreferrer" className="btn btn-primary">
            Participate
          </a>
        </div>
      </div>
      <div className="card" style={{width: "18rem"}}>
        <img src={img_2} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Coding Competition</h5>
          <p className="card-text">
          Starting the journey of programming and competitive coding, every coder wants to test himself/herself in the waters.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdlSNkXTl32eJ401IoWVSac_QHN-_O1vyfouKKE2OdLdkNqXw/viewform" target="_blank" rel="noreferrer" className="btn btn-primary">
            Participate
          </a>
        </div>
      </div>
        </div>
        <div className="row_2">
        <div className="card" style={{width: "18rem"}}>
        <img src={img_3} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Tech Hunt</h5>
          <p className="card-text">
          This is going to an information-based puzzle hunt, in which teams use their collective brainpower to solve clues
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScpH-Oy73a6WN9S1T-cohWX_gKpSYXiRSrqCDYGTkYueq0iWA/viewform" target="_blank" rel="noreferrer" className="btn btn-primary">
            Participate
          </a>
        </div>
      </div>
      <div className="card" style={{width: "18rem"}}>
        <img src={img_4} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Web development</h5>
          <p className="card-text">
          If you are a web developer and looking for some competitions to run in the race of skill development, then you are at the right place.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScUZ1cnW3xtGs5zoSRuemp6d9EkdiPFj6fThbSshvVYuoDCGw/viewform" target="_blank" rel="noreferrer" className="btn btn-primary">
            Participate
          </a>
        </div>
      </div>
      <div className="card" style={{width: "18rem"}}>
        <img src={img_4} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Web development</h5>
          <p className="card-text">
          If you are a web developer and looking for some competitions to run in the race of skill development, then you are at the right place.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScUZ1cnW3xtGs5zoSRuemp6d9EkdiPFj6fThbSshvVYuoDCGw/viewform" target="_blank" rel="noreferrer" className="btn btn-primary">
            Participate
          </a>
        </div>
      </div>
        </div>



    </div>
  );
}
