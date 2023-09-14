// icon:api | Material Design Icons https://materialdesignicons.com/ | Austin Andrews
import { type } from "os";
import React, { useState } from "react";

function IconApi({
  path = string,
  view = "0,0,24,24",
  text = "Name",
  look = "",
}) {
  var moveUp = " hover:-translate-y-[7px]";

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="flex flex-col text-center justify-center place-items-center">
      <div
        className={moveUp}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <svg
          className={look}
          viewBox={view}
          fill="currentColor"
          height="50px"
          width="50px"
          // {...props}
        >
          {path}
        </svg>
      </div>

      <div>{isHovering && <div className="font-semibold">{text}</div>}</div>
    </div>
  );
}

export default IconApi;
