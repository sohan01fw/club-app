import ClubPost from "@/Components/Home-page/ClubPost";
import { fetchPostById } from "@/lib/actions/UserPost.action";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const post = await fetchPostById(params.id);
  console.log(post);
  return (
    <div>
      {/* <ClubPost
  key={post._id}
  id={post._id}
  parentId={post.parentId}
  author={post.author}
  content={post.text}
  community={post.communities}
  createdAt={post.createdAt}
  comments={post.children}
/> */}
    </div>
  );
};

export default page;
