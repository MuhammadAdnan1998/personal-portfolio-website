"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="top-nav">
      <div className="hamburger" onClick={toggleSidebar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Conditionally render sidebar based on toggle state */}
      {isSidebarOpen && (
        <div className="sidebar">
          <div className="close-sign" onClick={toggleSidebar}>×</div>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}

      <div className="mail">
        <a href="mailto:abdulrehan0317@gmail.com">muhammad.adnan@devtodeploy.co</a>
      </div>

      {/* Hide this full navbar on mobile */}
      <div className="navbar">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="contact-us">Contact</div>
    </div>
  );
}
