import React, { useState } from "react";

export function IconApi(prop: any): React.JSX.Element {
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
          className={prop.look}
          viewBox={prop.view}
          fill="currentColor"
          height="50px"
          width="50px"
        >
          {prop.path}
        </svg>
      </div>

      <div>{isHovering && <div>{prop.text}</div>}</div>
    </div>
  );
}
