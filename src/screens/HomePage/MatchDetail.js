import React from "react";
import dashboardimg from "../../images/dashboardimg.png";
import dashboardimg2 from "../../images/dashboardimg2.png";
import dashboardimg3 from "../../images/dashboardimg3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomerCare from "../../Components/CustomerCare";
import Payroll from "../../Components/Payroll";
import Pagination from "../../Components/Pagination";
import BestSlipMobile from "./bestSlipMobileHomepage/BestSlipMobile";
import CenterImageSlider from "../../Components/CenterImageSlider";
import MobileGames from "../../Components/MobileGames";
import CenterLeague from "./centerPart/CenterLeague";
import BestSlipDesktop from "./rightPart/BestSlipDesktop";
import LestSideGames from "./leftPart/LestSideGames";
import AllCountry from "./leftPart/AllCountry";
import TopLeague from "./leftPart/TopLeague";

const MatchDetail = () => {
  return (
    <>
      <div className="pb-[70px] s15:pb-[100px]">
        <div className="max-sm:px-[0px] px-[20px] xl:px-[30px] w-full max-w-[1780px] mx-auto">
          <div className="grid grid-cols-12 gap-5 md:gap-3 s18:gap-5">
            <div className="max-md:col-span-0 max-md:hidden md:col-span-3 lg:col-span-2 s15:col-span-2">
              <div className="w-full max-w-full s18:max-w-[238px]">
                <>
                  <LestSideGames />
                </>
                <>
                  <TopLeague />
                </>
                <>
                  <AllCountry />
                </>
              </div>
            </div>
            <div className="max-md:col-span-12 md:col-span-9 lg:col-span-10 s15:col-span-7">
              <div className="s18:ml-[-35px]">
                <>
                  <CenterLeague />
                </>
              </div>
              <Pagination />
            </div>
            <div className="col-span-0 hidden s15:block s15:col-span-3">
              <BestSlipDesktop />
              <>
                <Payroll />
              </>
              <>
                <CustomerCare />
              </>
            </div>
          </div>
        </div>
      </div>
      <>
        <BestSlipMobile />
      </>
    </>
  );
};

export default MatchDetail;
