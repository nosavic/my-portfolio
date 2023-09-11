"use client";

import React, { useState } from "react";

import { Sling as Hamburger } from "hamburger-react";
import Sidebar from "../components/Sidebar";

function Menu() {
  const [side, setSide] = useState(false);

  function tap() {
    setSide(!side);
  }

  return (
    <div>
      <div className="flex">
        <Hamburger onToggle={tap} color="#ffffff" size={32} />
        <div>{side ? <Sidebar /> : null}</div>
      </div>
    </div>
  );
}

export default Menu;
