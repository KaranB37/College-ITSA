import React from 'react';
import './About.css';
import vppcoe from "./vasant.png";
import itsa from "./itsa.png";

const About = () => {
  return (
    <div className="center" id="about">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,96L6.2,133.3C12.3,171,25,245,37,245.3C49.2,245,62,171,74,149.3C86.2,128,98,160,111,181.3C123.1,203,135,213,148,229.3C160,245,172,267,185,261.3C196.9,256,209,224,222,202.7C233.8,181,246,171,258,186.7C270.8,203,283,245,295,272C307.7,299,320,309,332,293.3C344.6,277,357,235,369,229.3C381.5,224,394,256,406,277.3C418.5,299,431,309,443,266.7C455.4,224,468,128,480,80C492.3,32,505,32,517,53.3C529.2,75,542,117,554,149.3C566.2,181,578,203,591,197.3C603.1,192,615,160,628,128C640,96,652,64,665,85.3C676.9,107,689,181,702,213.3C713.8,245,726,235,738,208C750.8,181,763,139,775,128C787.7,117,800,139,812,138.7C824.6,139,837,117,849,101.3C861.5,85,874,75,886,106.7C898.5,139,911,213,923,240C935.4,267,948,245,960,240C972.3,235,985,245,997,229.3C1009.2,213,1022,171,1034,170.7C1046.2,171,1058,213,1071,192C1083.1,171,1095,85,1108,74.7C1120,64,1132,128,1145,154.7C1156.9,181,1169,171,1182,181.3C1193.8,192,1206,224,1218,208C1230.8,192,1243,128,1255,112C1267.7,96,1280,128,1292,122.7C1304.6,117,1317,75,1329,69.3C1341.5,64,1354,96,1366,133.3C1378.5,171,1391,213,1403,245.3C1415.4,277,1428,299,1434,309.3L1440,320L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z"></path></svg>

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
