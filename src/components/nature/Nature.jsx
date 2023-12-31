import nature from "../../assets/image/Frame5.jpg";
import "./nature.scss";
const Nature = () => {
  return (
    <div className="container">
      <div className="nature">
        <img className="nature__img" src={nature} alt="nature" />
      </div>
    </div>
  );
};

export default Nature;
