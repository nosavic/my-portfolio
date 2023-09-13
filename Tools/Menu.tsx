"use client";

import React, { useState } from "react";

import { Sling as Hamburger } from "hamburger-react";
import Sidebar from "../components/Sidebar";

function Menu() {
  const [side, setSide] = useState(false);

  var look = "white";

  function tap() {
    setSide(!side);
  }

  return (
    <div>
      <div className="flex items-center">
        <div>{side ? <Sidebar /> : null}</div>
        <Hamburger onToggle={tap} color="gray" size={32} />
      </div>
    </div>
  );
}

export default Menu;
