import "./Products.css";
import { Link } from "react-router-dom";

export default function ProductCard({
  image,
  name,
  description,
  price,
  onBuyClick,
  height = "150",
  cardId,
}) {
  return (
    <div className="card">
      <Link to={`/card/${cardId}`}>
        <div>
          <img src={image} width="150" height={height} alt="foto" />
        </div>
        <div className="prodName">{name}</div>
      </Link>
      <div className="descrip">{description}</div>
      <div>
        <button onClick={onBuyClick} className="priceButton">
          {price} ₸{" "}
        </button>
      </div>
    </div>
  );
}
