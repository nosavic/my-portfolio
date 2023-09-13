// icon:api | Material Design Icons https://materialdesignicons.com/ | Austin Andrews
import * as React from "react";

function IconApi({ path = string, view = "0,0,24,24" }) {
  return (
    <svg
      viewBox={view}
      fill="currentColor"
      height="50px"
      width="50px"
      // {...props}
    >
      {path}
    </svg>
  );
}

export default IconApi;
