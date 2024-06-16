import React from "react";
import Menu from "../Tools/Menu";
import ToggleButton from "../Tools/toggleButton";

function NavBar(prop: any) {
  return (
    <div className="px-[40px] py-[40px] sticky top-0 backdrop-blur-[10px] z-20">
      {/* <Menu /> */}
      <ToggleButton />
    </div>
  );
}
export default NavBar;
