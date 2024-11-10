import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
    <div className="footer">
      <div className="list">
        <Link href={""}>Home</Link>
        <Link href={""}>Services</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
      </div>
      <div className="list">
        <Link href={""}>Next JS</Link>
        <Link href={""}>Tailwind CSS</Link>
        <Link href={""}>ShadCN UI</Link>
        <Link href={""}>TypeScript</Link>
      </div>
      <div className="list">
        <Link href={""}>Artificial Intelligence</Link>
        <Link href={""}>Agentic AI</Link>
        <Link href={""}>Machine Learning</Link>
        <Link href={""}>Neural Networks</Link>
      </div>
    </div>
      <div className="bar">Copyright &copy; 2024 Muhammad Adnan - All Rights Reserved  </div>

    </>
  );
}
