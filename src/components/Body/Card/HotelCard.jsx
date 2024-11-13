import "./styleCard/styleHotelCard.css";

function HotelCard(prop) {
  return (
    <div className="hotel-card">
      <img src={prop.photos[0]} alt="" className="img-hotel" />
      <div className="text-hotel-card">
        <a href="#">{prop.name}</a>
        <p>{prop.city}</p>
        <h4>{`Starting from $${prop.cheapestPrice}`}</h4>
        <div className="rate-tt">
          <span className="rate">{prop.rating}</span>
          <span>{prop.type}</span>
        </div>
      </div>
    </div>
  );
}
export { HotelCard };
