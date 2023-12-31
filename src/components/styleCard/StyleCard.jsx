import "./styleCard.scss";

import Frame1 from "../../assets/image/Frame1.jpg";
import Frame2 from "../../assets/image/Frame2.jpg";
import Frame3 from "../../assets/image/Frame3.jpg";
const StyleCard = () => {
  return (
    <div className="container">
      <div className="styleCard">
        <div className="styleCard__div">
          <img className="styleCard__img" src={Frame1} alt="style" />
          <span className="styleCard__span">
            <h2 className="styleCard__span__title1">New Arrivals</h2>
            <button className="styleCard__span__btn1">SHOP THE LATEST</button>
          </span>
        </div>
        <div className="styleCard__div">
          <img className="styleCard__img" src={Frame2} alt="style" />
          <span className="styleCard__span">
            <h2 className="styleCard__span__title2">Best-Sellers</h2>
            <button className="styleCard__span__btn1">
              SHOP YOUR FAVORITES
            </button>
          </span>
        </div>
        <div className="styleCard__div">
          <img className="styleCard__img" src={Frame3} alt="style" />
          <span className="styleCard__span">
            <h2 className="styleCard__span__title3">The Holiday Outfit</h2>
            <button className="styleCard__span__btn1">SHOP OCCASION</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default StyleCard;
