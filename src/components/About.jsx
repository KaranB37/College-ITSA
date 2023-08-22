import React from 'react';
import './About.css';



const About = () => {
  return (
    
    <div className="parallax " id="about">
      <div className="parallax-bg "></div>

      <div className="center flex flex-col md:flex-row justify-center items-center h-screen">
        <div className="md:w-1/2 p-8">
          <h2 className="text-4xl flex items-center justify-center md:text-8xl font-bold mb-4 text-white">About Us</h2>
          <div className="light-saber"></div>
          <p className="flex items-center justify-center text-white text-lg md:text-xl parallax-content">
          We are a passionate group of IT students dedicated to fostering technical excellence and innovation among our peers. Through a dynamic blend of technical seminars, workshops, and cutting-edge events, we aim to immerse students in the realm of recent technologies. Our mission is to cultivate a vibrant learning community that promotes technical skills, knowledge sharing, and hands-on experiences. Join us on this journey as we empower and equip fellow IT enthusiasts to thrive in the ever-evolving world of technology.

          </p>
        </div>
      </div>
      </div>
  );
};

export default About;
