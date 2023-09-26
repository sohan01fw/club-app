import Image from "next/image";
import React from "react";

type dataProps = {
  id: string;
  parentId: string | null;
  author: {
    id: string;
    username: string;
    profile_pic: string;
  };
  content: string;
  community: {
    id: string;
    username: string;
    profile_pic: string;
  } | null;
  createdAt: string;
  comments: {
    author: {
      image: string;
    };
  }[];
  iscomment?: boolean;
};
const ClubPost = ({
  id,
  parentId,
  author,
  content,
  community,
  createdAt,
  comments,
}: dataProps) => {
  return (
    <article className="m-10 rounded-lg shadow-md">
      <div className="userProfile">
        <div className="image border m-10">
          <Image
            src={author.profile_pic}
            alt="profile_pic"
            width={42}
            height={42}
          />
        </div>
      </div>
      <h2>{content}</h2>
    </article>
  );
};

export default ClubPost;
