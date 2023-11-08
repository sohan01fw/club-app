import React from "react";
import Dropdown from "../DropMenu";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authProvider";
import { getUserProfile } from "@/lib/DataRetriver/getUserProfile";

type userprofiledata = {
  username: string;
  profile_pic: string;
};
const Logo = async () => {
  const getUser = await getServerSession(authOptions);
  const getUserObj = JSON.stringify(getUser);
  const parseGetUser = JSON.parse(getUserObj);
  const id = parseGetUser?.id;

  //getting user profile data from server

  const profileData: userprofiledata = await getUserProfile(id);

  const name = profileData?.username;
  const img = profileData?.profile_pic;

  return (
    <nav className="flex fixed w-full bg-white h-[5rem] top-0 z-20 justify-between lg:h-[4rem] ">
      <div className="  flex h-36 w-48  mt-[-30px]  transition-transform transform active:scale-95 lg:h-28 lg:w-[8rem] lg:mt-[-25px] ">
        <h1 className="text-5xl font-extrabold ml-[40px] mt-[3.2rem] lg:ml-[-40rem] lg:mt-[2.5rem] lg:text-4xl">
          Club
        </h1>
      </div>
      {/* not real is from donw.................... */}
      <div className="dropdown">
        {name && img && <Dropdown name={name} image={img} />}
      </div>
    </nav>
  );
};

export default Logo;
