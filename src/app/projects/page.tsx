import React from "react";
import Card from "../components/Cards";

export default function page() {
  return (
    <div>
      <div className="my-heading">
        My Projects
        <div className="project-section">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>

        </div>
      </div>
    </div>
  );
}