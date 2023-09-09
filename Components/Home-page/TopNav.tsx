import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Dropdown from "../DropMenu";

const Logo = () => {
  return (
    <nav className="flex fixed w-full bg-white h-[5rem] top-0 z-20 justify-between lg:h-[4rem] ">
      <div className="  flex h-36 w-48  mt-[-30px]  transition-transform transform active:scale-95 lg:h-28 lg:w-36 lg:mt-[-25px] ">
        <img
          src="/logo/club_logo.png"
          className=" ml-[-30px] lg:ml-[-10px]"
          alt="logo"
        />
        <h1 className="text-5xl font-extrabold ml-[-40px] mt-[3.2rem] lg:ml-[-30px] lg:mt-[2.5rem] lg:text-4xl">
          lub
        </h1>
      </div>
      {/* not real is from donw.................... */}
      <div className="dropdown">
        <Dropdown />
      </div>

      {/* real is from donw................... */}

      <div className="pagetitle w-full top-[4.5rem] absolute bg-white sm:hidden ">
        <h2 className=" font-bold text-[25px] m-2  w-20 text-center shadow-md ">
          Home
        </h2>
      </div>
    </nav>
  );
};

export default Logo;
