import UserForm from "@/Components/auth-workflow/Userprofile/UserForm";
import { authOptions } from "@/lib/authProvider";
import { getServerSession } from "next-auth";
import React from "react";

type userdata = {
  id: string;
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
  } catch (error) {
    // Handle the error appropriately
    console.error("Error occurred during getServerSession:", error);
    // Return an error message or fallback UI
    return <div>Error occurred during getServerSession</div>;
  }
};

export default page;
