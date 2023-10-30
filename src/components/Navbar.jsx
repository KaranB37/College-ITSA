import React, { useState } from "react";
import { useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
import "../Styles/Navbar.css";
import { auth } from "./Firebase"; // Import your Firebase auth instance
import dummy from "../img/dummy.png";
const Navbar = () => {
  const [authenticated, setAuthenticated] = useState(false); // Track authentication status

  // Check authentication state when the component mounts
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });

    // Unsubscribe from the auth state listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <h1 className="header-logo">ITSA</h1>
      <span className="light-saber-vertical"></span>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link
            style={{ color: "white", fontWeight: "bold", fontfamily: "futura" }}
            to="/#"
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/Gallery"
            style={{ color: "white", fontWeight: "bold", fontfamily: "futura" }}
            onClick={closeMenu}
          >
            Team
          </Link>
        </li>
        <li>
          <Link
            to="/Events"
            style={{ color: "white", fontWeight: "bold", fontfamily: "futura" }}
            onClick={closeMenu}
          >
            Event
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={{ color: "white", fontWeight: "bold", fontfamily: "futura" }}
            onClick={closeMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={{ color: "white", fontWeight: "bold", fontfamily: "futura" }}
            onClick={closeMenu}
          >
            Feedback
          </Link>
        </li>
        {authenticated ? (
          <div className="profile-image-container">
            <Link to="/profile">
              {/* Add your profile image */}
              <img src={dummy} className="image--cover" alt="" />
            </Link>
          </div>
        ) : (
          <li>
            <Link
              to="/login"
              style={{
                color: "white",
                fontWeight: "bold",
                fontfamily: "futura",
              }}
              onClick={closeMenu}
            >
              Login
            </Link>
          </li>
        )}
      </ul>
      <div
        className="hamburger"
        style={{ color: "white", fontWeight: "bold", fontfamily: "futura" }}
        onClick={handleClick}
      >
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
