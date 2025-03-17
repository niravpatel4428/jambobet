import React, { useState } from "react";
import c15 from "../../images/c15.png";
import c16 from "../../images/c16.png";
import c17 from "../../images/c17.png";
import c18 from "../../images/c18.png";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
const Winners = () => {
  const [activeTab, setActiveTab] = useState("daily");

  const filteredWinners = winners.filter((winner) => winner.type === activeTab);
  return (
    <div className="mb-3 winners-slider">
      <ul className="mb-5 flex flex-row  justify-center gap-3 md:gap-5">
        <li
          className={`text-darkblue dark:text-white hover:text-yellow whitespace-nowrap text-xs md:text-sm font-semibold cursor-pointer ${
            activeTab === "daily" ? "!text-yellow underline" : ""
          }`}
          onClick={() => setActiveTab("daily")} 
        >
          Daily Top Winners
        </li>
        <li
          className={`text-darkblue dark:text-white hover:text-yellow whitespace-nowrap text-xs md:text-sm font-semibold cursor-pointer ${
            activeTab === "weekly" ? "!text-yellow underline" : ""
          }`}
          onClick={() => setActiveTab("weekly")}
        >
          Weekly Winners
        </li>
        <li
          className={`text-darkblue dark:text-white hover:text-yellow whitespace-nowrap text-xs md:text-sm font-semibold cursor-pointer ${
            activeTab === "monthly" ? "!text-yellow underline" : ""
          }`}
          onClick={() => setActiveTab("monthly")}
        >
          Monthly Winners
        </li>
      </ul>
      <Marquee pauseOnHover>
        {filteredWinners.map((winner, index) => (
          <div
            key={index}
            className="rounded-md flex gap-1 bg-white dark:bg-white/10"
          >
            <Link to="/" className="p-1 pr-0 w-fit">
              <img
                src={winner.imgSrc}
                alt={`icon ${index + 1}`}
                className="object-cover w-24 min-w-24 lg:w-32 lg:min-w-32 h-16 lg:h-20"
              />
            </Link>
            <div className="flex flex-col justify-between w-full p-1 pr-2">
              <div className="flex flex-col">
                <p className="text-darkblue dark:text-white text-sm lg:text-base font-bold inline-flex line-clamp-1">
                  {winner.amount}
                  <span className="inline-block transform text-xs pl-1 mb-auto">
                    {winner.currency}
                  </span>
                </p>
                <p className="text-darkblue dark:text-white text-xs lg:text-sm font-medium line-clamp-1 block">
                  ID {winner.id}
                </p>
              </div>
              <p className="text-darkblue dark:text-white text-xs font-normal line-clamp-1 ml-auto">
                {winner.date} &nbsp;|&nbsp; {winner.time}
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Winners;

const winners = [
  {
    type: "daily",
    id: "50***06",
    amount: "1,080,000",
    currency: "ETB",
    date: "3.7.2025",
    time: "10:33",
    imgSrc: c15,
  },
  {
    type: "daily",
    id: "50***07",
    amount: "850,000",
    currency: "ETB",
    date: "4.7.2025",
    time: "11:45",
    imgSrc: c16,
  },
  {
    type: "daily",
    id: "50***08",
    amount: "1,200,000",
    currency: "ETB",
    date: "5.7.2025",
    time: "12:10",
    imgSrc: c17,
  },
  {
    type: "daily",
    id: "50***08",
    amount: "1,200,000",
    currency: "ETB",
    date: "5.7.2025",
    time: "12:10",
    imgSrc: c18,
  },
  {
    type: "daily",
    id: "50***06",
    amount: "1,080,000",
    currency: "ETB",
    date: "3.7.2025",
    time: "10:33",
    imgSrc: c15,
  },
  {
    type: "weekly",
    id: "50***07",
    amount: "850,000",
    currency: "ETB",
    date: "4.7.2025",
    time: "11:45",
    imgSrc: c16,
  },
  {
    type: "weekly",
    id: "50***08",
    amount: "1,200,000",
    currency: "ETB",
    date: "5.7.2025",
    time: "12:10",
    imgSrc: c17,
  },
  {
    type: "weekly",
    id: "50***08",
    amount: "1,200,000",
    currency: "ETB",
    date: "5.7.2025",
    time: "12:10",
    imgSrc: c18,
  },
  {
    type: "weekly",
    id: "50***06",
    amount: "1,080,000",
    currency: "ETB",
    date: "3.7.2025",
    time: "10:33",
    imgSrc: c15,
  },
  {
    type: "weekly",
    id: "50***07",
    amount: "850,000",
    currency: "ETB",
    date: "4.7.2025",
    time: "11:45",
    imgSrc: c16,
  },
  {
    type: "monthly",
    id: "50***08",
    amount: "1,200,000",
    currency: "ETB",
    date: "5.7.2025",
    time: "12:10",
    imgSrc: c17,
  },
  {
    type: "monthly",
    id: "50***08",
    amount: "1,200,000",
    currency: "ETB",
    date: "5.7.2025",
    time: "12:10",
    imgSrc: c17,
  },
  {
    type: "monthly",
    id: "50***08",
    amount: "1,200,000",
    currency: "ETB",
    date: "5.7.2025",
    time: "12:10",
    imgSrc: c17,
  },
  {
    type: "monthly",
    id: "50***08",
    amount: "1,200,000",
    currency: "ETB",
    date: "5.7.2025",
    time: "12:10",
    imgSrc: c17,
  },
  {
    type: "monthly",
    id: "50***08",
    amount: "1,200,000",
    currency: "ETB",
    date: "5.7.2025",
    time: "12:10",
    imgSrc: c18,
  },
];
