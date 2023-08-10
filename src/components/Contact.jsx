import React from "react";
import "../Component.css";
import insta from "../img/instagram.svg"

export default function Contact() {
  return (
    <div className="contact_main" id="contact">
      <div className="contact_head my-2">Contact</div>
      <div className="contact_body">
          <div className="left">
            <h1>Address</h1>
            <div className="add" >
            Vasantdada Patil Education Complex, Eastern Express Highway, Near Everard Nagar, Sion - Chunabatti, Mumbai, Maharashtra 400022
            </div>
          </div>
          <div className="right">
            <h1>Email</h1>
            <p>Techgyanathon@pvppcoe.ac.in</p>
            </div>
          <div className="social"><a href="https://www.instagram.com/itsa_vppcoe/" target="_blank" rel="noreferrer"><img src={insta} alt="" /></a></div>
      </div>
    </div>
  );
}
