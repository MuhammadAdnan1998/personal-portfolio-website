import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Card() {
  return (
    <div className="my-card">
        <Image src="/laptop.jpg" alt=""/>
      <div className="title">Heading</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit&lsquo; animi.
      </p>
      <Link className="link" href={''}>VIEW MORE</Link>
    </div>
  );
}