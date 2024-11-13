import InputSe from "./InputSe";
import { Button2 } from "../UI/Button/Button";
import "./styleHe/styleMidHe.css";

function MidHe() {
  return (
    <div className="mid">
      <h1>A lifetime of discounts? It's Genius.</h1>
      <p>
        Get rewarded for your travels - unlock install saving of 10% or more
        with a free account
      </p>
      <Button2>Sign in / Register</Button2>
      <InputSe />
    </div>
  );
}

export default MidHe;
