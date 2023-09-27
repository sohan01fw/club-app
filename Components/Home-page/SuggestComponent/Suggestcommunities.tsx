import { Button } from "@/Components/ui/button";
import React from "react";

const Suggestcommunities = () => {
  return (
    <div>
      <div className="title text-lg font-bold mb-5">Suggest Communities</div>
      <div className="communities flex justify-center gap-2 m-5 p-3 shadow-sm ">
        <div className="profile"></div>
        <div className="community_name mt-1">nice community</div>
        <div className="joinBtn">
          <Button variant="link" className="clubcolorbg shadow-md h-8 w-14 ">
            Join
          </Button>
        </div>
      </div>
      <div className="communities flex justify-center gap-2 m-5 p-3 shadow-sm ">
        <div className="profile"></div>
        <div className="community_name ">docushbag community</div>
        <div className="joinBtn">
          <Button variant="link" className="clubcolorbg shadow-lg">
            Join
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Suggestcommunities;
