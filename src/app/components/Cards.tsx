import React from "react";
import Link from "next/link";

export default function Card() {
  return (
    <div className="my-card">
        <img src="/laptop.jpg" alt="" />
      <div className="title">Heading</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, animi.
      </p>
      <Link className="link" href={''}>VIEW MORE</Link>
    </div>
  );
}