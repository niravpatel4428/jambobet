import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import logo from "../images/logo.png";
import search from "../images/search.svg"; 
import light from "../images/light.svg";
import dark from "../images/dark.svg";
import darksearch from "../images/darksearch.svg";
import login from "../images/login.svg";
import Register from "./Register";
import Login from "./Login";

const Header = () => { 

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenRGS, setIsModalOpenRGS] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModalRGS = () => {
    setIsModalOpenRGS(true);
  };
  const closeModalRGS = () => {
    setIsModalOpenRGS(false);
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
  useEffect(() => {
    if (isCollapsed) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isCollapsed]);

  return (
    <>
      <section className="fixed top-0 left-0 right-0 w-full bg-[#0C2240] dark:bg-[#30435D] z-50 max-[420px]:py-[25px] max-md:py-[32px] md:py-[20px] s15:py-[35px]">
        <div className="flex max-xl:justify-between items-center w-full max-w-[1780px] mx-auto max-sm:px-[15px] px-[30px]">
          <div className="max-420: relative z-[100] flex max-xl:pl-[40px]">
            <Link to="/" className="inline-block">
              <img src={logo} alt="logo" className="object-cover max-[420px]:w-[75px] max-lg:w-[130px] lg:w-[150px]
              s16:w-[180px]" />
            </Link>
          </div>
          <div className="max-xl:flex max-md:items-center xl:hidden gap-[10px]">
            <span className="max-[420px]:w-[30px] max-[420px]:h-[30px] max-[420px]:p-[8px] md:hidden max-md:flex justify-center items-center bg-white rounded-[5px] w-[40px] h-[40px] cursor-pointer">
              <img
                src={isDarkMode ? search : search}
                alt="search"
                className=""
              />
            </span>
            <div className="relative max-md:hidden">
              <input
                type="search"
                className="h-full xl:w-[150px] s16:w-full md:p-[11px_40px_11px_12px] s16:p-[11px_40px_11px_15px] rounded-[5px] bg-white dark:bg-[#4F5F75] shadow-inputshadow placeholder:text-lightblue placeholder:text-[16px] placeholder:leading-[150%] dark:placeholder:text-white dark:text-white"
                placeholder="Search.."
              />
              <img
                src={isDarkMode ? darksearch : search}
                alt="search"
                className="absolute w-[18px] h-[18px] top-[50%] translate-y-[-50%] right-[15px] z-50"
              />
            </div>
            <Link
              to="/"
              className="max-[420px]:h-[30px] max-[420px]:text-[12px] max-md:min-w-[70px] max-md:h-[40px] min-w-[88px] bg-yellow border border-solid border-[2px] border-transparent rounded-[5px] inline-flex items-center justify-center p-[11px_8px] max-md:text-[14px] text-[16px] leading-[150%] font-medium transition-all duration-[0.3s] hover:bg-transparent hover:border-yellow hover:text-yellow"
            >
              Join Now
            </Link>
            <Link
              to="/"
              className=" max-md:dark:hover:bg-white max-md:hover:bg-white max-md:dark:bg-white max-[420px]:h-[30px] max-md:hover:bg-white max-md:text-[0px] max-md:min-w-[40px] max-md:h-[40px] min-w-[88px] bg-white shadow-inputshadow border border-solid border-[2px] border-transparent rounded-[5px] inline-flex items-center justify-center p-[11px_8px] text-[16px] leading-[150%] font-medium transition-all duration-[0.3s] dark:bg-[#4F5F75] dark:text-white hover:bg-transparent hover:border-white hover:text-white dark:hover:border-white dark:hover:bg-transparent"
            >
              Login
              <img
                src={isDarkMode ? login : login}
                alt="search"
                className="md:hidden"
              />
            </Link>
            <button
              onClick={toggleTheme}
              className="max-sm:hidden max-md:w-[40px] max-md:h-[40px] w-[48px] h-[50px] flex justify-center items-center p-[10px] bg-white dark:bg-blueshade rounded-[5px]"
            >
              <img
                src={isDarkMode ? dark : light}
                alt={"Light Mode"}
                className=""
              />
            </button>
          </div>
          {/* big screen links */}
          <div className={`hidden xl:flex justify-between w-full`}>
            <ul className="flex flex-row items-center xl:gap-[18px] s16:gap-[30px] xl:mt-0 mx-auto">
              <li className="">
                {/* Native scrolling using hash links */}
                <Link className="text-white text-[16px] leading-[150%] font-normal hover:text-yellow transtition-all duration-[0.3s]">
                  Sports Betting
                </Link>
              </li>
              <li className="">
                <Link className="text-white text-[16px] leading-[150%] font-normal hover:text-yellow transtition-all duration-[0.3s]">
                  Live Betting
                </Link>
              </li>
              <li className="">
                <Link className="text-white text-[16px] leading-[150%] font-normal hover:text-yellow transtition-all duration-[0.3s]">
                  OdiLeague
                </Link>
              </li>
              <li className="">
                <Link className="text-white text-[16px] leading-[150%] font-normal hover:text-yellow transtition-all duration-[0.3s]">
                  Casino
                </Link>
              </li>
              <li className="">
                <Link className="text-white text-[16px] leading-[150%] font-normal hover:text-yellow transtition-all duration-[0.3s]">
                  Jackpots
                </Link>
              </li>
              <li className="">
                <Link className="text-white text-[16px] leading-[150%] font-normal hover:text-yellow transtition-all duration-[0.3s]">
                  Livescore
                </Link>
              </li>
              <li className="">
                <Link className="text-white text-[16px] leading-[150%] font-normal hover:text-yellow transtition-all duration-[0.3s]">
                  Promotions
                </Link>
              </li>
            </ul>
            <div className="flex gap-[10px]">
              <div className="relative">
                <input
                  type="search"
                  className="h-full xl:w-[150px] s16:w-full xl:p-[11px_40px_11px_12px] s16:p-[11px_40px_11px_15px] rounded-[5px] bg-white dark:bg-[#4F5F75] shadow-inputshadow placeholder:text-lightblue placeholder:text-[16px] placeholder:leading-[150%] dark:placeholder:text-white dark:text-white"
                  placeholder="Search.."
                />
                <img
                  src={isDarkMode ? darksearch : search}
                  alt="search"
                  className="absolute w-[18px] h-[18px] top-[50%] translate-y-[-50%] right-[15px] z-50"
                />
              </div>
              <Link
                onClick={openModalRGS}
                className="min-w-[88px] bg-yellow border border-solid border-[2px] border-transparent rounded-[5px] inline-flex items-center justify-center p-[11px_8px] text-[16px] leading-[150%] font-medium transition-all duration-[0.3s] hover:bg-transparent hover:border-yellow hover:text-yellow"
               
              >
                Join Now
              </Link>
              <Link
                onClick={openModal}
                className="min-w-[88px] bg-white shadow-inputshadow border border-solid border-[2px] border-transparent rounded-[5px] inline-flex items-center justify-center p-[11px_8px] text-[16px] leading-[150%] font-medium transition-all duration-[0.3s] dark:bg-[#4F5F75] dark:text-white hover:bg-transparent hover:border-white hover:text-white dark:hover:border-white dark:hover:bg-transparent"
              >
                Login
              </Link>
              <button
                onClick={toggleTheme}
                className="w-[48px] h-[50px] flex justify-center items-center p-[10px] bg-white dark:bg-blueshade rounded-[5px]"
              >
                <img
                  src={isDarkMode ? dark : light}
                  alt={"Light Mode"}
                  className=""
                />
              </button>
            </div>
          </div>
          {/* toggle button */}
          <button
            className="rounded absolute z-[999] xl:hidden"
            id="navbar-toggle"
            onClick={toggleCollapse}
          >
            <span
              className={`${isCollapsed
                ? "w-[30px] rotate-45 top-[5px] duration-500"
                : "duration-500"
                } relative w-[22px] max-[420px]:h-[2px] h-[3px] rounded-md bg-yellow block mb-2`}
            ></span>
            <span
              className={`${isCollapsed ? "hidden" : "duration-500"
                } relative w-[28px] max-[420px]:h-[2px] h-[3px] rounded-md bg-yellow block mb-2`}
            ></span>
            <span
              className={`${isCollapsed ? "w-[30px] -rotate-45 -top-[6px] duration-500" : "duration-500"
                } relative w-[22px] max-[420px]:h-[2px] h-[3px] rounded-md bg-yellow block`}
            ></span>
          </button>
        </div>
        {/* small screen menubar */}
        <div className={`${isCollapsed ? "block" : "xl:hidden"}`}>
          <div
            className={`${isCollapsed
              ? "top-0 left-0 h-full transition-all duration-500"
              : "top-0 left-[-100%] transition-all duration-500"
              } fixed z-[99] top-0 overflow-auto dark:bg-[#30435D] bg-darkblue h-full w-full xl:hidden`}
          >
            <div className="h-full w-full flex justify-center">
              <ul className="flex flex-col items-center justify-center gap-5 overflow-auto">
                <li className="">
                  {/* Native scrolling using hash links */}
                  <Link className="text-white text-[16px] leading-[150%] font-normal hover:text-yellow transtition-all duration-[0.3s]">
                    Sports Betting
                  </Link>
                </li>
                <li className="">
                  <Link className="text-white text-[16px] leading-[150%] font-normal hover:text-yellow transtition-all duration-[0.3s]">
                    Live Betting
                  </Link>
                </li>
                <li className="">
                  <Link className="text-white text-[16px] leading-[150%] font-normal hover:text-yellow transtition-all duration-[0.3s]">
                    OdiLeague
                  </Link>
                </li>
                <li className="">
                  <Link className="text-white text-[16px] leading-[150%] font-normal hover:text-yellow transtition-all duration-[0.3s]">
                    Casino
                  </Link>
                </li>
                <li className="">
                  <Link className="text-white text-[16px] leading-[150%] font-normal hover:text-yellow transtition-all duration-[0.3s]">
                    Jackpots
                  </Link>
                </li>
                <li className="">
                  <Link className="text-white text-[16px] leading-[150%] font-normal hover:text-yellow transtition-all duration-[0.3s]">
                    Livescore
                  </Link>
                </li>
                <li className="">
                  <Link className="text-white text-[16px] leading-[150%] font-normal hover:text-yellow transtition-all duration-[0.3s]">
                    Promotions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Login isOpen={isModalOpen} onClose={closeModal} />
      <Register isOpen={isModalOpenRGS} onClose={closeModalRGS} />
    </>
  );
};

export default Header;


