import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import downarrow from "../../../images/downarrow.svg";
import calender from "../../../images/calender.svg";
import whitedown from "../../../images/whitedown.svg";
import whitecalender from "../../../images/whitecalender.svg";
import selectdropdownsvg from "../../../images/selectdropdownsvg.svg";
import whiteselectdown from "../../../images/whiteselectdown.svg";
import { leaguesData } from "../data";

const sportsData = [
  { name: "Soccer", count: 135 },
  { name: "eSports", count: 27 },
  { name: "Basketball", count: 45 },
  { name: "Ice Hockey", count: 41 },
  { name: "Volleyball", count: 35 },
  { name: "Handball", count: 31 },
  { name: "Futsal", count: 13 },
  { name: "Darts", count: 8 },
  { name: "Waterpolo", count: 8 },
];

const Match = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeOdd, setActiveOdd] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const [selectedOdd, setSelectedOdd] = useState(
    leaguesData[0]?.titleWrps[0]?.matches[0]?.odds[0][0] || null
  );
  const handleOddClick = (id) => {
    setActiveOdd((prev) => (prev === id ? null : id));
  };
  const items = [
    { text: "Hrs", icon: downarrow, darkIcon: whitedown },
    { text: "TODAY" },
    { text: "THU" },
    { text: "FRI" },
    { text: "SAT" },
    { text: "SUN" },
    {
      text: "",
      icons: isDarkMode ? [whitecalender, whitedown] : [calender, downarrow],
    },
  ];
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 639);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="max-sm:mt-0 mt-3 s18:mt-[17px] sm:rounded-lg bg-white dark:bg-bluedarkmodecolor shadow-dashboardshadow">
        <div className="sticky top-10 sm:top-12 md:top-20 xl:top-16 s15:top-16 s18:top-20 rounded-md bg-white dark:bg-bluedarkmode shadow-dashboardshadow">
          <div className="max-sm:flex-col max-sm:items-start max-sm:p-[8px_15px_0px] flex p-[0px_20px] items-center justify-between border-b-[1px] border-solid border-extralightblue dark:border-lightborderyellow">
            <span className="text-mutedblue dark:text-white text-base s18:text-xl font-bold leading-none">
              Sports
            </span>
            <ul className="scrollable max-sm:w-full flex gap-5 items-center justify-between">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="max-sm:whitespace-nowrap max-sm:p-[5px_0px] py-3 s18:p-[27px_0px_27px] text-sm relative flex items-center cursor-pointer text-[#737373] dark:text-white s18:text-base font-medium  !leading-tight s18:leading-[143%] hover:text-darkblue dark:hover:text-yellow transition-all duration-300 after:absolute after:content-[''] after:bg-darkblue after:w-[0px] after:left-[50%] after:translate-x-[-50%] after:h-[2px] after:mx-auto after:bottom-0 after:transition-all after:duration-300 hover:after:w-full dark:hover:after:bg-yellow"
                >
                  {item.text && <span>{item.text}</span>}
                  {item.icon && (
                    <img
                      src={
                        isDarkMode && item.darkIcon ? item.darkIcon : item.icon
                      }
                      alt="icon"
                      className="min-w-[10px] ml-[4px]"
                    />
                  )}
                  {item.icons &&
                    item.icons.map((icon, i) => (
                      <img
                        key={i}
                        src={icon}
                        alt="icon"
                        className={i > 0 ? "min-w-[10px] ml-[4px]" : ""}
                      />
                    ))}
                </li>
              ))}
            </ul>
          </div>
          <div className="max-sm:p-[8px_0px_8px_15px] p-[12px_0px_12px_20px] s18:p-[22px_0px_22px_20px]">
            <ul className="scrollable flex max-sm:gap-[15px] sm:gap-[23px] overflow-auto min-h-5">
              {sportsData.map((sport, index) => (
                <li
                  key={index}
                  className="cursor-pointer flex items-center whitespace-nowrap text-mutedblue hover:text-darkblue dark:text-white dark:hover:text-yellow text-sm s18:text-base font-normal leading-[143%] transition-all duration-300 "
                >
                  {sport.name}
                  <span className="pt-[2px] min-w-[33px] min-h-[20px] ml-[5px] rounded-[23px] bg-yellow flex justify-center items-center text-white text-sm font-medium leading-[128%] last:mr-3b">
                    {sport.count}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* leage / 1*2 / double chance header */}
        <div className="scrollable">
          <div className="max-lg:min-w-[732px] flex items-center justify-between max-sm:p-[10px_15px] py-3 px-5 s18:p-[15px_23px]">
            <select className="rounded-md bg-[#EFEFEF] dark:bg-bluedarkmode py-2 px-[11px] s18:p-[9px_11px] w-[247px] border-none outline-none text-[#6B7280] dark:text-white text-sm font-normal leading-[114%] appearance-none">
              <option value="" selected className="">
                Sort by league
              </option>
              <option value="option1" className="">
                Sort by time
              </option>
            </select>
            <span className="text-[#6B7280] dark:text-white text-sm font-normal leading-[128%]">
              1X2
            </span>
            <span className="text-[#6B7280] dark:text-white text-sm font-normal leading-[128%]">
              Double chance
            </span>
            <select className="rounded-md bg-[#EFEFEF] dark:bg-bluedarkmode py-2 px-[11px] s18:p-[9px_11px] w-[213px] border-none outline-none text-[#6B7280] dark:text-white text-sm font-normal leading-[114%] appearance-none">
              <option value="" selected className="">
                GG/NG
              </option>
              <option value="option1" className="">
                To qualify
              </option>
            </select>
          </div>
        </div>
        {/* leage data */}
        <div className="main-dashboard-block">
          {leaguesData.map((league, leagueIndex) => (
            <div key={leagueIndex} className={`main-title-block`}>
              {/* League Title */}
              <div className="title-block flex justify-between items-center cursor-pointer max-sm:p-[10px_15px] p-[10px_23px] bg-bglightblue dark:bg-[#2F425C]">
                <span className="text-[#404040] dark:text-white max-sm:text-xs text-sm font-medium leading-[128%]">
                  {league.leagueTitle}
                </span>
                <img
                  src={isDarkMode ? whiteselectdown : selectdropdownsvg}
                  alt="downarrow"
                />
              </div>

              {/* Title Wrapper */}
              {league.titleWrps.map((titleWrp, titleWrpIndex) => (
                <div key={titleWrpIndex} className={`title-wrp`}>
                  {titleWrp.matches.map((match, matchIndex) => (
                    <Link
                      to="/matchprofile"
                      key={matchIndex}
                      className="flex justify-between items-center max-sm:p-[12px_12px] py-2 s16:py-3 px-5 s18:p-[15px_23px] cursor-pointer"
                    >
                      {/* Teams */}
                      <div className="cursor-pointer max-sm:w-1/2 max-lg:w-[400px] pr-1">
                        <p className="text-mutedblue dark:text-white text-xs sm:text-sm s18:text-base font-normal leading-[143%] md:leading-tight s18:leading-[143%]">
                          {match.team1}
                        </p>
                        <p className="text-mutedblue dark:text-white text-xs sm:text-sm s18:text-base font-normal leading-[143%] md:leading-tight s18:leading-[143%]">
                          {match.team2}
                        </p>
                        <p className="flex items-center gap-[5px] mt-[5px]">
                          {match.details.map((detail, detailIndex) => (
                            <span
                              key={detailIndex}
                              className={`max-sm:text-[9px] text-xs leading-[133%] ${
                                detail.bold ? "font-bold" : "font-normal"
                              } ${
                                detail.colorRed
                                  ? "text-[#F87171] dark:text-[#F87171]"
                                  : "text-[#737373] dark:text-extralightwhite"
                              }`}
                            >
                              {detail.text}
                            </span>
                          ))}
                        </p>
                      </div>

                      {/* Odds */}
                      <div className="scrollable max-sm:w-full max-sm:max-w-[50%] max-lg:overflow-auto w-full lg:max-w-[520px] xl:max-w-[700px] s15:max-w-[550px] s18:max-w-[645px]">
                        <div className="w-full max-sm:min-w-full max-lg:min-w-[550px] lg:max-w-[520px] xl:max-w-[700px] s15:max-w-[550px] s18:max-w-[645px] sm:grid sm:grid-cols-12 gap-[12px] xl:gap-[18px]">
                          {match.odds.map((group, groupIndex) => (
                            <div key={groupIndex} className="sm:col-span-4">
                              <div className="flex gap-[4px] max-sm:w-full">
                                {group
                                  .filter((odd) => {
                                    if (isMobile) {
                                      return odd.mobileVisible;
                                    }
                                    return true;
                                  })
                                  .map((odd, oddIndex) => {
                                    const isSelected =
                                      JSON.stringify(selectedOdd) ===
                                      JSON.stringify(odd);
                                    return (
                                      <div
                                        key={oddIndex}
                                        className="w-3/4 sm:w-1/2"
                                      >
                                        <div
                                          className={`odd-block cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] border items-center justify-center 
                                                                ${
                                                                  isSelected
                                                                    ? "dark:bg-[#E2E2E2] bg-yellow  text-black  border-yellow"
                                                                    : "bg-[#F3F4F6] dark:bg-[#2F425C] border-[#E5E7EB] dark:border-doubleextralightwhite"
                                                                }
                                                            `}
                                          onClick={() => setSelectedOdd(odd)}
                                        >
                                          <span
                                            className={`${
                                              odd.highlight
                                                ? "flex items-center gap-[1px]"
                                                : ""
                                            } ${
                                              isSelected
                                                ? "!text-#A3A3A3 dark:!text-darkblue"
                                                : ""
                                            }  text-[#A3A3A3] dark:text-extralightwhite text-xs font-normal leading-normal md:leading-tight s18:leading-normal`}
                                          >
                                            {odd.label}
                                            {odd.highlight && (
                                              <span className="ml-[2px] mb-[1px] w-0 h-0 border-b-[9px] border-b-[#11A306] border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent"></span>
                                            )}
                                          </span>
                                          <span
                                            className={`${
                                              isSelected
                                                ? "!text-[#374151] dark:!text-darkblue"
                                                : ""
                                            } text-mutedblue dark:text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal`}
                                          >
                                            {odd.value}
                                          </span>
                                        </div>
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Match;
