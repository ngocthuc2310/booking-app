import "./styleCard/styleTypeCard.css";

function TypeCard(prop) {
  return (
    <div className="type-card">
      <img src={prop.image} alt="Null" />
      <div className="text">
        <h3>{prop.name}</h3>
        <p>{prop.count} Hotels</p>
      </div>
    </div>
  );
}
export { TypeCard };
