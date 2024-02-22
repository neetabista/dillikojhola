import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../frontend/home";
import ProductDetail from "../frontend/Product Detail";
import Checkout from "../frontend/checkout";
import CartPage from "../frontend/Cart Page";

const PublicRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product-detail/:currentSlug"
          element={<ProductDetail />}
        />
        <Route path="/cart-page" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};

export default PublicRouter;
