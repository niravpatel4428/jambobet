import React from "react";

const CasinoBestSlipDesktop = () => {
  return (
    <>
      <div className="bg-white dark:bg-[#24354E] rounded-md overflow-hidden">
        <div className="bg-darkblue dark:bg-[#3A4C64] grid grid-cols-2">
          <div className="p-[10px_14px] flex items-center gap-2 text-lg text-white font-medium !leading-none border-r-[1px] border-white/20">
            <span className="bg-yellow rounded-full size-[31px] text-black text-[19px] font-medium flex justify-center items-center">
              0
            </span>
            Betslip
          </div>
          <div className="p-[10px_14px] flex items-center justify-center gap-2 text-lg text-white font-medium !leading-none text-center">
            My bets
          </div>
        </div>
        <div className="bg-white dark:bg-[#24354E] px-[19px] pb-5">
          <div className="pt-16 pb-[92px] text-center">
            <h3 className="text-[#737373] dark:text-white text-lg font-normal mb-[2px]">
              No selections
            </h3>
            <p className="text-[#A3A3A3] dark:text-white text-[13px] font-normal !leading-tight w-full max-w-[250px] mx-auto">
              Please add match selections by selecting the odds on any match
            </p>
          </div>
          <p className="text-[#374151] dark:text-white text-base font-medium mb-3">
            Have a booking code? Please enter it here.
          </p>
          <div>
            <input
              type="text"
              placeholder="Booking code"
              className="rounded-md border-[1px] border-black/20 dark:border-white/15 bg-[#0000000c] dark:bg-[#3A4C64] placeholder:text-[#9CA3AF] dark:text-white dark:placeholder:text-white text-darkblue text-base font-normal p-[12px_16px] s15:p-[20px_22px] w-full"
            />
          </div>
          <button className="bg-[#EBBC1350] dark:bg-yellow dark:hover:bg-[#EBBC1350] rounded-md w-full p-[19px] hover:bg-[#EBBC13] mt-3 text-[#0C2240] text-sm s15:text-[17px] font-medium !leading-none">
            Load betslip
          </button>
        </div>
      </div>
    </>
  );
};

export default CasinoBestSlipDesktop;
