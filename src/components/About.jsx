import React from "react";
import "../Styles/About.css";

import about123 from "../img/about123.png";

const About = () => {
  return (
    <div
      className="about-container"
      style={{
        backgroundImage: `url(${about123})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="center flex flex-col md:flex-row justify-center items-center h-screen">
        <div className="md:w-1/2 p-8">
          <h2 className="text-4xl flex items-center justify-center md:text-8xl font-bold mb-4 text-white">
            About Us
          </h2>
          <div className="light-saber"></div>
          <p className="flex items-center justify-center text-white text-lg md:text-xl parallax-content">
            We at ITSA, Through a dynamic blend of technical seminars,
            workshops, and cutting-edge events. Our mission is to cultivate a
            vibrant learning community that promotes technical skills, knowledge
            sharing, and hands-on experiences. Join us on this journey as we
            empower and equip fellow IT enthusiasts to thrive in the
            ever-evolving world of technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
