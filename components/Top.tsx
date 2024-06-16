"use client ";
import React, { useState } from "react";
import Write from "../Tools/Write";
import IconArray from "../Tools/IconArray";
import Spline from "../components/SplineBubble";
import Skills from "./Skills";
import { themeAtom } from "../atom";
import { useAtom } from "jotai";

function Top(prop: any) {
  const [theme, setTheme] = useAtom(themeAtom);
  return (
    <main>
      <div>
        <div
          className={`flex phone:mx-[20px] mx-[40px] flex-col ${
            theme ? "text-[#fff]" : "text-[#000]"
          } `}
        >
          <Write
            look={"self-write text-[60px] phone:text-[30px] "}
            name={"Nosakhare Victory"}
          />
          <Write
            look={" text-[35px] phone:text-[15px] font-bold mr-[20px]"}
            name={"Software Developer"}
            speed={150}
          />
        </div>
      </div>
      <div className="mx-[50px] mt-[100px] phone:mt-[50px]">
        <Skills />
      </div>
    </main>
  );
}
export default Top;
