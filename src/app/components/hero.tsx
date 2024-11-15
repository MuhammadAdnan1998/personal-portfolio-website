"use client"
import Image from 'next/image';
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
          <p>Bridging the gap between mechanical innovation and digital solutions&lsquo; a Mechatronics Engineer with a passion for crafting engaging&lsquo; functional websites</p>
        </div>
        <div className="right">
          <Image src="/dev.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
