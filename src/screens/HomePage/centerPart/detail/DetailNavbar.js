import React from "react";
import whiteselectdown from "../../../../images/whiteselectdown.svg";

const DetailNavbar = ({ setShowDetail, showDetail }) => {
  const handleShowMatch = () => {
    setShowDetail(!showDetail);
  };

  return (
    <>
      {/*  */}
      <div className="sticky top-10 sm:top-12 md:top-20 xl:top-16 s15:top-16 s18:top-20 shadow-dashboardshadow  sm:!rounded-[12px_12px_0_0] bg-[#30435D] border-b border-doubleextralightwhite">
        <div className="relative">
          <div
            onClick={handleShowMatch}
            className="absolute py-2 md:py-3 left-0 bg-[#30435D] h-full w-10 flex items-center z-[2] cursor-pointer sm:!rounded-[12px_0_0_0]"
          >
            <img
              src={whiteselectdown}
              alt="whiteselectdown"
              className="w-3 ml-3 rotate-90"
            />
          </div>
          <ul className="flex flex-row max-lg:justify-start items-center gap-3 overflow-x-auto scrollable pl-10">
            <li className="inline-block uppercase whitespace-nowrap py-2 md:py-3 px-2 text-xs md:text-sm font-normal text-white hover:bg-darkblue">
              All
            </li>
            <li className="inline-block uppercase whitespace-nowrap py-2 md:py-3 px-2 text-xs md:text-sm font-normal text-white hover:bg-darkblue">
              FullTime
            </li>
            <li className="inline-block uppercase whitespace-nowrap py-2 md:py-3 px-2 text-xs md:text-sm font-normal text-white hover:bg-darkblue">
              Inplay
            </li>
            <li className="inline-block uppercase whitespace-nowrap py-2 md:py-3 px-2 text-xs md:text-sm font-normal text-white hover:bg-darkblue">
              Handicaps
            </li>
            <li className="inline-block uppercase whitespace-nowrap py-2 md:py-3 px-2 text-xs md:text-sm font-normal text-white hover:bg-darkblue">
              Combo
            </li>
            <li className="inline-block uppercase whitespace-nowrap py-2 md:py-3 px-2 text-xs md:text-sm font-normal text-white hover:bg-darkblue">
              Teams
            </li>
            <li className="inline-block uppercase whitespace-nowrap py-2 md:py-3 px-2 text-xs md:text-sm font-normal text-white hover:bg-darkblue">
              Marginals
            </li>
          </ul>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default DetailNavbar;
