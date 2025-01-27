import React from "react";
import logo from "../images/logo.png";
import location from "../images/location.svg";
import mail from "../images/mail.svg";
import user from "../images/user.svg";
import facebook from "../images/facebook.svg";
import x from "../images/x.svg";
import yt from "../images/yt.svg";
import insta from "../images/insta.svg";
import whatsapp from "../images/whatsapp.svg";
import tictok from "../images/tictok.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative bg-darkblue dark:bg-[#182D4A] pb-[120px] s15:pb-[0px]">
      <div className="w-full max-w-[1565px] px-5 mx-auto">
        <div className="pt-[50px] pb-[30px] md:pb-10 xl:pb-16 2xl:pb-[101px] flex max-sm:flex-col sm:flex-wrap lg:flex-nowrap justify-center gap-[50px] sm:gap-10 xl:gap-28 2xl:gap-[180px]">
          <div className="w-full sm:w-[45%] lg:max-w-[200px] xl:max-w-[240px]">
            <div className="h-9 lg:h-[43px] mb-10 flex justify-center sm:justify-start">
              <img src={logo} alt="logo" className="w-fit h-full object-contain" />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col max-sm:items-center max-sm:w-fit max-sm:mx-auto sm:flex-row gap-[10px] sm:gap-3 text-white hover:text-yellow text-sm font-normal transition-all dura">
                <img
                  src={location}
                  alt="location"
                  className="w-full max-w-[16px] object-contain"
                />
                P.O.BOX 25675-00100 NAIROBI
              </div>
              <Link
                to="mailto:care@jambobet.co.de"
                className="flex flex-col max-sm:items-center max-sm:w-fit max-sm:mx-auto sm:flex-row gap-[10px] sm:gap-3 text-white hover:text-yellow text-sm font-normal transition-all dura"
              >
                <img
                  src={mail}
                  alt="mail"
                  className="w-full max-w-[16px] object-contain"
                />
                care@jambobet.co.de
              </Link>
              <Link
                to="tel:+254 719 034 034"
                className="flex flex-col max-sm:items-center max-sm:w-fit max-sm:mx-auto sm:flex-row gap-[10px] sm:gap-3 text-white hover:text-yellow text-sm font-normal transition-all dura"
              >
                <img
                  src={user}
                  alt="user"
                  className="w-full max-w-[16px] object-contain"
                />
                +254 719 034 034
              </Link>
              <div className="flex max-sm:items-center max-sm:justify-center gap-5">
                <Link
                  to="/"
                  className="relative after:absolute after:content-[''] after:top-1/2 after:-translate-y-1/2 after:-right-[10px] after:w-[1px] after:h-5 after:bg-white/20 last:after:hidden"
                >
                  <img
                    src={facebook}
                    alt="facebook"
                    className="object-contain"
                  />
                </Link>
                <Link
                  to="/"
                  className="relative after:absolute after:content-[''] after:top-1/2 after:-translate-y-1/2 after:-right-[10px] after:w-[1px] after:h-5 after:bg-white/20 last:after:hidden"
                >
                  <img
                    src={x}
                    alt="x"
                    className="object-contain hover:opacity-60 transition-all duration-300"
                  />
                </Link>
                <Link
                  to="/"
                  className="relative after:absolute after:content-[''] after:top-1/2 after:-translate-y-1/2 after:-right-[10px] after:w-[1px] after:h-5 after:bg-white/20 last:after:hidden"
                >
                  <img
                    src={yt}
                    alt="yt"
                    className="object-contain hover:opacity-60 transition-all duration-300"
                  />
                </Link>
                <Link
                  to="/"
                  className="relative after:absolute after:content-[''] after:top-1/2 after:-translate-y-1/2 after:-right-[10px] after:w-[1px] after:h-5 after:bg-white/20 last:after:hidden"
                >
                  <img
                    src={insta}
                    alt="insta"
                    className="object-contain hover:opacity-60 transition-all duration-300"
                  />
                </Link>
                <Link
                  to="/"
                  className="relative after:absolute after:content-[''] after:top-1/2 after:-translate-y-1/2 after:-right-[10px] after:w-[1px] after:h-5 after:bg-white/20 last:after:hidden"
                >
                  <img
                    src={whatsapp}
                    alt="whatsapp"
                    className="object-contain hover:opacity-60 transition-all duration-300"
                  />
                </Link>
                <Link
                  to="/"
                  className="relative after:absolute after:content-[''] after:top-1/2 after:-translate-y-1/2 after:-right-[10px] after:w-[1px] after:h-5 after:bg-white/20 last:after:hidden"
                >
                  <img
                    src={tictok}
                    alt="tictok"
                    className="object-contain hover:opacity-60 transition-all duration-300"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[45%] lg:max-w-[148px]">
            <h6 className="text-white text-lg font-bold max-sm:text-center mb-5">
              Support And Trust
            </h6>
            <ul className="flex flex-col gap-[17px] max-sm:text-center">
              <li>
                <Link
                  to="/"
                  className="text-white text-sm font-normal hover:underline hover:text-yellow transition-all duration-300"
                >
                  How to play
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-white text-sm font-normal hover:underline hover:text-yellow transition-all duration-300"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-white text-sm font-normal hover:underline hover:text-yellow transition-all duration-300"
                >
                  Responsible Gaming
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-white text-sm font-normal hover:underline hover:text-yellow transition-all duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-white text-sm font-normal hover:underline hover:text-yellow transition-all duration-300"
                >
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-white text-sm font-normal hover:underline hover:text-yellow transition-all duration-300"
                >
                  Jambobet News
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-[45%] lg:max-w-[273px]">
            <h6 className="text-white text-lg font-bold max-sm:text-center mb-5">
              Legal and Compliance
            </h6>
            <div className="flex flex-col gap-5 max-sm:text-center">
              <p className="text-white text-sm font-normal max-sm:w-[80%] max-sm:mx-auto">
                This forum is open only to persons over the age of 18 years.
              </p>
              <p className="text-white text-sm font-normal max-sm:w-[80%] max-sm:mx-auto">
                Gambling may have adverse effects if not taken in moderation.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-[45%] lg:max-w-[325px]">
            <h6 className="text-white text-lg font-bold max-sm:text-center mb-5">Licence</h6>
            <div className="flex flex-col gap-5 max-sm:text-center">
              <p className="text-white text-sm font-normal">
                The Operator of this website is licensed and regulated by the
                Betting Control and Licensing Board under{" "}
                <span className="text-yellow">License number BK 0000061</span>.
              </p>
              <p className="text-white text-sm font-normal">
                Casino products are provided by Standard Global East Africa
                Limited which is duly licensed under BCLB{" "}
                <span className="text-yellow">License Number PG 0000427</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[18px] text-center bg-[#182D4A] dark:bg-[#243753]">
        <p className="text-white text-sm font-normal">
          Copyright © 2025 <Link to="/" className="hover:text-yellow">Jambo bet</Link>. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
