import TopHe from "./TopHe";
import MidHe from "./MidHe";
import "./styleHe/styleHeader.css";

function Header() {
  return (
    <div className="header-out">
      <div className="header">
        <TopHe />
        <MidHe />
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="header-out">
      <div className="header">
        <TopHe />
      </div>
    </div>
  );
}
export default Header;
export { Header2 };
