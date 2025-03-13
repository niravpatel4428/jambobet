import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SportMode from "./Components/SportMode";
import DepositStrip from "./Components/DepositStrip";

const layout = ({ children }) => {
  return (
    <>
      <DepositStrip />
      <Header />
      <div className="bg-darkGreen sticky max-[420px]:top-[62px] top-[72px] md:top-[82px] xl:top-[68px] s18:top-[82px] z-40 max-sm:pb-0 pb-[20px]">
        <SportMode />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default layout;
