// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons"; // Hamburger icon
// import { HashLink as Link } from "react-router-hash-link";
// import "../Styles/Navbar2.css";

// const Navbar2 = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <div className="custom-section-nav">
//       <div className="navbar2">
//         <div className="left-nav">ITSA | VPPCOE</div>
//         <FontAwesomeIcon
//           icon={faBars}
//           className="hamburger-icon"
//           onClick={toggleMenu}
//         />

//         <div className={`right-nav ${showMenu ? "show" : ""}`}>
//           <Link to="/Gallery">
//             {" "}
//             <a href="/about">Team</a>
//           </Link>
//           <Link to="/Events">
//             {" "}
//             <a href="/suggest">Event</a>
//           </Link>
//           <Link to="/About">
//             {" "}
//             <a href="/about">About</a>
//           </Link>
//           <Link to="/Login">
//             {" "}
//             <a href="/suggest">Login</a>
//           </Link>
//           <Link to="/Events">
//             {" "}
//             <a href="/Contact">Feedback</a>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar2;
