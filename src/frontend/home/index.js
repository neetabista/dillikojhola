import React from "react";
import ProductList from "./components/products list";
import ProductBlock from "./components/Product Block";

const Home = () => {
  return (
    <>
      <ProductBlock btnTitle="STYLE GUIDE FOR MEN" />
      <ProductBlock order={2} btnTitle="STYLE GUIDE FOR WOMEN" />
      <ProductList />
    </>
  );
};

export default Home;
