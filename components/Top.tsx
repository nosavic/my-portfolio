"use client ";
import React, { useState } from "react";
import Write from "../Tools/Write";
import IconArray from "../Tools/IconArray";
import Spline from "../components/SplineBubble";

function Top(prop: any) {
  return (
    <div>
      <div className="flex ml-[50px] mt-[50px] phone:ml-[30px] flex-col ">
        <Write look={"self-write"} name={"Nosakhare Victory"} />
        <Write
          look={" text-[35px] font-bold mr-[20px]"}
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
