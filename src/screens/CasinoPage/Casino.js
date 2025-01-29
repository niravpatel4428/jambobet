import React, { useEffect, useRef, useState } from "react"; 
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dashboardimg from "../../images/dashboardimg.png";
import dashboardimg2 from "../../images/dashboardimg2.png";
import dashboardimg3 from "../../images/dashboardimg3.png";
import casinoAdv from "../../images/casinoAdv.png";
import search from "../../images/search.svg";
import greater from "../../images/greater.svg";
import payroll1 from "../../images/payroll1.png";
import payroll2 from "../../images/payroll2.png";
import c1 from "../../images/c1.png";
import c2 from "../../images/c2.png";
import c3 from "../../images/c3.png";
import c4 from "../../images/c4.png";
import c5 from "../../images/c5.png";
import c6 from "../../images/c6.png";
import c7 from "../../images/c7.png";
import c8 from "../../images/c8.png";
import c9 from "../../images/c9.png";
import c10 from "../../images/c10.png";
import c11 from "../../images/c11.png";
import c12 from "../../images/c12.png";
import c13 from "../../images/c13.png";
import c14 from "../../images/c14.png";
import c15 from "../../images/c15.png";
import c16 from "../../images/c16.png";
import c17 from "../../images/c17.png";
import c18 from "../../images/c18.png";
import c19 from "../../images/c19.png";
import c20 from "../../images/c20.png";
import c21 from "../../images/c21.png";
import c22 from "../../images/c22.png";
import c23 from "../../images/c23.png";
import c24 from "../../images/c24.png";
import c25 from "../../images/c25.png";
import c26 from "../../images/c26.png";
import c27 from "../../images/c27.png";
import c28 from "../../images/c28.png";
import fire from "../../images/fire.svg";
import crash from "../../images/crash.svg";
import virtuals from "../../images/virtuals.svg";
import lite from "../../images/lite.svg";
import drops from "../../images/drops.svg";
import slots from "../../images/slots.svg";
import table from "../../images/table.svg";
import live from "../../images/live.svg";
import split from "../../images/split.svg";
import spribe from "../../images/spribe.svg";
import elbet from "../../images/elbet.svg";
import pragmetic from "../../images/pragmetic.svg";
import imoon from "../../images/imoon.svg";
import golden from "../../images/golden.svg";
import aviatrix from "../../images/aviatrix.svg";
import evolution from "../../images/evolution.svg";
import smartsoft from "../../images/smartsoft.svg";
import kaya from "../../images/kaya.svg";
import spinmatic from "../../images/spinmatic.svg";
import close from "../../images/close.svg";
import mail from "../../images/mail.svg";
import customercare from "../../images/customercare.svg";
import contact from "../../images/contact.svg";
import email from "../../images/email.svg";
const Casino = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

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
  const imageslider = [
    { image: dashboardimg },
    { image: dashboardimg2 },
    { image: dashboardimg3 },
  ];
  const [isToggled, setIsToggled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="relative bg-[#F2F4F6] dark:bg-darkblue pb-[70px] s15:pb-[100px]">
        <div className="w-full max-w-[1760px] md:px-5 mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <div className="max-md:hidden md:col-span-3 s15:col-span-2">
              <div className="w-full flex flex-col gap-[10px]">
                <div className="rounded-md bg-white dark:bg-white/10 py-[17px] px-5 flex gap-3">
                  <img
                    src={fire}
                    alt="fire"
                    className="object-contain dark:invert dark:hover:invert-0"
                  />
                  <p className="text-sm font-normal text-[#26262699]  dark:text-white/60">
                    New
                  </p>
                </div>
                <div className="rounded-md bg-white dark:bg-white/10 p-[6px] s15:p-[10px] flex flex-col gap-[6px] xl:gap-2 s15:gap-[10px]">
                  <p className="text-[#A3A3A3] dark:text-white text-xs font-normal">
                    Categories
                  </p>
                  {categories.map((category) => (
                    <Link
                      to={category.linktext}
                      key={category.id}
                      className="rounded-md bg-white dark:bg-transparent dark:hover:bg-yellow hover:bg-yellow p-[6px] s15:p-[10px] flex justify-between items-center gap-3 transition-all duration-300 group"
                    >
                      <div className="flex flex-row items-center gap-[6px] s15:gap-3">
                        <span className="w-4 min-w-4 max-w-4">
                          {category.image && (
                            <img
                              src={category.image}
                              alt={category.name}
                              className="object-contain w-4 h-4 dark:invert dark:group-hover:invert-0"
                            />
                          )}
                        </span>
                        <p className="text-xs xl:text-sm font-normal !leading-none text-[#26262699] dark:text-white/60 dark:group-hover:text-[#26262699] capitalize">
                          {category.name}
                        </p>
                      </div>
                      {category.count !== null && (
                        <p className="text-xs xl:text-sm font-normal text-[#26262699] dark:text-white/60 dark:group-hover:text-[#26262699]">
                          {category.count}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
                <div className="rounded-md bg-white dark:bg-white/10 p-[6px] s15:p-[10px] flex flex-col gap-[6px] xl:gap-2 s15:gap-[10px]">
                  <p className="text-[#A3A3A3] dark:text-white text-xs font-normal">
                    Providers
                  </p>
                  {providers.map((category) => (
                    <Link
                      to={category.linktext}
                      key={category.id}
                      className="rounded-md bg-white dark:bg-transparent dark:hover:bg-yellow hover:bg-yellow p-[6px] s15:p-[10px] flex justify-between items-center gap-3 transition-all duration-300 group"
                    >
                      <div className="flex flex-row items-center gap-[6px] s15:gap-3">
                        {category.img !== null && (
                          <span className="w-4 min-w-4 max-w-4">
                            <img
                              src={category.image}
                              alt={category.name}
                              className="object-contain w-4 h-4 dark:invert dark:group-hover:invert-0"
                            />
                          </span>
                        )}
                        <p className="text-xs xl:text-sm font-normal !leading-none text-[#26262699] dark:text-white/60 dark:group-hover:text-[#26262699] capitalize">
                          {category.name}
                        </p>
                      </div>
                      {category.count !== null && (
                        <p className="text-xs xl:text-sm font-normal text-[#26262699] dark:text-white/60 dark:group-hover:text-[#26262699]">
                          {category.count}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-9 s15:col-span-7">
              <div className="flex flex-col gap-[10px] ">
                <Slider ref={sliderRef} {...settings}>
                  {imageslider.map((imageslider, index) => (
                    <div key={index}>
                      <div className="cursor-pointer">
                        <div className="max-[575px]:flex max-[575px]:justify-center rounded-md h-[93px] md:h-[110px] xl:h-[125px] s15:h-[143px] w-full">
                          <img
                            src={imageslider.image}
                            alt="img"
                            className="w-full object-cover rounded-md h-full"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
                <div className="p-5 md:p-3 lg:p-4 s15:p-5 bg-white dark:bg-white/10 rounded-md">
                  <div className="relative rounded-md shadow-xl inputshadow mb-3 s15:mb-5">
                    <input
                      type="text"
                      className="p-[8px_40px_8px_8px] xl:p-[12px_40px_12px_12px] rounded-md w-full text-xs lg:text-sm s15:text-base font-normal placeholder:text-darkblue/20 dark:placeholder:text-white/30 bg-white dark:bg-white/10 text-darkblue dark:text-white "
                      placeholder="Search Games.."
                    />
                    <img
                      src={search}
                      alt="search"
                      className="absolute top-1/2 -translate-y-1/2 right-4 dark:invert"
                    />
                  </div>
                  <div>
                    <p className="text-darkblue dark:text-white text-sm lg:text-base s15:text-lg font-bold mb-3 s15:mb-5">
                      All Games
                    </p>
                    <div className="grid grid-cols-6 gap-2 xl:gap-4 s15:gap-[17px] place-content-center">
                      {images.map((image, index) => (
                        <div key={index} className="rounded xl:rounded-md">
                          <img
                            src={image}
                            alt={`c${index + 1}`}
                            className="object-contain rounded xl:rounded-md"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* <div className="mt-5">
                  <div className="flex gap-2 xl:gap-[13px] justify-center items-center">
                    <div>
                      <img
                        src={greater}
                        alt="greater"
                        className="object-contain rotate-180  dark:brightness-[100] dark:hover:brightness-50"
                      />
                    </div>
                    <div className="rounded-[4px] size-5 xl:size-8 text-[#555752] text-xs xl:text-sm font-semibold dark:bg-white/30 dark:hover:bg-white bg-darkblue/10 dark:hover:text-darkblue dark:text-white hover:text-white hover:bg-darkblue transition-all duration-300 flex justify-center items-center">
                      1
                    </div>
                    <div className="rounded-[4px] size-5 xl:size-8 text-[#555752] text-xs xl:text-sm font-semibold dark:bg-white/30 dark:hover:bg-white bg-darkblue/10 dark:hover:text-darkblue dark:text-white hover:text-white hover:bg-darkblue transition-all duration-300 flex justify-center items-center">
                      2
                    </div>
                    <div className="rounded-[4px] size-5 xl:size-8 text-[#555752] text-xs xl:text-sm font-semibold dark:bg-white/30 dark:hover:bg-white bg-darkblue/10 dark:hover:text-darkblue dark:text-white hover:text-white hover:bg-darkblue transition-all duration-300 flex justify-center items-center">
                      3
                    </div>
                    <div className="rounded-[4px] size-5 xl:size-8 text-[#555752] text-xs xl:text-sm font-semibold dark:bg-white/30 dark:hover:bg-white bg-darkblue/10 dark:hover:text-darkblue dark:text-white hover:text-white hover:bg-darkblue transition-all duration-300 flex justify-center items-center">
                      4
                    </div>
                    <div className="rounded-[4px] size-5 xl:size-8 text-[#555752] text-xs xl:text-sm font-semibold dark:bg-white/30 dark:hover:bg-white bg-darkblue/10 dark:hover:text-darkblue dark:text-white hover:text-white hover:bg-darkblue transition-all duration-300 flex justify-center items-center">
                      5
                    </div>
                    <div className="rounded-[4px] size-5 xl:size-8 text-[#555752] text-xs xl:text-sm font-semibold  dark:hover:text-white dark:text-white hover:text-white transition-all duration-300 flex justify-center items-center">
                      ...
                    </div>
                    <div className="rounded-[4px] size-5 xl:size-8 text-[#555752] text-xs xl:text-sm font-semibold dark:bg-white/30 dark:hover:bg-white bg-darkblue/10 dark:hover:text-darkblue dark:text-white hover:text-white hover:bg-darkblue transition-all duration-300 flex justify-center items-center">
                      50
                    </div>
                    <div>
                      <img
                        src={greater}
                        alt="greater"
                        className="object-contain  dark:brightness-[100] dark:hover:brightness-50"
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-span-0 hidden s15:block s15:col-span-3">
              <div className="odd-conected">
                <div className="flex flex-col gap-5">
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
                          Please add match selections by selecting the odds on
                          any match
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
                  <div className="rounded-[7px] bg-white dark:bg-[#243853] mt-[20px]">
                    <h3 className="p-[20px] text-center text-darkblue dark:text-white text-[18px] font-medium leading-[100%] rounded-[7px_7px_0px_0px] border border-solid border-lightblack dark:border-lightwhiteborder bg-extralightblack dark:bg-[#3A4B62]">
                      Payroll Number 290898
                    </h3>
                    <div className="flex flex-col s16:flex-row justify-center gap-[30px] items-center p-[20px_35px]">
                      <img src={payroll1} alt="safari" />
                      <img src={payroll2} alt="airtel" />
                    </div>
                  </div>
                  <div className="rounded-[7px] bg-white dark:bg-[#243853] mt-[20px]">
                    <h3 className="p-[20px] text-center text-darkblue dark:text-white text-[18px] font-medium leading-[100%] rounded-[7px_7px_0px_0px] border border-solid border-lightblack dark:border-lightwhiteborder bg-extralightblack dark:bg-[#3A4B62]">
                      Customer Care
                    </h3>
                    <div className="p-[15px_35px]">
                      <p className="text-center text-darkblue dark:text-white text-[14px] font-normal leading-[128%]">
                        We offer 24/7 customer care attention to Jambobet
                        players
                      </p>
                      <ul className="flex flex-col gap-[12px] mt-[20px]">
                        {contactInfo.map((item) => (
                          <li
                            key={item.id}
                            className="flex flex-col items-center gap-[9px]"
                          >
                            <img src={item.icon} alt={item.alt} />
                            <Link
                              to={item.link}
                              className="text-darkblue dark:text-white hover:text-yellow dark:hover:text-yellow transition-all duration-[0.3s] text-[18px] font-normal leading-[100%]"
                            >
                              {item.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex gap-2 xl:gap-[13px] justify-center items-center">
              <div>
                <img
                  src={greater}
                  alt="greater"
                  className="object-contain cursor-pointer rotate-180  dark:brightness-[100] dark:hover:brightness-50"
                />
              </div>
              <div className="rounded-[4px] cursor-pointer size-5 xl:size-8 text-[#555752] text-xs xl:text-sm font-semibold dark:bg-white/30 dark:hover:bg-white bg-darkblue/10 dark:hover:text-darkblue dark:text-white hover:text-white hover:bg-darkblue transition-all duration-300 flex justify-center items-center">
                1
              </div>
              <div className="rounded-[4px] cursor-pointer size-5 xl:size-8 text-[#555752] text-xs xl:text-sm font-semibold dark:bg-white/30 dark:hover:bg-white bg-darkblue/10 dark:hover:text-darkblue dark:text-white hover:text-white hover:bg-darkblue transition-all duration-300 flex justify-center items-center">
                2
              </div>
              <div className="rounded-[4px] cursor-pointer size-5 xl:size-8 text-[#555752] text-xs xl:text-sm font-semibold dark:bg-white/30 dark:hover:bg-white bg-darkblue/10 dark:hover:text-darkblue dark:text-white hover:text-white hover:bg-darkblue transition-all duration-300 flex justify-center items-center">
                3
              </div>
              <div className="rounded-[4px] cursor-pointer size-5 xl:size-8 text-[#555752] text-xs xl:text-sm font-semibold dark:bg-white/30 dark:hover:bg-white bg-darkblue/10 dark:hover:text-darkblue dark:text-white hover:text-white hover:bg-darkblue transition-all duration-300 flex justify-center items-center">
                4
              </div>
              <div className="rounded-[4px] cursor-pointer size-5 xl:size-8 text-[#555752] text-xs xl:text-sm font-semibold dark:bg-white/30 dark:hover:bg-white bg-darkblue/10 dark:hover:text-darkblue dark:text-white hover:text-white hover:bg-darkblue transition-all duration-300 flex justify-center items-center">
                5
              </div>
              <div className="rounded-[4px] cursor-pointer size-5 xl:size-8 text-[#555752] text-xs xl:text-sm font-semibold  dark:hover:text-white dark:text-white hover:text-white transition-all duration-300 flex justify-center items-center">
                ...
              </div>
              <div className="rounded-[4px] cursor-pointer size-5 xl:size-8 text-[#555752] text-xs xl:text-sm font-semibold dark:bg-white/30 dark:hover:bg-white bg-darkblue/10 dark:hover:text-darkblue dark:text-white hover:text-white hover:bg-darkblue transition-all duration-300 flex justify-center items-center">
                50
              </div>
              <div>
                <img
                  src={greater}
                  alt="greater"
                  className="object-contain cursor-pointer  dark:brightness-[100] dark:hover:brightness-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='s15:hidden flex justify-center items-center fixed bottom-0 z-[9] left-[50%] translate-x-[-50%] w-full max-w-[428px] mx-auto rounded-[20px_20px_0px_0px] bg-[#2F425C] p-[40px_15px_25px]'>
        <span
          className='select-none cursor-pointer border-solid border-r-[1px] border-r-doubleextralightwhite inline-flex flex-col items-center gap-[7px] p-[0px] text-white text-[18px] font-medium leading-[100%]'
          onClick={handleToggle}
        >
          {isOpen ? (
            <>
              <span className='absolute top-[-22px] left-[50%] translate-x-[-50%] flex w-[50px] h-[50px] justify-center items-center bg-yellow rounded-[50%] text-black dark:bg-white text-[22px] font-medium leading-[100%]'>
                <img src={close} alt='Close' className='w-[14px] h-[14px]' />
              </span>
              Close
            </>
          ) : (
            <>
              <span className='absolute top-[-22px] left-[50%] translate-x-[-50%] flex w-[50px] h-[50px] justify-center items-center bg-yellow rounded-[50%] text-black dark:bg-white text-[22px] font-medium leading-[100%]'>
                1
              </span>
              Betslip
            </>
          )}
        </span>
      </div>
      <div className={`open-content ${isOpen ? 'block' : 'hidden'}`}>
        <div className="odd-conected overflow-auto max-h-[550px] block fixed bottom-[120px] z-[9] max-w-[428px] mx-auto left-[50%] translate-x-[-50%] s15:hidden rounded-[7px] bg-white dark:bg-bluedarkmodecolor shadow-dashboardshadow w-full">
          <div className="bg-white dark:bg-[#24354E] rounded-md overflow-hidden">
            <div
              className="bg-darkblue dark:bg-[#3A4C64] grid grid-cols-2"
            >
              <div className="p-[8px_10px] s15:p-[10px_14px] cursor-pointer flex items-center gap-2 text-sm xl:text-base s15:text-lg text-white font-medium !leading-none border-r-[1px] border-white/20">
                <span className="bg-yellow rounded-full size-6 s15:size-[31px] text-black text-xs md:text-sm xl:text-base s15:text-[19px] font-medium flex justify-center items-center">
                  0
                </span>
                Betslip
              </div>
              <div className="p-[8px_10px] s15:p-[10px_14px] cursor-pointer flex items-center justify-center gap-2 text-sm xl:text-base s15:text-lg text-white font-medium !leading-none text-center">
                My bets
              </div>
            </div>
            <div
              className="bg-white dark:bg-[#24354E] px-[19px] pb-5" 
            >
              <div className="pt-16 pb-[92px] text-center">
                <h3 className="text-[#737373] dark:text-white text-sm xl:text-base s15:text-lg font-normal mb-[2px]">
                  No selections
                </h3>
                <p className="text-[#A3A3A3] dark:text-white text-xs xl:text-[13px] font-normal !leading-tight w-full max-w-[250px] mx-auto">
                  Please add match selections by selecting the odds on any match
                </p>
              </div>
              <p className="text-[#374151] dark:text-white text-xs xl:text-sm s15:text-base font-medium mb-3">
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
        </div>
      </div>
    </>
  );
};

export default Casino;

const categories = [
  { id: 1, linktext: "/", name: "New", image: fire, count: null },
  { id: 2, linktext: "/", name: "Crash", image: crash, count: 28 },
  { id: 3, linktext: "/", name: "Virtuals", image: virtuals, count: 10 },
  { id: 4, linktext: "/", name: "Lite", image: lite, count: 14 },
  { id: 5, linktext: "/", name: "Drops and …", image: drops, count: 3 },
  { id: 6, linktext: "/", name: "Slots", image: slots, count: 310 },
  { id: 7, linktext: "/", name: "Table/Cards", image: table, count: 12 },
  { id: 8, linktext: "/", name: "Live", image: live, count: 164 },
  { id: 9, linktext: "/", name: "Popular", image: null, count: 1 },
];

const providers = [
  { id: 1, linktext: "/", name: "Split The Pot", image: split, count: null },
  { id: 2, linktext: "/", name: "Spribe", image: spribe, count: null },
  { id: 3, linktext: "/", name: "Elbet", image: elbet, count: null },
  {
    id: 4,
    linktext: "/",
    name: "Pragmatic Play",
    image: pragmetic,
    count: null,
  },
  { id: 5, linktext: "/", name: "iMoon", image: imoon, count: null },
  { id: 6, linktext: "/", name: "Golden Race", image: golden, count: null },
  { id: 7, linktext: "/", name: "Aviatrix", image: aviatrix, count: null },
  { id: 8, linktext: "/", name: "Evolution", image: evolution, count: null },
  { id: 9, linktext: "/", name: "Smartsoft", image: smartsoft, count: null },
  { id: 10, linktext: "/", name: "Kaya", image: kaya, count: null },
  { id: 11, linktext: "/", name: "Spinmatic", image: spinmatic, count: null },
];

const contactInfo = [
  {
    id: 1,
    icon: email, // Replace with your actual `email` icon variable
    alt: "email",
    link: "mailto:care@jambobet.co.de",
    text: "care@jambobet.co.de",
  },
  {
    id: 2,
    icon: contact, // Replace with your actual `contact` icon variable
    alt: "contact",
    link: "tel:+254719034034",
    text: "+254 719 034 034",
  },
];

const images = [
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
  c10,
  c11,
  c12,
  c13,
  c14,
  c15,
  c16,
  c17,
  c18,
  c19,
  c20,
  c21,
  c22,
  c23,
  c24,
  c25,
  c26,
  c27,
  c28,
];
