import React from "react";
import Casino from "./Casino";
import Layout from "../../layout";
import Slidersection from "../../Components/Slider";
import LoadingPopup from "./LoadingPopup";

const Casinopage = () => {
  return (
    <>
      <Layout>
        {/* <Slidersection/> */}
        <LoadingPopup />
        <Casino />
      </Layout>
    </>
  );
};

export default Casinopage;
