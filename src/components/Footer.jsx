import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import logo from "../img/itsa.png";
import csilogo from "../img/csi_logo.jpg";
import vppcoe from "../img/vppcoe.png";
import iic from "../img/iic.png";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="row">
            <ul>
              <li>
                <div className="logo_img">
                  <a href="https://itsa-pvppcoe.vercel.app/" target="_blank">
                    <img src={logo} alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="logo_img">
                  <a href="https://pvppcoe.ac.in/" target="_blank">
                    <img src={vppcoe} alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="logo_img">
                  <a href="https://www.csi-india.org/" target="_blank">
                    <img src={csilogo} alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="logo_img">
                  <a href="https://iic.mic.gov.in/" target="_blank">
                    <img src={iic} alt="" />
                  </a>
                </div>
              </li>
            </ul>

            <ul>
              <li>
                <a href="#" className="icon-link">
                  <FaFacebook size={30} className="facebook-icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/itsa_vppcoe/?hl=en"
                  className="icon-link"
                >
                  <FaInstagram size={30} className="instagram-icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCD1whpZplYrmpdvPCCwHxbg"
                  className="icon-link"
                >
                  <FaYoutube size={30} className="youtube-icon" />
                </a>
              </li>
              <li>
                <a href="#" className="icon-link">
                  <FaTwitter size={30} className="twitter-icon" />
                </a>
              </li>
            </ul>
          </div>

          <div className="row">
            <ul>
              <FaMapMarkerAlt size={30} />
              <li>
                1rd Floor, Information Technology Department, <br />
                Vasantdada Patil Education Complex,
                <br />
                Eastern Express Highway,
                <br />
                Sion, Mumbai, <br />
                Maharashtra 400022.
              </li>

              <FaEnvelope size={30} />
              <li>techgyanathon@pvppcoe.ac.in</li>

              <FaPhone size={30} />
              <li>+9122 2084 0325/2084 7226</li>
            </ul>
          </div>

          <div className="centered-text">
            Developed and Designed by Karan Vishwakarma.<br></br>
          </div>
        </div>
      </footer>
    </>
  );
}
