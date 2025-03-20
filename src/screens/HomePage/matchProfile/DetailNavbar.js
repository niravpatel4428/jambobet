import React from "react";
import whiteselectdown from "../../../images/whiteselectdown.svg";
import { Link } from "react-router-dom";

const DetailNavbar = () => {
  return (
    <>
      {/*  */}
      <div className="sticky top-10 sm:top-12 md:top-20 xl:top-16 s15:top-16 s18:top-20 shadow-dashboardshadow sm:!rounded-[12px_12px_0_0] bg-[#30435D] border-b border-doubleextralightwhite max-sm:mt-0 mt-3 s18:mt-[17px] z-10">
        <div className="relative">
          <Link
            to="/home"
            className="absolute py-2 md:py-3 left-0 bg-[#30435D] h-full w-10 flex items-center z-[2] cursor-pointer sm:!rounded-[12px_0_0_0]"
          >
            <img
              src={whiteselectdown}
              alt="whiteselectdown"
              className="w-3 ml-3 rotate-90"
            />
          </Link>
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
