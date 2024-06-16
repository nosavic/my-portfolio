"use client";

import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import Sidebar from "../components/Sidebar";
import { themeAtom } from "../atom";
import { useAtom } from "jotai";

function Menu() {
  const [theme, setTheme] = useAtom(themeAtom);
  const [side, setSide] = useState(false);

  function tap() {
    setSide(!side);
  }

  return (
    <div>
      <div className="flex items-center">
        <Sidebar />
        {/* <div>{side ? <Sidebar /> : null}</div> */}
        {/* <Hamburger
          duration={0.3}
          onToggle={tap}
          color={theme ? "#fff" : "#000"}
          size={32}
        /> */}
      </div>
    </div>
  );
}

export default Menu;
