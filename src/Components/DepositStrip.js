import React from "react";
import { Link } from "react-router-dom";

const DepositStrip = () => {
  return (
    <div className="max-md:block hidden relative top-0">
      <Link to="/" className="bg-yellow py-1 px-2 flex justify-between gap-3 items-center">
        <p className="text-darkblue/80 dark:text-darkblue text-xs !leading-none font-normal">
          Deposit via XYZAB Paybill <strong>299688</strong>
        </p>
        <span className="text-darkblue dark:text-darkblue text-xs !leading-none font-bold underline">Click to deposit</span>
      </Link>
    </div>
  );
};

export default DepositStrip;
