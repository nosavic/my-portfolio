import Image from "next/image";
import React from "react";
import NextIcon from "../Tools/icons/nextjs.svg";
import NextIcon2 from "../Tools/icons/nextjsw.svg";
import Tailwind from "../Tools/icons/tailwind-css.svg";
import TypeScript from "../Tools/icons/typescript.svg";
import Php from "../Tools/icons/php.svg";
import Api from "../Tools/icons/api.svg";
import Api2 from "../Tools/icons/apiw.svg";
import Docker from "../Tools/icons/docker.svg";
import Figma from "../Tools/icons/figma.svg";
import Github from "../Tools/icons/github.svg";
import Github2 from "../Tools/icons/githubw.svg";
import Gitlab from "../Tools/icons/gitlab.svg";
import MySQL from "../Tools/icons/mysql.svg";
import Postgresql from "../Tools/icons/postgresql.svg";
import Postman from "../Tools/icons/postman.svg";
import ReactIcon from "../Tools/icons/react.svg";
import Redux from "../Tools/icons/redux.svg";
import { useAtom } from "jotai";
import { themeAtom } from "../atom";

export default function Skills() {
  const [theme, setTheme] = useAtom(themeAtom);
  return (
    <>
      <div className="phone:grid phone:grid-cols-4 flex flex-wrap items-end gap-10">
        {skillArray.map((skill) => (
          <div
            key={skill.value}
            className="flex flex-col items-center font-light gap-3  "
          >
            <div>
              <Image
                src={
                  (theme === true && skill.value === 1) || skill.value === 5
                    ? skill.icon2
                    : skill.icon
                }
                alt={skill.name}
                width={50}
                height={50}
              />
            </div>
            <div
              className={` phone:text-[12px] ${
                theme ? "text-white" : "text-black"
              }`}
            >
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

const skillArray = [
  {
    value: 1,
    name: "NextJS",
    icon: NextIcon,
    icon2: NextIcon2,
  },
  {
    value: 2,
    name: "TailwindCSS",
    icon: Tailwind,
  },
  {
    value: 3,
    name: "TypeScript",
    icon: TypeScript,
  },
  {
    value: 4,
    name: "PHP",
    icon: Php,
  },
  {
    value: 5,
    name: "API",
    icon: Api,
    icon2: Api2,
  },
  {
    value: 6,
    name: "Docker",
    icon: Docker,
  },
  {
    value: 7,
    name: "Figma",
    icon: Figma,
  },
  {
    value: 8,
    name: "Github",
    icon: Github,
  },
  {
    value: 9,
    name: "Gitlab",
    icon: Gitlab,
  },
  {
    value: 10,
    name: "MySQL",
    icon: MySQL,
  },
  {
    value: 11,
    name: "Postgresql",
    icon: Postgresql,
  },
  {
    value: 12,
    name: "Postman",
    icon: Postman,
  },
  {
    value: 13,
    name: "React",
    icon: ReactIcon,
  },
  {
    value: 14,
    name: "Redux",
    icon: Redux,
  },
];
