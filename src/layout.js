import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SportMode from "./Components/SportMode";
import DepositStrip from "./Components/DepositStrip";
import Slider from "./screens/HomePage/Slider";
const layout = ({ children }) => {
  return (
    <>
      <DepositStrip />
        <Header />
        {/* <div className="bg-darkGreen sticky max-[420px]:top-12 top-12 md:top-[82px] xl:top-[68px] s18:top-20 -mt-px z-40 max-sm:pb-0 pb-[20px]"> */}
          <Slider />
        {/* </div> */}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default layout;
