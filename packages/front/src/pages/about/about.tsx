import React from "react";
import { Link } from "react-router-dom";

import "./about.css";

function About() {
  return (
    <div className="about">
      <div>
        <h1>About page</h1>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default About;
