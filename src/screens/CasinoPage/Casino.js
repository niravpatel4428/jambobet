import React from "react";
import Payroll from "../../Components/Payroll";
import CustomerCare from "../../Components/CustomerCare";
import Pagination from "../../Components/Pagination";
import CasinoBestSlipDesktop from "./casinoRight/CasinoBestSlipDesktop";
import CasinoLeftPart from "./casinoLeft/CasinoLeftPart";
import CenterImageSlider from "../../Components/CenterImageSlider";
import CasinoCenter from "./casinoCenter/CasinoCenter";
import BestSlipMobile from "./bestSlipMobileCasinoPage/bestSlipMobile";
import Winners from "./Winners";
const Casino = () => {
  return (
    <>
      <div className="relative bg-[#F2F4F6] dark:bg-darkblue pb-[70px] s15:pb-[100px]">
        <div className="w-full max-w-[1760px] md:px-5 mx-auto">
          <div className="grid grid-cols-12 gap-5 md:gap-3 s18:gap-5">
            <div className="max-md:hidden md:col-span-3 s15:col-span-2">
              <CasinoLeftPart />
            </div>
            <div className="col-span-12 md:col-span-9 s15:col-span-7">
              <div className="flex flex-col gap-[10px] ">
                <CenterImageSlider />
                <div className="p-5 md:p-3 s15:p-5 rounded-md shadow-inputshadow">
                  <>
                    <Winners />
                  </>
                  <>
                    <CasinoCenter />
                  </>
                </div>
              </div>
              {/* Pagination */}
              <Pagination />
            </div>
            <div className="col-span-0 hidden s15:block s15:col-span-3">
              <div className="odd-conected">
                <div className="flex flex-col gap-5">
                  <CasinoBestSlipDesktop />
                  <div>
                    <Payroll />
                  </div>
                  <div>
                    <CustomerCare />
                  </div>
                </div>
              </div>
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

export default Casino;
