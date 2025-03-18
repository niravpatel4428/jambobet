import React, { useState } from "react";
import darkdropdownarrow from "../../../images/darkdropdownarrow.svg";
import dropdownarrow from "../../../images/dropdownarrow.svg";

const leagues = [
  {
    name: "UEFA Champions League",
    country: "Internationals",
    count: 18,
  },
  {
    name: "Premier League",
    country: "England",
    count: 16,
  },
  {
    name: "EFL Cup",
    country: "England",
    count: 2,
  },
  {
    name: "Serie A",
    country: "Italy",
    count: 21,
  },
  {
    name: "Eurocup",
    country: "Internationals",
    count: 7,
  },
  {
    name: "UEFA Europa League",
    country: "Internationals",
    count: 18,
  },
];

const TopLeague = () => {
  const [isLeaguesVisible, setIsLeaguesVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleLeaguesVisibility = () => {
    setIsLeaguesVisible(!isLeaguesVisible);
  };
  return (
    <>
      <div className="rounded-md bg-white dark:bg-bluedarkmodecolor shadow-dashboardshadow mt-3">
        <div
          className="dropdown-block cursor-pointer flex items-center justify-between rounded-[6px_6px_0px_0px] p-[8px_10px] xl:p-[8px_15px] bg-darkblue dark:bg-bluedarkmode"
          onClick={toggleLeaguesVisibility}
        >
          <span className="text-white text-sm text-base s18:text-lg font-medium !leading-tight s18:leading-[155%]">
            Top Leagues
          </span>
          <img
            src={isDarkMode ? darkdropdownarrow : dropdownarrow}
            alt="dropdown"
            className="w-[15px] xl:w-[19px]"
          />
        </div>
        {isLeaguesVisible && (
          <div className="leagues-block max-s18:pt-1">
            {leagues.map((league, index) => (
              <div
                key={index}
                className="cursor-pointer flex justify-between py-2 px-3 s18:p-[10px_14px] border-b-[1px] border-solid border-bordercolor"
              >
                <p className="relative pl-[18px] mr-[10px] text-darkblue dark:text-white text-xs xl:text-sm font-medium leading-[128%] md:!leading-tight s18:leading-[128%] before:absolute before:content-[''] before:w-[9px] before:h-[9px] before:bg-yellow before:left-0 before:top-[3px] before:rounded-[50%]">
                  {league.name}
                  <span className="text-lightshadeblue dark:text-lightwhite text-xs font-normal block leading-normal md:!leading-tight s18:leading-normal">
                    {league.country}
                  </span>
                </p>
                <span className="text-lightshadeblue dark:text-lightwhite text-sm font-normal block leading-[128%]">
                  {league.count}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TopLeague;
