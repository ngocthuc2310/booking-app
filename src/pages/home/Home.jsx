import Header from "../../components/Header/Header";
import { Body } from "../../components/Body/Body";
import { FormDangKy } from "../../components/FormDangKy/FormDangKy";
import { Footer } from "../../components/Footer/Footer";
import "./styleHome.css";

const Home = () => {
  return (
    <div className="HomeContainer">
      <Header />
      <Body />
      <FormDangKy />
      <Footer />
    </div>
  );
};

export default Home;
