"use client";
import { LinkData } from "@/Data/LinkData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Bottombar = () => {
  const pathname = usePathname();
  return (
    <section className="sm:hidden   border fixed w-full bottom-0  bg-white h-14 shadow-md rounded-md pt-1 pb-2">
      <div className="flex  flex-row  justify-between m-1 ml-3 mr-3 ">
        {LinkData.map((data) => {
          const isActive =
            (pathname.includes(data.route) && data.route.length > 1) ||
            pathname === data.route;

          return (
            <Link
              key={data.lable}
              href={data.route}
              className={`${
                isActive && "clubcolorbg rounded-md  p-[0.2rem] pl-3 pr-3"
              }`}
            >
              <Image
                src={data.imgURL}
                alt={data.lable}
                width={28}
                height={28}
                className=""
              />
              <p className="max-md:hidden">{data.lable}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Bottombar;
