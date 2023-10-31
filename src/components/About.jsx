import React from "react";
import "../Styles/About.css";

import about123 from "../img/about123.png";

const About = () => {
  return (
    <div className="about-container-1">
      <div
        className="background-image-about"
        style={{ backgroundImage: `url(${about123})` }}
      >
        <div className="bubble5"></div>
        <div className="bubble6"></div>
        <div className="center-about">
          <div className="content-container-about">
            <h2 className="title-about">About Us</h2>
            <p className="description-about">
              We at ITSA, through a dynamic blend of technical seminars,
              workshops, and cutting-edge events, aim to cultivate a vibrant
              learning community that promotes technical skills, knowledge
              sharing, and hands-on experiences. Join us on this journey as we
              empower and equip fellow IT enthusiasts to thrive in the
              ever-evolving world of technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
