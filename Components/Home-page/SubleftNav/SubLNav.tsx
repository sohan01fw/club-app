"use client";
import { LinkData } from "@/Data/LinkData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

const Sublnav = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section>
      <div className=" xl:hidden max-sm:hidden mt-28 flex flex-col gap-2 w-20 place-items-center fixed ml-2 flex-1  h-full  z-10  left-0 shadow-md bg-white     ">
        {LinkData.map((data, index) => {
          const isActive =
            (pathname.includes(data.route) && data.route.length > 1) ||
            pathname === data.route;

          const isLastItem = index === LinkData.length - 1;

          // Add extra margin (m-10) to the last item
          const itemClassName = ` flex gap-2 mb-10 mb-8 p-2 ${
            isActive && "clubcolorbg"
          } ${isLastItem ? " " : ""}`;
          return (
            <Link
              key={data.lable}
              href={data.route}
              className={` rounded-lg hover:clubcolorbg ${itemClassName}`}
            >
              <div className="icons">{data.icon}</div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sublnav;
