import React, { useEffect, useState, useRef } from 'react';

const AnimatedText = () => {
  const [text, setText] = useState('MHAUCYSTDGHEPQ');
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
    <div
      className="title"
      style={{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '6vw', // Use viewport width for font size
        position: 'relative',
        background: 'linear-gradient(to top, #000080, #007BA7)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {text}
    </div>
  );
  
};

export default AnimatedText;