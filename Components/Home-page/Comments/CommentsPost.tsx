import Image from "next/image";
import React from "react";
import { ForwardIcon, HeartIcon, MessageSquare, Repeat2 } from "lucide-react";
import { Avatar } from "@/Components/ui/avatar";

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
const CommentsPost = React.memo(({ id, author, content }: dataProps) => {
  return (
    <article className="m-10 rounded-lg shadow-md">
      <div className="userProfile flex flex-row w-40 ">
        <div className="profile flex  transition-transform transform active:scale-95 w-14 justify-center mb-2">
          <Avatar className="shadow-md mt-3 mr-2  ">
            <Image
              src={author.profile_pic}
              alt="img"
              width={38}
              height={20}
              className="ml-[1px] object-contain"
              priority
            />
          </Avatar>
        </div>
        <div className="username  pt-5">
          <h4 className="scroll-m-20 text-md font-semibold tracking-tight">
            {author.username}
          </h4>
        </div>
      </div>
      <div className="textPost ml-14 mr-10 p-1">
        <p className="leading-7 [&:not(:first-child)]:mt-6 whitespace-nowrap ">
          {content}
        </p>
      </div>
      <div className="icons flex gap-2 ml-14 justify-between w-32 p-2">
        <div className="heart ">
          <HeartIcon size={18} />
        </div>

        <div className="comments">
          <MessageSquare size={18} />
        </div>

        <div className="share">
          <ForwardIcon size={18} />
        </div>
        <div className="retweet">
          <Repeat2 size={18} />
        </div>
      </div>
    </article>
  );
});

export default CommentsPost;
