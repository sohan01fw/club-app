import UserForm from "@/Components/auth-workflow/Userprofile/UserForm";
import { authOptions } from "@/lib/authProvider";
import { getServerSession } from "next-auth";
import React from "react";

type userdata = {
  user_Id: string;
  user: { email: string; name: string; image: string };
};
const page = async () => {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      // handle invalid session
      return <div>Invalid session</div>;
    }

    const getSessionData = JSON.stringify(session, null, 2);
    const Data: userdata = JSON.parse(getSessionData);
    console.log("from userprfoile userdata", Data.user_Id);
    const userData = {
      user_Id: Data?.user_Id,
      email: Data?.user?.email,
      name: Data?.user?.name,
      image: Data?.user?.image,
    };
    return (
      <div className=" grid place-items-center">
        <UserForm user={userData} />
      </div>
    );
  } catch (error) {
    // Handle the error appropriately
    console.error("Error occurred during getServerSession:", error);
    // Return an error message or fallback UI
    return <div>Error occurred during getServerSession</div>;
  }
};

export default page;
