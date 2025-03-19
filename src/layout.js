import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import DepositStrip from "./Components/DepositStrip";
import Slider from "./Components/Slider";
const layout = ({ children }) => {
  return (
    <>
      <DepositStrip />
      <Header />
      <Slider />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default layout;
