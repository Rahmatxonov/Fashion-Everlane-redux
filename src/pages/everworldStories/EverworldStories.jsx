import "./everworldStories.scss";
import { NavLink } from "react-router-dom";

const EverworldStories = () => {
  return (
    <div>
      <h1>EverworldStories</h1>
      <NavLink to="/">
        <h2>Back to Home</h2>
      </NavLink>
    </div>
  );
};

export default EverworldStories;
