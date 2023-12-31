import "./about.scss";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <NavLink to="/">
        <h2>Back to Home</h2>
      </NavLink>
    </div>
  );
};

export default About;
