import React from "react";
import Project from "./Project";
import QuickIcon from "../Tools/icons/quickBank.png";
import GetLinked from "../Tools/icons/getLinked.png";

export default function Projects() {
  const Qpath = "https://www.fintellia.com/";
  const Gpath = "https://getlinkedhackaton.vercel.app/";
  const Qname = (
    <p>
      <b className="font-bold text-black"> Udara360</b>: Africa&apos;s Digital
      Core Banking
    </p>
  );
  return (
    <main className=" mt-[50px] mx-[40px] ">
      <h1 className="text-[35px] font-bold mb-[10px]">Projects</h1>
      <div className=" flex gap-[50px] phone:flex-wrap  ">
        <Project
          path={Qpath}
          alt="QuickBank"
          src={QuickIcon}
          name={Qname}
          w={400}
          h={400}
        />
        <Project
          path={Gpath}
          alt="QuickBank"
          src={GetLinked}
          name={"GetLinked Hackaton"}
          w={400}
          h={400}
        />
      </div>
    </main>
  );
}
