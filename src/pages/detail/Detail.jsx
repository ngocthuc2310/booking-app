import "./styleDetail.css";
import { BodyDetail } from "../../components/BodyDetail/BodyDetail";
import Header, { Header2 } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { FormDangKy } from "../../components/FormDangKy/FormDangKy";

const Detail = () => {
  return (
    <div className="DetailContainer">
      <Header2 />
      <BodyDetail />
      <FormDangKy />
      <Footer />
    </div>
  );
};

export default Detail;
