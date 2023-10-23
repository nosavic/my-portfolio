import React, { useState } from "react";

function IconApi(prop: any) {
  var moveUp = " hover:-translate-y-[7px]";

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="flex flex-col justify-center  h-[100px] text-center items-center self-center ">
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

      <div>
        <div className="font-semibold text-center items-center ">
          {prop.text}
        </div>
        {/* {isHovering && <div className="font-semibold">{prop.text}</div>} */}
      </div>
    </div>
  );
}

export default IconApi;
