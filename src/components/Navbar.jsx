import React from "react";
import "../Component.css";
import { HashLink as Link } from "react-router-hash-link";

import "./Navbar.css"

export default function Navbar() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary bg-black">
        <div className="container-fluid">
          <Link style={{color: "white",fontWeight:"bold"}} className="navbar-brand" to="/#">
            ITSA 
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{borderColor: "white"}}
          >
            <span className="navbar-toggler-icon" ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">             
              <Link className="nav-link active" style={{color: "white",fontWeight:"bold"}} aria-current="page" to="/#">
                Home
              </Link>
              <Link className="nav-link" style={{color: "white",fontWeight:"bold"}} to="/#about">
                About
              </Link>
              <Link className="nav-link" style={{color: "white",fontWeight:"bold"}} to="/#contact">
                Contact
              </Link>
              <Link className="nav-link" style={{color: "white",fontWeight:"bold"}} to="/gallery">
                Team
              </Link>
              <Link className="nav-link" style={{color: "white",fontWeight:"bold"}} to="/card">
                Events
              </Link>
              <Link className="nav-link" style={{color: "white",fontWeight:"bold"}} to="/Register">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
