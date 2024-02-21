import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../frontend/home";
import ProductDetail from "../frontend/Product Detail";
import Cart from "../frontend/Cart";
import Checkout from "../frontend/checkout";

const PublicRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product-detail/:currentSlug"
          element={<ProductDetail />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};

export default PublicRouter;
