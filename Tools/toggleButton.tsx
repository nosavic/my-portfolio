"use client";
import React from "react";
import { useAtom } from "jotai";
import { themeAtom } from "../atom";
import ThemeIcon from "../Tools/icons/dark-theme.svg";
import Image from "next/image";

const ToggleButton = (prop: any) => {
  const [theme, setTheme] = useAtom(themeAtom);
  return (
    <div>
      <Image
        onClick={() => {
          setTheme(!theme);
        }}
        src={ThemeIcon}
        alt="theme"
        width={40}
        height={40}
      />
      {/* <div
        className={`w-[20px] h-[20px] rounded-[50%] ${
          theme ? "bg-[#fff]" : "bg-[#000]"
        }  cursor-pointer`}
      /> */}
    </div>
  );
};

export default ToggleButton;
