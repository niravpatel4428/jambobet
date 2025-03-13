import React, { useState } from "react";
import { Link } from "react-router-dom";
import fire from "../../../images/fire.svg";
import crash from "../../../images/crash.svg";
import virtuals from "../../../images/virtuals.svg";
import lite from "../../../images/lite.svg";
import drops from "../../../images/drops.svg";
import slots from "../../../images/slots.svg";
import table from "../../../images/table.svg";
import live from "../../../images/live.svg";
import split from "../../../images/split.svg";
import spribe from "../../../images/spribe.svg";
import elbet from "../../../images/elbet.svg";
import pragmetic from "../../../images/pragmetic.svg";
import imoon from "../../../images/imoon.svg";
import golden from "../../../images/golden.svg";
import aviatrix from "../../../images/aviatrix.svg";
import evolution from "../../../images/evolution.svg";
import smartsoft from "../../../images/smartsoft.svg";
import kaya from "../../../images/kaya.svg";
import spinmatic from "../../../images/spinmatic.svg";

const CasinoLeftPart = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-[10px]">
        <div className="rounded-md bg-white dark:bg-white/10 p-[10px_12px] s15:p-[10px_12px] s18:py-[17px] s18:px-5 flex gap-2 s15:gap-3">
          <img
            src={fire}
            alt="fire"
            className="object-contain dark:invert dark:hover:invert-0 "
          />
          <p className="text-xs s14:text-sm font-normal text-[#26262699]  dark:text-white/60">
            New
          </p>
        </div>
        <div className="rounded-md bg-white dark:bg-white/10 p-[10px_6px] s15:p-[10px] flex flex-col gap-1 s14:gap-2 s15:gap-[10px]">
          <p className="text-[#A3A3A3] dark:text-white text-xs font-normal">
            Categories
          </p>
          {categories.map((category) => (
            <Link
              to={category.linktext}
              key={category.id}
              className="rounded-md bg-white dark:bg-transparent dark:hover:bg-yellow hover:bg-yellow p-[4px_6px] 
                      s15:p-[8px_10px] s18:p-[10px] flex justify-between items-center gap-3 transition-all duration-300 group"
            >
              <div className="flex flex-row items-center gap-2 s15:gap-3">
                <span className="w-3 min-w-3 max-w-3 s15:w-4 s15:min-w-4 s15:max-w-4">
                  {category.image && (
                    <img
                      src={category.image}
                      alt={category.name}
                      className="object-contain w-4 h-4 dark:invert dark:group-hover:invert-0"
                    />
                  )}
                </span>
                <p className="text-xs s15:text-sm font-normal !leading-none text-[#26262699] dark:text-white/60 dark:group-hover:text-[#26262699] capitalize">
                  {category.name}
                </p>
              </div>
              {category.count !== null && (
                <p className="text-xs s15:text-sm font-normal text-[#26262699] dark:text-white/60 dark:group-hover:text-[#26262699]">
                  {category.count}
                </p>
              )}
            </Link>
          ))}
        </div>
        <div className="rounded-md bg-white dark:bg-white/10 p-[10px_6px] s15:p-[10px] flex flex-col gap-1 s14:gap-2 s18:gap-[10px]">
          <p className="text-[#A3A3A3] dark:text-white text-xs font-normal">
            Providers
          </p>
          {providers.map((category) => (
            <Link
              to={category.linktext}
              key={category.id}
              className="rounded-md bg-white dark:bg-transparent dark:hover:bg-yellow hover:bg-yellow p-[4px_6px] 
                      s15:p-[8px_10px] s18:p-[10px] flex justify-between items-center gap-3 transition-all duration-300 group"
            >
              <div className="flex flex-row items-center gap-2 s15:gap-3">
                {category.img !== null && (
                  <span className="w-3 min-w-3 max-w-3 s15:w-4 s15:min-w-4 s15:max-w-4">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="object-contain w-4 h-4 dark:invert dark:group-hover:invert-0"
                    />
                  </span>
                )}
                <p className="text-xs s15:text-sm font-normal !leading-none text-[#26262699] dark:text-white/60 dark:group-hover:text-[#26262699] capitalize">
                  {category.name}
                </p>
              </div>
              {category.count !== null && (
                <p className="text-xs s15:text-sm font-normal text-[#26262699] dark:text-white/60 dark:group-hover:text-[#26262699]">
                  {category.count}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CasinoLeftPart;

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
