import React from "react";
import Menu from "../Tools/Menu";
import Switch from "@mui/material/Switch";
const label = { inputProps: { "aria-label": "Switch demo" } };

function NavBar() {
  return (
    <div className="theflex1">
      <Menu />
      <Switch {...label} defaultChecked />
    </div>
  );
}
export default NavBar;
