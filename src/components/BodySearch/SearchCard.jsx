import "./styleBodySearch/styleSearchCard.css";
import { Button2 } from "../UI/Button/Button";

function SearchCard() {
  return (
    <form className="search-card">
      <h2>Search</h2>
      <p>Destination</p>
      <input type="text" className="no-num" />
      <p>Check-in Date</p>
      <input type="date" className="no-num" />
      <p>Options</p>
      <div className="option">
        <div>
          <label htmlFor="">Min price per right</label>
          <input type="number" />
        </div>
        <div>
          <label htmlFor="">Max price per right</label>
          <input type="number" />
        </div>
        <div>
          <label htmlFor="">Adult</label>
          <input type="number" />
        </div>
        <div>
          <label htmlFor="">Children</label>
          <input type="number" />
        </div>
        <div>
          <label htmlFor="">Room</label>
          <input type="number" />
        </div>
      </div>
      <Button2 style={{ width: "100%" }}>Search</Button2>
    </form>
  );
}
export { SearchCard };
