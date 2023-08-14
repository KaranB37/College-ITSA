import React, { useState } from 'react';

import { FaBars, FaTimes } from 'react-icons/fa';
import { HashLink as Link } from "react-router-hash-link";
import './Navbar.css';

const Navbar = () => {
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
    }

    window.addEventListener('scroll', changeColor);

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <h1 className="header-logo">
                ITSA
            </h1>
            <span className="light-saber-vertical"></span>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link style={{color: "white",fontWeight:"bold", fontfamily: 'futura'}} to="/#" onClick={closeMenu} >Home</Link>
                </li>
                <li>
                <Link to="/gallery" style={{color: "white",fontWeight:"bold", fontfamily: 'futura'}} onClick={closeMenu} >Team</Link>
                </li>
                <li>
                <Link to="/Card" style={{color: "white",fontWeight:"bold", fontfamily: 'futura'}} onClick={closeMenu} >Event</Link>
                </li>
                <li>
                <Link to="/#about" style={{color: "white",fontWeight:"bold", fontfamily: 'futura'}} onClick={closeMenu} >About</Link>
                </li>
                <li>
                <Link to="/#contact" style={{color: "white",fontWeight:"bold", fontfamily: 'futura'}} onClick={closeMenu} >Contact</Link>
                </li>
                <li>
                <Link to="/Register" style={{color: "white",fontWeight:"bold", fontfamily: 'futura'}} onClick={closeMenu} >Register</Link>
                </li>
            </ul>
            <div className="hamburger" style={{color: "white",fontWeight:"bold", fontfamily: 'futura'}} onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{ color: '#fff' }} />
                ) : (
                    <FaBars size={20} style={{ color: '#fff' }} />
                )}
            </div>
        </div>
      
    );
}

export default Navbar;
