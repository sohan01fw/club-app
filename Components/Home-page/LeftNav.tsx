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
      <div className=" max-sm:hidden mt-20 flex flex-col gap-2 py-5 ml-2 flex-1 w-48 h-full fixed z-10  left-0 bg-white md:overflow-y-auto md:max-h-full md:pb-20    ">
        {LinkData.map((data, index) => {
          const isActive =
            (pathname.includes(data.route) && data.route.length > 1) ||
            pathname === data.route;

          const isLastItem = index === LinkData.length - 1;

          // Add extra margin (m-10) to the last item
          const itemClassName = ` flex gap-2 mb-10 mb-8 p-2 ${
            isActive && "clubcolorbg"
          } ${isLastItem ? "absolute bottom-14 " : ""}`;
          return (
            <Link
              key={data.lable}
              href={data.route}
              className={` pr-20 rounded-lg hover:clubcolorbg ${itemClassName}`}
            >
              <Image
                src={data.imgURL}
                alt={data.lable}
                width={30}
                height={30}
                className=""
              />
              <h2 className="font-semibold text-xl ">{data.lable}</h2>
            </Link>
          );
        })}
      </div>
      ;
    </section>
  );
};

export default LeftNav;
