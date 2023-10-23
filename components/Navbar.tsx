import React from "react";
import Menu from "../Tools/Menu";

function NavBar(prop: any) {
  function theBubble2() {
    prop.theBubble();
  }

  function theContact2() {
    prop.theContact();
  }

  return (
    <div className="px-[20px] sticky top-0 backdrop-blur-[10px] z-20">
      <Menu theBubble2={theBubble2} theContact2={theContact2} />
    </div>
  );
}
export default NavBar;
