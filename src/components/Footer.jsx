import React from 'react';
import "../Component.css";
import logo from '../img/itsa.png'
import csilogo from '../img/csi_logo.jpg'
import vppcoe from '../img/vppcoe.png'
import iic from '../img/iic.png'

export default function Footer() {
  return (
    <div className='foot_main'>
        <div className='logo_img'>
            <img src={logo} alt="" />
            <img src={vppcoe} alt="" />
            <img src={csilogo} alt="" />
            <img src={iic} alt="" />
        </div>
        <h6>Developed by Hrishikesh Gupta</h6>
    </div>
  )
}
