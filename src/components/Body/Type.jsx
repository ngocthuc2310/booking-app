import "./styleBo/styleType.css";
import { TypeCard } from "./Card/TypeCard";

function Type(prop) {
  return <div className="type">{prop && prop.map((x) => TypeCard(x))}</div>;
}

export { Type };
