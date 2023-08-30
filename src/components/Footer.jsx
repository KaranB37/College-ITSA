import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

import logo from '../img/itsa.png';
import csilogo from '../img/csi_logo.jpg';
import vppcoe from '../img/vppcoe.png';
import iic from '../img/iic.png';

export default function Footer() {
  return (
    <>
      <footer>
        <div class="footer">
          <div class="row">
          
            <ul>
            <li> <div className='logo_img'><img src={logo} alt="" /></div></li>
            <li><div className='logo_img'><img src={vppcoe} alt="" /></div></li>
            <li> <div className='logo_img'> <img src={csilogo} alt="" /></div></li>
            <li><div className='logo_img'><img src={iic} alt="" /></div></li>
            </ul>
          
            <ul>
              <li>
                <a href="#" className="icon-link">
                  <FaFacebook size={30} className="facebook-icon" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/itsa_vppcoe/?hl=en" className="icon-link">
                  <FaInstagram size={30} className="instagram-icon" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCD1whpZplYrmpdvPCCwHxbg" className="icon-link">
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

          <div class="row">
            <ul>
            <FaMapMarkerAlt size={30} />
              <li>
            
                <a href="#">
                  1rd Floor, Information Technology Department, <br />
                  Vasantdada Patil Education Complex,<br />
                  Eastern Express Highway,<br />
                  Sion, Mumbai, <br />
                  Maharashtra 400022.
                </a>
              </li>
              <hr />
            
                <FaEnvelope size={30} />
                <li>
                  <a href="#">techgyanathon@pvppcoe.ac.in</a>
                
              </li>
              <hr />
            
                <FaPhone size={30} />
                <li>
                  <a href="#">+9122 2084 0325/2084 7226</a>
              </li>
            </ul>
          </div>
     
          <div className="centered-text">
          Designed with ☕ and ❤️ by our Technical Team.<br></br>
          
          </div>
        </div>
      </footer>
    </>
  );
}
