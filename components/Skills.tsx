import Image from "next/image";
import React from "react";

export default function Skills() {
  return (
    <>
      <div>
        {skillArray.map((skill) => (
          <div key={skill.value}>
            <Image src={skill.icon} alt="React" width={50} height={50} />
            <div>{skill.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}

const skillArray = [
  {
    value: 1,
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/devicon/react-original-wordmark.svg",
  },
];
