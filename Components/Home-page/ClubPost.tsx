import React from "react";

type userDataProps = {
  text: string;
  image: string;
  name: string;
};
const ClubPost = ({ text, image, name }: userDataProps) => {
  console.log({ text, image, name });
  const userData = [{ text, image, name }];
  return (
    <div className="break-words flex flex-col flex-wrap pr-10">
      {userData.map((value) => {
        return <div>{value.text}</div>;
      })}
    </div>
  );
};

export default ClubPost;
