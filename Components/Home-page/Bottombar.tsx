import { LinkData } from "@/Data/LinkData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Bottombar = () => {
  return (
    <section className="sm:hidden   border fixed w-full bottom-0 bg-white h-10 shadow-md rounded-md ">
      <div className="flex  flex-row gap-5 justify-between m-1 ml-2 mr-2">
        {LinkData.map((data) => {
          return (
            <Link key={data.lable} href={data.route} className="icons ">
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
