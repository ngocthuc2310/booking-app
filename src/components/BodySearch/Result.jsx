import "./styleBodySearch/styleResult.css";
import { ResultCard } from "./ResultCard";
import { useNavigate } from "react-router-dom";

function Result(prop) {
  const nv = useNavigate();
  function NV() {
    nv("/detail");
  }
  return (
    <div className="result">
      {prop && prop.map((x) => <ResultCard x={x} NV={NV} />)}
    </div>
  );
}
export { Result };
