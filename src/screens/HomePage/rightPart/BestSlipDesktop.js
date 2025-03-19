import React, { useRef, useState } from "react";
import remove from "../../../images/remove.svg";
import grayremove from "../../../images/grayremove.svg";
import darkremove from "../../../images/darkremove.svg";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const BestSlipDesktop = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [isToggled, setIsToggled] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <div className="odd-conected rounded-[7px] bg-white dark:bg-bluedarkmodecolor shadow-dashboardshadow w-full">
        <div className="flex items-center rounded-[7px_7px_0px_0px] bg-darkblue dark:bg-bluedarkmode px-[15px]">
          <span className="border-solid border-r-[1px] border-r-doubleextralightwhite w-[50%] flex items-center gap-[7px] py-[10px] md:py-2 s18:py-[10px] text-white text-base md:text-sm s18:text-lg font-medium leading-[100%]">
            <span className="flex w-8 md:w-6 s18:w-8 h-8 md:h-6 s18:h-8 justify-center items-center bg-yellow rounded-[50%] text-black text-[19px] md:text-base s18:text-[19px] font-medium !leading-none">
              1
            </span>{" "}
            Betslip
          </span>
          <span className="cursor-pointer w-[50%] flex justify-center items-center py-[10px] md:py-2 s18:py-[10px] text-white text-base md:text-sm s18:text-lg font-medium leading-[100%]">
            My bets
          </span>
        </div>
        <span className="cursor-pointer border-solid border-b-2 border-b-extrathinblack dark:border-b-lightwhiteborder flex p-3 md:p-2 md:px-3 s18:p-3 bg-extralightblack dark:bg-[#2F4058] items-center gap-[12px] text-[#EF4444] text-sm font-medium leading-[128%]">
          <img src={remove} alt="remove" />
          Remove all
        </span>
        <div className="flex justify-between p-[10px_13px_8px] s18:p-[15px_15px_10px] border-solid border-b-2 border-b-extrathinblack dark:border-b-lightwhiteborder">
          <div className="flex gap-[12px] items-start">
            <img
              src={isDarkMode ? darkremove : grayremove}
              alt="remove"
              className="cursor-pointer mt-[3px]"
            />
            <div className="flex flex-col gap-1 s18:gap-[5px] cursor-pointer">
              <p className="text-darkblue dark:text-white text-base md:text-sm s18:text-base font-medium    leading-tight">
                Everton FC
              </p>
              <p className="text-[#757575] dark:text-white text-base md:text-sm s18:text-base font-normal   leading-tight">
                1x2
              </p>
              <p className="text-[#757575] dark:text-white text-sm md:text-xs s18:text-sm font-normal   leading-tight">
                Evrrton FC - Aston Villa
              </p>
              <p className="text-[#757575] dark:text-white text-sm md:text-xs s18:text-sm font-normal   leading-tight">
                15/01 22:30
              </p>
            </div>
          </div>
          <span className="h-full rounded-md flex justify-center items-center bg-lightyellow dark:bg-yellow dark:text-darkblue p-[5px_9px] text-darkblue text-base font-semibold leading-tight">
            3.50
          </span>
        </div>
        <div className="p-[15px_15px_0px] md:p-[12px_12px_0px] s18:p-[15px_15px_0px]">
          <span className="text-[#EF4444] text-base md:text-sm s18:text-base font-medium leading-12">
            Stake
          </span>
          <div className="flex gap-[5px] mt-[5px] md:mt-3 s18:mt-[5px]">
            <span className="cursor-pointer p-[10px_14px] xl:p-[8px_12px] s18:p-[12px_14px] s18:w-[58px] s18:h-[43px] flex justify-center items-center rounded-md bg-extralightblack border border-solid border-lightblack text-black text-base md:text-sm s18:text-base font-medium !leading-none s18:leading-12 hover:bg-yellow hover:border-bordercolor transition-all duration-300 dark:bg-[#2F425C] dark:border-doubleextralightwhite dark:text-white dark:hover:bg-yellow dark:hover:text-darkblue">
              20/-
            </span>
            <span className="cursor-pointer p-[10px_14px] xl:p-[8px_12px] s18:p-[12px_14px] s18:w-[58px] s18:h-[43px] flex justify-center items-center rounded-md bg-extralightblack border border-solid border-lightblack text-black text-base md:text-sm s18:text-base font-medium !leading-none s18:leading-12 hover:bg-yellow hover:border-bordercolor transition-all duration-300 dark:bg-[#2F425C] dark:border-doubleextralightwhite dark:text-white dark:hover:bg-yellow dark:hover:text-darkblue">
              50/-
            </span>
            <span className="cursor-pointer p-[10px_14px] xl:p-[8px_12px] s18:p-[12px_14px] s18:w-[58px] s18:h-[43px] flex justify-center items-center rounded-md bg-extralightblack border border-solid border-lightblack text-black text-base md:text-sm s18:text-base font-medium !leading-none s18:leading-12 hover:bg-yellow hover:border-bordercolor transition-all duration-300 dark:bg-[#2F425C] dark:border-doubleextralightwhite dark:text-white dark:hover:bg-yellow dark:hover:text-darkblue">
              100/-
            </span>
            <span className="cursor-pointer p-[10px_14px] xl:p-[8px_12px] s18:p-[12px_14px] s18:w-[58px] s18:h-[43px] flex justify-center items-center rounded-md bg-extralightblack border border-solid border-lightblack text-black text-base md:text-sm s18:text-base font-medium !leading-none s18:leading-12 hover:bg-yellow hover:border-bordercolor transition-all duration-300 dark:bg-[#2F425C] dark:border-doubleextralightwhite dark:text-white dark:hover:bg-yellow dark:hover:text-darkblue">
              500/-
            </span>
            <span className="flex justify-end p-[10px_14px] xl:p-[8px_12px] s18:p-[12px_14px] items-center w-full s18:h-[43px] rounded-md border-solid border-bordercolor bg-darkblue text-base s18:text-lg text-white font-semibold !leading-none s18:leading-[120%] dark:text-yellow dark:border dark:border-solid dark:bg-[#3A495F] dark:border-doubleextralightwhite">
              50
            </span>
          </div>
          <div className="p-[15px_0px] md:p-[12px_0] s18:p-[15px_0px] flex flex-col gap-[10px] md:gap-2 s18:gap-[10px]">
            <p className="flex justify-between items-center text-darkblue dark:text-white text-base md:text-sm s18:text-base font-normal !leading-none s18:!leading-12">
              Total Odds{" "}
              <span className="text-darkblue dark:text-white text-base md:text-sm s18:text-base font-semibold !leading-none s18:!leading-tight">
                3.50
              </span>
            </p>
            <p className="flex justify-between items-center text-darkblue dark:text-white text-base md:text-sm s18:text-base font-normal !leading-none s18:!leading-12">
              Possible Win{" "}
              <span className="flex gap-[5px] text-darkblue dark:text-white text-base md:text-sm s18:text-base font-semibold !leading-none s18:!leading-tight">
                <span className="text-base md:text-sm s18:text-base text-thinblack dark:text-extralightwhite font-semibold !leading-none s18:!leading-tight">
                  KShs.
                </span>{" "}
                139.53
              </span>
            </p>
            <p className="flex justify-between items-center text-darkblue dark:text-white text-base md:text-sm s18:text-base font-normal !leading-none s18:!leading-12">
              Amount(KShs){" "}
              <span className="flex gap-[5px] text-darkblue dark:text-white text-base md:text-sm s18:text-base font-semibold !leading-none s18:!leading-tight">
                <span className="text-base md:text-sm s18:text-base text-thinblack font-semibold !leading-none s18:!leading-tight dark:text-extralightwhite">
                  KShs.
                </span>{" "}
                86.53
              </span>
            </p>
            <p className="flex justify-between items-center text-darkblue dark:text-white text-base md:text-sm s18:text-base font-normal !leading-none s18:!leading-12">
              15% Excise Tax{" "}
              <span className="flex gap-[5px] text-darkblue dark:text-white text-base font-semibold !leading-none s18:!leading-tight">
                <span className="text-base text-thinblack font-semibold !leading-none s18:!leading-tight dark:text-extralightwhite">
                  KShs.
                </span>{" "}
                13.04
              </span>
            </p>
          </div>
          <div className="rounded-[0px_0px_7px_7px] bg-bglightblue dark:bg-[#2F425C] p-[15px_15px_20px] md:p-[12px_12px_15px] s18:p-[15px_15px_20px] flex flex-col gap-[10px] md:gap-2 s18:gap-[10px] -mx-[15px] md:-mx-[12px] s18:-mx-[15px]">
            <p className="flex justify-between items-center text-darkblue dark:text-white text-base md:text-sm s18:text-base font-normal leading-12 md:leading-none s18:leading-12">
              Win{" "}
              <span className="text-darkblue dark:text-white text-base md:text-sm s18:text-base font-semibold leading-tight">
                <span className="text-base md:text-sm s18:text-base text-thinblack dark:text-extralightwhite font-semibold leading-tight">
                  KShs.
                </span>{" "}
                130.04
              </span>
            </p>
            <p className="flex justify-between items-center text-darkblue dark:text-white text-base md:text-sm s18:text-base font-normal leading-12 md:leading-none s18:leading-12">
              20% Withholding Tax{" "}
              <span className="flex gap-[5px] text-darkblue dark:text-white text-base md:text-sm s18:text-base font-semibold leading-tight">
                <span className="text-base md:text-sm s18:text-base text-thinblack dark:text-extralightwhite font-semibold leading-tight">
                  KShs.
                </span>{" "}
                13.04
              </span>
            </p>
            <p className="flex justify-between items-center text-darkblue dark:text-white text-base md:text-sm s18:text-base font-normal leading-12 md:leading-none s18:leading-12">
              Possible Payout{" "}
              <span className="flex gap-[5px] text-darkblue dark:text-white text-base md:text-sm s18:text-base font-semibold leading-tight">
                <span className="text-base md:text-sm s18:text-base text-thinblack font-semibold leading-tight dark:text-extralightwhite">
                  KShs.
                </span>{" "}
                133.04
              </span>
            </p>
            <div className="flex justify-between items-center mt-10 md:mt-7 s18:mt-10">
              <label className="flex items-center text-sm font-normal leading-[128%] text-thinblack dark:text-extralightwhite select-none">
                <input
                  type="checkbox"
                  className="hidden peer"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span className="mr-[9px] w-[18px] h-[18px] rounded-[2px] border bg-transparent border-solid border-[#A3A3A3] peer-checked:bg-green-600 peer-checked:border-green-600 flex justify-center items-center">
                  {/* Always show an icon */}
                  {isChecked ? (
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-white ml-[1px] font-bold opacity-100"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-gray-400 opacity-0"
                    />
                  )}
                </span>
                Accept odd changes
              </label>
              <div className="flex items-center gap-[9px]">
                {/* Toggle Switch */}
                <div
                  onClick={handleToggle}
                  className={`relative w-[30px] h-5 flex items-center rounded-[11px] cursor-pointer ${
                    isToggled ? "bg-[#11A306]" : "bg-[#A3A3A3]"
                  }`}
                >
                  <div
                    className={`w-[14px] h-[14px] bg-white rounded-[11px] transform transition-transform ${
                      isToggled ? "translate-x-3" : "translate-x-1"
                    }`}
                  ></div>
                </div>
                <span className="text-sm  text-thinblack font-medium leading-[128%] dark:text-extralightwhite">
                  Keep betslip
                </span>
              </div>
            </div>
            <div className="flex gap-[9px] mt-[15px] md:mt-3 s18:mt-[15px]">
              <Link
                to="/"
                className="inline-flex bg-darkblue text-yellow border-2 border-solid border-darkblue dark:border-white hover:bg-transparent dark:hover:bg-transparent dark:hover:text-white hover:text-darkblue transition-all duration-300 dark:bg-white rounded-[7px] dark:text-darkblue 
                        p-[16px_17px] md:p-[8px_14px] s18:p-[16px_17px] text-lg md:text-sm s18:text-lg font-medium leading-[111%]"
              >
                Share
              </Link>
              <button className="rounded-[7px] cursor-pointer flex justify-center items-center w-full bg-yellow hover:bg-yellow/70 p-[16px_17px] md:p-[8px_14px] s18:p-[15px]  text-darkblue text-lg md:text-sm s18:text-lg font-medium leading-[111%]">
                Place Bet KShs. <span>133.04</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSlipDesktop;
