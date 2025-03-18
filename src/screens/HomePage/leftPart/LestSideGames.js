import React from "react";
import symbol1 from "../../../images/symbol1.png";
import symbol2 from "../../../images/symbol2.png";
import symbol3 from "../../../images/symbol3.png";
import symbol4 from "../../../images/symbol4.png";
import symbol5 from "../../../images/symbol5.png";
import symbol6 from "../../../images/symbol6.png";

const LestSideGames = () => {
  const symbols = [symbol1, symbol2, symbol3, symbol4, symbol5, symbol6];

  return (
    <>
      <ul className="grid grid-cols-3 place-content-between">
        {symbols.map((symbol, index) => (
          <li key={index} className="col-span-1 gap-[14px] mb-3">
            <img
              src={symbol}
              alt={`symbol-${index + 1}`}
              className="border-solid border-white border-2 rounded-[8px] lg:h-[42px] lg:w-[42px] s15:h-[58px] s15:w-[58px] s18:h-[70px] s18:w-[70px] mx-auto"
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default LestSideGames;
