"use client";
import { LinkData } from "@/Data/LinkData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Bottombar = () => {
  const pathname = usePathname();
  return (
    <section className="sm:hidden  fixed w-full bottom-0  bg-white h-14 shadow-md rounded-md pt-1 pb-2">
      <div className="flex  flex-row  justify-between m-1 ml-3 mr-3 pt-2 ">
        {LinkData.map((data) => {
          const isActive =
            (pathname.includes(data.route) && data.route.length > 1) ||
            pathname === data.route;

          return (
            <Link
              key={data.lable}
              href={data.route}
              as={data.route}
              className={`${
                isActive && "clubcolorbg rounded-md  p-[0.3rem] pl-3 pr-3"
              }`}
            >
              <div className="icons">{data.icon}</div>
              {/*               <p className="md:hidden">{data.lable}</p>
               */}{" "}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Bottombar;
