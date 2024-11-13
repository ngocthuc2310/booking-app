import "./styleBo/styleHotel.css";
import { HotelCard } from "./Card/HotelCard";

function Hotel(prop) {
  return <div className="hotel">{prop && prop.map((x) => HotelCard(x))}</div>;
}

export { Hotel };
