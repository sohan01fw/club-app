import React from "react";

const page = () => {
  return (
    <div className="grid place-items-center ">
      <div className="userpages border">
        <h1 className="font-bold text-2xl">Set Your Profile</h1>
      </div>
      <div className="profile">
        <input type="file" />
      </div>
    </div>
  );
};

export default page;
