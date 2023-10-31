import React from "react";
import "../Styles/Vission_Mission.css";
import pdfFile from "../img/vision.pdf";
import about123 from "../img/about123.png";

const Vission_Mission = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "vision.pdf"; // Set the desired file name
    link.click();
  };
  return (
    <div className="vismis-container">
      <div
        className="background-image-vismis"
        style={{ backgroundImage: `url(${about123})` }}
      >
        <div className="center-vismis">
          <div className="viss-Head">Institute Vision and Mission</div>{" "}
          {/* Updated text */}
          <div className="content-container-vismis">
            <h2 className="title-vismis">Institute Vision</h2>{" "}
            {/* Updated title */}
            <hr className="line-vismis" />
            <p className="description-vismis">
              We at ITSA, through a dynamic blend of technical seminars,
              workshops, and cutting-edge events, aim to cultivate a vibrant
              learning community that promotes technical skills, knowledge
              sharing, and hands-on experiences. Join us on this journey as we
              empower and equip fellow IT enthusiasts to thrive in the
              ever-evolving world of technology.
            </p>
          </div>
          <div className="content-container-vismis">
            <h2 className="title-vismis">Institute Mission</h2>{" "}
            {/* Updated title */}
            <hr className="line-vismis" />
            <p className="description-vismis">
              To foster entrepreneurship & strengthen industry institute
              interaction to enhance career opportunities for the employability
              of students.
            </p>
            <p className="description-vismis">
              To encourage collaborations with industries and academic
              institutes in terms of projects & internships by creating area for
              Research and Development.
            </p>
            <p className="description-vismis">
              To build up appropriate moral and ethical skills and to promote
              holistic development of students through various academic,
              technical, social and cultural activities.
            </p>
          </div>
          <div className="content-container-vismis">
            <h2 className="title-vismis">Department Vision</h2>{" "}
            {/* Updated title */}
            <hr className="line-vismis" />
            <p className="description-vismis">
              To impart quality education in the field of Information Technology
              to meet the challenging needs of the society and industry.
            </p>
          </div>
          <div className="content-container-vismis">
            <h2 className="title-vismis">Department Mission</h2>{" "}
            {/* Updated title */}
            <hr className="line-vismis" />
            <p className="description-vismis">
              To provide quality education to students by including Problem
              Solving, Teamwork and Leadership Skills to achieve their goals in
              the field of Information Technology.
            </p>
            <p className="description-vismis">
              To educate students for global development including
              entrepreneurship, employability and the ability to apply
              technology to real life problems.
            </p>
            <p className="description-vismis">
              To develop skilled IT professionals with moral principles and
              empower them in lifelong learning.
            </p>
          </div>
          <div className="button1" onClick={handleDownload}>
            Download PDF
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vission_Mission;
