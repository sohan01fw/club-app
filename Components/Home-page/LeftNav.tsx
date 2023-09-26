"use client";
import { LinkData } from "@/Data/LinkData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Sublnav from "./SubleftNav/SubLNav";

const LeftNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  type data = {
    icon: JSX.Element;
    route: string;
    lable: string;
  }[];
  return (
    <section>
      <div className=" max-xl:hidden  mt-20 flex flex-col gap-2 py-5 ml-2 pr-2 flex-1 w-48 h-full fixed z-10  left-0 shadow-md bg-white  lg:pb-20    ">
        {LinkData.map((data, index) => {
          const isActive =
            (pathname.includes(data.route) && data.route.length > 1) ||
            pathname === data.route;

          const isLastItem = index === LinkData.length - 1;

          // Add extra margin (m-10) to the last item
          const itemClassName = ` flex gap-2 mb-10 mb-8 p-2 ${
            isActive && "bg-gray-100 font-bold fill-black "
          } ${isLastItem ? "absolute bottom-14 " : ""}`;
          return (
            <Link
              key={data.lable}
              href={data.route}
              className={` pr-20 rounded-lg hover:bg-gray-100 hover:text-gray-900 ${itemClassName}`}
            >
              <div className="icons">{data.icon}</div>
              <h2 className="font-medium text-md mt-2  ">{data.lable}</h2>
            </Link>
          );
        })}
      </div>
      <Sublnav />
    </section>
  );
};

export default LeftNav;
