import Post from "@/Components/Home-page/CreatePost/Post";

import getSessionUser from "@/lib/getSessionUser";

import React from "react";

const getData = async () => {
  const getUser = await getSessionUser();
  const parseUser = JSON.parse(getUser);
  return parseUser;
};
const page = async () => {
  const parseUser = await getData();
  return (
    <div className="flex flex-col mt-20  sm:ml-28 md:ml-28 md:mr-5 lg:ml-40 xl:ml-40 2xl:ml-10 ">
      <div>Create your Post</div>
      <Post userid={parseUser.id} />
    </div>
  );
};

export default page;
