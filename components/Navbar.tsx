import React from "react";
import Menu from "../Tools/Menu";

function NavBar(prop: any) {
  function theBubble2() {
    prop.theBubble();
  }

  return (
    <div className="px-[20px] sticky top-0">
      <Menu theBubble2={theBubble2} />
    </div>
  );
}
export default NavBar;
