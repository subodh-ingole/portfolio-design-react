import React from "react";
import Info from "./Info";
import Footer from "./Footer";
import About from "./About";
import Buttons from "./Buttons";
import Image from "./Image";
const Card = () => {
  return (
    <div className="card">
      <div className="card-body">
        <Image />
        <Info />
        <Buttons />
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default Card;
