import "./styleBodyDetail/styleBodyDetail.css";
import { Button4, Button5 } from "../UI/Button/Button";
import { ListHinh } from "./ListHinh";
import detail from "../../data/detail.json";
import React from "react";
import { appContext } from "../../store/appContext";
import { useNavigate } from "react-router-dom";

function BodyDetail() {
  const { getState, setState } = React.useContext(appContext);
  const navigate = useNavigate();
  return (
    <div className="body-detail">
      <div className="detail-gr1">
        <div className="text1">
          <h1>{getState().detail.name}</h1>
          <p>{getState().detail.address}</p>
          <p style={{ color: "blue" }}>
            <b>{getState().detail.distance}</b>
          </p>
          <p style={{ color: "green" }}>
            <b>{getState().detail.price}</b>
          </p>
        </div>
        <Button4>Reserve or Book Now</Button4>
      </div>
      {ListHinh(getState().detail.photos)}
      <div className="div-duoi">
        <div className="text-div-duoi">
          <h2>{getState().detail.title}</h2>
          <p>{getState().detail.desc}</p>
        </div>
        <div className="blue-card">
          <h3>Perfect for a 9-night stay!</h3>
          <p>
            Locate in the real heart of Krakow, this property has an excellent
            location score of 9.8!
          </p>
          <p style={{ fontSize: "30px" }}>
            <b>${getState().detail.cheapestPrice}</b>
            <span> (9 night)</span>
          </p>
          <Button5
            onClick={(e) => {
              e.preventDefault();
              navigate(`/book/${getState().detail._id}`);
            }}
          >
            Reserve or Book Now
          </Button5>
        </div>
      </div>
    </div>
  );
}
export { BodyDetail };
