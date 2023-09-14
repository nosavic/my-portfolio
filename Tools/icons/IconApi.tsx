import React, { useState } from "react";

export function IconApi({
  path = string,
  view = "0,0,24,24",
  text = "Name",
  look = "",
}): React.JSX.Element {
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
        >
          {path}
        </svg>
      </div>

      <div>{isHovering && <div>{text}</div>}</div>
    </div>
  );
}
