import Menu from "../Tools/Menu";
import ToggleButton from "../Tools/toggleButton";
import React from "react";
import { themeAtom } from "../atom";
import { useAtom } from "jotai";

function Sidebar() {
  const [theme, setTheme] = useAtom(themeAtom);
  function togtheme() {
    setTheme(!theme);
  }

  return (
    <div>
      <div className="flex items-center gap-[10px] font-bold ">
        {/* <div className={`${theme ? "text-[#fff]" : "text-[#000]"}`}>
          Contact
        </div> */}
        <ToggleButton />
      </div>
    </div>
  );
}

export default Sidebar;
