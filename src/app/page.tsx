"use client";

import Top from "../../components/Top";
import NavBar from "../../components/Navbar";
import { ThemeProvider as Provider } from "next-themes";
import React, { useState } from "react";
import Spline from "../../components/SplineBubble";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";

export default function Home() {
  const [bubble, setbubble] = useState(false);

  const [contact, setcontact] = useState(false);

  function theBubble() {
    setbubble((before) => {
      return !before;
    });
    console.log("bubbling");
  }

  function theContact() {
    setcontact((before) => {
      return !before;
    });
  }

  return (
    <Provider attribute="class">
      {/* <div className="absolute w-[100%] h-screen -z-10 ">
        {bubble ? <Spline /> : null}
      </div> */}
      <main className="relative">
        <NavBar theBubble={theBubble} theContact={theContact} />
        <Top theBubble={theBubble} />
        <div className="w-[100%] h-screen">
          <Projects />
        </div>
        {contact ? <Footer /> : null}
      </main>
    </Provider>
  );
}
