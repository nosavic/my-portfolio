import React from "react";
import Write from "../Tools/Write";
import IconArray from "../Tools/IconArray";
import Spline from "../components/SplineBubble";

function Top() {
  function changed() {}

  return (
    <div>
      <div className="flex flex-col ">
        <div className="absolute w-[100%] h-screen -z-10">
          <Spline />
        </div>
        <Write look={"self-write"} name={"Nosakhare Victory. E"} />
        <Write
          look={"ml-[52px] text-[35px] font-bold"}
          name={"Software Developer"}
          speed={150}
        />
      </div>
      <IconArray />
    </div>
  );
}
export default Top;
