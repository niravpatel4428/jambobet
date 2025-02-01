import React, { useEffect, useRef, useState } from "react";
import symbol1 from "../../images/symbol1.png";
import symbol2 from "../../images/symbol2.png";
import symbol3 from "../../images/symbol3.png";
import symbol4 from "../../images/symbol4.png";
import symbol5 from "../../images/symbol5.png";
import symbol6 from "../../images/symbol6.png";
import dashboardimg from "../../images/dashboardimg.png";
import dashboardimg2 from "../../images/dashboardimg2.png";
import dashboardimg3 from "../../images/dashboardimg3.png";
import dropdownarrow from "../../images/dropdownarrow.svg";
import darkdropdownarrow from "../../images/darkdropdownarrow.svg";
import downarrow from "../../images/downarrow.svg";
import graydropdown from "../../images/graydropdown.svg";
import smallwhite from "../../images/smallwhite.svg";
import calender from "../../images/calender.svg";
import whitedown from "../../images/whitedown.svg";
import whitecalender from "../../images/whitecalender.svg";
import selectdropdownsvg from "../../images/selectdropdownsvg.svg";
import whiteselectdown from "../../images/whiteselectdown.svg";
import remove from "../../images/remove.svg";
import grayremove from "../../images/grayremove.svg";
import darkremove from "../../images/darkremove.svg";
import contact from "../../images/contact.svg";
import email from "../../images/email.svg";
import safari from "../../images/safari.png";
import airtel from "../../images/airtel.png";
import close from "../../images/close.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import CustomerCare from "../../Components/CustomerCare";
import Payroll from "../../Components/Payroll";
import Pagination from "../../Components/Pagination";

const Dashboard = () => {
  const [activeOdd, setActiveOdd] = useState(null); // Track the active odd-block
  const [selectedOdd, setSelectedOdd] = useState(null);
  const handleOddClick = (id) => {
    setActiveOdd((prev) => (prev === id ? null : id)); // Toggle active state
  };

  const [isLeaguesVisible, setIsLeaguesVisible] = useState(true);

  const toggleLeaguesVisibility = () => {
    setIsLeaguesVisible(!isLeaguesVisible);
  };

  const [isCountryVisible, setIsCountryVisible] = useState(true);

  const toggleCountryVisibility = () => {
    setIsCountryVisible(!isCountryVisible);
  };

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleTheme = () => {
    // Toggle the dark mode theme
    const newTheme = isDarkMode ? "light" : "dark";
    localStorage.setItem("theme", newTheme);

    // Apply the theme to the document element
    document.documentElement.classList.toggle("dark", newTheme === "dark");

    // Update the state
    setIsDarkMode(!isDarkMode);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    // Check localStorage or OS preference on page load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      // Handle default based on system preference
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDarkMode);
      document.documentElement.classList.toggle("dark", prefersDarkMode);
    }
  }, []);

  // Detect dark mode changes (e.g., using a class or preference)
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    // Check for initial mode
    checkDarkMode();

    // Add an observer for changes in the class
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });

    // Cleanup observer
    return () => observer.disconnect();
  }, []);

  const sliderRef = useRef();

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleToggles = () => {
    setIsOpen(!isOpen);
  };

  const settings = {
    arrows: false,
    dots: false,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [],
  };

  const symbols = [symbol1, symbol2, symbol3, symbol4, symbol5, symbol6];

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

  const countrys = [
    {
      name: "Albania",
      count: 4,
    },
    {
      name: "United Arab Emirates",
      count: 1,
    },
    {
      name: "Argentina",
      count: 5,
    },
    {
      name: "Australia",
      count: 22,
    },
    {
      name: "Austria Amateur",
      count: 10,
    },
    {
      name: "Azerbaijan",
      count: 5,
    },
    {
      name: "Belgium",
      count: 17,
    },
    {
      name: "Bangladesh",
      count: 3,
    },
    {
      name: "Bulgaria",
      count: 5,
    },
    {
      name: "Bahrain",
      count: 2,
    },
    {
      name: "Belarus",
      count: 7,
    },
    {
      name: "Brazil",
      count: 73,
    },
  ];

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

  const leaguesData = [
    {
      leagueTitle: "Premier League",
      titleWrps: [
        {
          matches: [
            {
              team1: "Everton FC",
              team2: "Aston Villa",
              details: [
                { text: "15/01 22:30", bold: true },
                { text: "#8587", bold: false },
                { text: "+159 more", bold: false },
              ],
              odds: [
                [
                  { label: "1", value: "3.50", colSpan: 4, highlight: false },
                  { label: "X", value: "3.35", colSpan: 4, highlight: false },
                  { label: "2", value: "2.20", colSpan: 4, highlight: true },
                ],
                [
                  {
                    label: "1 or X",
                    value: "1.67",
                    colSpan: 4,
                    highlight: false,
                  },
                  {
                    label: "1 or 2",
                    value: "1.35",
                    colSpan: 4,
                    highlight: false,
                  },
                  {
                    label: "X or 2",
                    value: "1.32",
                    colSpan: 4,
                    highlight: false,
                  },
                ],
                [
                  { label: "yes", value: "1.82", colSpan: 6, highlight: false },
                  { label: "no", value: "1.89", colSpan: 6, highlight: false },
                ],
              ],
            },
            {
              team1: "Leicester City",
              team2: "Crystal Palace",
              details: [
                { text: "15/01 22:30", bold: true },
                { text: "#5550", bold: false },
                { text: "+153 more", bold: false },
              ],
              odds: [
                [
                  { label: "1", value: "3.70", colSpan: 4, highlight: false },
                  { label: "X", value: "3.75", colSpan: 4, highlight: false },
                  { label: "2", value: "1.99", colSpan: 4, highlight: false },
                ],
                [
                  {
                    label: "1 or X",
                    value: "1.81",
                    colSpan: 4,
                    highlight: false,
                  },
                  {
                    label: "1 or 2",
                    value: "1.29",
                    colSpan: 4,
                    highlight: false,
                  },
                  {
                    label: "X or 2",
                    value: "1.29",
                    colSpan: 4,
                    highlight: false,
                  },
                ],
                [
                  { label: "yes", value: "1.62", colSpan: 6, highlight: false },
                  { label: "no", value: "2.16", colSpan: 6, highlight: false },
                ],
              ],
            },
            {
              team1: "Newcastle United",
              team2: "Wolverhampton Wanderers",
              details: [
                { text: "15/01 22:30", bold: true },
                { text: "#6406", bold: false },
                { text: "+153 more", bold: false },
              ],
              odds: [
                [
                  { label: "1", value: "1.42", colSpan: 4, highlight: false },
                  { label: "X", value: "5.20", colSpan: 4, highlight: false },
                  { label: "2", value: "7.00", colSpan: 4, highlight: false },
                ],
                [
                  {
                    label: "1 or X",
                    value: "1.13",
                    colSpan: 4,
                    highlight: false,
                  },
                  {
                    label: "1 or 2",
                    value: "1.17",
                    colSpan: 4,
                    highlight: false,
                  },
                  {
                    label: "X or 2",
                    value: "2.80",
                    colSpan: 4,
                    highlight: false,
                  },
                ],
                [
                  { label: "yes", value: "1.71", colSpan: 6, highlight: false },
                  { label: "no", value: "2.02", colSpan: 6, highlight: false },
                ],
              ],
            },
            {
              team1: "Arsenal FC",
              team2: "Tottenham Hotspur",
              details: [
                { text: "15/01 23:00", bold: true },
                { text: "#2425", bold: false },
                { text: "+159 more", bold: false },
              ],
              odds: [
                [
                  { label: "1", value: "1.38", colSpan: 4, highlight: false },
                  { label: "X", value: "5.80", colSpan: 4, highlight: false },
                  { label: "2", value: "7.20", colSpan: 4, highlight: false },
                ],
                [
                  {
                    label: "1 or X",
                    value: "1.12",
                    colSpan: 4,
                    highlight: false,
                  },
                  {
                    label: "1 or 2",
                    value: "1.16",
                    colSpan: 4,
                    highlight: false,
                  },
                  {
                    label: "X or 2",
                    value: "2.95",
                    colSpan: 4,
                    highlight: false,
                  },
                ],
                [
                  { label: "yes", value: "1.64", colSpan: 6, highlight: false },
                  { label: "no", value: "2.13", colSpan: 6, highlight: false },
                ],
              ],
            },
          ],
        },
      ],
    },
    {
      leagueTitle: "Italy / Serie A (1)",
      titleWrps: [
        {
          matches: [
            {
              team1: "Inter Milano",
              team2: "Bologna FC",
              details: [
                { text: "15/01 22:45", bold: true },
                { text: "#4373", bold: false },
                { text: "+153 more", bold: false },
              ],
              odds: [
                [
                  { label: "1", value: "1.5", colSpan: 4, highlight: false },
                  { label: "X", value: "4.70", colSpan: 4, highlight: false },
                  { label: "2", value: "6.60", colSpan: 4, highlight: false },
                ],
                [
                  {
                    label: "1 or X",
                    value: "1.14",
                    colSpan: 4,
                    highlight: false,
                  },
                  {
                    label: "1 or 2",
                    value: "1.21",
                    colSpan: 4,
                    highlight: false,
                  },
                  {
                    label: "X or 2",
                    value: "2.50",
                    colSpan: 4,
                    highlight: false,
                  },
                ],
                [
                  { label: "yes", value: "1.88", colSpan: 6, highlight: false },
                  { label: "no", value: "1.82", colSpan: 6, highlight: false },
                ],
              ],
            },
          ],
        },
      ],
    },
    {
      leagueTitle: "England / Championship (1)",
      titleWrps: [
        {
          matches: [
            {
              team1: "Blackburn Rovers",
              team2: "Portsmouth FC",
              details: [
                { text: "15/01 22:45", bold: true },
                { text: "#4913", bold: false },
                { text: "+153 more", bold: false },
              ],
              odds: [
                [
                  { label: "1", value: "1.70", colSpan: 4, highlight: false },
                  { label: "X", value: "3.90", colSpan: 4, highlight: false },
                  { label: "2", value: "5.00", colSpan: 4, highlight: false },
                ],
                [
                  {
                    label: "1 or X",
                    value: "1.19",
                    colSpan: 4,
                    highlight: false,
                  },
                  {
                    label: "1 or 2",
                    value: "1.27",
                    colSpan: 4,
                    highlight: false,
                  },
                  {
                    label: "X or 2",
                    value: "2.11",
                    colSpan: 4,
                    highlight: false,
                  },
                ],
                [
                  { label: "yes", value: "1.85", colSpan: 6, highlight: false },
                  { label: "no", value: "1.85", colSpan: 6, highlight: false },
                ],
              ],
            },
            {
              team1: "Blackburn Rovers",
              team2: "Portsmouth FC",
              details: [
                { text: "15/01 22:45", bold: true },
                { text: "#4913", bold: false },
                { text: "+153 more", bold: false },
              ],
              odds: [
                [
                  { label: "1", value: "1.70", colSpan: 4, highlight: false },
                  { label: "X", value: "3.90", colSpan: 4, highlight: false },
                  { label: "2", value: "5.00", colSpan: 4, highlight: false },
                ],
                [
                  {
                    label: "1 or X",
                    value: "1.19",
                    colSpan: 4,
                    highlight: false,
                  },
                  {
                    label: "1 or 2",
                    value: "1.27",
                    colSpan: 4,
                    highlight: false,
                  },
                  {
                    label: "X or 2",
                    value: "2.11",
                    colSpan: 4,
                    highlight: false,
                  },
                ],
                [
                  { label: "yes", value: "1.85", colSpan: 6, highlight: false },
                  { label: "no", value: "1.85", colSpan: 6, highlight: false },
                ],
              ],
            },
            {
              team1: "Zalaegerszeg TE",
              team2: "SK Lisen Brno",
              details: [
                { text: "STARTS IN • 39'", bold: true, colorRed: true },
                { text: "#5756", bold: false },
                { text: "+92 more", bold: false },
              ],
              odds: [
                [
                  { label: "1", value: "1.68", colSpan: 4, highlight: false },
                  { label: "X", value: "3.85", colSpan: 4, highlight: true },
                  { label: "2", value: "4.30", colSpan: 4, highlight: false },
                ],
                [
                  {
                    label: "1 or X",
                    value: "1.20",
                    colSpan: 4,
                    highlight: false,
                  },
                  {
                    label: "1 or 2",
                    value: "1.23",
                    colSpan: 4,
                    highlight: false,
                  },
                  {
                    label: "X or 2",
                    value: "1.97",
                    colSpan: 4,
                    highlight: false,
                  },
                ],
                [
                  { label: "yes", value: "1.68", colSpan: 6, highlight: false },
                  { label: "no", value: "2.11", colSpan: 6, highlight: false },
                ],
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <div className="pb-[70px] s15:pb-[100px]">
        <div className="max-sm:px-[0px] px-[20px] xl:px-[30px] w-full max-w-[1780px] mx-auto">
          <div className="grid grid-cols-12 gap-5 md:gap-3 s18:gap-5">
            <div className="max-md:col-span-0 max-md:hidden md:col-span-3 lg:col-span-2 s15:col-span-2">
              <div className="w-full max-w-full s18:max-w-[238px]">
                <ul className="grid grid-cols-3 place-content-between">
                  {symbols.map((symbol, index) => (
                    <li key={index} className="col-span-1 gap-[14px] mb-[12px]">
                      <img
                        src={symbol}
                        alt={`symbol-${index + 1}`}
                        className="border-solid border-white border-[2px] rounded-[8px] lg:h-[42px] lg:w-[42px] s15:h-[58px] s15:w-[58px] s18:h-[70px] s18:w-[70px] mx-auto"
                      />
                    </li>
                  ))}
                </ul>
                <div className="rounded-[6px] bg-white dark:bg-bluedarkmodecolor shadow-dashboardshadow mt-[12px]">
                  <div
                    className="dropdown-block cursor-pointer flex items-center justify-between rounded-[6px_6px_0px_0px] p-[8px_10px] xl:p-[8px_15px] bg-darkblue dark:bg-bluedarkmode"
                    onClick={toggleLeaguesVisibility}
                  >
                    <span className="text-white text-sm text-base s18:text-[18px] font-medium !leading-tight s18:leading-[155%]">
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
                          <p className="relative pl-[18px] mr-[10px] text-darkblue dark:text-white text-[12px] xl:text-sm font-medium leading-[128%] md:!leading-tight s18:leading-[128%] before:absolute before:content-[''] before:w-[9px] before:h-[9px] before:bg-yellow before:left-0 before:top-[3px] before:rounded-[50%]">
                            {league.name}
                            <span className="text-lightshadeblue dark:text-lightwhite text-[12px] font-normal block leading-[150%] md:!leading-tight s18:leading-[150%]">
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
                <div className="rounded-[6px] bg-white dark:bg-bluedarkmodecolor shadow-dashboardshadow mt-[12px]">
                  <div
                    className="dropdown-block cursor-pointer flex items-center justify-between rounded-[6px_6px_0px_0px] p-[8px_10px] xl:p-[8px_15px] bg-darkblue dark:bg-bluedarkmode"
                    onClick={toggleCountryVisibility}
                  >
                    <span className="text-white text-sm text-base s18:text-[18px] font-medium !leading-tight s18:leading-[155%]">
                      All countries
                    </span>
                    <img
                      src={isDarkMode ? darkdropdownarrow : dropdownarrow}
                      alt="dropdown"
                      className="w-[15px] xl:w-[19px]"
                    />
                  </div>
                  {isCountryVisible && (
                    <div className="country-block">
                      {countrys.map((country, index) => (
                        <div
                          key={index}
                          className="cursor-pointer flex justify-between py-2 px-3 s18:p-[10px_14px] border-b-[1px] border-solid border-bordercolor"
                        >
                          <p className="country-name relative mr-[10px] text-darkblue dark:text-white text-[12px] xl:text-sm font-medium leading-[128%]">
                            {country.name}
                            <ul className="dropdown-list">
                              <li className="text-lightshadeblue dark:text-lightwhite text-[12px] xl:text-sm font-normal block leading-[128%]  md:!leading-tight s18:leading-[128%]">
                                {country.dropdownitem}
                              </li>
                            </ul>
                          </p>
                          <span className="flex items-center text-lightshadeblue dark:text-lightwhite text-[12px] xl:text-sm font-normal block leading-[128%]">
                            {country.count}
                            <img
                              src={isDarkMode ? smallwhite : graydropdown}
                              alt="dropdown"
                              className="ml-[6px] xl:ml-[12px] w-[12px] xl:w-[15px]"
                            />
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="max-md:col-span-12 md:col-span-9 lg:col-span-10 s15:col-span-7">
              <div className="s18:ml-[-35px]">
                {/* center one img slider */}
                <div>
                  <Slider ref={sliderRef} {...settings}>
                    {imageslider.map((imageslider, index) => (
                      <div key={index}>
                        <div className="cursor-pointer">
                          <div className="max-[575px]:flex max-[575px]:justify-center lg:h-[100px] s15:h-[128px] s18:h-[162px] overflow-hidden">
                            <img
                              src={imageslider.image}
                              alt="img"
                              className="w-full h-full rounded-[7px]"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                <ul className="max-md:flex hidden flex-wrap justify-between p-[20px] bg-white dark:bg-[#182D4A]">
                  {symbols.map((symbol, index) => (
                    <li key={index} className="w-[15%]">
                      <img
                        src={symbol}
                        alt={`symbol-${index + 1}`}
                        className="w-full border-solid border-white border-[2px] rounded-[8px]"
                      />
                    </li>
                  ))}
                </ul>
                <div className="max-sm:overflow-hidden max-sm:mt-[5px] mt-3 s18:mt-[17px] rounded-[7px] bg-white dark:bg-bluedarkmodecolor shadow-dashboardshadow">
                  {/* sports / Hrs icon TODAY THU FRI SAT SUN */}
                  <div className="rounded-[6px] bg-white dark:bg-bluedarkmode shadow-dashboardshadow">
                    <div className="max-sm:flex-col max-sm:items-start max-sm:p-[15px_20px_0px] flex p-[0px_20px] items-center justify-between border-b-[1px] border-solid border-extralightblue dark:border-lightborderyellow">
                      <span className="text-mutedblue dark:text-white text-[18px] s18:text-[20px] font-bold leading-[160%]">
                        Sports
                      </span>
                      <ul className="scrollable max-sm:w-full flex gap-[30px] items-center">
                        {items.map((item, index) => (
                          <li
                            key={index}
                            className="max-sm:whitespace-nowrap max-sm:p-[15px_0px] py-3 s18:p-[27px_0px_27px] text-sm relative flex items-center cursor-pointer text-[#737373] dark:text-white s18:text-base font-medium  !leading-tight s18:leading-[143%] hover:text-darkblue dark:hover:text-yellow transition-all duration-[0.3s] after:absolute after:content-[''] after:bg-darkblue after:w-[0px] after:left-[50%] after:translate-x-[-50%] after:h-[2px] after:mx-auto after:bottom-0 after:transition-all after:duration-[0.3s] hover:after:w-full dark:hover:after:bg-yellow"
                          >
                            {item.text && <span>{item.text}</span>}
                            {item.icon && (
                              <img
                                src={
                                  isDarkMode && item.darkIcon
                                    ? item.darkIcon
                                    : item.icon
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
                                  className={
                                    i > 0 ? "min-w-[10px] ml-[4px]" : ""
                                  }
                                />
                              ))}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="max-sm:p-[15px_0px_15px_20px] p-[12px_0px_12px_20px] s18:p-[22px_0px_22px_20px]">
                      <ul className="scrollable flex max-sm:gap-[15px] sm:gap-[23px] select-none overflow-auto">
                        {sportsData.map((sport, index) => (
                          <li
                            key={index}
                            className="cursor-pointer flex items-center whitespace-nowrap text-mutedblue hover:text-darkblue dark:text-white dark:hover:text-yellow text-sm s18:text-base font-normal leading-[143%] transition-all duration-[0.3s]"
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
                    <div className="max-lg:min-w-[732px] flex items-center justify-between max-sm:p-[20px] py-3 px-5 s18:p-[15px_23px]">
                      <select className="rounded-[6px] bg-[#EFEFEF] dark:bg-bluedarkmode py-2 px-[11px] s18:p-[9px_11px] w-[247px] border-none outline-none text-[#6B7280] dark:text-white text-sm font-normal leading-[114%] appearance-none">
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
                      <select className="rounded-[6px] bg-[#EFEFEF] dark:bg-bluedarkmode py-2 px-[11px] s18:p-[9px_11px] w-[213px] border-none outline-none text-[#6B7280] dark:text-white text-sm font-normal leading-[114%] appearance-none">
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
                      <div key={leagueIndex} className="main-title-block">
                        {/* League Title */}
                        <div className="title-block flex justify-between items-center cursor-pointer max-sm:p-[10px_20px] p-[10px_23px] bg-bglightblue dark:bg-[#2F425C]">
                          <span className="text-[#404040] dark:text-white max-sm:text-[12px] text-sm font-medium leading-[128%]">
                            {league.leagueTitle}
                          </span>
                          <img
                            src={
                              isDarkMode ? whiteselectdown : selectdropdownsvg
                            }
                            alt="downarrow"
                          />
                        </div>

                        {/* Title Wrapper */}
                        {league.titleWrps.map((titleWrp, titleWrpIndex) => (
                          <div key={titleWrpIndex} className="title-wrp">
                            {titleWrp.matches.map((match, matchIndex) => (
                              <div
                                key={matchIndex}
                                className="flex justify-between items-center max-sm:p-[15px_20px] py-2 s16:py-3 px-5 s18:p-[15px_23px]"
                              >
                                {/* Teams */}
                                <div className="cursor-pointer max-lg:w-[400px]">
                                  <p className="text-mutedblue dark:text-white text-sm s18:text-base font-normal leading-[143%] md:leading-tight s18:leading-[143%]">
                                    {match.team1}
                                  </p>
                                  <p className="text-mutedblue dark:text-white text-sm s18:text-base font-normal leading-[143%] md:leading-tight s18:leading-[143%]">
                                    {match.team2}
                                  </p>
                                  <p className="flex items-center gap-[5px] mt-[5px]">
                                    {match.details.map(
                                      (detail, detailIndex) => (
                                        // <span
                                        //     key={detailIndex}
                                        //     className={`text-[#737373] dark:text-extralightwhite text-[12px] ${detail.bold ? "font-bold" : "font-normal"
                                        //         } leading-[133%]`}
                                        // >
                                        //     {detail.text}
                                        // </span>
                                        <span
                                          key={detailIndex}
                                          className={`max-sm:text-[10px] text-[12px] leading-[133%] ${
                                            detail.bold
                                              ? "font-bold"
                                              : "font-normal"
                                          } ${
                                            detail.colorRed
                                              ? "text-[#F87171] dark:text-[#F87171]"
                                              : "text-[#737373] dark:text-extralightwhite"
                                          }`}
                                        >
                                          {detail.text}
                                        </span>
                                      )
                                    )}
                                  </p>
                                </div>

                                {/* Odds */}
                                <div className="scrollable max-lg:overflow-auto w-full lg:max-w-[520px] xl:max-w-[700px] s15:max-w-[550px] s18:max-w-[645px]">
                                  <div className="w-full max-lg:min-w-[500px] lg:max-w-[520px] xl:max-w-[700px] s15:max-w-[550px] s18:max-w-[645px] grid grid-cols-12 gap-[12px] xl:gap-[18px]">
                                    {match.odds.map((group, groupIndex) => (
                                      <div
                                        key={groupIndex}
                                        className="col-span-4"
                                      >
                                        <div className="flex gap-[4px]">
                                          {group.map((odd, oddIndex) => {
                                            const isSelected =
                                              JSON.stringify(selectedOdd) ===
                                              JSON.stringify(odd);
                                            return (
                                              <div
                                                key={oddIndex}
                                                className="w-1/2"
                                              >
                                                <div
                                                  className={`odd-block cursor-pointer rounded-[6px] w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] border items-center justify-center 
                                                        ${
                                                          isSelected
                                                            ? "dark:bg-[#E2E2E2] bg-yellow  text-black  border-yellow"
                                                            : "bg-[#F3F4F6] dark:bg-[#2F425C] border-[#E5E7EB] dark:border-doubleextralightwhite"
                                                        }
                                                    `}
                                                  onClick={() =>
                                                    setSelectedOdd(odd)
                                                  }
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
                                                    }  text-[#A3A3A3] dark:text-extralightwhite text-[12px] font-normal leading-[150%] md:leading-tight s18:leading-[150%]`}
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
                                                    } text-mutedblue dark:text-white text-sm s18:text-base font-medium leading-[150%] md:leading-tight s18:leading-[150%]`}
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
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Pagination */}
              <Pagination />
            </div>
            <div className="col-span-0 hidden s15:block s15:col-span-3">
              <div className="odd-conected rounded-[7px] bg-white dark:bg-bluedarkmodecolor shadow-dashboardshadow w-full">
                <div className="flex items-center rounded-[7px_7px_0px_0px] bg-darkblue dark:bg-bluedarkmode px-[15px]">
                  <span className="border-solid border-r-[1px] border-r-doubleextralightwhite w-[50%] flex items-center gap-[7px] py-[10px] md:py-2 s18:py-[10px] text-white text-base md:text-sm s18:text-[18px] font-medium leading-[100%]">
                    <span className="flex w-8 md:w-6 s18:w-8 h-8 md:h-6 s18:h-8 justify-center items-center bg-yellow rounded-[50%] text-black text-[19px] md:text-base s18:text-[19px] font-medium !leading-none">
                      1
                    </span>{" "}
                    Betslip
                  </span>
                  <span className="cursor-pointer w-[50%] flex justify-center items-center py-[10px] md:py-2 s18:py-[10px] text-white text-base md:text-sm s18:text-[18px] font-medium leading-[100%]">
                    My bets
                  </span>
                </div>
                <span className="cursor-pointer border-solid border-b-[2px] border-b-extrathinblack dark:border-b-lightwhiteborder flex p-3 md:p-2 md:px-3 s18:p-3 bg-extralightblack dark:bg-[#2F4058] items-center gap-[12px] text-[#EF4444] text-sm font-medium leading-[128%]">
                  <img src={remove} alt="remove" />
                  Remove all
                </span>
                <div className="flex justify-between p-[10px_13px_8px] s18:p-[15px_15px_10px] border-solid border-b-[2px] border-b-extrathinblack dark:border-b-lightwhiteborder">
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
                  <span className="h-full rounded-[6px] flex justify-center items-center bg-lightyellow dark:bg-yellow dark:text-darkblue p-[5px_9px] text-darkblue text-base font-semibold leading-[125%]">
                    3.50
                  </span>
                </div>
                <div className="p-[15px_15px_0px] md:p-[12px_12px_0px] s18:p-[15px_15px_0px]">
                  <span className="text-[#EF4444] text-base md:text-sm s18:text-base font-medium leading-[112%]">
                    Stake
                  </span>
                  <div className="flex gap-[5px] mt-[5px] md:mt-3 s18:mt-[5px]">
                    <span className="cursor-pointer p-[10px_14px] xl:p-[8px_12px] s18:p-[12px_14px] s18:w-[58px] s18:h-[43px] flex justify-center items-center rounded-[6px] bg-extralightblack border border-solid border-lightblack text-black text-base md:text-sm s18:text-base font-medium !leading-none s18:leading-[112%] hover:bg-yellow hover:border-bordercolor transition-all duration-[0.3s] dark:bg-[#2F425C] dark:border-doubleextralightwhite dark:text-white dark:hover:bg-yellow dark:hover:text-darkblue">
                      20/-
                    </span>
                    <span className="cursor-pointer p-[10px_14px] xl:p-[8px_12px] s18:p-[12px_14px] s18:w-[58px] s18:h-[43px] flex justify-center items-center rounded-[6px] bg-extralightblack border border-solid border-lightblack text-black text-base md:text-sm s18:text-base font-medium !leading-none s18:leading-[112%] hover:bg-yellow hover:border-bordercolor transition-all duration-[0.3s] dark:bg-[#2F425C] dark:border-doubleextralightwhite dark:text-white dark:hover:bg-yellow dark:hover:text-darkblue">
                      50/-
                    </span>
                    <span className="cursor-pointer p-[10px_14px] xl:p-[8px_12px] s18:p-[12px_14px] s18:w-[58px] s18:h-[43px] flex justify-center items-center rounded-[6px] bg-extralightblack border border-solid border-lightblack text-black text-base md:text-sm s18:text-base font-medium !leading-none s18:leading-[112%] hover:bg-yellow hover:border-bordercolor transition-all duration-[0.3s] dark:bg-[#2F425C] dark:border-doubleextralightwhite dark:text-white dark:hover:bg-yellow dark:hover:text-darkblue">
                      100/-
                    </span>
                    <span className="cursor-pointer p-[10px_14px] xl:p-[8px_12px] s18:p-[12px_14px] s18:w-[58px] s18:h-[43px] flex justify-center items-center rounded-[6px] bg-extralightblack border border-solid border-lightblack text-black text-base md:text-sm s18:text-base font-medium !leading-none s18:leading-[112%] hover:bg-yellow hover:border-bordercolor transition-all duration-[0.3s] dark:bg-[#2F425C] dark:border-doubleextralightwhite dark:text-white dark:hover:bg-yellow dark:hover:text-darkblue">
                      500/-
                    </span>
                    <span className="flex justify-end p-[10px_14px] xl:p-[8px_12px] s18:p-[12px_14px] items-center w-full s18:h-[43px] rounded-[6px] border-solid border-bordercolor bg-darkblue text-[18px] text-base s18:text-[18px] text-white font-semibold !leading-none s18:leading-[120%] dark:text-yellow dark:border dark:border-solid dark:bg-[#3A495F] dark:border-doubleextralightwhite">
                      50
                    </span>
                  </div>
                  <div className="p-[15px_0px] md:p-[12px_0] s18:p-[15px_0px] flex flex-col gap-[10px] md:gap-2 s18:gap-[10px]">
                    <p className="flex justify-between items-center text-darkblue dark:text-white text-base md:text-sm s18:text-base font-normal !leading-none s18:!leading-[112%]">
                      Total Odds{" "}
                      <span className="text-darkblue dark:text-white text-base md:text-sm s18:text-base font-semibold !leading-none s18:!leading-[125%]">
                        3.50
                      </span>
                    </p>
                    <p className="flex justify-between items-center text-darkblue dark:text-white text-base md:text-sm s18:text-base font-normal !leading-none s18:!leading-[112%]">
                      Possible Win{" "}
                      <span className="flex gap-[5px] text-darkblue dark:text-white text-base md:text-sm s18:text-base font-semibold !leading-none s18:!leading-[125%]">
                        <span className="text-base md:text-sm s18:text-base text-thinblack dark:text-extralightwhite font-semibold !leading-none s18:!leading-[125%]">
                          KShs.
                        </span>{" "}
                        139.53
                      </span>
                    </p>
                    <p className="flex justify-between items-center text-darkblue dark:text-white text-base md:text-sm s18:text-base font-normal !leading-none s18:!leading-[112%]">
                      Amount(KShs){" "}
                      <span className="flex gap-[5px] text-darkblue dark:text-white text-base md:text-sm s18:text-base font-semibold !leading-none s18:!leading-[125%]">
                        <span className="text-base md:text-sm s18:text-base text-thinblack font-semibold !leading-none s18:!leading-[125%] dark:text-extralightwhite">
                          KShs.
                        </span>{" "}
                        86.53
                      </span>
                    </p>
                    <p className="flex justify-between items-center text-darkblue dark:text-white text-base md:text-sm s18:text-base font-normal !leading-none s18:!leading-[112%]">
                      15% Excise Tax{" "}
                      <span className="flex gap-[5px] text-darkblue dark:text-white text-base font-semibold !leading-none s18:!leading-[125%]">
                        <span className="text-base text-thinblack font-semibold !leading-none s18:!leading-[125%] dark:text-extralightwhite">
                          KShs.
                        </span>{" "}
                        13.04
                      </span>
                    </p>
                  </div>
                  <div className="rounded-[0px_0px_7px_7px] bg-bglightblue dark:bg-[#2F425C] p-[15px_15px_20px] md:p-[12px_12px_15px] s18:p-[15px_15px_20px] flex flex-col   gap-[10px] md:gap-2 s18:gap-[10px] -mx-[15px] md:-mx-[12px] s18:-mx-[15px]">
                    <p className="flex justify-between items-center text-darkblue dark:text-white text-base md:text-sm s18:text-base font-normal leading-[112%] md:leading-none s18:leading-[112%]">
                      Win{" "}
                      <span className="text-darkblue dark:text-white text-base md:text-sm s18:text-base font-semibold leading-[125%]">
                        <span className="text-base md:text-sm s18:text-base text-thinblack dark:text-extralightwhite font-semibold leading-[125%]">
                          KShs.
                        </span>{" "}
                        130.04
                      </span>
                    </p>
                    <p className="flex justify-between items-center text-darkblue dark:text-white text-base md:text-sm s18:text-base font-normal leading-[112%] md:leading-none s18:leading-[112%]">
                      20% Withholding Tax{" "}
                      <span className="flex gap-[5px] text-darkblue dark:text-white text-base md:text-sm s18:text-base font-semibold leading-[125%]">
                        <span className="text-base md:text-sm s18:text-base text-thinblack dark:text-extralightwhite font-semibold leading-[125%]">
                          KShs.
                        </span>{" "}
                        13.04
                      </span>
                    </p>
                    <p className="flex justify-between items-center text-darkblue dark:text-white text-base md:text-sm s18:text-base font-normal leading-[112%] md:leading-none s18:leading-[112%]">
                      Possible Payout{" "}
                      <span className="flex gap-[5px] text-darkblue dark:text-white text-base md:text-sm s18:text-base font-semibold leading-[125%]">
                        <span className="text-base md:text-sm s18:text-base text-thinblack font-semibold leading-[125%] dark:text-extralightwhite">
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
                        <span className="mr-[9px] w-[18px] h-[18px] rounded-[2px] border-[1px] bg-transparent border-solid border-[#A3A3A3] peer-checked:bg-green-600 peer-checked:border-green-600 flex justify-center items-center">
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
                          className={`relative w-[30px] h-[20px] flex items-center rounded-[11px] cursor-pointer ${
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
                        className="inline-flex bg-darkblue text-yellow border-[2px] border-solid border-darkblue dark:border-white hover:bg-transparent hover:bg-transparent dark:hover:bg-transparent dark:hover:text-white hover:text-darkblue transition-all duration-[0.3s] dark:bg-white rounded-[7px] dark:text-darkblue 
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
              <div>
                {" "}
                <Payroll />{" "}
              </div>
              <div>
                {" "}
                <CustomerCare />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="s15:hidden flex justify-center items-center fixed bottom-0 z-[9] left-[50%] translate-x-[-50%] w-full max-w-[428px] mx-auto rounded-[20px_20px_0px_0px] bg-[#2F425C] p-[30px_15px_12px] lg:p-[24px_15px_12px] s18:p-[40px_15px_25px]">
        <span
          className="select-none cursor-pointer border-solid  inline-flex flex-col items-center gap-[7px] p-[0px] text-white text-lg md:text-sm s18:text-[18px] font-medium leading-[100%]"
          onClick={handleToggles}
        >
          {isOpen ? (
            <>
              <span className="absolute -top-[20px] lg:-top-4 s18:top-[-22px] left-[50%] translate-x-[-50%] flex w-8 h-8 max-md:w-[38px] max-md:h-[38px] justify-center items-center bg-yellow rounded-[50%] text-black dark:bg-white text-[22px] md:text-abse s16:text-lg max-md:text-[22px] font-medium leading-[100%]">
                <img src={close} alt="Close" className="w-[14px] h-[14px]" />
              </span>
              Close
            </>
          ) : (
            <>
              <span className="absolute -top-[20px] lg:-top-4 s18:top-[-22px] left-[50%] translate-x-[-50%] flex w-8 h-8 max-md:w-[38px] max-md:h-[38px] justify-center items-center bg-yellow rounded-[50%] text-black dark:bg-white text-[22px] md:text-abse s16:text-lg max-md:text-[22px] font-medium leading-[100%]">
                1
              </span>
              Betslip
            </>
          )}
        </span>
      </div>
      <div className={`open-content ${isOpen ? "block" : "hidden"}`}>
        <div className="odd-conected overflow-auto max-h-[400px] block fixed bottom-[100px] z-[9] max-w-[428px] mx-auto left-[50%] translate-x-[-50%] s15:hidden pt-5">
          <div className=" rounded-[7px] bg-white dark:bg-bluedarkmodecolor shadow-dashboardshadow w-full">
            <div className="flex items-center rounded-[7px_7px_0px_0px] bg-darkblue dark:bg-bluedarkmode px-[15px]">
              <span className="cursor-pointer border-solid border-r-[1px] border-r-doubleextralightwhite w-[50%] flex items-center gap-[7px] p-[10px_0px] text-white text-base s18:text-lg font-medium leading-[100%]">
                <span className="flex w-[32px] h-[32px] justify-center items-center bg-yellow rounded-[50%] text-black text-base s18:text-lg font-medium leading-[100%]">
                  1
                </span>{" "}
                Betslip
              </span>
              <span className="show-content cursor-pointer w-[50%] flex justify-center items-center p-[10px_0px] text-white text-base s18:text-lg font-medium leading-[100%]">
                My bets
              </span>
            </div>
            <div>
              <span className="cursor-pointer border-solid border-b-[2px] border-b-extrathinblack dark:border-b-lightwhiteborder flex p-[12px] bg-extralightblack dark:bg-[#2F4058] items-center gap-[12px] text-[#EF4444] text-sm font-medium leading-[128%]">
                <img src={remove} alt="remove" />
                Remove all
              </span>
              <div className="flex justify-between p-[15px_12px_10px] border-solid border-b-[2px] border-b-extrathinblack dark:border-b-lightwhiteborder">
                <div className="flex gap-[12px] items-start">
                  <img
                    src={isDarkMode ? darkremove : grayremove}
                    alt="remove"
                    className="cursor-pointer mt-[3px]"
                  />
                  <div className="flex flex-col gap-[5px] cursor-pointer">
                    <p className="text-darkblue dark:text-white text-sm max-[1439px]:text-base font-medium leading-[125%]">
                      Everton FC
                    </p>
                    <p className="text-[#757575] dark:text-white text-sm max-[1439px]:text-base font-normal leading-[125%]">
                      1x2
                    </p>
                    <p className="text-[#757575] dark:text-white text-xs xl:text-sm font-normal leading-[125%]">
                      Evrrton FC - Aston Villa
                    </p>
                    <p className="text-[#757575] dark:text-white text-xs xl:text-sm font-normal leading-[125%]">
                      15/01 22:30
                    </p>
                  </div>
                </div>
                <span className="h-full rounded-[6px] flex justify-center items-center bg-lightyellow dark:bg-yellow dark:text-darkblue p-[5px_9px] text-darkblue text-sm max-[1439px]:text-base font-semibold leading-[125%]">
                  3.50
                </span>
              </div>
              <div className="p-[15px_15px_0px]">
                <span className="text-[#EF4444] text-sm max-[1439px]:text-base font-medium leading-[112%]">
                  Stake
                </span>
                <div className="flex gap-[5px] mt-[5px]">
                  <span className="cursor-pointer p-[8px_10px] max-[1439px]:p-[12px_14px] max-[1439px]:w-[58px] max-[1439px]:h-[43px] flex justify-center items-center rounded-[6px] bg-extralightblack border border-solid border-lightblack text-black text-sm max-[1439px]:text-base font-medium leading-[112%] hover:bg-yellow hover:border-bordercolor transition-all duration-[0.3s] dark:bg-[#2F425C] dark:border-doubleextralightwhite dark:text-white dark:hover:bg-yellow dark:hover:text-darkblue">
                    20/-
                  </span>
                  <span className="cursor-pointer p-[8px_10px] max-[1439px]:p-[12px_14px] max-[1439px]:w-[58px] max-[1439px]:h-[43px] flex justify-center items-center rounded-[6px] bg-extralightblack border border-solid border-lightblack text-black text-sm max-[1439px]:text-base font-medium leading-[112%] hover:bg-yellow hover:border-bordercolor transition-all duration-[0.3s] dark:bg-[#2F425C] dark:border-doubleextralightwhite dark:text-white dark:hover:bg-yellow dark:hover:text-darkblue">
                    50/-
                  </span>
                  <span className="cursor-pointer p-[8px_10px] max-[1439px]:p-[12px_14px] max-[1439px]:w-[58px] max-[1439px]:h-[43px] flex justify-center items-center rounded-[6px] bg-extralightblack border border-solid border-lightblack text-black text-sm max-[1439px]:text-base font-medium leading-[112%] hover:bg-yellow hover:border-bordercolor transition-all duration-[0.3s] dark:bg-[#2F425C] dark:border-doubleextralightwhite dark:text-white dark:hover:bg-yellow dark:hover:text-darkblue">
                    100/-
                  </span>
                  <span className="cursor-pointer p-[8px_10px] max-[1439px]:p-[12px_14px] max-[1439px]:w-[58px] max-[1439px]:h-[43px] flex justify-center items-center rounded-[6px] bg-extralightblack border border-solid border-lightblack text-black text-sm max-[1439px]:text-base font-medium leading-[112%] hover:bg-yellow hover:border-bordercolor transition-all duration-[0.3s] dark:bg-[#2F425C] dark:border-doubleextralightwhite dark:text-white dark:hover:bg-yellow dark:hover:text-darkblue">
                    500/-
                  </span>
                  <span className="flex justify-end p-[12px_14px] items-center w-full h-[43px] rounded-[6px] border-solid border-bordercolor bg-darkblue text-[18px] text-white font-normal font-semibold leading-[120%] dark:text-yellow dark:border dark:border-solid dark:bg-[#3A495F] dark:border-doubleextralightwhite">
                    50
                  </span>
                </div>
                <div className="p-[15px_0px] flex flex-col gap-[10px]">
                  <p className="flex justify-between items-center text-darkblue dark:text-white text-sm max-[1439px]:text-base font-normal leading-[112%]">
                    Total Odds{" "}
                    <span className="text-darkblue dark:text-white text-sm max-[1439px]:text-base font-semibold leading-[125%]">
                      3.50
                    </span>
                  </p>
                  <p className="flex justify-between items-center text-darkblue dark:text-white text-sm max-[1439px]:text-base font-normal leading-[112%]">
                    Possible Win{" "}
                    <span className="flex gap-[5px] text-darkblue dark:text-white text-sm max-[1439px]:text-base font-semibold leading-[125%]">
                      <span className="text-sm max-[1439px]:text-base text-thinblack dark:text-extralightwhite font-semibold leading-[125%]">
                        KShs.
                      </span>{" "}
                      139.53
                    </span>
                  </p>
                  <p className="flex justify-between items-center text-darkblue dark:text-white text-sm max-[1439px]:text-base font-normal leading-[112%]">
                    Amount(KShs){" "}
                    <span className="flex gap-[5px] text-darkblue dark:text-white text-sm max-[1439px]:text-base font-semibold leading-[125%]">
                      <span className="text-sm max-[1439px]:text-base text-thinblack font-semibold leading-[125%] dark:text-extralightwhite">
                        KShs.
                      </span>{" "}
                      86.53
                    </span>
                  </p>
                  <p className="flex justify-between items-center text-darkblue dark:text-white text-sm max-[1439px]:text-base font-normal leading-[112%]">
                    15% Excise Tax{" "}
                    <span className="flex gap-[5px] text-darkblue dark:text-white text-sm max-[1439px]:text-base font-semibold leading-[125%]">
                      <span className="text-sm max-[1439px]:text-base text-thinblack font-semibold leading-[125%] dark:text-extralightwhite">
                        KShs.
                      </span>{" "}
                      13.04
                    </span>
                  </p>
                </div>
                <div className="rounded-[0px_0px_7px_7px] bg-bglightblue dark:bg-[#2F425C] p-[15px_15px_20px] flex flex-col gap-[10px] mx-[-15px]">
                  <p className="flex justify-between items-center text-darkblue dark:text-white text-sm max-[1439px]:text-base font-normal leading-[112%]">
                    Win{" "}
                    <span className="text-darkblue dark:text-white text-sm max-[1439px]:text-base font-semibold leading-[125%]">
                      <span className="text-sm max-[1439px]:text-base text-thinblack dark:text-extralightwhite font-semibold leading-[125%]">
                        KShs.
                      </span>{" "}
                      130.04
                    </span>
                  </p>
                  <p className="flex justify-between items-center text-darkblue dark:text-white text-sm max-[1439px]:text-base font-normal leading-[112%]">
                    20% Withholding Tax{" "}
                    <span className="flex gap-[5px] text-darkblue dark:text-white text-sm max-[1439px]:text-base font-semibold leading-[125%]">
                      <span className="text-sm max-[1439px]:text-base text-thinblack dark:text-extralightwhite font-semibold leading-[125%]">
                        KShs.
                      </span>{" "}
                      13.04
                    </span>
                  </p>
                  <p className="flex justify-between items-center text-darkblue dark:text-white text-sm max-[1439px]:text-base font-normal leading-[112%]">
                    Possible Payout{" "}
                    <span className="flex gap-[5px] text-darkblue dark:text-white text-base font-semibold leading-[125%]">
                      <span className="text-sm max-[1439px]:text-base text-thinblack font-semibold leading-[125%] dark:text-extralightwhite">
                        KShs.
                      </span>{" "}
                      133.04
                    </span>
                  </p>
                  <div className="flex justify-between items-center mt-4 max-[1439px]:mt-[40px]">
                    <label className="flex items-center text-xs max-[1439px]:text-sm font-normal leading-[128%] text-thinblack dark:text-extralightwhite select-none">
                      <input
                        type="checkbox"
                        className="hidden peer"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      <span className="mr-[9px] -mt-[2px] max-[1439px]:mt-0 w-3 max-[1439px]:w-[18px] h-3 max-[1439px]:h-[18px] rounded-[2px] border-[1px] bg-transparent border-solid border-[#A3A3A3] peer-checked:bg-green-600 peer-checked:border-green-600 flex justify-center items-center">
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
                        className={`relative w-7 h-4 max-[1439px]:w-[30px] max-[1439px]:h-[20px] flex items-center rounded-[11px] cursor-pointer ${
                          isToggled ? "bg-[#11A306]" : "bg-[#A3A3A3]"
                        }`}
                      >
                        <div
                          className={`w-[12px] h-[12px] max-[1439px]:w-[14px] max-[1439px]:h-[14px] bg-white rounded-[11px] transform transition-transform ${
                            isToggled ? "translate-x-3" : "translate-x-1"
                          }`}
                        ></div>
                      </div>
                      <span className="text-xs max-[1439px]:text-sm text-thinblack font-medium leading-[128%] dark:text-extralightwhite">
                        Keep betslip
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-[9px] mt-[15px] md:mt-3 s18:mt-[15px]">
                    <Link
                      to="/"
                      className="inline-flex bg-darkblue text-yellow border-[2px] border-solid border-darkblue dark:border-white hover:bg-transparent hover:bg-transparent dark:hover:bg-transparent dark:hover:text-white hover:text-darkblue transition-all duration-[0.3s] dark:bg-white rounded-[7px] dark:text-darkblue p-[16px_17px] md:p-[10px_14px] s18:p-[16px_17px] text-sm font-medium leading-[111%]"
                    >
                      Share
                    </Link>
                    <span className="rounded-[7px] flex justify-center items-center w-full bg-yellow p-[15px] md:p-[10px_14px] s18:p-[15px] text-darkblue text-sm font-medium leading-[111%]">
                      Place Bet KShs. <span>133.04</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

const imageslider = [
  { image: dashboardimg },
  { image: dashboardimg2 },
  { image: dashboardimg3 },
];

// const itemsArray = [
//     {
//         name: 'My bets',
//     }
// ];
