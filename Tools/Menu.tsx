"use client";

import React, { useState } from "react";

import { Sling as Hamburger } from "hamburger-react";
import Sidebar from "../components/Sidebar";

function Menu(prop: any) {
  const [side, setSide] = useState(false);

  var look = "white";

  function tap() {
    setSide(!side);
  }

  function theBubble3() {
    prop.theBubble2();
  }

  return (
    <div>
      <div className="flex items-center">
        <div>{side ? <Sidebar theBubble3={theBubble3} /> : null}</div>
        <Hamburger
          duration={0.3}
          onToggle={tap}
          color="currentColor"
          size={32}
        />
      </div>
    </div>
  );
}

export default Menu;
