import Link from "next/link";
import React from "react";
import RiskTech from "../Tools/icons/logo.png";
import Zano from "../Tools/icons/zano-logo.svg";
import Dice from "../Tools/icons/dice.svg";
import Image from "next/image";
import { useAtom } from "jotai";
import { themeAtom } from "../atom";

export default function Works() {
  const [theme, setTheme] = useAtom(themeAtom);
  return (
    <div>
      <div className="flex phone:flex-wrap mx-[40px] phone:mx-[20px] gap-10 ">
        {workArray.map((work) => (
          <Link
            href={work.url ? work.url : ""}
            className={`h-[20em] w-[40em] rounded-se-[10px] rounded-es-[10px] ${
              work.value === 3
                ? "bg-[#3c0d29]"
                : work.value === 2
                ? "bg-[#282828]"
                : work.value === 1
                ? theme
                  ? "bg-[#fff]"
                  : "bg-[#000]"
                : ""
            } relative flex items-center justify-center `}
            key={work.value}
          >
            <div className={`${work.value === 3 ? "scale-[400%]" : ""}`}>
              <Image src={work.image} alt={work.text} width={70} height={70} />
            </div>
            <div
              className={`absolute bottom-5 right-5 ${
                theme === true && work.value === 1
                  ? "text-[#000]"
                  : "text-[#fff]"
              } text-[20px] `}
            >
              {work.text}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const workArray = [
  { value: 1, image: RiskTech, text: "RISKTECH", url: "https://rtang.co/" },
  {
    value: 2,
    image: Zano,
    text: "ZANOBID ADMIN",
    url: "https://zanobid-admin.netlify.app/",
  },
  { value: 3, image: Dice, text: "DICE FORTUNE" },
];
