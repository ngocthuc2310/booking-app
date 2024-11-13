import "./styleFooter.css";
import footerArr from "../../data/footer.json";

function Footer() {
  let JsxArr = [];
  for (let i = 1; i <= 5; i++) {
    let tt = footerArr[footerArr.findIndex((x) => x.col_number == i)];
    if (tt) {
      let rr = tt.col_values;
      JsxArr.push(
        <div>
          {rr.map((x) => (
            <p>{x}</p>
          ))}
        </div>
      );
    }
  }
  return <div className="footer">{JsxArr}</div>;
}
export { Footer };
