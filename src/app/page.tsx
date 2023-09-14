"use client";

import Top from "../../components/Top";
import NavBar from "../../components/Navbar";
import { ThemeProvider as Provider } from "next-themes";
import React, { useState } from "react";
import Spline from "../../components/SplineBubble";

export default function Home() {
  const [bubble, setbubble] = useState(false);

  function theBubble() {
    setbubble((before) => {
      return !before;
    });
    console.log("bubbling");
  }

  return (
    <Provider attribute="class">
      <div className="absolute w-[100%] h-screen -z-10 ">
        {bubble ? <Spline /> : null}
      </div>
      <main className="relative">
        <NavBar theBubble={theBubble} />
        <Top theBubble={theBubble} />
      </main>
    </Provider>
  );
}
