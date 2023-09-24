import Post from "@/Components/Home-page/CreatePost/Post";
import { getUserProfile } from "@/lib/DataRetriver/getUserProfile";
import { getUserData } from "@/lib/actions/UserProfile.action";
import getSessionUser from "@/lib/getSessionUser";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  /*  const getUser = await getSessionUser();
  const parseUser = JSON.parse(getUser);
  const getUserDatas = await getUserData(parseUser.id);
  if (!getUserDatas?.onboarded) return redirect("/profile"); */
  return (
    <div className="flex flex-col mt-20  sm:ml-28 md:ml-28 md:mr-5 lg:ml-40 xl:ml-40 2xl:ml-10 ">
      <div>Create your Post</div>
      <Post />
    </div>
  );
};

export default page;
