import React from "react";
import "../styles/main.scss";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter as Router } from "react-router-dom";
import PublicRouter from "../router/PublicRouter";
import Footer from "../frontend/layout/footer";
import ScrollToTop from "../ScrollToTop";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <PublicRouter />
        <Footer />
      </Router>
    </>
  );
};

export default App;
