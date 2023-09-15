import UserForm from "@/Components/auth-workflow/Userprofile/UserForm";
import { authOptions } from "@/lib/authProvider";
import { getServerSession } from "next-auth";
import React from "react";

type userdata = {
  id: string;
  user: { email: string; name: string; image: string };
};
const page = async () => {
  const session = await getServerSession(authOptions);

  const getSessionData = JSON.stringify(session, null, 2);
  const Data: userdata = JSON.parse(getSessionData);
  console.log("userdata from client", Data);
  const userData = {
    userId: Data?.id,
    email: Data?.user?.email,
    name: Data?.user?.name,
    image: Data?.user?.image,
  };
  return (
    <div className=" grid place-items-center">
      <UserForm user={userData} />
    </div>
  );
};

export default page;
