import { City } from "./City";
import { Type } from "./Type";
import { Hotel } from "./Hotel";
import "./styleBo/styleBody.css";
import { useEffect } from "react";
import { useState } from "react";
import { topkhuvuc, countbytype, toprating } from "../../linkAPI/linkAPI";

function Body() {
  const [dt, setDt] = useState(null);
  const [dt2, setDt2] = useState(null);
  const [dt3, setDt3] = useState(null);

  useEffect(() => {
    fetch(topkhuvuc)
      .then((x) => x.json())
      .then((y) => setDt(y))
      .catch((er) => alert("ERR:" + er));
    fetch(countbytype)
      .then((x) => x.json())
      .then((y) => setDt2(y))
      .catch((er) => alert("ERR:" + er));
    fetch(toprating)
      .then((x) => x.json())
      .then((y) => setDt3(y))
      .catch((er) => alert("ERR: " + er));
  }, []);
  return (
    <div className="body">
      {City(dt && dt)}
      <h2>Browse by property type</h2>
      {Type(dt2 && dt2)}
      <h2>Home guwsts love</h2>
      {Hotel(dt3 && dt3)}
    </div>
  );
}

export { Body };
