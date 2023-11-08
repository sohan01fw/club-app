import UserForm from "@/Components/auth-workflow/Userprofile/UserForm";
import { authOptions } from "@/lib/authProvider";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

type userdata = {
  id: string;
  user: { email: string; name: string; image: string };
};

const fetchUserData = async () => {
  try {
    const session = await getServerSession(authOptions);
    const getSessionData = JSON.stringify(session, null, 2);
    const Data: userdata = JSON.parse(getSessionData);
    return Data;
  } catch (error: any) {
    throw new Error(error);
  }
};
const page = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }
  const Data = await fetchUserData();
  const userData = {
    _id: Data?.id,
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
