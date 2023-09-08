import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

const Logo = () => {
  return (
    <nav className="flex fixed w-full bg-white h-[5rem] top-0 z-20 justify-between">
      <div className="  flex h-36 w-48  mt-[-30px] transition-transform transform active:scale-95 ">
        <img src="/logo/club_logo.png" className=" ml-[-45px]" alt="logo" />
        <h1 className="text-5xl font-extrabold ml-[-40px] mt-[3.2rem]">lub</h1>
      </div>
      <div className="profile flex  ">
        <Avatar className="border m-4 transition-transform transform active:scale-95">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="nameandbtn hidden  ">
          <h3 className="font-semibold">John Doe</h3>
          <Button variant="link" className=" clubcolorbg">
            SignOut
          </Button>
        </div>
      </div>
      {/*  <div className="pagetitle w-full top-[4.5rem] absolute bg-white ">
        <h2 className=" font-bold text-[25px] m-2  w-20 text-center shadow-md ">
          Home
        </h2>
      </div> */}
    </nav>
  );
};

export default Logo;
