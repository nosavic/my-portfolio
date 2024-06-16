"use client";

import Top from "../../components/Top";
import NavBar from "../../components/Navbar";
import { ThemeProvider as Provider } from "next-themes";
import React, { useState } from "react";
import Spline from "../../components/SplineBubble";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";
import Works from "../../components/Works";
import { themeAtom } from "../../atom";
import { useAtom } from "jotai";
import Contact from "../../components/Contact";
import Email from "../../Tools/icons/envelope.svg";
import Email2 from "../../Tools/icons/envelope2.svg";
import Image from "next/image";

export default function Home() {
  const [theme, setTheme] = useAtom(themeAtom);
  return (
    // <Provider attribute="class">
    <main
      className={` relative ${
        theme ? "bg-black text-white " : "bg-white text-black "
      }`}
    >
      <div className="relative">
        <NavBar />
        <Top />
        <div className="w-[100%] pt-[30px] h-screen">
          <div className=" font-bold phone:mx-[20px] mx-[40px] mb-[10px] mt-[10px] text-[35px]">
            PROJECTS
          </div>
          <Works />
        </div>
      </div>
      <div className="fixed bottom-5 right-5">
        <Footer />
      </div>
    </main>
    // </Provider>
  );
}
