"use client";
import React from "react";
import { useAtom } from "jotai";
import { themeAtom } from "../atom";

const ToggleButton = (prop: any) => {
  const [theme, setTheme] = useAtom(themeAtom);
  return (
    <div>
      <div
        className={`w-[20px] h-[20px] rounded-[50%] ${
          theme ? "bg-[#fff]" : "bg-[#000]"
        }  cursor-pointer`}
        onClick={() => {
          setTheme(!theme);
        }}
      />
    </div>
  );
};

export default ToggleButton;
