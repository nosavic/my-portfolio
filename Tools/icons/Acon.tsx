// icon:api | Material Design Icons https://materialdesignicons.com/ | Austin Andrews
import { type } from "os";
import React, { useState } from "react";

function IconApi({ path = string, view = "0,0,24,24", text = "Name" }) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <svg
          viewBox={view}
          fill="currentColor"
          height="50px"
          width="50px"
          // {...props}
        >
          {path}
        </svg>
      </div>

      <div>{isHovering && <div>{text}</div>}</div>
    </div>
  );
}

export default IconApi;
