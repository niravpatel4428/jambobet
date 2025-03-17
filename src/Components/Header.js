import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import search from "../images/search.svg";
import wallet from "../images/wallet.svg";
import light from "../images/light.svg";
import dark from "../images/dark.svg";
import darksearch from "../images/darksearch.svg";
import login from "../images/login.svg";
import Register from "./Register";
import Login from "./Login";

const menuItems = [
  { label: "Sports Betting", path: "/" },
  { label: "Live Betting", path: "/" },
  { label: "OdiLeague", path: "/" },
  { label: "Casino", path: "/casino" },
  { label: "Jackpots", path: "/" },
  { label: "Livescore", path: "/" },
  { label: "Promotions", path: "/" },
];

const Header = () => {
  // Toggle Register / Login Modal
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
  // Dark mode / Light mode state
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
      <section className="sticky top-0 left-0 right-0 w-full bg-[#0C2240] dark:bg-[#30435D] z-50 py-2 md:py-4">
        <div className="flex max-xl:justify-between items-center w-full max-w-[1780px] mx-auto max-sm:px-[15px] px-[30px]">
          <div className="max-420: relative z-[100] flex max-xl:pl-[30px]">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="logo"
                className="object-cover w-16 md:w-[130px] lg:w-[150px]
              s16:w-[180px]"
              />
            </Link>
          </div>
          <div className="max-xl:flex max-md:items-center xl:hidden gap-2">
            <span className="p-[8px] md:hidden max-md:flex justify-center items-center bg-white rounded-[5px] cursor-pointer">
              <img src={isDarkMode ? search : search} alt="search" className="w-3 sm:w-4" />
            </span>
            {/* search btn */}
            <div className="relative max-md:hidden">
              <input
                type="search"
                className="h-full xl:w-[150px] s16:w-full md:p-[11px_40px_11px_12px] s16:p-[11px_40px_11px_15px] rounded-[5px] bg-white dark:bg-[#4F5F75] shadow-inputshadow placeholder:text-lightblue placeholder:text-base placeholder:leading-[150%] dark:placeholder:text-white dark:text-white"
                placeholder="Search.."
              />
              <img
                src={isDarkMode ? darksearch : search}
                alt="search"
                className="absolute w-[18px] h-[18px] top-[50%] translate-y-[-50%] right-[15px] z-50"
              />
            </div>
            {/* Balance */}
            <button className="bg-yellow border-2 border-transparent hover:border-yellow rounded-md flex gap-1 sm:gap-2 items-center justify-between py-2 px-1 sm:px-2 text-[8px] sm:text-xs font-medium text-darkGreen hover:text-yellow hover:bg-transparent group">
              <UserIcon />
              <span>$20.15</span>
            </button>
            {/* join now btn */}
            <button
              onClick={openModalRGS}
              className="py-2 px-1 sm:px-2 text-center bg-yellow border-2 border-transparent rounded-[5px] text-[8px] sm:text-xs leading-[150%] font-medium transition-all duration-300 hover:bg-transparent hover:border-yellow hover:text-yellow"
            >
              Join Now
            </button>
            {/* login btn */}
            <button
              onClick={openModal}
              className=" max-md:dark:hover:bg-white max-md:hover:bg-white max-md:dark:bg-white max-md:text-[0px] w-fit bg-white shadow-inputshadow  border-transparent rounded-[5px] inline-flex items-center justify-center py-2 px-2 text-base leading-none font-medium transition-all duration-300 dark:bg-[#4F5F75] dark:text-white border-2 hover:bg-transparent hover:border-white hover:text-white dark:hover:border-white dark:hover:bg-transparent"
            >
              Login
              <img
                src={isDarkMode ? login : login}
                alt="search"
                className="md:hidden w-3 sm:w-4"
              />
            </button>
            {/* theme btn */}
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
              {menuItems.map((item, index) => (
                <li key={index}>
                  {/* Native scrolling using hash links */}
                  <Link
                    to={item.path}
                    className="text-white text-sm s18:text-base !leading-tight s18:leading-[150%] font-normal hover:text-yellow transtition-all duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-[10px]">
              {/* search */}
              <div className="relative">
                <input
                  type="search"
                  className="h-full xl:w-[150px] s16:w-full p-[8px_40px_8px_12px] s18:p-[11px_40px_11px_15px] rounded-[5px] bg-white dark:bg-[#4F5F75] shadow-inputshadow placeholder:text-lightblue placeholder:text-base placeholder:!leading-none s18: s18:placeholder:leading-[150%] dark:placeholder:text-white dark:text-white"
                  placeholder="Search.."
                />
                <img
                  src={isDarkMode ? darksearch : search}
                  alt="search"
                  className="absolute w-[18px] h-[18px] top-[50%] translate-y-[-50%] right-[15px] z-50"
                />
              </div>
              {/* joinnow btn */}
              <button
                onClick={openModalRGS}
                className="min-w-[88px] bg-yellow  border-solid border-[2px] border-transparent rounded-[5px] inline-flex items-center justify-center p-2 px-2 s18:p-[11px_8px] text-sm s18:text-base !leading-none s18:leading-[150%] font-medium transition-all duration-300 hover:bg-transparent hover:border-yellow hover:text-yellow"
              >
                Join Now
              </button>
              {/* login btn */}
              <button
                onClick={openModal}
                className="min-w-[88px] bg-white shadow-inputshadow  border-solid border-[2px] border-transparent rounded-[5px] inline-flex items-center justify-center p-2 px-2 s18:p-[11px_8px] text-sm s18:text-base !leading-none s18:leading-[150%] font-medium transition-all duration-300 dark:bg-[#4F5F75] dark:text-white hover:bg-transparent hover:border-white hover:text-white dark:hover:border-white dark:hover:bg-transparent"
              >
                Login
              </button>
              {/* theme btn */}
              <button
                onClick={toggleTheme}
                className="s18:w-[48px] s18:h-[50px] flex justify-center items-center p-2 s18:p-[10px] bg-white dark:bg-blueshade rounded-[5px]"
              >
                <img
                  src={isDarkMode ? dark : light}
                  alt={"Light Mode"}
                  className="size-5 s18:size-[26px]"
                />
              </button>
            </div>
          </div>
          {/* hamburger toggle button */}
          <Hamburger
            isCollapsed={isCollapsed}
            toggleCollapse={toggleCollapse}
          />
        </div>
        {/* small screen menubar */}
        <div className={`${isCollapsed ? "block" : "xl:hidden"}`}>
          <div
            className={`${
              isCollapsed
                ? "top-0 left-0 h-full transition-all duration-500"
                : "top-0 left-[-100%] transition-all duration-500"
            } fixed z-[99] top-0 overflow-auto dark:bg-[#30435D] bg-darkblue h-full w-full xl:hidden`}
          >
            <div className="h-full w-full flex justify-center">
              <ul className="flex flex-col items-center justify-center gap-5 overflow-auto">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    {/* Native scrolling using hash links */}
                    <Link
                      to={item.path}
                      className="text-white text-sm s18:text-base !leading-tight s18:leading-[150%] font-normal hover:text-yellow transtition-all duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
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

const UserIcon = () => {
  return (
    <img src={wallet} alt="icon" className="w-3 sm:w-4 group-hover:invert" />
  )
}


const Hamburger = ({ toggleCollapse, isCollapsed }) => {
  return (
    <button
      className="rounded absolute z-[999] xl:hidden"
      id="navbar-toggle"
      onClick={toggleCollapse}
    >
      <span
        className={`${
          isCollapsed
            ? "w-[18px] rotate-45 top-[4px] duration-500"
            : "duration-500"
        } relative w-[18px] max-[420px]:h-[2px] h-[3px] rounded-md bg-yellow block mb-1`}
      ></span>
      <span
        className={`${
          isCollapsed ? "hidden" : "duration-500"
        } relative w-[22px] max-[420px]:h-[2px] h-[3px] rounded-md bg-yellow block mb-1`}
      ></span>
      <span
        className={`${
          isCollapsed
            ? "w-[18px] -rotate-45 -top-[3px] duration-500"
            : "duration-500"
        } relative w-[18px] max-[420px]:h-[2px] h-[3px] rounded-md bg-yellow block`}
      ></span>
    </button>
  );
};
