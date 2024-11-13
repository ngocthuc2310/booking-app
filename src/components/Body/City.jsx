import "./styleBo/styleCity.css";
import CityCard from "./Card/CityCard";

export function City(prop) {
  return <div className="city">{prop && prop.map((x) => CityCard(x))}</div>;
}
