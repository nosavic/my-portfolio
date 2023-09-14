"use client ";
import React, { useState } from "react";
import Write from "../Tools/Write";
import IconArray from "../Tools/IconArray";
import Spline from "../components/SplineBubble";

function Top(prop: any) {
  return (
    <div>
      <div className="flex flex-col ">
        <Write look={"self-write"} name={"Nosakhare Victory. E"} />
        <Write
          look={"ml-[52px] text-[35px] font-bold"}
          name={"Software Developer"}
          speed={150}
        />
      </div>
      <div>
        <IconArray />
      </div>
    </div>
  );
}
export default Top;
