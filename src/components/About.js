import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is a About page of our awesome app</p>
      <p>And here we are learning about router</p>
      <Link to="/">Go to Home Page</Link>
      <li>
        <Link to="/user/anil">Anil</Link>
      </li>
      <li>
        <Link to="/user/peter">Peter</Link>
      </li>
    </div>
  );
};

export default About;
