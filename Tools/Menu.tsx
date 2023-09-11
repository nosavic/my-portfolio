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
    <div className="flex">
      <div>
        <Hamburger onToggle={tap} color="#ffffff" size={32} />
      </div>
      <div>{side ? <Sidebar /> : null}</div>
    </div>
  );
}

export default Menu;
