import UserForm from "@/Components/auth-workflow/Userprofile/UserForm";
import { authOptions } from "@/lib/authProvider";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  const userData = {
    email: session?.user?.email ?? "",
    name: session?.user?.name ?? "",
    image: session?.user?.image ?? "",
  };
  return (
    <div className=" grid place-items-center">
      <UserForm user={userData} />
    </div>
  );
};

export default page;
