import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Project(prop: any) {
  return (
    <main>
      <div className=" relative rounded-[20px] border-solid border-[1px] border-gray-400 w-fit   ease-in-out duration-300 hover:scale-[102%] shadow-xl hover:shadow-2xl hover:text-black hover:text-lg   ">
        <Link href={prop.path}>
          <div className="">
            <Image
              style={{
                borderRadius: "20px",
              }}
              src={prop.src}
              alt={prop.alt}
              width={prop.w}
              height={prop.h}
            />
          </div>
          <div className="hover:bg-slate-200 rounded-bl-[20px] rounded-br-[20px] w-full bg-opacity-[50%]  absolute bottom-0 pb-1 pl-5 text-gray-400 font-bold ">
            {prop.name}
          </div>
        </Link>
      </div>
    </main>
  );
}
