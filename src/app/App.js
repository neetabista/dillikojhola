import React from "react";
import "../styles/main.scss";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter as Router } from "react-router-dom";
import PublicRouter from "../router/PublicRouter";
import Footer from "../frontend/layout/footer";

const App = () => {
  return (
    <>
      <Router>
        <PublicRouter />
        <Footer />
      </Router>
    </>
  );
};

export default App;
