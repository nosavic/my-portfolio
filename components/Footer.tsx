import Image from "next/image";
import React, { useState } from "react";
import { themeAtom } from "../atom";
import { useAtom } from "jotai";
import Email from "../Tools/icons/envelope.svg";
import Email2 from "../Tools/icons/envelope2.svg";
import Contact from "./Contact";

export default function Footer() {
  const [theme, setTheme] = useAtom(themeAtom);
  const [contact, setContact] = useState(false);
  return (
    <div className=" relative">
      <div>
        <div
          onClick={() => setContact(!contact)}
          className={` w-[80px] h-[80px] rounded-[100%] ${
            theme ? " bg-white " : "bg-[black]"
          }`}
        >
          <Image
            className="absolute top-[20px] left-[20px]"
            src={theme ? Email : Email2}
            alt="email"
            width={40}
            height={40}
          />
        </div>
        <div
          className={`absolute transition-all duration-300 ease-in-out w-[300px]  ${
            contact ? " scale-100 " : " w scale-0 "
          }  bottom-[90px] phone:right-0  right-[90px]`}
        >
          <Contact />
        </div>
      </div>
    </div>
  );
}
