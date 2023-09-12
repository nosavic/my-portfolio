"use client";
import React from "react";
import { useTheme } from "next-themes";
// import React, { useState } from "react";
import Switch from "@mui/material/Switch";
const label = { inputProps: { "aria-label": "Switch demo" } };

const toggleButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
    
      <Switch
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
        {...label}
        defaultChecked
      />
    </div>
  );
}

export default toggleButton;
