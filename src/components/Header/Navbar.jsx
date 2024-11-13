import navBar from "../../data/navBar.json";
import { NavBarItem } from "./NavBarItem";

function Navbar() {
  return (
    <div style={{ textAlign: "left", clear: "both", margin: "10px" }}>
      {navBar.map((x) => NavBarItem(x))}
    </div>
  );
}

export default Navbar;
