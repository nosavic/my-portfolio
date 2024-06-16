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
          className={`flex ml-[50px] mt-[50px] flex-col ${
            theme ? "text-[#fff]" : "text-[#000]"
          } `}
        >
          <Write look={"self-write"} name={"Nosakhare Victory"} />
          <Write
            look={" text-[35px] font-bold mr-[20px]"}
            name={"Software Developer"}
            speed={150}
          />
        </div>
      </div>
      <div className="mx-[50px] mt-[100px]">
        <Skills />
      </div>
    </main>
  );
}
export default Top;
