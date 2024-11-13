import "./styleSearch.css";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { BodySearch } from "../../components/BodySearch/BodySearch";
import { FormDangKy } from "../../components/FormDangKy/FormDangKy";
import { Header2 } from "../../components/Header/Header";
import { appContext } from "../../store/appContext";
import React from "react";

const Search = () => {
  return (
    <div className="SearchContainer">
      <Header2 />
      <BodySearch />
      <FormDangKy />
      <Footer />
    </div>
  );
};

export default Search;
