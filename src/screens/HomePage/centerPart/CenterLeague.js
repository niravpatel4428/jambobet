import React, { useState } from "react";
import CenterImageSlider from "../../../Components/CenterImageSlider";
import MobileGames from "../../../Components/MobileGames";
import Match from "./Match";
import { leaguesData } from "../data";
const CenterLeague = () => {
  return (
    <>
      <div className="sm:mb-2 md:mb-0">
        <CenterImageSlider />
      </div>
      <>
        <MobileGames />
      </>
      <>
        <Match />
      </>
    </>
  );
};

export default CenterLeague;
