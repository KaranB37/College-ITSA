import React from 'react';
import './About.css';
import vppcoe from "./vasant.png";
import itsa from "./itsa.png";

const About = () => {
  return (
    <div className="center" id="about">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,32L0,320L36.9,320L36.9,224L73.8,224L73.8,192L110.8,192L110.8,96L147.7,96L147.7,128L184.6,128L184.6,160L221.5,160L221.5,192L258.5,192L258.5,32L295.4,32L295.4,192L332.3,192L332.3,288L369.2,288L369.2,288L406.2,288L406.2,224L443.1,224L443.1,192L480,192L480,256L516.9,256L516.9,96L553.8,96L553.8,192L590.8,192L590.8,64L627.7,64L627.7,0L664.6,0L664.6,128L701.5,128L701.5,288L738.5,288L738.5,288L775.4,288L775.4,256L812.3,256L812.3,224L849.2,224L849.2,32L886.2,32L886.2,288L923.1,288L923.1,32L960,32L960,256L996.9,256L996.9,32L1033.8,32L1033.8,224L1070.8,224L1070.8,128L1107.7,128L1107.7,32L1144.6,32L1144.6,0L1181.5,0L1181.5,224L1218.5,224L1218.5,256L1255.4,256L1255.4,96L1292.3,96L1292.3,256L1329.2,256L1329.2,128L1366.2,128L1366.2,160L1403.1,160L1403.1,288L1440,288L1440,0L1403.1,0L1403.1,0L1366.2,0L1366.2,0L1329.2,0L1329.2,0L1292.3,0L1292.3,0L1255.4,0L1255.4,0L1218.5,0L1218.5,0L1181.5,0L1181.5,0L1144.6,0L1144.6,0L1107.7,0L1107.7,0L1070.8,0L1070.8,0L1033.8,0L1033.8,0L996.9,0L996.9,0L960,0L960,0L923.1,0L923.1,0L886.2,0L886.2,0L849.2,0L849.2,0L812.3,0L812.3,0L775.4,0L775.4,0L738.5,0L738.5,0L701.5,0L701.5,0L664.6,0L664.6,0L627.7,0L627.7,0L590.8,0L590.8,0L553.8,0L553.8,0L516.9,0L516.9,0L480,0L480,0L443.1,0L443.1,0L406.2,0L406.2,0L369.2,0L369.2,0L332.3,0L332.3,0L295.4,0L295.4,0L258.5,0L258.5,0L221.5,0L221.5,0L184.6,0L184.6,0L147.7,0L147.7,0L110.8,0L110.8,0L73.8,0L73.8,0L36.9,0L36.9,0L0,0L0,0Z"></path></svg>
                          <div className="flex flex-col md:flex-row justify-center items-center gradient-bg h-screen">
      
        <div className="md:w-1/2 p-8">
        
          <h2 className="text-4xl md:text-8xl font-bold mb-4 text-white">About Us</h2>
          <div className="light-saber"></div> {/* Light saber line */}
          <p className="text-white text-lg md:text-xl">
            We are a passionate group of IT students dedicated to fostering technical excellence and innovation among our peers. Through a dynamic blend of technical seminars, workshops, and cutting-edge events, we aim to immerse students in the realm of recent technologies. Our mission is to cultivate a vibrant learning community that promotes technical skills, knowledge sharing, and hands-on experiences. Join us on this journey as we empower and equip fellow IT enthusiasts to thrive in the ever-evolving world of technology.
          </p>
        </div>
        <div className="md:w-1/2 relative">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-none absolute -top-5 right-0 transform rotate-45 z-0 opacity-70 animate-bounce">
            <img src={itsa} alt="Logo" className="h-full mx-auto" />
          </div>
          <img
            src={vppcoe}
            alt="Team"
            className="rounded-full border-4 border-white shadow-lg z-0 animate-pulse"
          />
        </div>
      </div>
      
    </div>
  );
};

export default About;






// import React from "react";
// import "../Component.css";

// export default function About() {
//   return (
//     <div className="div_about" id="about">
//       <div className="head_text">About</div>
//       <div
//         id="carouselExampleAutoplaying"
//         className="carousel slide carousel-fade my-3"
//         data-bs-ride="carousel"
//       >
//         <div className="carousel-indicators">
//           <button
//             type="button"
//             data-bs-target="#carouselExampleAutoplaying"
//             data-bs-slide-to="0"
//             className="active"
//             aria-current="true"
//             aria-label="Slide 1"
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#carouselExampleAutoplaying"
//             data-bs-slide-to="1"
//             aria-label="Slide 2"
//           ></button>
//         </div>
//         <div className="carousel-inner">
//           <div
//             className="carousel-item active"
//             data-bs-delay="1500"
//             data-bs-interval="5000"
//           >
//             <h1>Who are we?</h1>
//             <p>
//               This department of IT established in the year 1999-2000 is headed
//               by Dr. Pradip Mane. The performance of department has been
//               consistent from the time of its inception. The department has
//               produced university toppers consistently and regularly. The staff
//               members are also well qualified, versatile and dynamic. 100% of
//               our staff is ME/M.Tech and some of them are pursuing PhD Program.
//               <p></p>
//               To provide a valuable channel between technology applications,
//               research and real world scenarios, Department of Information
//               Technology is associated with three renowned industry: 9Ledge Pro,
//               Blocklogy and Ekeeda Pvt Ltd.
//             </p>
//           </div>
//           <div className="carousel-item" data-delay="1500" data-bs-interval="5000">
//             <h1>About us</h1>
//             <p>
//               What is TechGyanathon? TechGynathon is an Intercollegiate IT Festival
//               organized by the Department of Information Technology. TechGyanathon is an assortment of well-thought-out events
//               catering to anyone and everyone who is more than just casually
//               interested in computers.
//               <p></p>
//               We also invite eminent speakers as guest lecturers to speak on
//               modern technologies and developments in the IT industry and
//               related fields. Students respond to every event by participating
//               in large numbers.
//               <p></p>
//               Our ultimate goal is to highlight a few known as well as some
//               unknown fields in which the presence of computers or computing, in
//               general, has made a positive difference.
//             </p>
//           </div>
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleAutoplaying"
//           data-bs-slide="prev"
//         >
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleAutoplaying"
//           data-bs-slide="next"
//         >
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   );
// }
