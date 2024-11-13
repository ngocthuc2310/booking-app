import "./styleButton.css";

function Button(prop) {
  return (
    <button
      type={prop.type}
      style={prop.style}
      className="button"
      onClick={prop.onClick}
    >
      {prop.children}
    </button>
  );
}
export default Button;

function Button2(prop) {
  return (
    <button
      type={prop.type}
      style={prop.style}
      className="button2"
      onClick={prop.onClick}
    >
      {prop.children}
    </button>
  );
}

function Button3(prop) {
  return (
    <button
      type={prop.type}
      style={prop.style}
      className="button3"
      onClick={prop.onClick}
    >
      {prop.children}
    </button>
  );
}

function Button4(prop) {
  return (
    <button
      type={prop.type}
      style={prop.style}
      className="button4"
      onClick={prop.onClick}
    >
      {prop.children}
    </button>
  );
}

function Button5(prop) {
  return (
    <button
      type={prop.type}
      style={prop.style}
      className="button5"
      onClick={prop.onClick}
    >
      {prop.children}
    </button>
  );
}

export { Button2, Button3, Button4, Button5 };
