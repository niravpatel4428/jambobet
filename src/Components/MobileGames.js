import React from "react";
import symbol1 from "../images/symbol1.png";
import symbol2 from "../images/symbol2.png";
import symbol3 from "../images/symbol3.png";
import symbol4 from "../images/symbol4.png";
import symbol5 from "../images/symbol5.png";
import symbol6 from "../images/symbol6.png";

const symbols = [symbol1, symbol2, symbol3, symbol4, symbol5, symbol6];

const MobileGames = () => {
  return (
    <>
      <ul className="max-md:flex hidden flex-wrap justify-between p-[20px_15px] md:p-[20px] bg-white dark:bg-[#182D4A]">
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
    </>
  );
};

export default MobileGames;
