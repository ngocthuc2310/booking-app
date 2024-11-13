import "./styleCard/styleCityCard.css";

function CityCard(prop) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `URL(${prop.image})`,
      }}
    >
      <div className="text-card">
        <h2>{prop.name}</h2>
        <h3>{prop.count} properties</h3>
      </div>
    </div>
  );
}

export default CityCard;
