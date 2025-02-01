import React from "react";
import safari from "../images/safari.png";
import airtel from "../images/airtel.png";
const Payroll = () => {
  return (
    <>
      <div className="rounded-[7px] bg-white dark:bg-[#243853] mt-3 s18:mt-[20px]">
        <h3 className="p-3 s18:p-5 text-center text-darkblue dark:text-white text-sm md:text-base s18:text-[18px] font-medium leading-[100%] rounded-[7px_7px_0px_0px] border border-solid border-lightblack dark:border-lightwhiteborder bg-extralightblack dark:bg-[#3A4B62]">
          Payroll Number 290898
        </h3>
        <div className="flex flex-col s16:flex-row justify-center gap-[30px] items-center p-[12px_20px] s16:p-[16px_28px]  s18:p-[20px_35px]">
          <img src={safari} alt="safari" />
          <img src={airtel} alt="airtel" />
        </div>
      </div>
    </>
  );
};

export default Payroll;
