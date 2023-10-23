import Menu from "../Tools/Menu";
import ToggleButton from "../Tools/toggleButton";
import React from "react";

function Sidebar(prop: any) {
  function theBubble4() {
    prop.theBubble3();
  }

  function theContact4() {
    prop.theContact3();
  }

  return (
    <div>
      <div className="flex items-center gap-[10px] font-bold ">
        <div onClick={theContact4} className="cursor-pointer">
          Contact
        </div>
        <div>Help</div>
        <ToggleButton theBubble4={theBubble4} />
      </div>
    </div>
  );
}

export default Sidebar;
