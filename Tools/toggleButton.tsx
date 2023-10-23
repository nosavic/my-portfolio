"use client";
import React from "react";
import { useTheme } from "next-themes";
// import React, { useState } from "react";
import Switch from "@mui/material/Switch";
const label = { inputProps: { "aria-label": "Switch demo" } };
import { alpha, styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: grey[900],
    "&:hover": {
      backgroundColor: alpha(grey[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: grey[600],
  },
}));

const toggleButton = (prop: any) => {
  function useTheBubble() {
    prop.theBubble4();
  }

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      <PinkSwitch
        color="primary"
        onClick={() => {
          theme == "light"
            ? (setTheme("dark"), useTheBubble())
            : (setTheme("light"), useTheBubble());
        }}
        // {...label}
      />
    </div>
  );
};

export default toggleButton;

// FOR THEME //

// <Switch
//   onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
//   {...label}
//   defaultChecked
