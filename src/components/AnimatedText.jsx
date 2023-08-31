import React, { useEffect, useState, useRef } from 'react';

const AnimatedText = () => {
  const [text, setText] = useState('ASECSD MCMNAJXN');
  const targetText = 'ITSA || VPPCOE';
  const intervalRef = useRef(null); // Use useRef to store the interval
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


  useEffect(() => {
    let iteration = 0;

    intervalRef.current = setInterval(() => {
      setText((prevText) =>
        prevText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return targetText[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join('')
      );
      if (iteration >= targetText.length) {
        clearInterval(intervalRef.current);
      }
      iteration += 1 / 3;
    }, 30);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <h1
    className="title"
    style={{
      fontFamily: 'Montserrat, sans-serif',
      fontSize:'50px',
      position: 'relative',
      background: 'linear-gradient(to top, #000080, #007BA7)', // Dark Blue to Cerulean Blue
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}
  >
    
    
    {text}
  
  </h1>
  

  
  );
};

export default AnimatedText;
