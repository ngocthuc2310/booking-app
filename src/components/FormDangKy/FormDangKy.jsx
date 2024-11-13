import "./styleFormDK.css";
import { Button2 } from "../UI/Button/Button";

function FormDangKy() {
  return (
    <div className="form">
      <form action="" className="formDK">
        <h1>Save time, save money!</h1>
        <p>sign up and we'll send the best deals to you</p>
        <div className="group">
          <input type="text" className="email" placeholder="Your Email" />
          <Button2>Subscribe</Button2>
        </div>
      </form>
    </div>
  );
}
export { FormDangKy };
