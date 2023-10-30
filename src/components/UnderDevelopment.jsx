// UnderDevelopment.js
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../Styles/UnderDevelopment.css"; // Import your custom CSS
import bg from "../img/about123.png";

const UnderDevelopment = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    // Typed.js configuration
    const options = {
      strings: ["Under Development", "Coming Soon"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    };

    // Initialize Typed.js
    const typed = new Typed(typedRef.current, options);

    // Cleanup when component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="under-development-page">
      <div className="background-image"></div>

      <div className="content">
        <h1>
          <span ref={typedRef}></span>
        </h1>
      </div>
    </div>
  );
};

export default UnderDevelopment;
