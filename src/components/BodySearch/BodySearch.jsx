import "./styleBodySearch/styleBodySearch.css";
import { SearchCard } from "./SearchCard";
import { Result } from "./Result";
import searchArr from "../../data/search.json";
import React, { useEffect, useState } from "react";
import { search } from "../../linkAPI/linkAPI";
import { appContext } from "../../store/appContext";
import { useNavigate } from "react-router-dom";

function BodySearch() {
  const { getState, setState } = React.useContext(appContext);
  const [dt, setDt] = useState(null);
  const nv = useNavigate();
  function NV() {
    nv("/detail");
  }
  useEffect(() => {
    fetch(search, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(getState().search),
    })
      .then((x) => x.json())
      .then((y) => setDt(y));
  }, []);
  return (
    <div className="body-search">
      <SearchCard />
      {Result(dt && dt)}
    </div>
  );
}
export { BodySearch };
