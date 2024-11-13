import "./styleBodyDetail/styleListHinh.css";

function ListHinh(prop) {
  return (
    <div className="list-hinh">
      {prop.map((x) => (
        <img src={x} alt="" />
      ))}
    </div>
  );
}
export { ListHinh };
