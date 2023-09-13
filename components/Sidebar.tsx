import Menu from "../Tools/Menu";
import ToggleButton from "../Tools/toggleButton";
import React from "react";

function Sidebar() {
  return (
    <div>
      <div className="flex items-center gap-[10px] font-semibold text-gray-500 ">
        <div>About</div>
        <div>Contact</div>
        <div>Help</div>
        <ToggleButton />
      </div>
    </div>
  );
}

export default Sidebar;
