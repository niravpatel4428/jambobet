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

const MobileLeftPart = () => {
  return (
    <>
      <div className="block md:hidden bg-white dark:bg-[#2F425C] mt-[-10px]">
        <div className="flex gap-2 scrollable">
          {categories.map((category) => (
            <Link
              to={category.linktext}
              key={category.id}
              className={`bg-transparent p-2 transition-all duration-300 group border-b-2 border-transparent ${category.active === true ? "border-yellow bg-black/10 dark:bg-bluedarkmodecolor" : ""}`}
            >
              <div className="flex flex-col items-center gap-2">
                <span className="w-3 min-w-3 max-w-3 s15:w-4 s15:min-w-4 s15:max-w-4">
                  {category.image && (
                    <img
                      src={category.image}
                      alt={category.name}
                      className="object-contain w-4 h-4 dark:invert"
                    />
                  )}
                </span>
                <p className="text-xs s15:text-sm whitespace-nowrap font-normal !leading-none text-darkblue dark:text-white/60 capitalize">
                  {category.name.length > 6
                    ? `${category.name.slice(0, 6)}...`
                    : category.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileLeftPart;

const categories = [
  { active: false,id: 1, linktext: "/casino", name: "New", image: fire, count: 99 },
  { active: false,id: 2, linktext: "/casino", name: "Crash", image: crash, count: 28 },
  { active: true,id: 3, linktext: "/casino", name: "Virtuals", image: virtuals, count: 10 },
  { active: false,id: 4, linktext: "/casino", name: "Lite", image: lite, count: 14 },
  { active: false,id: 5, linktext: "/casino", name: "Drops and …", image: drops, count: 3 },
  { active: false,id: 6, linktext: "/casino", name: "Slots", image: slots, count: 310 },
  { active: false,id: 7, linktext: "/casino", name: "Table/Cards", image: table, count: 12 },
  { active: false,id: 8, linktext: "/casino", name: "Live", image: live, count: 164 },

  { active: false,id: 9, linktext: "/casino", name: "Split The Pot", image: split, count: 56 },
  { active: false,id: 10, linktext: "/casino", name: "Spribe", image: spribe, count: 24 },
  { active: false,id: 11, linktext: "/casino", name: "Elbet", image: elbet, count: 65 },
  {
    active: false,id: 12,
    linktext: "/casino",
    name: "Pragmatic Play",
    image: pragmetic,
    count: null,
  },
  { active: false,id: 13, linktext: "/casino", name: "iMoon", image: imoon, count: 54 },
  { active: false,id: 14, linktext: "/casino", name: "Golden Race", image: golden, count: 10 },
  { active: false,id: 15, linktext: "/casino", name: "Aviatrix", image: aviatrix, count: 6 },
  { active: false,id: 16, linktext: "/casino", name: "Evolution", image: evolution, count: 58 },
  { active: false,id: 17, linktext: "/casino", name: "Smartsoft", image: smartsoft, count: 68 },
  { active: false,id: 18, linktext: "/casino", name: "Kaya", image: kaya, count: 76 },
  { active: false,id: 19, linktext: "/casino", name: "Spinmatic", image: spinmatic, count: 35 },
];
