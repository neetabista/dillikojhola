import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../frontend/home";
import ProductDetail from "../frontend/Product Detail";

const PublicRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-detail" element={<ProductDetail />} />
      </Routes>
    </>
  );
};

export default PublicRouter;
