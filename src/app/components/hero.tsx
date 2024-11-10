"use client"
import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I'm Muhammad Adnan",' A Mechatronics Engineer',' A Website Developer'],
      typeSpeed: 50,
    });

    // Cleanup function to destroy Typed instance
    return () => {
      typed.destroy();
    };
  }, []);
  
  return (
    <div>
      <div className="hero">
        <div className="left">
          Hi! <br />
          <span ref={el} />
          <p>Bridging the gap between mechanical innovation and digital solutions, a Mechatronics Engineer with a passion for crafting engaging, functional websites</p>
        </div>
        <div className="right">
          <img src="/dev.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
