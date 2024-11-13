import "./styleBodySearch/styleResultCard.css";
import { Button2 } from "../UI/Button/Button";
import { Button4 } from "../UI/Button/Button";
import { appContext } from "../../store/appContext";
import React from "react";
import { useNavigate } from "react-router-dom";

function ResultCard(prop) {
  const { getState, setState } = React.useContext(appContext);
  function addDetail() {
    setState((x) => {
      x.detail = prop.x;
    });
    prop.NV();
  }
  //===================================================================
  return (
    <div className="result-card">
      <div>
        <img src={prop.x.photos[0]} alt="" />
      </div>
      <div className="text-tt">
        <h2 style={{ color: "blue" }}>{prop.x.name}</h2>
        <p>{prop.x.distance + " from center"}</p>
        <p>
          <b>{prop.x.description}</b>
        </p>
        <p>{prop.x.type}</p>
        {prop.x.free_cancel
          ? [
              <p style={{ color: "green", fontWeight: "bold" }}>
                Free canellation
              </p>,
              <p style={{ color: "green" }}>
                You can cancel later, so lock in this great price today
              </p>,
            ]
          : []}
      </div>
      <div className="gr2">
        <div style={{ overflow: "auto" }}>
          <span className="sp1">Excellent</span>
          <span className="sp2">{prop.x.rating}</span>
        </div>
        <div className="gr1">
          <h2>{"$ " + prop.x.cheapestPrice}</h2>
          <p style={{ fontSize: "12px" }}>includes taxes and fees</p>
          <Button4
            style={{ width: "100%" }}
            onClick={(e) => {
              e.preventDefault();
              addDetail();
            }}
          >
            See availability
          </Button4>
        </div>
      </div>
    </div>
  );
}
export { ResultCard };
