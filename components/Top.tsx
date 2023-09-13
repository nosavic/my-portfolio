import React from "react";
import Write from "../Tools/Write";
import ReactIcon from "../Tools/icons/react";
import ApiIcon from "../Tools/icons/Acon";
import IconArray from "../Tools/IconArray";

function Top() {
  return (
    <div>
      <div className="flex flex-col ">
        <Write look={"self-write"} name={"Nosakhare Victory. E"} />
        <Write
          look={"ml-[52px] text-lg font-bold"}
          name={"Front End Developer"}
          speed={150}
        />
      </div>
      <IconArray />
    </div>
  );
}
export default Top;
