import React from "react";
import { Link } from "react-router-dom";
import search from "../../../images/search.svg";
import c1 from "../../../images/c1.png";
import c2 from "../../../images/c2.png";
import c3 from "../../../images/c3.png";
import c4 from "../../../images/c4.png";
import c5 from "../../../images/c5.png";
import c6 from "../../../images/c6.png";
import c7 from "../../../images/c7.png";
import c8 from "../../../images/c8.png";
import c9 from "../../../images/c9.png";
import c10 from "../../../images/c10.png";
import c11 from "../../../images/c11.png";
import c12 from "../../../images/c12.png";
import c13 from "../../../images/c13.png";
import c14 from "../../../images/c14.png";
import c15 from "../../../images/c15.png";
import c16 from "../../../images/c16.png";
import c17 from "../../../images/c17.png";
import c18 from "../../../images/c18.png";
import c19 from "../../../images/c19.png";
import c20 from "../../../images/c20.png";
import c21 from "../../../images/c21.png";
import c22 from "../../../images/c22.png";
import c23 from "../../../images/c23.png";
import c24 from "../../../images/c24.png";
import c25 from "../../../images/c25.png";
import c26 from "../../../images/c26.png";
import c27 from "../../../images/c27.png";
import c28 from "../../../images/c28.png";
import c29 from "../../../images/c29.png";
import c30 from "../../../images/c30.png";
const CasinoCenter = () => {
  return (
    <>
      <div className="p-5 md:p-3 s15:p-5 bg-white dark:bg-white/10 rounded-md shadow-inputshadow">
        <div className="relative rounded-md shadow-inputshadow inputshadow mb-3 s15:mb-5">
          <input
            type="text"
            className="p-[8px_40px_8px_8px] s18:p-[12px_40px_12px_12px] rounded-md w-full text-xs lg:text-sm s18:text-base font-normal placeholder:text-darkblue/20 dark:placeholder:text-white/30 bg-white dark:bg-white/10 text-darkblue dark:text-white "
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
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-3 s18:gap-[17px] place-content-center ">
            {images.map((image, index) => (
              <Link
                to={image.url}
                key={index}
                className="rounded xl:rounded-md"
              >
                <img
                  src={image.src}
                  alt={`c${index + 1}`}
                  className="object-contain rounded xl:rounded-md"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CasinoCenter;

const images = [
  { src: c1, url: "/page1" },
  { src: c2, url: "/page2" },
  { src: c3, url: "/page3" },
  { src: c4, url: "/page4" },
  { src: c5, url: "/page5" },
  { src: c6, url: "/page6" },
  { src: c7, url: "/page7" },
  { src: c8, url: "/page8" },
  { src: c9, url: "/page9" },
  { src: c10, url: "/page10" },
  { src: c11, url: "/page11" },
  { src: c12, url: "/page12" },
  { src: c13, url: "/page13" },
  { src: c14, url: "/page14" },
  { src: c15, url: "/page15" },
  { src: c16, url: "/page16" },
  { src: c17, url: "/page17" },
  { src: c18, url: "/page18" },
  { src: c19, url: "/page19" },
  { src: c20, url: "/page20" },
  { src: c21, url: "/page21" },
  { src: c22, url: "/page22" },
  { src: c23, url: "/page23" },
  { src: c24, url: "/page24" },
  { src: c25, url: "/page25" },
  { src: c26, url: "/page26" },
  { src: c27, url: "/page27" },
  { src: c28, url: "/page28" },
  { src: c29, url: "/page29" },
  { src: c30, url: "/page30" },
];
