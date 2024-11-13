import Button from "../UI/Button/Button";

function NavBarItem(prop) {
  return (
    <Button
      className="button"
      style={
        prop.active ? { borderColor: "white" } : { borderColor: "#003580" }
      }
    >
      <i className={`fa ${prop.icon}`}></i> {prop.type}
    </Button>
  );
}
export { NavBarItem };
