"use client";
import { LinkData } from "@/Data/LinkData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

const LeftNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section>
      <div className=" max-sm:hidden mt-20 flex flex-col gap-2 py-5 m-1 flex-1 w-40 h-screen fixed z-10  left-0 bg-white ">
        {LinkData.map((data, index) => {
          const isActive =
            (pathname.includes(data.route) && data.route.length > 1) ||
            pathname === data.route;

          const isLastItem = index === LinkData.length - 1;

          // Add extra margin (m-10) to the last item
          const itemClassName = `border flex gap-2 mb-8 ${
            isActive && "clubcolorbg"
          } ${isLastItem ? "mt-40" : ""}`;
          return (
            <Link
              key={data.lable}
              href={data.route}
              className={` ${itemClassName}`}
            >
              <Image
                src={data.imgURL}
                alt={data.lable}
                width={28}
                height={28}
              />
              <h2 className="font-semibold text-lg ">{data.lable}</h2>
            </Link>
          );
        })}
      </div>
      ;
    </section>
  );
};

export default LeftNav;
