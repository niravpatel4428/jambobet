import React from "react";
import whiteselectdown from "../../../images/whiteselectdown.svg";
import selectdropdownsvg from "../../../images/selectdropdownsvg.svg";
import { leaguesData } from "../data";
import DetailNavbar from "./DetailNavbar";
import HomeLayout from "../HomeLayout";

const MatchDetail = ({ setShowDetail, showDetail }) => {
  const match = leaguesData[0].titleWrps[0].matches[0];
  return (
    <HomeLayout>
      <DetailNavbar showDetail={showDetail} setShowDetail={setShowDetail} />
      <div className="bg-white dark:bg-bluedarkmodecolor shadow-dashboardshadow sm:!rounded-[0_0_12px_12px]">
        {/* match profile  */}
        <div className="w-full">
          <div className="w-full flex justify-between items-center cursor-pointer max-sm:p-[10px_15px] p-[10px_23px] bg-bglightblue dark:bg-[#0c224060]">
            <span class="text-[#404040] dark:text-white max-sm:text-xs text-sm font-medium leading-[128%]">
              1X2
            </span>
            <img src={selectdropdownsvg} alt="downarrow" className="w-4" />
          </div>
          <div className="p-3 s18:p-[15px_23px] cursor-pointer w-full flex gap-1">
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] border items-center justify-center bg-[#F3F4F6] dark:bg-[#2F425C] border-[#E5E7EB] dark:border-doubleextralightwhite ">
              <span class="   text-[#A3A3A3] dark:text-extralightwhite text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                1
              </span>
              <span class=" text-mutedblue dark:text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                1.70
              </span>
            </div>
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] border items-center justify-center bg-[#F3F4F6] dark:bg-[#2F425C] border-[#E5E7EB] dark:border-doubleextralightwhite ">
              <span class="   text-[#A3A3A3] dark:text-extralightwhite text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                X
              </span>
              <span class=" text-mutedblue dark:text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                3.90
              </span>
            </div>
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3 flex flex-col gap-[4px] border items-center justify-center bg-[#F3F4F6] dark:bg-[#2F425C] border-[#E5E7EB] dark:border-doubleextralightwhite ">
              <span class="   text-[#A3A3A3] dark:text-extralightwhite text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                2
              </span>
              <span class=" text-mutedblue dark:text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                5.00
              </span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full flex justify-between items-center cursor-pointer max-sm:p-[10px_15px] p-[10px_23px] bg-bglightblue dark:bg-[#0c224060]">
            <span class="text-[#404040] dark:text-white max-sm:text-xs text-sm font-medium leading-[128%]">
              Double chance
            </span>
            <img src={selectdropdownsvg} alt="downarrow" className="w-4" />
          </div>
          <div className="p-3 s18:p-[15px_23px] cursor-pointer w-full flex gap-1">
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] border items-center justify-center bg-[#F3F4F6] dark:bg-[#2F425C] border-[#E5E7EB] dark:border-doubleextralightwhite ">
              <span class="   text-[#A3A3A3] dark:text-extralightwhite text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                1 or X
              </span>
              <span class=" text-mutedblue dark:text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                1.29
              </span>
            </div>
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] border items-center justify-center bg-[#F3F4F6] dark:bg-[#2F425C] border-[#E5E7EB] dark:border-doubleextralightwhite ">
              <span class="   text-[#A3A3A3] dark:text-extralightwhite text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                1 or 2
              </span>
              <span class=" text-mutedblue dark:text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                1.37
              </span>
            </div>
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3 flex flex-col gap-[4px] border items-center justify-center bg-[#F3F4F6] dark:bg-[#2F425C] border-[#E5E7EB] dark:border-doubleextralightwhite ">
              <span class="   text-[#A3A3A3] dark:text-extralightwhite text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                X or 2
              </span>
              <span class=" text-mutedblue dark:text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                1.35
              </span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full flex justify-between items-center cursor-pointer max-sm:p-[10px_15px] p-[10px_23px] bg-bglightblue dark:bg-[#0c224060]">
            <span class="text-[#404040] dark:text-white max-sm:text-xs text-sm font-medium leading-[128%] uppercase">
              GG/Ng
            </span>
            <img src={selectdropdownsvg} alt="downarrow" className="w-4" />
          </div>
          <div className="p-3 s18:p-[15px_23px] cursor-pointer w-full flex gap-1">
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-[#E5E7EB] dark:border-doubleextralightwhite bg-[#F3F4F6] dark:bg-[#2F425C]">
              <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                <span class="text-[#A3A3A3] dark:text-extralightwhite text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                  yes
                </span>
                <span className="ml-[2px] mb-[1px] w-0 h-0 border-b-[9px] border-b-[#11A306] border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent"></span>
              </div>
              {/* highlight is true and check hight is true then green another red */}
              <span class=" text-mutedblue dark:text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                1.29
              </span>
            </div>
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-[#E5E7EB] dark:border-doubleextralightwhite bg-[#F3F4F6] dark:bg-[#2F425C]">
              <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                <span class="text-[#A3A3A3] dark:text-extralightwhite text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                  No
                </span>
                {/* highlight is true and check hight is true then green another red */}
                <span className="ml-[2px] mb-[1px] w-0 h-0 border-t-[9px] border-t-[#ec3737] border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent"></span>
              </div>
              <span class=" text-mutedblue dark:text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                1.37
              </span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full flex justify-between items-center cursor-pointer max-sm:p-[10px_15px] p-[10px_23px] bg-bglightblue dark:bg-[#0c224060]">
            <span class="text-[#404040] dark:text-white max-sm:text-xs text-sm font-medium leading-[128%] uppercase">
              Draw no bet
            </span>
            <img src={selectdropdownsvg} alt="downarrow" className="w-4" />
          </div>
          <div className="p-3 s18:p-[15px_23px] cursor-pointer w-full flex gap-1">
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-[#E5E7EB] dark:border-doubleextralightwhite bg-[#F3F4F6] dark:bg-[#2F425C]">
              <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                <span class="text-[#A3A3A3] dark:text-extralightwhite text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                  1
                </span>
              </div>
              <span class=" text-mutedblue dark:text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                2.24
              </span>
            </div>
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-[#E5E7EB] dark:border-doubleextralightwhite bg-[#F3F4F6] dark:bg-[#2F425C]">
              <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                <span class="text-[#A3A3A3] dark:text-extralightwhite text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                  2
                </span>
              </div>
              <span class=" text-mutedblue dark:text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                1.60
              </span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full flex justify-between items-center cursor-pointer max-sm:p-[10px_15px] p-[10px_23px] bg-bglightblue dark:bg-[#0c224060]">
            <span class="text-[#404040] dark:text-white max-sm:text-xs text-sm font-medium leading-[128%] uppercase">
              Over/Under
            </span>
            <img src={selectdropdownsvg} alt="downarrow" className="w-4" />
          </div>
          <div className="flex flex-col gap-1 py-3">
            <div className="px-3 s18:p-[0px_23px] cursor-pointer w-full flex gap-1">
              <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-[#E5E7EB] dark:border-doubleextralightwhite bg-[#F3F4F6] dark:bg-[#2F425C]">
                <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                  <span class="text-[#A3A3A3] dark:text-extralightwhite text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                    over 0.5
                  </span>
                </div>
                <span class=" text-mutedblue dark:text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                  1.6
                </span>
              </div>
              <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-[#E5E7EB] dark:border-doubleextralightwhite bg-[#F3F4F6] dark:bg-[#2F425C]">
                <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                  <span class="text-[#A3A3A3] dark:text-extralightwhite text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                    over 0.5
                  </span>
                </div>
                <span class=" text-mutedblue dark:text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                  7.60
                </span>
              </div>
            </div>
            <div className="px-3 s18:p-[0px_23px] cursor-pointer w-full flex gap-1">
              <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-[#E5E7EB] dark:border-doubleextralightwhite bg-[#F3F4F6] dark:bg-[#2F425C]">
                <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                  <span class="text-[#A3A3A3] dark:text-extralightwhite text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                    over 1.5
                  </span>
                </div>
                <span class=" text-mutedblue dark:text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                  1.6
                </span>
              </div>
              <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-[#E5E7EB] dark:border-doubleextralightwhite bg-[#F3F4F6] dark:bg-[#2F425C]">
                <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                  <span class="text-[#A3A3A3] dark:text-extralightwhite text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                    over 1.5
                  </span>
                </div>
                <span class=" text-mutedblue dark:text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                  7.60
                </span>
              </div>
            </div>
            <div className="px-3 s18:p-[0px_23px] cursor-pointer w-full flex gap-1">
              <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-[#E5E7EB] dark:border-doubleextralightwhite bg-[#F3F4F6] dark:bg-[#2F425C]">
                <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                  <span class="text-[#A3A3A3] dark:text-extralightwhite text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                    over 2.5
                  </span>
                </div>
                <span class=" text-mutedblue dark:text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                  1.6
                </span>
              </div>
              <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-[#E5E7EB] dark:border-doubleextralightwhite bg-[#F3F4F6] dark:bg-[#2F425C]">
                <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                  <span class="text-[#A3A3A3] dark:text-extralightwhite text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                    over 2.5
                  </span>
                </div>
                <span class=" text-mutedblue dark:text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                  7.60
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full flex justify-between items-center cursor-pointer max-sm:p-[10px_15px] p-[10px_23px] bg-bglightblue dark:bg-[#0c224060]">
            <span class="text-[#404040] dark:text-white max-sm:text-xs text-sm font-medium leading-[128%] uppercase">
              1st goal
            </span>
            <img src={selectdropdownsvg} alt="downarrow" className="w-4" />
          </div>
          <div className="p-3 s18:p-[15px_23px] cursor-pointer w-full flex gap-1">
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-[#E5E7EB] dark:border-doubleextralightwhite bg-[#F3F4F6] dark:bg-[#2F425C]">
              <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                <span class="text-[#A3A3A3] dark:text-extralightwhite text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                  none
                </span>
              </div>
              <span class=" text-mutedblue dark:text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                9.40
              </span>
            </div>
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-[#E5E7EB] dark:border-doubleextralightwhite bg-[#F3F4F6] dark:bg-[#2F425C]">
              <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                <span class="text-[#A3A3A3] dark:text-extralightwhite text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                  1
                </span>
                <span className="ml-[2px] mb-[1px] w-0 h-0 border-b-[9px] border-b-[#11A306] border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent"></span>
              </div>

              <span class=" text-mutedblue dark:text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                1.29
              </span>
            </div>
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-[#E5E7EB] dark:border-doubleextralightwhite bg-[#F3F4F6] dark:bg-[#2F425C]">
              <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                <span class="text-[#A3A3A3] dark:text-extralightwhite text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                  2
                </span>

                <span className="ml-[2px] mb-[1px] w-0 h-0 border-t-[9px] border-t-[#ec3737] border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent"></span>
              </div>
              <span class=" text-mutedblue dark:text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                1.37
              </span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full flex justify-between items-center cursor-pointer max-sm:p-[10px_15px] p-[10px_23px] bg-bglightblue dark:bg-[#0c224060]">
            <span class="text-[#404040] dark:text-white max-sm:text-xs text-sm font-medium leading-[128%] uppercase">
              Last goal
            </span>
            <img src={selectdropdownsvg} alt="downarrow" className="w-4" />
          </div>
          <div className="p-3 s18:p-[15px_23px] cursor-pointer w-full flex gap-1">
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-[#E5E7EB] dark:border-doubleextralightwhite bg-[#F3F4F6] dark:bg-[#2F425C]">
              <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                <span class="text-[#A3A3A3] dark:text-extralightwhite text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                  none
                </span>
              </div>
              <span class=" text-mutedblue dark:text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                9.40
              </span>
            </div>
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-[#E5E7EB] dark:border-doubleextralightwhite bg-[#F3F4F6] dark:bg-[#2F425C]">
              <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                <span class="text-[#A3A3A3] dark:text-extralightwhite text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                  1
                </span>
                <span className="ml-[2px] mb-[1px] w-0 h-0 border-b-[9px] border-b-[#11A306] border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent"></span>
              </div>

              <span class=" text-mutedblue dark:text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                1.29
              </span>
            </div>
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-[#E5E7EB] dark:border-doubleextralightwhite bg-[#F3F4F6] dark:bg-[#2F425C]">
              <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                <span class="text-[#A3A3A3] dark:text-extralightwhite text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                  2
                </span>

                <span className="ml-[2px] mb-[1px] w-0 h-0 border-t-[9px] border-t-[#ec3737] border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent"></span>
              </div>
              <span class=" text-mutedblue dark:text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                1.37
              </span>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default MatchDetail;
