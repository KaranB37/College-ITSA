import React from "react";
import styles from "../Styles/Eventinfo.module.css";
import peer from "../img/peer-2-peer.png";
import iv from "../img/adani-iv.png";
import Techire from "../img/Techire.png";
import Techventure from "../img/Techventure.png";
import Techday from "../img/Teachers-day.png";

const Eventinfo = () => {
  return (
    <div className={styles.event_bg}>
      <div className={styles.event_container}>
        <div className={styles.event_image}>
          <img src={iv} alt="Event Image" />
        </div>
        <div className={styles.event_content}>
          <h2>Dahanu Thermal Power Station Industrial visit</h2>
          <p className={styles.event_date}>October 13, 2023</p>
          <p className={styles.event_description}>
            <br />
            The visit offered a unique opportunity for students to gain insights
            into the operations of a thermal power station and learn about
            sustainable energy practices.A deeper understanding of thermal power
            generation and the complexities involved. The opportunity to
            interact with industry professionals and gain insights into career
            opportunities in the energy sector.
          </p>
        </div>
      </div>
      <div className={styles.event_container}>
        <div className={styles.event_image}>
          <img src={Techire} alt="Event Image" />
        </div>
        <div className={styles.event_content}>
          <h2>Techhire</h2>
          <p className={styles.event_date}>November 15, 2023</p>
          <p className={styles.event_description}>
            <br />
            ITSA of IT department in association with Computer Society Of India
            (CSI) successfully organized the mock interview event
            “TechHire”,which was aimed to prepare students for real job
            interviews. It featured preparation workshops, diverse interview
            panels, customized scenarios, and structured interviews with
            feedback. Total 10 students were selected for Internship and
            Training.
          </p>
        </div>
      </div>
      <div className={styles.event_container}>
        <div className={styles.event_image}>
          <img src={Techventure} alt="Event Image" />
        </div>
        <div className={styles.event_content}>
          <h2>Techventure</h2>
          <p className={styles.event_date}>August 25, 2023</p>
          <p className={styles.event_description}>
            <br />
            The Tech hunt “TechVenture”, a dynamic and engaging
            technology-focused event that brought together students, experienced
            and tech enthusiasts from various departments. The event aimed to
            foster innovation, knowledge sharing, and friendly competition
            within the realm of technology. With four rounds of challenges
            designed to test participants' technical skills and problem-solving
            abilities.
          </p>
        </div>
      </div>
      <div className={styles.event_container}>
        <div className={styles.event_image}>
          <img src={Techday} alt="Event Image" />
        </div>
        <div className={styles.event_content}>
          <h2>Teacher’s Day</h2>
          <p className={styles.event_date}>September 5, 2023</p>
          <p className={styles.event_description}>
            <br />
            The event aimed to celebrate the dedication and hard work of our
            teaching staff while allowing students to experience the joy of
            teaching. The highlight of our Teachers' Day event was the "Teacher
            for a Day" initiative.Several SE and TE students had the opportunity
            to step into the shoes of teachers and conduct mini-lessons for
            their peers allowing students to appreciate the challenges and
            responsibilities that come with teaching.
          </p>
        </div>
      </div>
      <div className={styles.event_container}>
        <div className={styles.event_image}>
          <img src={peer} alt="Event Image" />
        </div>
        <div className={styles.event_content}>
          <h2>Peer to Peer Learning</h2>
          <p className={styles.event_date}>July 24, 2023</p>
          <p className={styles.event_description}>
            <br />
            Event aims to foster knowledge sharing and stimulate discussions on
            cutting-edge topics related to the real meaning of technology and
            innovation.The audience engaged in a question and answer session
            with both the candidates. Following the Q&A sessions, an open
            discussion was facilitated to encourage knowledge sharing among
            attendees.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Eventinfo;
